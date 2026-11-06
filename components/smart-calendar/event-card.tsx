"use client";

import { getEventColor } from "@/lib/event-colors";
import { EventData } from "@/types/event-types";

interface EventCardProps {
  event: EventData;
  onClick?: () => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  const { borderColor, backgroundColor, textColor } = getEventColor(event.type.name);
  const startTime = event.time.split(" à ")[0];

  return (
    <div
      onClick={onClick}
      title={`${startTime} - ${event.type.name} - ${event.title}`}
      className="px-[0.25rem] py-[0.15rem] mb-[0.25rem] rounded-[0.15rem] cursor-pointer text-[0.6rem] leading-tight overflow-hidden"
      style={{
        backgroundColor,
        color: borderColor,
        transition: "all 0.2s",
      }}
    >
      {/* Badge type */}
      <div
        className="line-clamp-2 break-words w-full uppercase font-medium text-white rounded-[0.15rem] px-1 text-[8px] lg:text-[11px] lg:px-1.5 lg:py-[1px]"
        style={{ backgroundColor: borderColor }}
      >
        {event.type.name}
      </div>

      {/* Heure - titre (3 lignes max) */}
      <div className="line-clamp-3 break-words opacity-75" style={{ color: textColor }}>
        {startTime} - {event.title}
      </div>
    </div>
  );
}
