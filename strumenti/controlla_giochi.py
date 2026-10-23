#!/usr/bin/env python3
"""Controlla che giochi/giochi.json sia valido.

Uso, dalla cartella del sito:
    python3 strumenti/controlla_giochi.py

Esce con codice 0 se è tutto a posto, 1 se trova errori.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "giochi" / "giochi.json"
DURATA = re.compile(r"^(?:\d+h)?\s*(?:\d+m)?\s*(?:\d+s)?$")
CAMPI = {"titolo", "piattaforma", "data", "nota", "link", "durata"}


def main():
    try:
        dati = json.loads(FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"ERRORE: il JSON non è valido (riga {e.lineno}, colonna {e.colno}): {e.msg}")
        return 1

    errori, avvisi = [], []
    sigle = [p["sigla"] for p in dati.get("piattaforme", [])]
    if len(sigle) != len(set(sigle)):
        errori.append("ci sono sigle di piattaforma ripetute")

    visti = set()
    for n, g in enumerate(dati.get("giochi", []), 1):
        nome = f"#{n} {g.get('titolo', '?')}"
        extra = set(g) - CAMPI
        mancanti = {"titolo", "piattaforma", "data"} - set(g)
        if mancanti:
            errori.append(f"{nome}: mancano i campi {sorted(mancanti)}")
        if extra:
            avvisi.append(f"{nome}: campi non previsti {sorted(extra)}")
        if g.get("piattaforma") not in sigle:
            errori.append(f"{nome}: piattaforma '{g.get('piattaforma')}' non è nell'elenco 'piattaforme'")
        try:
            d = date.fromisoformat(g.get("data", ""))
            if d > date.today():
                avvisi.append(f"{nome}: la data {d} è nel futuro")
        except ValueError:
            errori.append(f"{nome}: data '{g.get('data')}' non è nel formato AAAA-MM-GG")
        dur = g.get("durata", "")
        if dur and not DURATA.match(dur):
            errori.append(f"{nome}: durata '{dur}' non è nel formato '1h 4m 22s'")
        if not dur:
            avvisi.append(f"{nome}: durata vuota")
        link = g.get("link", [])
        if not isinstance(link, list):
            errori.append(f"{nome}: 'link' deve essere una lista, anche con un solo link")
        else:
            for u in link:
                if not str(u).startswith("https://"):
                    errori.append(f"{nome}: link non valido '{u}'")
            if not link:
                avvisi.append(f"{nome}: nessun link al video")
        # Stesso gioco nello stesso giorno va bene se la nota è diversa (es. due difficoltà)
        chiave = (g.get("titolo"), g.get("piattaforma"), g.get("data"), g.get("nota"))
        if chiave in visti:
            errori.append(f"{nome}: voce duplicata (stesso titolo, piattaforma, data e nota)")
        visti.add(chiave)

    for a in avvisi:
        print("avviso:", a)
    for e in errori:
        print("ERRORE:", e)
    print(f"{len(dati.get('giochi', []))} giochi, {len(errori)} errori, {len(avvisi)} avvisi")
    return 1 if errori else 0


if __name__ == "__main__":
    sys.exit(main())
