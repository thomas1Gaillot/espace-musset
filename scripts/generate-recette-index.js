// @ts-check
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recetteDir = path.join(__dirname, "..", "public", "recette");
const indexPath = path.join(recetteDir, "index.json");

/**
 * Extract a value from markdown content
 * @param {string} content
 * @param {string} key
 * @returns {string | null}
 */
function extractValue(content, key) {
  // Pattern 1: **Key** | value (table format)
  let match = content.match(new RegExp(`\\*\\*${key}\\*\\*\\s*\\|\\s*(.*)`, "i"));
  if (match) return match[1].trim() || null;

  // Pattern 2: - **Key** : value (list format)
  match = content.match(new RegExp(`-\\s*\\*\\*${key}\\*\\*\\s*:\\s*(.*)`, "i"));
  if (match) return match[1].trim() || null;

  return null;
}

/**
 * Extract tags from the beginning of markdown content
 * @param {string} content
 * @returns {string[]}
 */
function extractTags(content) {
  const tags = [];
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
 * Extract ingredient names from markdown content
 * @param {string} content
 * @returns {string[]}
 */
function extractIngredientNames(content) {
  const ingredients = [];
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
 * Extract metadata from a recipe file
 * @param {string} content
 * @param {string} fileName
 * @param {string} filePath
 * @param {string} category
 */
function extractMetadata(content, fileName, filePath, category) {
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

const tree = {};

try {
  const categories = fs.readdirSync(recetteDir, { withFileTypes: true });
  for (const category of categories) {
    if (category.isDirectory()) {
      const categoryPath = path.join(recetteDir, category.name);
      const files = fs.readdirSync(categoryPath);
      tree[category.name] = files
        .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
        .map((f) => {
          const filePath = path.join(categoryPath, f);
          const content = fs.readFileSync(filePath, "utf-8");
          const recipePath = `${category.name}/${f}`;
          return extractMetadata(content, f, recipePath, category.name);
        });
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(tree, null, 2));
  console.log("✅ Fichier public/recette/index.json généré avec succès.");

  // Print stats
  let totalRecipes = 0;
  let totalTags = new Set();
  for (const cat of Object.keys(tree)) {
    totalRecipes += tree[cat].length;
    tree[cat].forEach((r) => r.tags.forEach((t) => totalTags.add(t)));
  }
  console.log(`   📊 ${totalRecipes} recettes dans ${Object.keys(tree).length} catégories`);
  console.log(`   🏷️  ${totalTags.size} tags uniques`);
} catch (e) {
  console.error("❌ Erreur lors de la génération du fichier index.json :", e);
  process.exit(1);
}
