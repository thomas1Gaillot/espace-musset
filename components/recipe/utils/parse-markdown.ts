import type { Ingredient, Instruction, RecipeData } from "../types/recipe-types";

/**
 * Extract a value from markdown content using various patterns
 */
function extractValue(
  content: string,
  key: string,
  defaultValue: string | null = null
): string | null {
  // Pattern 1: **Key** | value (table format)
  let match = content.match(new RegExp(`\\*\\*${key}\\*\\*\\s*\\|\\s*(.*)`, "i"));
  if (match) return match[1].trim() || defaultValue;

  // Pattern 2: - **Key** : value (list format)
  match = content.match(new RegExp(`-\\s*\\*\\*${key}\\*\\*\\s*:\\s*(.*)`, "i"));
  if (match) return match[1].trim() || defaultValue;

  return defaultValue;
}

/**
 * Extract tags from the beginning of the markdown content
 * Tags are hashtags like #italien #pizza at the start of the file
 */
export function extractTags(content: string): string[] {
  const tags: string[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    // Check if line starts with a tag
    if (trimmed.startsWith("#") && !trimmed.startsWith("##")) {
      const tagMatches = trimmed.match(/#([a-zA-ZÀ-ÿ0-9_-]+)/g);
      if (tagMatches) {
        tagMatches.forEach((tag) => {
          tags.push(tag.substring(1).toLowerCase());
        });
      }
    } else {
      // Stop parsing tags when we hit non-tag content
      break;
    }
  }

  return tags;
}

/**
 * Extract ingredient names only (for search indexing)
 */
export function extractIngredientNames(content: string): string[] {
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
          !line.includes("TOTAL") &&
          !line.includes("Ingrédient")
      );

    rows.forEach((row) => {
      const cells = row
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
      // Ingredient name is typically in the second column
      if (cells.length >= 2 && cells[1]) {
        const name = cells[1].replace(/\*\*/g, "").trim().toLowerCase();
        if (name && name !== "ingrédient") {
          ingredients.push(name);
        }
      }
    });
  }

  return ingredients;
}

/**
 * Parse ingredients with full details
 */
function parseIngredients(content: string): Ingredient[] {
  const ingredients: Ingredient[] = [];
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
      // Check for section headers (bold text alone)
      const sectionMatch = row.match(/^\*\*(.+)\*\*$/);
      if (sectionMatch) {
        ingredients.push({
          quantity: "",
          name: sectionMatch[1].trim(),
          isSection: true,
        });
        return;
      }

      const cells = row
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);

      if (cells.length >= 2 && cells[0] && cells[1]) {
        const name = cells[1].replace(/\*\*/g, "").trim();
        if (name && name.toLowerCase() !== "ingrédient") {
          ingredients.push({
            quantity: cells[0],
            name: name,
            price: cells[2] || undefined,
            store: cells[3] || undefined,
          });
        }
      }
    });
  }

  return ingredients;
}

/**
 * Parse instructions with subtitles
 */
function parseInstructions(content: string): Instruction[] {
  const instructions: Instruction[] = [];
  const instructionSection = content.match(/## 👨‍🍳([\s\S]*?)(?=##|$)/);

  if (instructionSection) {
    let counter = 1;
    const lines = instructionSection[1]
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip the section title
      if (i === 0 && /^(👨‍🍳\s*)?Étapes$/i.test(line)) continue;

      // Check for subtitles (***Subtitle*** or ---Subtitle---)
      const subtitleMatch = line.match(/^(?:\*{3}(.+?)\*{3}|---\s*(.+?)\s*---)$/);
      if (subtitleMatch) {
        const text = (subtitleMatch[1] || subtitleMatch[2]).trim();
        instructions.push({
          text: text,
          isSubtitle: true,
        });
        counter = 1;
        continue;
      }

      // Regular step
      const stepMatch = line.match(/^(?:\d+\.\s+)?(.+)/);
      if (stepMatch) {
        instructions.push({
          text: stepMatch[1].trim(),
          isSubtitle: false,
          stepNumber: counter,
        });
        counter++;
      }
    }
  }

  return instructions;
}

/**
 * Parse tips section
 */
function parseTips(content: string): string | undefined {
  const tipMatch = content.match(/## 💡([\s\S]*?)(?=##|$)/);
  if (tipMatch) {
    const tip = tipMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace(/^[-*>]\s*/, ""))
      .join("\n");
    return tip || undefined;
  }
  return undefined;
}

/**
 * Parse notes section
 */
function parseNotes(content: string): string | undefined {
  const notesMatch = content.match(/## 📝([\s\S]*?)(?=##|$)/);
  if (notesMatch) {
    const notes = notesMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace(/^>\s*/, ""))
      .join("\n");
    return notes || undefined;
  }
  return undefined;
}

/**
 * Parse utensils section
 */
function parseUtensils(content: string): string[] | undefined {
  const utensilsMatch = content.match(/## 🔪([\s\S]*?)(?=##|$)/);
  if (utensilsMatch) {
    const utensils = utensilsMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && line.startsWith("-"))
      .map((line) => line.replace(/^-\s*/, ""));
    return utensils.length > 0 ? utensils : undefined;
  }
  return undefined;
}

/**
 * Main parsing function - parses full recipe content
 */
export function parseMarkdown(content: string, fileName?: string): RecipeData {
  // Extract title
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch
    ? titleMatch[1].replace(/🍫|🥘|🍰|🥗|🍕|🍝|🍛|🍜/g, "").trim()
    : fileName
      ? fileName.replace(/-/g, " ")
      : "Recette";

  // Extract metadata
  const tags = extractTags(content);
  const servings = extractValue(content, "Nombre de parts") || "N/A";
  const prepTime = extractValue(content, "Préparation") || "N/A";
  const cookTime = extractValue(content, "Cuisson") || "N/A";
  const budget = extractValue(content, "Budget") || undefined;

  // Parse sections
  const ingredients = parseIngredients(content);
  const instructions = parseInstructions(content);
  const tips = parseTips(content);
  const notes = parseNotes(content);
  const utensils = parseUtensils(content);

  return {
    title,
    tags,
    servings,
    prepTime,
    cookTime,
    budget,
    ingredients,
    instructions,
    tips,
    notes,
    utensils,
  };
}

/**
 * Extract metadata for indexing (lighter weight than full parse)
 */
export function extractMetadata(
  content: string,
  fileName: string,
  filePath: string,
  category: string
) {
  const name = fileName.replace(".md", "");
  const tags = extractTags(content);
  const ingredients = extractIngredientNames(content);
  const prepTime = extractValue(content, "Préparation");
  const cookTime = extractValue(content, "Cuisson");
  const servings = extractValue(content, "Nombre de parts");
  const budget = extractValue(content, "Budget");

  return {
    name,
    file: fileName,
    path: filePath,
    tags,
    ingredients,
    prepTime,
    cookTime,
    servings,
    budget,
    category,
  };
}
