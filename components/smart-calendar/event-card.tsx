"use client"

import { getEventColor } from "@/lib/event-colors"
import { EventData } from "@/types/event-types"
import { Clock } from "lucide-react"

interface EventCardProps {
  event: EventData
  onClick?: () => void
}


export function EventCard({ event, onClick }: EventCardProps) {
  const { borderColor, backgroundColor, textColor } = getEventColor(event.type.name)

  return (
    <div
      onClick={onClick}
      style={{
        borderLeft: `4px solid ${borderColor}`,
        backgroundColor,
        color: textColor,
        padding: "0.5rem",
        marginBottom: "0.25rem",
        borderRadius: "0.375rem",
        cursor: "pointer",
        fontSize: "0.75rem",
        transition: "all 0.2s",
      }}
    >
      <div className="max-w-20 sm:max-w-28 truncate" style={{ fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "0.25rem" }}>
        {event.title}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", opacity: 0.75, marginBottom: "0.25rem" }}>
        <Clock style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0 }} />
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {event.time.split(" à ")[0]}
        </span>
      </div>
      <div style={{ opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {event.type.name}
      </div>
    </div>
  )
}
