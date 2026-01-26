"use client";

import { useState, useCallback } from "react";
import { useRecipes } from "./hooks/use-recipes";
import { RecipeSearch } from "./recipe-search";
import { RecipeCategories } from "./recipe-categories";
import { RecipeSheet } from "./recipe-sheet";
import type { RecipeMetadata } from "./types/recipe-types";
import { Loader2, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecipeApp() {
  const { index, loading, error, searchRecipes, getRandomRecipe } = useRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeMetadata | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSelectRecipe = useCallback((recipe: RecipeMetadata) => {
    setSelectedRecipe(recipe);
    setSheetOpen(true);
  }, []);

  const handleRandomRecipe = useCallback(() => {
    const recipe = getRandomRecipe();
    if (recipe) {
      handleSelectRecipe(recipe);
    }
  }, [getRandomRecipe, handleSelectRecipe]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with search */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Recettes</h1>
          <Button variant="outline" onClick={handleRandomRecipe} className="gap-2">
            <Shuffle className="h-4 w-4" />
            Recette aleatoire
          </Button>
        </div>

        {/* Search bar */}
        <RecipeSearch onSearch={searchRecipes} onSelectRecipe={handleSelectRecipe} />
      </div>

      {/* Categories grid */}
      <RecipeCategories
        index={index}
        onSelectRecipe={handleSelectRecipe}
        selectedPath={selectedRecipe?.path}
      />

      {/* Recipe sheet */}
      <RecipeSheet recipe={selectedRecipe} open={sheetOpen} onOpenChange={setSheetOpen} />
    </div>
  );
}
