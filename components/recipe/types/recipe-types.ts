// Types pour l'index enrichi (généré par le script)
export interface RecipeMetadata {
  name: string;
  file: string;
  path: string;
  tags: string[];
  ingredients: string[];
  prepTime: string | null;
  cookTime: string | null;
  servings: string | null;
  budget: string | null;
  category: string;
}

export interface RecipeIndex {
  [category: string]: RecipeMetadata[];
}

// Types pour les données parsées complètes
export interface RecipeData {
  title: string;
  tags: string[];
  servings: string;
  prepTime: string;
  cookTime: string;
  budget?: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips?: string;
  notes?: string;
  utensils?: string[];
}

export interface Ingredient {
  quantity: string;
  name: string;
  price?: string;
  store?: string;
  isSection?: boolean;
}

export interface Instruction {
  text: string;
  isSubtitle: boolean;
  stepNumber?: number;
}

// Types pour la recherche
export interface SearchResult {
  recipe: RecipeMetadata;
  matchType: "name" | "tag" | "ingredient";
  matchedTerm: string;
}
