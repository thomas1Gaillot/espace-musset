"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { EventData } from "../data/events"

export default function EventList({ data }: {
  data: EventData[]
}) {
  const [sortBy, setSortBy] = useState("asc")

  const now = new Date()

  const upcomingEvents = data
    .filter(event => event.dateObj >= now)
    .sort((a, b) => {
      return sortBy === "desc"
        ? b.dateObj.getTime() - a.dateObj.getTime()
        : a.dateObj.getTime() - b.dateObj.getTime()
    })

  const pastEvents = data
    .filter(event => event.dateObj < now)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())

  const lastPastEvent = pastEvents[0]

  return (
    <div className="w-full max-w-6xl">
      <div className="flex justify-between items-center mb-6 gap-2">
        <h1 className="text-2xl font-bold">{`Événements à venir (${upcomingEvents.length})`}</h1>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">{"Prochains"}</SelectItem>
            <SelectItem value="desc">{"Plus éloignés"}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className=" sm:max-h-[60vh] mb-4 w-full overflow-x-auto sm:overflow-y-scroll sm:overflow-x-hidden">
        <div className="flex flex-row sm:flex-col gap-4 w-full">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="w-[67vw] sm:w-full flex-shrink-0 sm:px-4 p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                {/* Image */}
                <div className="relative w-full sm:w-auto sm:flex-shrink-0">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={120}
                    height={80}
                    className="rounded-lg object-cover w-full sm:w-[120px] h-[80px]"
                  />
                  {(event.dateObj.getTime() - Date.now()) < 7 * 24 * 60 * 60 * 1000 && (
                    <Badge className="absolute -top-2 -right-2 bg-accent text-white hover:bg-accent/90">
                      {"Date proche"}
                    </Badge>
                  )}
                </div>

                {/* Détails */}
                <div className="grid min-w-0 w-full">
                  <div className="flex items-center text-xs gap-1 mb-2 uppercase text-gray-600">
                    <Link className="underline hover:font-medium" href={event.category.href}>{event.category.name}</Link>
                    {"•"}
                    <Link className="underline hover:font-medium" href={event.type.href}>{event.type.name}</Link>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{event.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2 text-accent">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{event.time} {"(heure : France)"}</span>
                      {"•"}
                      <span className={cn("font-medium text-gray-600 text-sm", event.price === 'gratuit' && 'font-bold text-xs uppercase')}>{event.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{event.venue} {"•"} {event.city}</span>
                    </div>
                  </div>
                </div>

                {/* Bouton */}
                <div className="w-full sm:w-auto flex-shrink-0">
                  <Button
                    className="w-full sm:w-auto text-white px-6"
                    id={"reserve-button-" + event.id}
                    asChild
                  >
                    <Link href={event.eventLink} target="_blank">
                      {"Réserver"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className=" text-center text-sm text-gray-500">{upcomingEvents.length} événements disponibles</div>

      {/* Dernier événement passé */}
      {/* {lastPastEvent && (
        <div className="pt-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{"Dernier événement passé"}</h2>
          <Card className="px-0 w-full sm:px-4 p-4 opacity-60">
            <div className="flex flex-col w-full sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-auto">
                <Image
                  src={lastPastEvent.image || "/placeholder.svg"}
                  alt={lastPastEvent.title}
                  width={120}
                  height={80}
                  className="rounded-lg object-cover w-full sm:w-[120px] h-[80px]"
                />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{lastPastEvent.title}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="font-medium text-orange-600">{lastPastEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{lastPastEvent.time} {"(heure : France)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{lastPastEvent.venue} {"•"} {lastPastEvent.city}</span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto px-6"
                  disabled
                  id={"last-past-event-button"}
                >
                  {"Événement terminé"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )} */}
    </div>
  )
}
