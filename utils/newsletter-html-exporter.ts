import { EventData } from "@/types/event-types";
import { MonthlyEventsData } from "@/data/get-monthly.events";
import { formatRecurringDates } from "@/data/group-recurring-events";

export function exportNewsletterToHTML(events: EventData[], month?: string, year?: number): string {
  const currentDate = new Date();
  const displayMonth = month || currentDate.toLocaleDateString("fr-FR", { month: "long" });
  const displayYear = year || currentDate.getFullYear();
  const sortedEvents = [...events].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Styles inline pour la compatibilité email
  const styles = {
    body: "margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb !important;",
    container:
      "max-width: 672px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);",
    section: "padding: 24px;",
    sectionTitle: "display: flex; align-items: center; gap: 12px; margin-bottom: 24px;",
    iconCircle:
      "width: 40px; height: 40px; background-color: #8b263521; border-radius: 50%; display: flex; align-items: center; justify-content: center;",
    eventCard:
      "background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; margin-bottom: 16px;",
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
                    <table role="presentation" style="width: 100%; background-color: #8B2635; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 32px 24px;">
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="vertical-align: top;">
                                            <p style="font-size: 12px; opacity: 0.8; color: #ffffff; margin: 0 0 4px 0; text-transform: uppercase;">Newsletter : Votre rendez-vous culturel mensuel</p>
                                            <p style="font-size: 20px; color: #ffffff; margin: 0; text-transform: capitalize; font-weight: 600;">${displayMonth} ${displayYear}</p>
                                        </td>
                                        <td style="text-align: right; vertical-align: top;">
                                            <p style="font-size: 18px; font-weight: bold; color: #ffffff; margin: 0;">Espace Musset</p>
                                            <p style="font-size: 12px; opacity: 0.8; color: #ffffff; margin: 0;">Centre culturel & associatif</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <!-- Intro Section -->
                    <div style="${styles.section}; border-bottom: 1px solid #e5e7eb;">
                        <p style="font-size: 18px; line-height: 1.6; color: #111827; margin: 0;">
                            Ce mois-ci à l'Espace Musset : découvrez notre <strong>mise à disposition de salles</strong>,
                            et retrouvez tous nos <strong>événements de janvier</strong> — conférences, soirées jeux,
                            ateliers chant, théâtre et bien plus encore !
                        </p>
                    </div>

                    <!-- Room Promo Section -->
                    <div style="${styles.section}; border-bottom: 1px solid #e5e7eb;">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">🏢</span>
                            </div>
                            <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin: 0;">Mise à disposition de salle</h2>
                        </div>

                        <!-- Salle des Muses -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; background-color: #8b263515; border: 1px solid #8b263530; margin-bottom: 16px;">
                            <tr>
                                <td style="width: 40%; vertical-align: top;">
                                    <img src="https://www.espace-musset.com/salle-des-muses-3.jpg" alt="Salle des Muses" style="width: 100%; height: 220px; object-fit: cover; object-position: 80% center; display: block;" />
                                </td>
                                <td style="width: 60%; vertical-align: top; padding: 16px;">
                                    <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;">Salle des Muses</h3>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">
                                        <span style="color: #8B2635;">📐</span> 42 m² &nbsp;
                                        <span style="color: #8B2635;">👥</span> 24 à 50 pers. &nbsp;
                                        <span style="color: #8B2635;">💶</span> Dès 50 €
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Salle de réunion, lieu de séminaire, espace de formation…</p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0;">
                                        <span style="color: #8B2635;">📞</span> 06 21 79 97 50
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
                                        <span style="color: #8B2635;">✉️</span> contact@espace-musset.com
                                    </p>
                                    <a href="https://www.espace-musset.com/mise-a-disposition" style="${styles.button}; display: block; width: 100%; box-sizing: border-box; font-size: 14px; padding: 10px 16px;">En savoir plus</a>
                                </td>
                            </tr>
                        </table>

                        <!-- Café d'Oc -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; background-color: #8b263515; border: 1px solid #8b263530;">
                            <tr>
                                <td style="width: 40%; vertical-align: top;">
                                    <img src="https://www.espace-musset.com/cafe_classe.jpeg" alt="Café d'Oc" style="width: 100%; height: 220px; object-fit: cover; object-position: center center; display: block;" />
                                </td>
                                <td style="width: 60%; vertical-align: top; padding: 16px;">
                                    <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;">Le Café d'Oc</h3>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">
                                        <span style="color: #8B2635;">📐</span> 28 m² &nbsp;
                                        <span style="color: #8B2635;">👥</span> 25 pers. &nbsp;
                                        <span style="color: #8B2635;">💶</span> Dès 30 €
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Espace convivial idéal pour conférences et ateliers en petit comité.</p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0;">
                                        <span style="color: #8B2635;">📞</span> 06 21 79 97 50
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
                                        <span style="color: #8B2635;">✉️</span> contact@espace-musset.com
                                    </p>
                                    <a href="https://www.espace-musset.com/mise-a-disposition" style="${styles.button}; display: block; width: 100%; box-sizing: border-box; font-size: 14px; padding: 10px 16px;">En savoir plus</a>
                                </td>
                            </tr>
                        </table>
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
                            <table role="presentation" style="width: 100%; background: #8b263521; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px;">
                                        <span style="display: inline-block; font-size: 14px; font-weight: 400; padding: 6px 12px; color: #530f1aff; border-radius: 20px;">
                                        ${event.category.name} : ${event.type.name} 
                                        </span>
                                    </td>
                                </tr>
                            </table>
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
                                <table role="presentation" style="width: 100%; margin-top: 12px; border-collapse: collapse;">
                                    <tr>
                                        <td style="vertical-align: middle;">
                                            <span style="${styles.eventPrice}">
                                                <span>💶</span>
                                                ${event.price}
                                            </span>
                                        </td>
                                       <td style="text-align: right; vertical-align: middle;">
                                                <a href="https://www.espace-musset.com/#evenements" style="color: #8B2635; font-size: 14px; font-weight: 500; text-decoration: underline;">Voir →</a>
                                        </td>
                                    </tr>
                                </table>
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
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">📷</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                        <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 4px 0;">Suivez-nous, on post régulièrement</h3>
                                        <p style="font-size: 14px; color: #6b7280; margin: 0;">Sur Instagram <a href="https://www.instagram.com/espacemussettoulouse/" style="color: #8B2635; font-weight: 500; text-decoration: underline;">@espacemussettoulouse</a></p>
                                    </td>
                                    <td style="text-align: right; vertical-align: middle; padding-left: 12px;">
                                        <a href="https://www.instagram.com/espacemussettoulouse/" style="${styles.button}; padding: 8px 16px; font-size: 14px;">Nous suivre</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div style="${styles.highlight}">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">ℹ️</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;">Horaires d'ouverture</h3>
                                        <div style="font-size: 14px; color: #6b7280;">
                                            <p style="margin: 4px 0;">• Lundi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Mardi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Mercredi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Samedi : 14h00 - 18h00</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div style="${styles.highlight}">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">📍</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <div style="font-size: 14px; color: #6b7280;">
                                            <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;">Nos coordonnées</h3>
                                            
                                            <p style="font-weight: 500; color: #111827; margin: 8px 0 4px 0;">Adresse</p>
                                            <p style="margin: 2px 0;">52 Bis Rue Alfred de Musset</p>
                                            <p style="margin: 2px 0;">31200 Toulouse</p>
                                            <p style="margin: 2px 0;">France</p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Transport</p>
                                            <p style="margin: 2px 0;">Métro ligne A - Minimes - Claude Nougaro</p>
                                            <p style="margin: 2px 0;">Depuis la station de métro, à pied :</p>
                                            <p style="font-size: 12px; line-height: 1.5; opacity: 0.9; margin: 4px 0 0 0;">
                                                Au fond de la place, prendre la rue du Général Bourbaki vers la droite, puis la première à gauche, rue Biot. Au bout de cette rue, prendre la rue Alfred de Musset à gauche. Notre local est à 20 mètres à gauche.
                                            </p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Téléphone</p>
                                            <p style="margin: 2px 0;">06 21 79 97 50</p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Email</p>
                                            <p style="margin: 2px 0;">contact@espace-musset.com</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
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
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 20px; vertical-align: top;">
                                        <span>📍</span>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <div style="font-size: 14px;">
                                            <p style="font-weight: 500; margin: 0 0 4px 0;">Espace Musset</p>
                                            <p style="margin: 0;">52 bis rue Alfred de Musset</p>
                                            <p style="margin: 0;">31200 Toulouse</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 20px; vertical-align: middle;">
                                        <span>✉️</span>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                        <p style="font-size: 14px; margin: 0;">Pour ne plus recevoir nos emails : <a href="mailto:contact@espace-musset.com" style="color: #ffffff; text-decoration: underline;">contactez-nous</a></p>
                                    </td>
                                </tr>
                            </table>
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

/**
 * Nouvelle fonction pour exporter avec séparation des événements récurrents
 */
export function exportNewsletterToHTMLGrouped(
  eventsData: MonthlyEventsData,
  month?: string,
  year?: number
): string {
  const currentDate = new Date();
  const displayMonth = month || currentDate.toLocaleDateString("fr-FR", { month: "long" });
  const displayYear = year || currentDate.getFullYear();

  const { uniqueEvents, recurringGroups } = eventsData;
  const totalEvents = uniqueEvents.length + recurringGroups.length;

  // Styles inline pour la compatibilité email
  const styles = {
    body: "margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb !important;",
    container:
      "max-width: 672px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);",
    section: "padding: 24px;",
    sectionTitle: "display: flex; align-items: center; gap: 12px; margin-bottom: 24px;",
    iconCircle:
      "width: 40px; height: 40px; background-color: #8b263521; border-radius: 50%; display: flex; align-items: center; justify-content: center;",
    eventCard:
      "background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; margin-bottom: 16px;",
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
    recurringBadge:
      "display: inline-block; background-color: #10b981; color: #ffffff; font-size: 12px; font-weight: 500; padding: 4px 8px; border-radius: 4px; margin-bottom: 8px;",
    datesList:
      "background-color: #f9fafb; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #374151; margin-top: 8px;",
  };

  const renderEventCard = (event: EventData, isRecurring: boolean = false, dates?: Date[]) => `
    <div style="${styles.eventCard}">
      <table role="presentation" style="width: 100%; background: #8b263521; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px;">
            <span style="display: inline-block; font-size: 14px; font-weight: 400; padding: 6px 12px; color: #530f1aff; border-radius: 20px;">
              ${event.category.name} : ${event.type.name}
            </span>
            ${
              isRecurring
                ? `<span style="${styles.recurringBadge}">📅 Récurrent (${dates?.length} dates)</span>`
                : ""
            }
          </td>
        </tr>
      </table>
      <div style="${styles.eventContent}; background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);">
        <h3 style="${styles.eventTitle}">${event.title}</h3>
        ${
          isRecurring && dates
            ? `
        <div style="${styles.datesList}">
          <strong>📅 Dates :</strong><br/>
          ${dates
            .map(
              (d) =>
                `<span style="display: block; margin: 4px 0;">• ${d.toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}</span>`
            )
            .join("")}
        </div>
        `
            : `
        <div style="${styles.eventDetail}">
          <span>📅</span>
          <span style="text-transform: capitalize;">${event.date}</span>
        </div>
        `
        }
        <div style="${styles.eventDetail}">
          <span>🕐</span>
          <span>${event.time}</span>
        </div>
        <div style="${styles.eventDetail}">
          <span>📍</span>
          <span>${event.location}</span>
        </div>
        <table role="presentation" style="width: 100%; margin-top: 12px; border-collapse: collapse;">
          <tr>
            <td style="vertical-align: middle;">
              <span style="${styles.eventPrice}">
                <span>💶</span>
                ${event.price}
              </span>
            </td>
            <td style="text-align: right; vertical-align: middle;">
              <a href="https://www.espace-musset.com/#evenements" style="color: #8B2635; font-size: 14px; font-weight: 500; text-decoration: underline;">Voir →</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

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
                    <table role="presentation" style="width: 100%; background-color: #8B2635; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 32px 24px;">
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="vertical-align: top;">
                                            <p style="font-size: 12px; opacity: 0.8; color: #ffffff; margin: 0 0 4px 0; text-transform: uppercase;">Newsletter : Votre rendez-vous culturel mensuel</p>
                                            <p style="font-size: 20px; color: #ffffff; margin: 0; text-transform: capitalize; font-weight: 600;">${displayMonth} ${displayYear}</p>
                                        </td>
                                        <td style="text-align: right; vertical-align: top;">
                                            <p style="font-size: 18px; font-weight: bold; color: #ffffff; margin: 0;">Espace Musset</p>
                                            <p style="font-size: 12px; opacity: 0.8; color: #ffffff; margin: 0;">Centre culturel & associatif</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <!-- Intro Section -->
                    <div style="${styles.section}; border-bottom: 1px solid #e5e7eb;">
                        <p style="font-size: 18px; line-height: 1.6; color: #111827; margin: 0;">
                            Ce mois-ci à l'Espace Musset : découvrez notre <strong>mise à disposition de salles</strong>,
                            et retrouvez tous nos <strong>événements de janvier</strong> — conférences, philosophie, soirées jeux,
                            ateliers chant, théâtre et bien plus encore !
                        </p>
                    </div>

                    <!-- Room Promo Section -->
                    <div style="${styles.section}; border-bottom: 1px solid #e5e7eb;">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">🏢</span>
                            </div>
                            <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin: 0;">Mise à disposition de salle</h2>
                        </div>

                        <!-- Salle des Muses -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; background-color: #8b263515; margin-bottom: 16px;">
                            <tr>
                                <td style="width: 40%; vertical-align: top;">
                                    <img src="https://www.espace-musset.com/salle-des-muses-3.jpg" alt="Salle des Muses" style="width: 100%; height: 240px; object-fit: cover; object-position: 80% center; display: block;" />
                                </td>
                                <td style="width: 60%; vertical-align: top; padding: 16px;">
                                    <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;">Salle des Muses</h3>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">
                                        <span style="color: #8B2635;">📐</span> 42 m² &nbsp;
                                        <span style="color: #8B2635;">👥</span> 24 à 50 pers. &nbsp;
                                        <span style="color: #8B2635;">💶</span> Dès 50 €
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Salle de réunion, lieu de séminaire, espace de formation…</p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0;">
                                        <span style="color: #8B2635;">📞</span> 06 21 79 97 50
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
                                        <span style="color: #8B2635;">✉️</span> contact@espace-musset.com
                                    </p>
                                    <a href="https://www.espace-musset.com/mise-a-disposition" style="${styles.button}; display: block; width: 100%; box-sizing: border-box; font-size: 14px; padding: 10px 16px;">En savoir plus</a>
                                </td>
                            </tr>
                        </table>

                        <!-- Café d'Oc -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; background-color: #8b263515;">
                            <tr>
                                <td style="width: 40%; vertical-align: top;">
                                    <img src="https://www.espace-musset.com/cafe_classe.jpeg" alt="Café d'Oc" style="width: 100%; height: 240px; object-fit: cover; object-position: center center; display: block;" />
                                </td>
                                <td style="width: 60%; vertical-align: top; padding: 16px;">
                                    <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;">Le Café d'Oc</h3>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">
                                        <span style="color: #8B2635;">📐</span> 28 m² &nbsp;
                                        <span style="color: #8B2635;">👥</span> 25 pers. &nbsp;
                                        <span style="color: #8B2635;">💶</span> Dès 30 €
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Espace convivial idéal pour conférences et ateliers en petit comité.</p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0;">
                                        <span style="color: #8B2635;">📞</span> 06 21 79 97 50
                                    </p>
                                    <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
                                        <span style="color: #8B2635;">✉️</span> contact@espace-musset.com
                                    </p>
                                    <a href="https://www.espace-musset.com/mise-a-disposition" style="${styles.button}; display: block; width: 100%; box-sizing: border-box; font-size: 14px; padding: 10px 16px;">En savoir plus</a>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- Events Section - Unique Events -->
                    ${
                      uniqueEvents.length > 0
                        ? `
                    <div style="${styles.section}">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">✨</span>
                            </div>
                            <div>
                                <h2 style="font-size: 20px; font-weight: 600; color: #8B2635; margin: 0;">Événements spéciaux</h2>
                                <p style="font-size: 14px; color: #6b7280; margin: 0;">${uniqueEvents.length} événement${uniqueEvents.length > 1 ? "s" : ""}</p>
                            </div>
                        </div>

                        ${uniqueEvents.map((event) => renderEventCard(event, false)).join("")}
                    </div>
                    `
                        : ""
                    }

                    <!-- Recurring Events Section -->
                    ${
                      recurringGroups.length > 0
                        ? `
                    <div style="${styles.section}; ${uniqueEvents.length > 0 ? "border-top: 1px solid #e5e7eb;" : ""}">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">🔄</span>
                            </div>
                            <div>
                                <h2 style="font-size: 20px; font-weight: 600; color: #8B2635; margin: 0;">Activités récurrentes</h2>
                                <p style="font-size: 14px; color: #6b7280; margin: 0;">${recurringGroups.length} activité${recurringGroups.length > 1 ? "s" : ""} régulière${recurringGroups.length > 1 ? "s" : ""}</p>
                            </div>
                        </div>

                        ${recurringGroups.map((group) => renderEventCard(group.baseEvent, true, group.dates)).join("")}
                    </div>
                    `
                        : ""
                    }

                    ${
                      totalEvents === 0
                        ? `
                    <div style="${styles.section}">
                        <div style="text-align: center; padding: 48px 24px; background-color: rgba(0, 0, 0, 0.02); border-radius: 12px; border: 2px dashed #e5e7eb;">
                            <span style="font-size: 48px;">📅</span>
                            <p style="color: #6b7280; margin: 12px 0 0 0;">Aucun événement prévu ce mois-ci</p>
                        </div>
                    </div>
                    `
                        : ""
                    }

                    <!-- Highlights Section -->
                    <div style="${styles.section}; border-top: 1px solid #e5e7eb;">
                        <div style="${styles.sectionTitle}">
                            <div style="${styles.iconCircle}">
                                <span style="color: #8B2635;">✨</span>
                            </div>
                            <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin: 0;">Informations Pratiques</h2>
                        </div>

                        <div style="${styles.highlight}">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">📷</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                        <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 4px 0;">Suivez-nous, on post régulièrement</h3>
                                        <p style="font-size: 14px; color: #6b7280; margin: 0;">Sur Instagram <a href="https://www.instagram.com/espacemussettoulouse/" style="color: #8B2635; font-weight: 500; text-decoration: underline;">@espacemussettoulouse</a></p>
                                    </td>
                                    <td style="text-align: right; vertical-align: middle; padding-left: 12px;">
                                        <a href="https://www.instagram.com/espacemussettoulouse/" style="${styles.button}; padding: 8px 16px; font-size: 14px;">Nous suivre</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div style="${styles.highlight}">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">ℹ️</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;">Horaires d'ouverture</h3>
                                        <div style="font-size: 14px; color: #6b7280;">
                                            <p style="margin: 4px 0;">• Lundi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Mardi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Mercredi : 17h00 - 22h00</p>
                                            <p style="margin: 4px 0;">• Samedi : 14h00 - 18h00</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div style="${styles.highlight}">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 32px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <span style="color: #8B2635;">📍</span>
                                        </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <div style="font-size: 14px; color: #6b7280;">
                                            <h3 style="font-weight: 500; color: #111827; font-size: 14px; margin: 0 0 8px 0;">Nos coordonnées</h3>

                                            <p style="font-weight: 500; color: #111827; margin: 8px 0 4px 0;">Adresse</p>
                                            <p style="margin: 2px 0;">52 Bis Rue Alfred de Musset</p>
                                            <p style="margin: 2px 0;">31200 Toulouse</p>
                                            <p style="margin: 2px 0;">France</p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Transport</p>
                                            <p style="margin: 2px 0;">Métro ligne A - Minimes - Claude Nougaro</p>
                                            <p style="margin: 2px 0;">Depuis la station de métro, à pied :</p>
                                            <p style="font-size: 12px; line-height: 1.5; opacity: 0.9; margin: 4px 0 0 0;">
                                                Au fond de la place, prendre la rue du Général Bourbaki vers la droite, puis la première à gauche, rue Biot. Au bout de cette rue, prendre la rue Alfred de Musset à gauche. Notre local est à 20 mètres à gauche.
                                            </p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Téléphone</p>
                                            <p style="margin: 2px 0;">06 21 79 97 50</p>

                                            <p style="font-weight: 500; color: #111827; margin: 12px 0 4px 0;">Email</p>
                                            <p style="margin: 2px 0;">contact@espace-musset.com</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
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
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 20px; vertical-align: top;">
                                        <span>📍</span>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: top;">
                                        <div style="font-size: 14px;">
                                            <p style="font-weight: 500; margin: 0 0 4px 0;">Espace Musset</p>
                                            <p style="margin: 0;">52 bis rue Alfred de Musset</p>
                                            <p style="margin: 0;">31200 Toulouse</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 20px; vertical-align: middle;">
                                        <span>✉️</span>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                        <p style="font-size: 14px; margin: 0;">Pour ne plus recevoir nos emails : <a href="mailto:contact@espace-musset.com" style="color: #ffffff; text-decoration: underline;">contactez-nous</a></p>
                                    </td>
                                </tr>
                            </table>
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

// Nouvelle fonction pour télécharger avec groupement
export function downloadNewsletterHTMLGrouped(
  eventsData: MonthlyEventsData,
  month?: string,
  year?: number
) {
  const html = exportNewsletterToHTMLGrouped(eventsData, month, year);
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
