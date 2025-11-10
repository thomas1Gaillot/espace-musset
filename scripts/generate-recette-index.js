// @ts-check
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recetteDir = path.join(__dirname, "..", "public", "recette");
const indexPath = path.join(recetteDir, "index.json");

const tree = {};

try {
  const categories = fs.readdirSync(recetteDir, { withFileTypes: true });
  for (const category of categories) {
    if (category.isDirectory()) {
      const categoryPath = path.join(recetteDir, category.name);
      const files = fs.readdirSync(categoryPath);
      tree[category.name] = files
        .filter((f) => f.endsWith(".md"))
        .map((f) => ({
          name: f.replace(".md", ""),
          file: f,
          path: `${category.name}/${f}`,
        }));
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(tree, null, 2));
  console.log("✅ Fichier public/recette/index.json généré avec succès.");
} catch (e) {
  console.error("❌ Erreur lors de la génération du fichier index.json :", e);
  process.exit(1);
}
