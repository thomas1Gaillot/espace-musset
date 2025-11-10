"use client";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  ChefHat,
  ChevronDown,
  ChevronRight,
  Clock,
  EuroIcon,
  FileText,
  Utensils,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Recipe {
  name: string;
  file: string;
  path: string;
}

interface RecipeTree {
  [category: string]: Recipe[];
}

interface RecipeData {
  title: string;
  servings: number | string;
  prepTime: string;
  cookTime: string;
  budget?: string;
  ingredients: string[];
  instructions: string[];
  tip?: string;
}

function extractValue(content: string, key: string, defaultValue = "N/A"): string {
  let match = content.match(new RegExp(`\\*\\*${key}\\*\\*\\s*\\|\\s*(.*)`, "i"));
  if (match) return match[1].trim() || defaultValue;
  match = content.match(new RegExp(`-\\s*\\*\\*${key}\\*\\*\\s*:\\s*(.*)`, "i"));
  if (match) return match[1].trim() || defaultValue;
  return defaultValue;
}

function parseMarkdown(content: string, fileName?: string): RecipeData {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch
    ? titleMatch[1].replace(/🍫|🥘|🍰|🥗/g, "").trim()
    : fileName
      ? fileName.replace(/-/g, " ")
      : "Recette";

  const servings = extractValue(content, "Nombre de parts");
  const prepTime = extractValue(content, "Préparation");
  const cookTime = extractValue(content, "Cuisson");
  const budget = extractValue(content, "Budget");

  const ingredients: string[] = [];
  const ingredientSection = content.match(/## 🛒 Ingrédients([\s\S]*?)(?=##|$)/i);
  if (ingredientSection) {
    const rows = ingredientSection[1]
      .split("\n")
      .filter(
        (line) =>
          line.trim() &&
          !line.includes("---") &&
          !line.includes("Quantité") &&
          !line.includes("TOTAL")
      );
    rows.forEach((row) => {
      const cells = row
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
      if (cells.length >= 2 && cells[0] && cells[1]) ingredients.push(`${cells[0]} ${cells[1]}`);
    });
  }

  const instructions: string[] = [];
  const instructionSection = content.match(/## 👨‍🍳([\s\S]*?)(?=##|$)/);
  if (instructionSection) {
    let counter = 1;
    const lines = instructionSection[1]
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === 0 && /^(👨‍🍳\s*)?Étapes$/i.test(line)) continue;
      const subtitleMatch = line.match(/^(?:\*{3}(.+?)\*{3}|---\s*(.+?)\s*---)$/);
      if (subtitleMatch) {
        const text = (subtitleMatch[1] || subtitleMatch[2]).trim();
        instructions.push(`**_${text}_**`);
        counter = 1;
        continue;
      }
      const stepMatch = line.match(/^(?:\d+\.\s+)?(.+)/);
      if (stepMatch) {
        instructions.push(`${counter}. ${stepMatch[1].trim()}`);
        counter++;
      }
    }
  }

  let tip: string | undefined;
  const tipMatch = content.match(/## 💡([\s\S]*?)(?=##|$)/);
  if (tipMatch) {
    tip = tipMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace(/^[-*>]\s*/, ""))
      .join("\n");
    if (!tip) tip = undefined;
  }

  return { title, servings, prepTime, cookTime, ingredients, instructions, tip, budget };
}

