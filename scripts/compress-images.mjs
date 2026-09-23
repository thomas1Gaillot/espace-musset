import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.join(process.cwd(), "public");

// Files heavier than 250KB, excluding already-optimized/small ones.
const targets = [
  "event/JPO.png",
  "cours/meditation.jpg",
  "event/cours7philo.jpg",
  "cours/piano.jpg",
  "event/cours5philo.jpg",
  "event/cours4philo.jpg",
  "event/cafe-philo.jpg",
  "event/cours3philo.jpg",
  "event/jeu-societe.jpg",
  "cours/yoga-rire.jpg",
  "event/atelier_vocal.png",
  "event/jeux-societe.jpg",
  "event/cours6philo.jpg",
  "cours/yoga.jpg",
  "event/cours1philo.jpg",
  "event/tournoi-echec.png",
  "event/cuisine_palestine.png",
  "event/cours2philo.jpg",
  "event/aot.jpg",
  "event/hator.png",
  "event/02mai.jpg",
  "event/zero-dechet.jpeg",
  "cours/qi-gong-energ.png",
  "welcome2.jpg",
  "gallerie/8.JPG",
  "event/cleanupday.jpg",
  "gallerie/5.JPG",
  "gallerie/4.JPG",
  "gallerie/3.JPG",
];

const MAX_WIDTH = 1920;

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const rel of targets) {
    const filePath = path.join(root, rel);
    let statBefore;
    try {
      statBefore = await fs.stat(filePath);
    } catch {
      console.log(`SKIP (not found): ${rel}`);
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();
    const buffer = await fs.readFile(filePath);
    let pipeline = sharp(buffer).rotate().resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });

    let outBuffer;
    if (ext === ".png") {
      outBuffer = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
    } else {
      outBuffer = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    }

    if (outBuffer.length < statBefore.size) {
      await fs.writeFile(filePath, outBuffer);
      totalBefore += statBefore.size;
      totalAfter += outBuffer.length;
      console.log(
        `${rel}: ${(statBefore.size / 1024 / 1024).toFixed(2)}MB -> ${(outBuffer.length / 1024 / 1024).toFixed(2)}MB`
      );
    } else {
      console.log(`SKIP (no gain): ${rel}`);
    }
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (saved ${(
      (totalBefore - totalAfter) /
      1024 /
      1024
    ).toFixed(2)}MB)`
  );
}

run();
