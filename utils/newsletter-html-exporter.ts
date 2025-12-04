import { EventData } from "@/types/event-types";

export function exportNewsletterToHTML(events: EventData[], month?: string, year?: number): string {
  const currentDate = new Date();
  const displayMonth = month || currentDate.toLocaleDateString("fr-FR", { month: "long" });
  const displayYear = year || currentDate.getFullYear();
  const sortedEvents = [...events].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Styles inline pour la compatibilité email
  const styles = {
    body: "margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;",
    container:
      "max-width: 672px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);",
    header: "position: relative; background-color: #8B2635; color: #ffffff; overflow: hidden;",
    headerPattern: "position: absolute; inset: 0; opacity: 0.1;",
    headerCircle1:
      "position: absolute; top: 0; right: 0; width: 256px; height: 256px; background-color: #a78bfa; border-radius: 50%; transform: translate(50%, -50%);",
    headerCircle2:
      "position: absolute; bottom: 0; left: 0; width: 192px; height: 192px; background-color: #a78bfa; border-radius: 50%; transform: translate(-50%, 50%);",
    headerContent:
      "position: relative; display: flex; justify-content: space-between; align-items: start; padding: 32px 24px;",
    logo: "width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;",
    section: "padding: 24px;",
    sectionTitle: "display: flex; align-items: center; gap: 12px; margin-bottom: 24px;",
    iconCircle:
      "width: 40px; height: 40px; background-color: #8b263521; border-radius: 50%; display: flex; align-items: center; justify-content: center;",
    eventCard:
      "background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; margin-bottom: 16px;",
    eventCardHover: "transition: all 0.3s;",
    eventImage: "width: 100%; height: 128px; object-fit: cover;",
    eventContent: "padding: 16px;",
    eventTitle: "font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;",
    eventDetail:
      "display: flex; align-items: center; gap: 8px; font-size: 14px; color: #6b7280; margin: 6px 0;",
    eventPrice:
      "display: inline-flex; align-items: center; gap: 4px; font-size: 14px; font-weight: 500; color: #8B2635;",
    button:
      "display: inline-block; padding: 12px 24px; background-color: #8B2635; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 500; text-align: center;",
    buttonOutline:
      "display: inline-block; padding: 12px 24px; background-color: transparent; color: #8B2635; text-decoration: none; border: 1px solid #8B2635; border-radius: 8px; font-weight: 500; text-align: center;",
    footer: "background-color: #8B2635; color: #ffffff; padding: 24px;",
    highlight:
      "background-color: #8b263521; padding: 12px; border-radius: 8px; margin-bottom: 12px;",
  };

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Espace Musset - ${displayMonth} ${displayYear}</title>
</head>
<body style="${styles.body}">
    <table role="presentation" style="width: 100%; border-collapse: collapse; padding: 32px 16px;">
        <tr>
            <td>
                <div style="${styles.container}">
                    
                    <!-- Header -->
                    <div style="${styles.header}">
                        <div style="${styles.headerPattern}">
                            <div style="${styles.headerCircle1}"></div>
                            <div style="${styles.headerCircle2}"></div>
                        </div>
                        <div style="${styles.headerContent}">
                            <div>
                                <p style="font-size: 12px; opacity: 0.8; margin: 0 0 4px 0; text-transform: uppercase;">Newsletter : Votre rendez-vous culturel mensuel</p>
                                <p style="font-size: 20px; margin: 0; text-transform: capitalize; font-weight: 600;">${displayMonth} ${displayYear}</p>
                            </div>
                            <div style="text-align: right;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div>
                                        <p style="font-size: 18px; font-weight: bold; margin: 0;">Espace Musset</p>
                                        <p style="font-size: 12px; opacity: 0.8; margin: 0;">Centre culturel & associatif</p>
                                    </div>
                                    <div style="${styles.logo}">
                                      <img src="https://www.espace-musset.com/logoEM.png" alt="Espace Musset" style="width: 40px; height: 40px; border-radius: 50%;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Events Section -->
                    <div style="${styles.section}">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">📅</span>
                            </div>
                            <div>
                                <h2 style="font-size: 20px; font-weight: 600; color: #8B2635; margin: 0;">Événements du mois</h2>
                                <p style="font-size: 14px; color: #6b7280; margin: 0;">${events.length} événement${events.length > 1 ? "s" : ""}</p>
                            </div>
                        </div>

                        ${sortedEvents
                          .map(
                            (event) => `
                       <div style="${styles.eventCard}">
                            <div style="position: relative; background: linear-gradient(135deg, #8B2635 0%, #B33A4A 50%, #8b263544 100%); padding: 8px; border-radius: 8px 8px 0 0; overflow: hidden;">
                                <div style="position: absolute; inset: 0; opacity: 0.15;">
                                    <div style="position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.3); border-radius: 50%;"></div>
                                    <div style="position: absolute; bottom: -15px; left: -15px; width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;"></div>
                                </div>
                                <span style="position: relative; display: inline-block; font-size: 12px; font-weight: 500; padding: 6px 12px; background-color: rgba(255, 255, 255, 0.95); color: #8B2635; border-radius: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${event.type.name}</span>
                            </div>
                            <div style="${styles.eventContent}; background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);">
                                <h3 style="${styles.eventTitle}">${event.title}</h3>
                                <div style="${styles.eventDetail}">
                                    <span>📅</span>
                                    <span style="text-transform: capitalize;">${event.date}</span>
                                </div>
                                <div style="${styles.eventDetail}">
                                    <span>🕐</span>
                                    <span>${event.time}</span>
                                </div>
                                <div style="${styles.eventDetail}">
                                    <span>📍</span>
                                    <span>${event.location}</span>
                                </div>
                                <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                                    <span style="${styles.eventPrice}">
                                        <span>💶</span>
                                        ${event.price}
                                    </span>
                                    ${
                                      event.eventLink
                                        ? `<a 
                                        href="https://www.espace-musset.com/#agenda"
                                        style="color: #8B2635; font-size: 14px; font-weight: 500; text-decoration: underline;">Voir l'événement →</a>`
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>

                        `
                          )
                          .join("")}

                        ${
                          events.length === 0
                            ? `
                        <div style="text-align: center; padding: 48px 24px; background-color: rgba(0, 0, 0, 0.02); border-radius: 12px; border: 2px dashed #e5e7eb;">
                            <span style="font-size: 48px;">📅</span>
                            <p style="color: #6b7280; margin: 12px 0 0 0;">Aucun événement prévu ce mois-ci</p>
                        </div>
                        `
                            : ""
                        }
                    </div>

                    <!-- Highlights Section -->
                    <div style="${styles.section}; border-top: 1px solid #e5e7eb;">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">✨</span>
                            </div>
                            <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin: 0;">Informations Pratiques</h2>
                        </div>

                        <div style="${styles.highlight}">
                            <div style="display: flex; align-items: start; gap: 12px;">
                                <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: #8B2635;">📷</span>
                                </div>
                                <div style="flex: 1;">
                                    <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 4px 0;">Suivez-nous, on post régulièrement</h3>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0;">Sur Instagram <a href="https://www.instagram.com/espacemussettoulouse/" style="color: #8B2635; font-weight: 500; text-decoration: underline;">@espacemussettoulouse</a></p>
                                </div>
                                <a href="https://www.instagram.com/espacemussettoulouse/" style="${styles.button}; padding: 8px 16px; font-size: 14px;">Nous suivre</a>
                            </div>
                        </div>

                        <div style="${styles.highlight}">
                            <div style="display: flex; align-items: start; gap: 12px;">
                                <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: #8B2635;">ℹ️</span>
                                </div>
                                <div>
                                    <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;">Horaires d'ouverture</h3>
                                    <div style="font-size: 14px; color: #6b7280;">
                                        <p style="margin: 4px 0;">• Lundi : 17h00 - 22h00</p>
                                        <p style="margin: 4px 0;">• Mardi : 17h00 - 22h00</p>
                                        <p style="margin: 4px 0;">• Mercredi : 17h00 - 22h00</p>
                                        <p style="margin: 4px 0;">• Samedi : 14h00 - 18h00</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style="${styles.highlight}">            
                            <div style=\"display: flex; align-items: start; gap: 12px;\">
                                <div style=\"width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;\">
                                    <span style=\"color: #8B2635;\">📍</span>
                                </div>
                                <div style="font-size: 14px; color: #6b7280;">
                                    <h3 style=\"font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;\">Nos coordonnées</h3>
                                    
                                    <p style=\"font-weight: 500; color: #111827; margin: 8px 0 4px 0;\">Adresse</p>
                                    <p style=\"margin: 2px 0;\">52 Bis Rue Alfred de Musset</p>
                                    <p style=\"margin: 2px 0;\">31200 Toulouse</p>
                                    <p style=\"margin: 2px 0;\">France</p>

                                    <p style=\"font-weight: 500; color: #111827; margin: 12px 0 4px 0;\">Transport</p>
                                    <p style=\"margin: 2px 0;\">Métro ligne A - Minimes - Claude Nougaro</p>
                                    <p style=\"margin: 2px 0;\">Depuis la station de métro, à pied :</p>
                                    <p style=\"font-size: 12px; line-height: 1.5; opacity: 0.9; margin: 4px 0 0 0;\">
                                        Au fond de la place, prendre la rue du Général Bourbaki vers la droite, puis la première à gauche, rue Biot. Au bout de cette rue, prendre la rue Alfred de Musset à gauche. Notre local est à 20 mètres à gauche.
                                    </p>

                                    <p style=\"font-weight: 500; color: #111827; margin: 12px 0 4px 0;\">Téléphone</p>
                                    <p style=\"margin: 2px 0;\">06 30 15 46 48</p>

                                    <p style=\"font-weight: 500; color: #111827; margin: 12px 0 4px 0;\">Email</p>
                                    <p style=\"margin: 2px 0;\">contact@espace-musset.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Actions -->
                    <div style="${styles.section}; border-top: 1px solid #e5e7eb;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 0 4px 0 0; width: 50%;">
                                    <a href="https://www.espace-musset.com/#agenda" style="${styles.button}; display: block; width: 100%; box-sizing: border-box;">📅 Voir l'agenda complet</a>
                                </td>
                                <td style="padding: 0 0 0 4px; width: 50%;">
                                    <a href="https://www.espace-musset.com" style="${styles.buttonOutline}; display: block; width: 100%; box-sizing: border-box;">🔗 Visiter le site</a>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- Footer -->
                    <div style="${styles.footer}">
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; align-items: start; gap: 12px;">
                                <span>📍</span>
                                <div style="font-size: 14px;">
                                    <p style="font-weight: 500; margin: 0 0 4px 0;">Espace Musset</p>
                                    <p style="margin: 0;">52 bis rue Alfred de Musset</p>
                                    <p style="margin: 0;">31200 Toulouse</p>
                                </div>
                            </div>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 12px; font-size: 14px;">
                                <span>✉️</span>
                                <p style="margin: 0;">Pour ne plus recevoir nos emails : <a href="mailto:contact@espace-musset.com" style="color: #ffffff; text-decoration: underline;">contactez-nous</a></p>
                            </div>
                        </div>
                        <div style="padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: center;">
                            <p style="font-size: 12px; margin: 0;">Fait avec ❤️ à Toulouse</p>
                        </div>
                    </div>

                </div>
                
                <p style="text-align: center; font-size: 12px; color: #6b7280; margin-top: 24px;">
                    Newsletter Espace Musset • Version web
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();

  return html;
}

// Fonction pour télécharger le HTML
export function downloadNewsletterHTML(events: EventData[], month?: string, year?: number) {
  const html = exportNewsletterToHTML(events, month, year);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `newsletter-${month || "current"}-${year || new Date().getFullYear()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Fonction pour copier dans le presse-papiers
export async function copyNewsletterHTML(
  events: EventData[],
  month?: string,
  year?: number
): Promise<boolean> {
  try {
    const html = exportNewsletterToHTML(events, month, year);
    await navigator.clipboard.writeText(html);
    return true;
  } catch (error) {
    console.error("Erreur lors de la copie:", error);
    return false;
  }
}
