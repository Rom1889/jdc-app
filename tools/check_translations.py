#!/usr/bin/env python3
"""Vérifie les traductions Packs/<lang>/<pack>.json : longueur, placeholders, textes vides."""
import json, re, sys, glob, os
ALLOWED = {"partner","time","il","Il","lui","l","L","his","e","le_sexe","le_point","un_oral","un_oral_toi","la_poitrine","assis","allonge","pris","nu"}
root = os.path.join(os.path.dirname(__file__), "..", "www", "Packs")
errors = 0
for lang in ["en","de","es"]:
    for f in sorted(glob.glob(os.path.join(root, lang, "*.json"))):
        name = os.path.basename(f)
        fr = json.load(open(os.path.join(root, name), encoding="utf-8"))
        tr = json.load(open(f, encoding="utf-8"))
        if len(tr) != len(fr):
            print(f"[{lang}/{name}] longueur {len(tr)} ≠ {len(fr)} (FR)"); errors += 1
        done = 0
        for i, (a, b) in enumerate(zip(fr, tr)):
            t = b["text"] if isinstance(b, dict) else b
            if not t or not t.strip(): continue
            done += 1
            ph = set(re.findall(r"\{\{(.*?)\}\}", t))
            bad = ph - ALLOWED
            if bad: print(f"[{lang}/{name}#{i}] placeholder inconnu {bad}"); errors += 1
            for key in ("partner","time"):
                if (("{{%s}}" % key) in a["text"]) != (("{{%s}}" % key) in t):
                    print(f"[{lang}/{name}#{i}] {{{{{key}}}}} présent d'un côté seulement"); errors += 1
            if t.count("{{") != t.count("}}"): print(f"[{lang}/{name}#{i}] accolades déséquilibrées"); errors += 1
        print(f"{lang}/{name}: {done}/{len(fr)} traduits")
print("OK" if not errors else f"{errors} erreur(s)")
sys.exit(1 if errors else 0)
