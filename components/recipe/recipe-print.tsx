"use client";

import type { RecipeData } from "./types/recipe-types";

interface RecipePrintProps {
  recipe: RecipeData;
}

// Parse markdown bold and italic in text
function formatText(text: string): React.ReactNode {
  // Split by ***text*** (bold italic), **text** (bold), and *text* (italic)
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for bold italic ***text***
    const boldItalicMatch = remaining.match(/\*\*\*(.+?)\*\*\*/);
    // Check for bold **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Check for italic *text* (but not ** or ***)
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);

    // Find the earliest match
    const matches = [
      boldItalicMatch
        ? { type: "boldItalic", match: boldItalicMatch, index: boldItalicMatch.index! }
        : null,
      boldMatch ? { type: "bold", match: boldMatch, index: boldMatch.index! } : null,
      italicMatch ? { type: "italic", match: italicMatch, index: italicMatch.index! } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const earliest = matches[0]!;

    // Add text before the match
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    // Add the formatted text
    const content = earliest.match[1];
    if (earliest.type === "boldItalic") {
      parts.push(
        <strong key={key++}>
          <em>{content}</em>
        </strong>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    } else if (earliest.type === "bold") {
      parts.push(<strong key={key++}>{content}</strong>);
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    } else {
      parts.push(<em key={key++}>{content}</em>);
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export function RecipePrint({ recipe }: RecipePrintProps) {
  return (
    <div className="recipe-print">
      {/* Header compact */}
      <div className="print-header">
        <h1>{recipe.title}</h1>
        <div className="print-meta">
          <span>
            <strong>Portions:</strong> {recipe.servings}
          </span>
          <span className="separator">|</span>
          <span>
            <strong>Prep:</strong> {recipe.prepTime}
          </span>
          <span className="separator">|</span>
          <span>
            <strong>Cuisson:</strong> {recipe.cookTime}
          </span>
          {recipe.budget && (
            <>
              <span className="separator">|</span>
              <span>
                <strong>Budget:</strong> {recipe.budget}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Two column layout */}
      <div className="print-columns">
        {/* Left: Ingredients */}
        <div className="print-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ing, i) =>
              ing.isSection ? (
                <li key={i} className="section-title">
                  {ing.name}
                </li>
              ) : (
                <li key={i}>
                  <span className="quantity">{ing.quantity}</span>
                  <span className="ingredient-name">{ing.name}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right: Instructions */}
        <div className="print-instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((inst, i) =>
              inst.isSubtitle ? (
                <li key={i} className="section-title">
                  {inst.text}
                </li>
              ) : (
                <li key={i}>
                  <span className="step-text">{formatText(inst.text)}</span>
                </li>
              )
            )}
          </ol>
        </div>
      </div>

      {/* Tips in footer if exists */}
      {recipe.tips && (
        <div className="print-tips">
          <strong>Astuce:</strong> {recipe.tips}
        </div>
      )}

      <style jsx>{`
        .recipe-print {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 9pt;
          line-height: 1.4;
          color: #1a1a1a;
          max-width: 100%;
        }

        .print-header {
          text-align: center;
          border-bottom: 2px solid #2d2d2d;
          padding-bottom: 8px;
          margin-bottom: 10px;
        }

        .print-header h1 {
          font-family: "Georgia", serif;
          font-size: 18pt;
          margin: 0 0 6px 0;
          font-weight: normal;
          letter-spacing: 1px;
        }

        .print-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 8pt;
          color: #555;
          font-family: Arial, sans-serif;
        }

        .print-meta .separator {
          color: #ccc;
        }

        .print-columns {
          display: flex;
          gap: 16px;
        }

        .print-ingredients {
          width: 35%;
          border-right: 1px solid #ddd;
          padding-right: 12px;
        }

        .print-instructions {
          width: 65%;
          padding-left: 4px;
        }

        h2 {
          font-family: Arial, sans-serif;
          font-size: 9pt;
          font-weight: bold;
          margin: 0 0 6px 0;
          padding-bottom: 3px;
          border-bottom: 1px solid #bbb;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #333;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        ul li {
          margin-bottom: 3px;
          padding-left: 8px;
          position: relative;
        }

        ul li:not(.section-title)::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #888;
        }

        .quantity {
          font-family: "Courier New", monospace;
          font-size: 8pt;
          color: #666;
          min-width: 45px;
          display: inline-block;
        }

        .ingredient-name {
          font-family: "Georgia", serif;
          font-style: italic;
        }

        ol {
          margin: 0;
          padding: 0;
          list-style: none;
          counter-reset: step-counter;
        }

        ol li:not(.section-title) {
          counter-increment: step-counter;
          margin-bottom: 5px;
          padding-left: 20px;
          position: relative;
        }

        ol li:not(.section-title)::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          font-family: "Georgia", serif;
          font-weight: bold;
          font-size: 10pt;
          color: #444;
          width: 14px;
          text-align: right;
        }

        .step-text {
          font-family: "Georgia", serif;
          display: block;
        }

        .step-text strong {
          font-weight: bold;
        }

        .step-text em {
          font-style: italic;
        }

        .step-text strong em,
        .step-text em strong {
          font-weight: bold;
          font-style: italic;
        }

        .section-title {
          font-family: Arial, sans-serif;
          font-weight: bold;
          font-size: 8pt;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #555;
          margin-top: 8px;
          margin-bottom: 4px;
          padding-left: 0 !important;
        }

        .section-title::before {
          content: none !important;
        }

        .print-tips {
          margin-top: 10px;
          padding: 6px 8px;
          background: #f8f8f8;
          border-left: 3px solid #888;
          font-size: 8pt;
          font-family: Arial, sans-serif;
          font-style: italic;
          color: #555;
        }

        .print-tips strong {
          font-style: normal;
          color: #333;
        }
      `}</style>
    </div>
  );
}
