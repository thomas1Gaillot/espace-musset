"use client"

import { getEventColor } from "@/lib/event-colors"
import { cn } from "@/lib/utils"
import { EventData } from "@/types/event-types"

interface EventCardProps {
  event: EventData
  onClick?: () => void
  truncate: boolean
}


export function EventCard({ event, onClick, truncate = false }: EventCardProps) {
  const { borderColor, backgroundColor, textColor } = getEventColor(event.type.name)

  return (
    <div
      onClick={onClick}
      className="p-[0.25rem] mb-[0.25rem] rounded-[0.15rem] cursor-pointer text-[0.6rem]  "
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

      <div className={cn("opacity-[75%] ", truncate && 'truncate')}>
        <span className="w-max ">
          {event.time.split(" à ")[0]}
        </span>
        {" - "}
        {event.title}
      </div>
    </div>
  )
}