export default function RecipeApp() {
  const [recipes, setRecipes] = useState<RecipeTree>({});
  const [selectedRecipePath, setSelectedRecipePath] = useState<string>("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);

  useEffect(() => {
    fetch("/recette/index.json")
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data);
        const categories = Object.keys(data);
        if (categories.length) {
          const randomCat = categories[Math.floor(Math.random() * categories.length)];
          const recipesInCat = data[randomCat];
          if (recipesInCat?.length) {
            const randomRecipe = recipesInCat[Math.floor(Math.random() * recipesInCat.length)];
            setExpandedCategory(randomCat);
            handleRecipeSelect(randomRecipe.path);
          }
        }
      })
      .catch((err) => console.error("Erreur de chargement des recettes:", err));
  }, []);

  const handleRecipeSelect = async (path: string) => {
    setSelectedRecipePath(path);
    try {
      const res = await fetch(`/recette/${path}`);
      const content = await res.text();
      const fileName = path.split("/").pop()?.replace(".md", "");
      const parsed = parseMarkdown(content, fileName);
      setRecipeData(parsed);
    } catch (err) {
      console.error("Erreur de lecture recette:", err);
    }
  };

  const toggleCategory = (cat: string) => {
    setExpandedCategory((prev) => (prev === cat ? null : cat));
  };

  if (!recipeData)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        {"Aucune recette sélectionnée"}
      </div>
    );

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white/40">
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r-2 border-gray-200 p-4 md:p-6 overflow-y-auto max-h-screen text-left">
          <h2 className="text-lg font-semibold mb-6">{"Recettes"}</h2>
          <nav className="space-y-2">
            {Object.entries(recipes).map(([cat, items]) => (
              <Collapsible
                key={cat}
                open={expandedCategory === cat}
                onOpenChange={() => toggleCategory(cat)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    data-id={`toggle-${cat}-button`}
                    variant="ghost"
                    className="flex justify-start hover:bg-gray-800 items-center gap-2 w-full text-left py-2 px-2"
                  >
                    {expandedCategory === cat ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span className="font-medium">{cat}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-6 mt-1 space-y-1">
                    {items.map((r) => (
                      <Button
                        data-id={`select-${r.name}-button`}
                        key={r.path}
                        onClick={() => handleRecipeSelect(r.path)}
                        variant={selectedRecipePath === r.path ? "default" : "ghost"}
                        className={`flex justify-start gap-2 w-full text-left py-2 px-2 text-sm hover:bg-gray-800 ${selectedRecipePath === r.path ? "bg-primary text-white" : ""}`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{r.name}</span>
                      </Button>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </nav>
        </aside>

        <div className="recipe-print-container flex-1 overflow-y-auto max-h-screen p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
                {recipeData.title}
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch mb-8 md:mb-12 border-y-2 border-primary">
              <div className="flex items-center gap-3 px-4 py-3">
                <Utensils className="w-5 h-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">{"Parts"}</div>
                  <div className="text-base font-medium">{recipeData.servings}</div>
                </div>
              </div>
              <div className="w-full md:w-0.5 bg-primary"></div>
              <div className="flex items-center gap-3 px-4 py-3">
                <ChefHat className="w-5 h-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">{"Préparation"}</div>
                  <div className="text-base font-medium">{recipeData.prepTime}</div>
                </div>
              </div>
              <div className="w-full md:w-0.5 bg-primary"></div>
              <div className="flex items-center gap-3 px-4 py-3">
                <Clock className="w-5 h-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">{"Cuisson"}</div>
                  <div className="text-base font-medium">{recipeData.cookTime}</div>
                </div>
              </div>
              <div className="w-full md:w-0.5 bg-primary"></div>
              <div className="flex items-center gap-3 px-4 py-3">
                <EuroIcon className="w-5 h-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">{"Budget"}</div>
                  <div className="text-base font-medium">{recipeData.budget}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
              <div>
                <h2 className="text-sm uppercase tracking-wider font-semibold mb-4">
                  {"Ingrédients:"}
                </h2>
                <div className="space-y-2">
                  {recipeData.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-primary mt-1 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-wider font-semibold mb-4">
                  {"Instructions:"}
                </h2>
                <div className="space-y-3">
                  {recipeData.instructions.map((inst, i) => {
                    const isSubtitle = /^\*\*_.+_\*\*$/.test(inst);
                    return (
                      <div key={i} className="flex gap-3">
                        {!isSubtitle && (
                          <div className="flex-shrink-0 font-medium text-sm">
                            {inst.match(/^(\d+)\./)?.[1]}
                          </div>
                        )}
                        <p
                          className={`text-sm leading-relaxed ${isSubtitle ? "italic font-semibold" : ""}`}
                        >
                          {isSubtitle
                            ? inst.replace(/^\*\*_|_\*\*$/g, "")
                            : inst.replace(/^\d+\.\s*/, "")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {recipeData.tip && (
              <div className="mt-6 p-4 bg-gray-50">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-2">
                  {"💡 Astuce:"}
                </h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{recipeData.tip}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .recipe-print-container,
          .recipe-print-container * {
            visibility: visible;
          }
          .recipe-print-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          @page {
            size: A4 portrait;
            margin: 2cm;
          }
          * {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
}
