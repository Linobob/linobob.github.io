#!/usr/bin/env bash
# Pubblica il sito: scarica i commit arrivati su GitHub (per esempio quelli della Action
# di RetroAchievements), mostra cosa sta per partire e, se confermi, fa il push.
#
# Uso, da qualunque cartella:   bash ~/Documenti/linobob.github.io/strumenti/pubblica.sh
set -euo pipefail
cd "$(dirname "$0")/.."

if [ "$(git branch --show-current)" != "main" ]; then
  echo "Non sei sul ramo main: pubblico solo da main."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Ci sono modifiche non ancora in un commit:"
  git status --short
  echo "Prima fai il commit (o mettile da parte), poi rilancia."
  exit 1
fi

echo "== Scarico gli aggiornamenti da GitHub"
if ! git pull --rebase origin main; then
  echo "Il pull non è riuscito: non forzare niente, chiedi aiuto (git status mostra cosa succede)."
  exit 1
fi

da_inviare=$(git log --oneline origin/main..main)
if [ -z "$da_inviare" ]; then
  echo "Niente da pubblicare: il sito su GitHub è già uguale a questo."
  exit 0
fi

echo "== Commit che partono:"
echo "$da_inviare"
read -r -p "Pubblico? [s/N] " risposta
case "$risposta" in
  s|S|si|sì|Si|Sì) ;;
  *) echo "Annullato, non ho inviato niente."; exit 0 ;;
esac

git push origin main
git fetch -q origin
if [ "$(git rev-parse main)" = "$(git rev-parse origin/main)" ]; then
  echo "== Tutto allineato: tra un paio di minuti il sito è aggiornato."
else
  echo "Attenzione: main e GitHub non coincidono dopo il push."
  exit 1
fi
