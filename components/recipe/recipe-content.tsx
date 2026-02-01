"use client";

import { Badge } from "@/components/ui/badge";
import { ChefHat, Clock, EuroIcon, Utensils } from "lucide-react";
import type { RecipeData } from "./types/recipe-types";

interface RecipeContentProps {
  recipe: RecipeData;
  showTags?: boolean;
}

export function RecipeContent({ recipe, showTags = true }: RecipeContentProps) {
  return (
    <div className="recipe-print-container">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">{recipe.title}</h1>
          {showTags && recipe.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 no-print">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Metadata bar */}
        <div className="flex flex-col md:flex-row justify-center items-stretch mb-8 border-y-2 border-primary">
          <MetaItem icon={<Utensils className="w-5 h-5" />} label="Parts" value={recipe.servings} />
          <Divider />
          <MetaItem
            icon={<ChefHat className="w-5 h-5" />}
            label="Preparation"
            value={recipe.prepTime}
          />
          <Divider />
          <MetaItem icon={<Clock className="w-5 h-5" />} label="Cuisson" value={recipe.cookTime} />
          {recipe.budget && (
            <>
              <Divider />
              <MetaItem
                icon={<EuroIcon className="w-5 h-5" />}
                label="Budget"
                value={recipe.budget}
              />
            </>
          )}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2 className="text-sm uppercase tracking-wider font-semibold mb-4">Ingredients:</h2>
            <div className="space-y-2">
              {recipe.ingredients.map((ing, i) =>
                ing.isSection ? (
                  <div key={i} className="font-semibold text-sm mt-4 first:mt-0">
                    {ing.name}
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-primary mt-1 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      {ing.quantity} {ing.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="recipe-section recipe-instructions">
            <h2 className="text-sm uppercase tracking-wider font-semibold mb-4">Instructions:</h2>
            <div className="space-y-3">
              {recipe.instructions.map((inst, i) =>
                inst.isSubtitle ? (
                  <div key={i} className="italic font-semibold text-sm mt-4 first:mt-0">
                    {inst.text}
                  </div>
                ) : (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 font-medium text-sm w-6">{inst.stepNumber}.</div>
                    <p className="text-sm leading-relaxed">{inst.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Utensils */}
        {recipe.utensils && recipe.utensils.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg recipe-section">
            <h3 className="text-xs uppercase tracking-wider font-semibold mb-2">Ustensiles:</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.utensils.map((utensil, i) => (
                <Badge key={i} variant="outline">
                  {utensil}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {recipe.tips && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg recipe-section">
            <h3 className="text-xs uppercase tracking-wider font-semibold mb-2">Astuce:</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{recipe.tips}</p>
          </div>
        )}

        {/* Notes */}
        {recipe.notes && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg recipe-section no-print">
            <h3 className="text-xs uppercase tracking-wider font-semibold mb-2">Notes:</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{recipe.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {icon}
      <div>
        <div className="text-xs uppercase tracking-wider mb-1">{label}</div>
        <div className="text-base font-medium">{value}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-0.5 bg-primary"></div>;
}
