#!/usr/bin/env python3
"""Scarica i numeri del profilo RetroAchievements e li salva in giochi/ra.json.

La chiave dell'API non sta mai nel repository: lo script la legge dalla variabile
d'ambiente RA_API_KEY (su GitHub è un "secret" del repository, vedi
.github/workflows/retroachievements.yml). Per provarlo sul PC:

    RA_API_KEY=la-tua-chiave python3 strumenti/aggiorna_ra.py

Scrive il file solo se i numeri sono cambiati, così la Action non fa commit inutili.
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

UTENTE = os.environ.get("RA_USER", "Linobob")
FILE = Path(__file__).resolve().parent.parent / "giochi" / "ra.json"
API = "https://retroachievements.org/API/"


def chiama(endpoint, chiave):
    url = API + endpoint + "?" + urllib.parse.urlencode({"u": UTENTE, "y": chiave})
    req = urllib.request.Request(url, headers={"User-Agent": "linobob.github.io"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def main():
    chiave = os.environ.get("RA_API_KEY", "").strip()
    if not chiave:
        print("ERRORE: manca la variabile d'ambiente RA_API_KEY")
        return 1
    try:
        profilo = chiama("API_GetUserProfile.php", chiave)
        premi = chiama("API_GetUserAwards.php", chiave)
    except Exception as e:  # rete, chiave sbagliata, API cambiata: non tocca il file
        print(f"ERRORE: richiesta all'API non riuscita: {e}")
        return 1

    # Solo dati pubblici del profilo; i campi che l'API non dà restano null
    numeri = {
        "utente": UTENTE,
        "profilo": f"https://retroachievements.org/user/{UTENTE}",
        "punti": profilo.get("TotalPoints"),
        "punti_veri": profilo.get("TotalTruePoints"),
        "mastery": premi.get("MasteryAwardsCount"),
        "completati": premi.get("BeatenHardcoreAwardsCount"),
    }
    if numeri["punti"] is None or numeri["mastery"] is None:
        print("ERRORE: l'API non ha restituito i campi attesi, file non modificato")
        return 1

    vecchio = {}
    if FILE.exists():
        vecchio = json.loads(FILE.read_text(encoding="utf-8"))
    if {k: vecchio.get(k) for k in numeri} == numeri:
        print("Nessun cambiamento")
        return 0
    numeri["aggiornato"] = datetime.now(timezone.utc).date().isoformat()
    FILE.write_text(json.dumps(numeri, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    print(f"Scritto {FILE.name}: {numeri['mastery']} mastery, {numeri['punti']} punti")
    return 0


if __name__ == "__main__":
    sys.exit(main())
