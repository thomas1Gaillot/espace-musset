"use client"

import { getEventColor } from "@/lib/event-colors"
import { EventData } from "@/types/event-types"

interface EventCardProps {
  event: EventData
  onClick?: () => void
}


export function EventCard({ event, onClick }: EventCardProps) {
  const { borderColor, backgroundColor, textColor } = getEventColor(event.type.name)

  return (
    <div
      onClick={onClick}
      className="p-[0.25rem] mb-[0.25rem] rounded-[0.15rem] cursor-pointer text-[0.6rem] "
      style={{
        borderLeft: `3px solid ${borderColor}`,
        backgroundColor,
        color: textColor,
        transition: "all 0.2s",
      }}
    >
      <div className=' font-medium text-white w-max rounded-[0.15rem] px-1 py-[0.05rem] text-[8px]'
        style={{ backgroundColor: borderColor }}>
        {event.type.name}
      </div>
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {event.time.split(" à ")[0]}
      </span>
      <div className="opacity-[75%]">
        {event.title}
      </div>
    </div>
  )
}
