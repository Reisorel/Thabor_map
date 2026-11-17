# Frontend Thabor

Depuis le dossier `frontend` :

```bash
npm run dev
npm run build
npm run lint
```

Vérification TypeScript en continu :

```bash
npx tsc -p tsconfig.app.json -w
```

## Organisation

- `src/App.tsx` : affiche le composant Carte.
- `src/main.tsx` et `src/index.scss` : entrée React et styles globaux.
- `src/components/Carte/Carte.tsx` : assemble Header, Plan, EtapeDetail et Footer.
- `src/components/Carte/Carte.scss` : disposition du module.
- `src/DataBase.tsx` : données du parcours.
- Carte, Header, Plan, EtapeDetail et Footer sont des dossiers voisins dans `src/components/`, avec chacun ses fichiers TSX et SCSS.
- `src/assets/` : ressources graphiques.
