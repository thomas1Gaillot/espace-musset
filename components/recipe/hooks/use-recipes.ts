import { useCallback, useEffect, useMemo, useState } from "react";
import type { RecipeData, RecipeIndex, RecipeMetadata, SearchResult } from "../types/recipe-types";
import { parseMarkdown } from "../utils/parse-markdown";

export function useRecipes() {
  const [index, setIndex] = useState<RecipeIndex>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load recipe index
  useEffect(() => {
    fetch("/recette/index.json")
      .then((r) => r.json())
      .then((data: RecipeIndex) => {
        setIndex(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement des recettes:", err);
        setError("Impossible de charger les recettes");
        setLoading(false);
      });
  }, []);

  // Get all recipes as flat array
  const allRecipes = useMemo(() => {
    return Object.values(index).flat();
  }, [index]);

  // Get all categories
  const categories = useMemo(() => {
    return Object.keys(index);
  }, [index]);

  // Search recipes
  const searchRecipes = useCallback(
    (query: string): SearchResult[] => {
      if (!query.trim()) return [];

      const normalizedQuery = query.toLowerCase().trim();
      const results: SearchResult[] = [];

      allRecipes.forEach((recipe) => {
        // Search by name
        if (recipe.name.toLowerCase().includes(normalizedQuery)) {
          results.push({
            recipe,
            matchType: "name",
            matchedTerm: recipe.name,
          });
          return;
        }

        // Search by tag
        const matchedTag = recipe.tags.find((tag) => tag.includes(normalizedQuery));
        if (matchedTag) {
          results.push({
            recipe,
            matchType: "tag",
            matchedTerm: matchedTag,
          });
          return;
        }

        // Search by ingredient
        const matchedIngredient = recipe.ingredients.find((ing) =>
          ing.toLowerCase().includes(normalizedQuery)
        );
        if (matchedIngredient) {
          results.push({
            recipe,
            matchType: "ingredient",
            matchedTerm: matchedIngredient,
          });
        }
      });

      return results;
    },
    [allRecipes]
  );

  // Filter by category
  const filterByCategory = useCallback(
    (category: string): RecipeMetadata[] => {
      return index[category] || [];
    },
    [index]
  );

  // Get random recipe
  const getRandomRecipe = useCallback((): RecipeMetadata | null => {
    if (allRecipes.length === 0) return null;
    return allRecipes[Math.floor(Math.random() * allRecipes.length)];
  }, [allRecipes]);

  return {
    index,
    allRecipes,
    categories,
    loading,
    error,
    searchRecipes,
    filterByCategory,
    getRandomRecipe,
  };
}

export function useRecipeContent() {
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRecipe = useCallback(async (path: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/recette/${path}`);
      if (!res.ok) throw new Error("Recipe not found");
      const content = await res.text();
      const fileName = path.split("/").pop()?.replace(".md", "");
      const parsed = parseMarkdown(content, fileName);
      setRecipeData(parsed);
    } catch (err) {
      console.error("Erreur de lecture recette:", err);
      setError("Impossible de charger la recette");
      setRecipeData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearRecipe = useCallback(() => {
    setRecipeData(null);
    setError(null);
  }, []);

  return {
    recipeData,
    loading,
    error,
    loadRecipe,
    clearRecipe,
  };
}
