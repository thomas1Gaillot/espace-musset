"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Printer, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRecipeContent } from "./hooks/use-recipes";
import { RecipeContent } from "./recipe-content";
import { RecipePrint } from "./recipe-print";
import type { RecipeMetadata } from "./types/recipe-types";

interface RecipeSheetProps {
  recipe: RecipeMetadata | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeSheet({ recipe, open, onOpenChange }: RecipeSheetProps) {
  const { recipeData, loading, error, loadRecipe, clearRecipe } = useRecipeContent();
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    if (open && recipe) {
      loadRecipe(recipe.path);
    } else if (!open) {
      clearRecipe();
    }
  }, [open, recipe, loadRecipe, clearRecipe]);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  // Listen for print events to cleanup
  useEffect(() => {
    const handleAfterPrint = () => setIsPrinting(false);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
  }, []);

  return (
    <>
      {/* Print portal - renders at body level for clean printing */}
      {isPrinting &&
        recipeData &&
        createPortal(
          <div id="recipe-print-portal">
            <RecipePrint recipe={recipeData} />
          </div>,
          document.body
        )}

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body > *:not(#recipe-print-portal) {
            display: none !important;
          }
          #recipe-print-portal {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
          }
          @page {
            size: A4 portrait;
            margin: 1.5cm;
          }
          * {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
        @media screen {
          #recipe-print-portal {
            display: none;
          }
        }
      `}</style>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:max-w-2xl p-0">
          <SheetHeader className="p-6 pb-0 flex flex-row items-center justify-between">
            <div>
              <SheetTitle className="text-left">{recipe?.name || "Recette"}</SheetTitle>
              <SheetDescription className="text-left">{recipe?.category}</SheetDescription>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrint}
              className="mr-8"
              disabled={!recipeData || loading}
            >
              <Printer className="h-4 w-4" />
            </Button>
          </SheetHeader>

          <ScrollArea className="h-[calc(100vh-100px)] px-6 pb-6">
            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {error && (
              <div className="text-center py-12 text-red-500">
                <p>{error}</p>
              </div>
            )}

            {recipeData && !loading && <RecipeContent recipe={recipeData} />}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
