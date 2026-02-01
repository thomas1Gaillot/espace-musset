# Plan de Refactorisation - Système de Recettes

## Résumé des Changements

### Objectifs

1. ✅ Page d'accueil avec searchBar intelligent (Command)
2. ✅ Navigation par dossiers de recettes (Cards + Collapsible)
3. ✅ Ouvrir recette dans un Sheet
4. ✅ Impression A4 améliorée
5. ✅ Template .md de base complet

---

## Architecture Proposée

### Nouvelle Structure de Fichiers

```
components/recipe/
├── index.ts                    # Export centralisé
├── recipe-app.tsx              # Composant principal (orchestrateur)
├── recipe-search.tsx           # Barre de recherche avec Command
├── recipe-categories.tsx       # Navigation par dossiers/catégories
├── recipe-sheet.tsx            # Sheet d'affichage de la recette
├── recipe-content.tsx          # Contenu de la recette (réutilisable)
├── recipe-print-styles.tsx     # Styles CSS pour impression
├── hooks/
│   └── use-recipes.ts          # Hook pour charger/filtrer les recettes
├── types/
│   └── recipe-types.ts         # Types TypeScript
└── utils/
    └── parse-markdown.ts       # Parsing du markdown (extrait de l'existant)
```

---

## Modifications Clés

### 1. Script `generate-recette-index.js`

Le script sera enrichi pour extraire les métadonnées nécessaires à la recherche :

- **Tags** : `#italien #pizza` → `["italien", "pizza"]`
- **Ingrédients** : Liste des noms pour la recherche
- **Métadonnées** : prepTime, cookTime, servings, budget

**Nouvel index.json :**

```json
{
  "🍅 Méditérannéen": [
    {
      "name": "🍕 Pizza Napolitaine",
      "file": "🍕 Pizza Napolitaine.md",
      "path": "🍅 Méditérannéen/🍕 Pizza Napolitaine.md",
      "tags": ["italien", "pizza"],
      "ingredients": ["farine", "mozzarella", "basilic"],
      "prepTime": "2h",
      "cookTime": "5 min",
      "servings": "6 pizzas",
      "category": "🍅 Méditérannéen"
    }
  ]
}
```

### 2. Composant RecipeSearch

- Utilise le composant **Command** (cmdk) existant
- Recherche par :
  - **Nom** de la recette
  - **Tags** (#italien, #dessert, etc.)
  - **Ingrédients** (poulet, tomate, etc.)
- Suggestions de tags populaires quand vide

### 3. Composant RecipeCategories

- Affiche les catégories comme des **Cards** avec icône dossier
- Chaque card est **Collapsible** pour voir les recettes
- Compteur de recettes par catégorie
- Grille responsive (1-2-3 colonnes)

### 4. Composant RecipeSheet

- Utilise le composant **Sheet** existant (côté droit, 600px)
- Charge le markdown à l'ouverture seulement
- Bouton d'impression en haut à droite
- Affiche tags, métadonnées, ingrédients, instructions, conseils
- **ScrollArea** pour le contenu

### 5. Styles d'Impression A4

- Masque tout sauf `.recipe-print-container`
- Format A4 portrait avec marges 1.5cm
- Évite les coupures au milieu des sections
- Titres et sections bien formatés

---

## Template Markdown Recommandé

Fichier `public/recette/_template.md` :

```markdown
#tag1 #tag2 #tag3

## 🕒 Temps

- **En avance** : Oui / Non (détails)
- **Préparation** : XX min
- **Repos** : XX min (si applicable)
- **Cuisson** : XX min
- **Total** : XX min
- **Nombre de parts** : X personnes
- **Budget** : X,XX € / personne

---

## 🛒 Ingrédients

| Quantité | Ingrédient | Prix (€) | Magasin |
| -------- | ---------- | -------- | ------- |
| 500g     | Farine     | 1,50     | Biocoop |
| 3        | Œufs       | 1,20     | Marché  |
|          | **TOTAL**  | ~4,50    |         |

---

## 🔪 Ustensiles nécessaires

- Saladier
- Fouet
- Poêle

---

## 👨‍🍳 Étapes

**_Préparation_**

1. **Mélanger les ingrédients secs**
   Description détaillée de l'étape.

2. **Ajouter les liquides**
   Description détaillée de l'étape.

**_Cuisson_**

3. **Cuire**
   Description détaillée de l'étape.

---

## 💡 Conseils

- Astuce 1
- Astuce 2

---

## 📝 Notes personnelles

> Espace libre pour vos notes...
```

---

## Ordre d'Implémentation

### Phase 1 : Infrastructure

1. Créer `types/recipe-types.ts`
2. Extraire `utils/parse-markdown.ts` depuis recipe.tsx
3. Modifier `scripts/generate-recette-index.js`
4. Régénérer l'index

### Phase 2 : Composants

5. Créer `hooks/use-recipes.ts`
6. Créer `recipe-content.tsx`
7. Créer `recipe-sheet.tsx`
8. Créer `recipe-search.tsx`
9. Créer `recipe-categories.tsx`
10. Créer `recipe-print-styles.tsx`

### Phase 3 : Intégration

11. Créer `recipe-app.tsx` (orchestrateur)
12. Créer `index.ts` (exports)
13. Mettre à jour `cafe-associatif/page.tsx`

### Phase 4 : Finalisation

14. Créer `_template.md`
15. Tests et ajustements

---

## Rétrocompatibilité

- ✅ Les recettes existantes restent compatibles
- ✅ Le parsing gère les formats variables
- ✅ L'ancien composant recipe.tsx sera remplacé

---

## Composants UI Utilisés

- `Command` (cmdk) - Recherche intelligente
- `Sheet` - Panneau latéral
- `Card` - Catégories
- `Collapsible` - Navigation
- `Button`, `Badge`, `ScrollArea` - UI
