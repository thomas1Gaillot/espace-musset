import { EventType } from "@/types/event-types"

type ColorScheme = {
  borderColor: string
  backgroundColor: string
  textColor: string
}

export const getEventColor = (eventType: EventType): ColorScheme => {
  const colorMap: Record<EventType, ColorScheme> = {
    "Café philo": {
      borderColor: "#ec4899",
      backgroundColor: "#fdf2f8",
      textColor: "#831843"
    },
    "Atelier philo": {
      borderColor: "#3b82f6",
      backgroundColor: "#eff6ff",
      textColor: "#1e3a8a"
    },
    Conférence: {
      borderColor: "#a855f7",
      backgroundColor: "#faf5ff",
      textColor: "#5b21b6"
    },
    "Rencontre philo": {
      borderColor: "#22c55e",
      backgroundColor: "#f0fdf4",
      textColor: "#14532d"
    },
    Volontariat: {
      borderColor: "#f97316",
      backgroundColor: "#fff7ed",
      textColor: "#7c2d12"
    },
    "Ciné philo": {
      borderColor: "#ef4444",
      backgroundColor: "#fef2f2",
      textColor: "#7f1d1d"
    },
    "Cours de philosophie": {
      borderColor: "#6366f1",
      backgroundColor: "#eef2ff",
      textColor: "#312e81"
    },
    Yoga: {
      borderColor: "#14b8a6",
      backgroundColor: "#f0fdfa",
      textColor: "#134e4a"
    },
    Théâtre: {
      borderColor: "#f59e0b",
      backgroundColor: "#fffbeb",
      textColor: "#78350f"
    },
    "Théâtre d'improvisation": {
      borderColor: "#84cc16",
      backgroundColor: "#f7fee7",
      textColor: "#365314"
    },
    Chant: {
      borderColor: "#06b6d4",
      backgroundColor: "#ecfeff",
      textColor: "#164e63"
    },
    Spectacle: {
      borderColor: "#8b5cf6",
      backgroundColor: "#f5f3ff",
      textColor: "#4c1d95"
    },
    "Portes ouvertes": {
      borderColor: "#0ea5e9",
      backgroundColor: "#f0f9ff",
      textColor: "#0c4a6e"
    },
    Feldenkrais: {
      borderColor: "#d946ef",
      backgroundColor: "#fdf4ff",
      textColor: "#701a75"
    },
    "Clown Socratique": {
      borderColor: "#f43f5e",
      backgroundColor: "#fff1f2",
      textColor: "#881337"
    },
    Méditation: {
      borderColor: "#10b981",
      backgroundColor: "#ecfdf5",
      textColor: "#064e3b"
    },
    "Mercredi Montessori": {
      borderColor: "#eab308",
      backgroundColor: "#fefce8",
      textColor: "#713f12"
    },
    "Soirée Jeux": {
      borderColor: "#0d9488",
      backgroundColor: "#ecfdfd",
      textColor: "#134e4a"
    }
  }

  return colorMap[eventType] || {
    borderColor: "#6b7280",
    backgroundColor: "#f9fafb",
    textColor: "#1f2937"
  }
}
