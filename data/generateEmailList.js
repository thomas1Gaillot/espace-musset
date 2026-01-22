import fs from "fs";

const inputFile = "contacts.csv";
const outputFile = "emails.txt";

const content = fs.readFileSync(inputFile, "utf-8");

const lines = content.split("\n").slice(1); // on enlève l'en-tête

const emails = lines.map((line) => line.split(",")[2]).filter(Boolean);

const result = emails.join("; ");

fs.writeFileSync(outputFile, result, "utf-8");

console.log("Liste d'emails générée :", outputFile);
