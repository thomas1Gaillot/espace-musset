"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { EventData } from "@/types/event-types"
import { Calendar, Clock, Euro, ExternalLink, MapPin } from "lucide-react"
import { Badge } from "../ui/badge"

interface EventDetailsSheetProps {
  event: EventData | null
  isOpen: boolean
  onClose: () => void
}

export function EventDetailsSheet({ event, isOpen, onClose }: EventDetailsSheetProps) {
  if (!event) return null
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[400px] sm:max-w-[400px] flex flex-col">
        <SheetHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <SheetTitle className="text-lg font-semibold leading-tight mb-2">{event.title}</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 space-y-6 py-6 h-full overflow-y-auto">
          {/* Event Image */}
          {event.image && (
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex items-center gap-1 text-gray-600">
            <Badge variant="outline" className="text-xs">
              {event.type.name}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {event.category.name}
            </Badge>
          </div>
          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{event.date}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Clock className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{event.time}</span>
            </div>


            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium">{event.location}</div>
                <div>{event.venue}</div>
                <div>{event.city}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Euro className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{event.price}</span>
            </div>

          </div>
        </div>

        {/* Reservation Button */}
        <div className="border-t pt-4 space-y-3">
          {event.eventLink && (
            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                if (event.eventLink.startsWith("http")) {
                  window.open(event.eventLink, "_blank")
                } else {
                  window.location.href = event.eventLink
                }
              }}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              {"Voir l'annonce"}
            </Button>
          )}
          <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
