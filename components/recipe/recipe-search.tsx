"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FileText, Hash, ShoppingBasket } from "lucide-react";
import { useState, useCallback } from "react";
import type { RecipeMetadata, SearchResult } from "./types/recipe-types";

interface RecipeSearchProps {
  onSearch: (query: string) => SearchResult[];
  onSelectRecipe: (recipe: RecipeMetadata) => void;
}

export function RecipeSearch({ onSearch, onSelectRecipe }: RecipeSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      if (value.trim()) {
        const searchResults = onSearch(value);
        setResults(searchResults);
      } else {
        setResults([]);
      }
    },
    [onSearch]
  );

  const handleSelect = useCallback(
    (recipe: RecipeMetadata) => {
      onSelectRecipe(recipe);
      setQuery("");
      setResults([]);
    },
    [onSelectRecipe]
  );

  const getMatchIcon = (matchType: SearchResult["matchType"]) => {
    switch (matchType) {
      case "name":
        return <FileText className="h-4 w-4" />;
      case "tag":
        return <Hash className="h-4 w-4" />;
      case "ingredient":
        return <ShoppingBasket className="h-4 w-4" />;
    }
  };

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder="Rechercher une recette..."
        value={query}
        onValueChange={handleSearch}
      />
      <CommandList>
        {query.trim() === "" ? (
          <>
            <CommandEmpty>Tapez pour rechercher...</CommandEmpty>
          </>
        ) : results.length === 0 ? (
          <CommandEmpty>Aucune recette trouvee.</CommandEmpty>
        ) : (
          <>
            {/* Group by match type */}
            {["name", "tag", "ingredient"].map((type) => {
              const typeResults = results.filter((r) => r.matchType === type);
              if (typeResults.length === 0) return null;

              const heading =
                type === "name" ? "Par nom" : type === "tag" ? "Par tag" : "Par ingredient";

              return (
                <CommandGroup key={type} heading={heading}>
                  {typeResults.map((result) => (
                    <CommandItem
                      key={result.recipe.path}
                      value={result.recipe.path}
                      onSelect={() => handleSelect(result.recipe)}
                      className="cursor-pointer"
                    >
                      {getMatchIcon(result.matchType)}
                      <span className="ml-2">{result.recipe.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {result.recipe.category}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            })}
          </>
        )}
      </CommandList>
    </Command>
  );
}
