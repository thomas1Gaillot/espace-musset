"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, FileText, FolderOpen } from "lucide-react";
import { useState } from "react";
import type { RecipeIndex, RecipeMetadata } from "./types/recipe-types";

interface RecipeCategoriesProps {
  index: RecipeIndex;
  onSelectRecipe: (recipe: RecipeMetadata) => void;
  selectedPath?: string;
}

export function RecipeCategories({ index, onSelectRecipe, selectedPath }: RecipeCategoriesProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const categories = Object.entries(index);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map(([category, recipes]) => (
        <Card key={category} className="overflow-hidden">
          <Collapsible
            open={expandedCategory === category}
            onOpenChange={() => toggleCategory(category)}
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors p-4">
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-5 w-5 text-primary" />
                    <span>{category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-normal text-muted-foreground">
                      {recipes.length} recettes
                    </span>
                    {expandedCategory === category ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <CardContent className="p-2 pt-0">
                <div className="space-y-1 max-h-64 overflow-y-auto">
                  {recipes.map((recipe) => (
                    <Button
                      key={recipe.path}
                      variant={selectedPath === recipe.path ? "default" : "ghost"}
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => onSelectRecipe(recipe)}
                    >
                      <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{recipe.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  );
}

// Alternative compact list view
interface RecipeCategoriesListProps {
  index: RecipeIndex;
  onSelectRecipe: (recipe: RecipeMetadata) => void;
  selectedPath?: string;
}

export function RecipeCategoriesList({
  index,
  onSelectRecipe,
  selectedPath,
}: RecipeCategoriesListProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <nav className="space-y-2">
      {Object.entries(index).map(([category, recipes]) => (
        <Collapsible
          key={category}
          open={expandedCategory === category}
          onOpenChange={() => toggleCategory(category)}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex justify-start hover:bg-muted items-center gap-2 w-full text-left py-2 px-2"
            >
              {expandedCategory === category ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <span className="font-medium">{category}</span>
              <span className="ml-auto text-xs text-muted-foreground">{recipes.length}</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-6 mt-1 space-y-1">
              {recipes.map((recipe) => (
                <Button
                  key={recipe.path}
                  onClick={() => onSelectRecipe(recipe)}
                  variant={selectedPath === recipe.path ? "default" : "ghost"}
                  className="flex justify-start gap-2 w-full text-left py-2 px-2 text-sm hover:bg-muted"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="truncate">{recipe.name}</span>
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  );
}
