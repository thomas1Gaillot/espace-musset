"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  venue: string
  city: string
  image: string
  isNew: boolean
  dateObj: Date
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Ciné philo : Kaamelott et le roi Arthur",
    date: "Mardi 26 août 2025",
    time: "19:30 à 21:30",
    location: "École de philosophie - ANAT",
    venue: "École de philosophie - ANAT",
    city: "31200 Toulouse",
    image: "/event/kamelot.jpg",
    isNew: true,
    dateObj: new Date("2025-08-26"),
  },
  {
    id: 2,
    title: "Concert de Jazz au Sunset",
    date: "Vendredi 29 août 2025",
    time: "20:00 à 23:00",
    location: "Le Sunset Jazz Club",
    venue: "Le Sunset Jazz Club",
    city: "75001 Paris",
    image: "/placeholder.svg?height=80&width=120",
    isNew: true,
    dateObj: new Date("2025-08-29"),
  },
  {
    id: 3,
    title: "Exposition d'Art Contemporain",
    date: "Samedi 30 août 2025",
    time: "14:00 à 18:00",
    location: "Galerie Moderne",
    venue: "Galerie Moderne",
    city: "69000 Lyon",
    image: "/placeholder.svg?height=80&width=120",
    isNew: false,
    dateObj: new Date("2025-08-30"),
  },
  {
    id: 4,
    title: "Théâtre : Les Misérables",
    date: "Dimanche 31 août 2025",
    time: "15:00 à 18:00",
    location: "Théâtre National",
    venue: "Théâtre National",
    city: "13000 Marseille",
    image: "/placeholder.svg?height=80&width=120",
    isNew: false,
    dateObj: new Date("2025-08-31"),
  },
  {
    id: 5,
    title: "Festival de Musique Électronique",
    date: "Lundi 1 septembre 2025",
    time: "21:00 à 03:00",
    location: "Parc des Expositions",
    venue: "Parc des Expositions",
    city: "33000 Bordeaux",
    image: "/placeholder.svg?height=80&width=120",
    isNew: true,
    dateObj: new Date("2025-09-01"),
  },
  {
    id: 6,
    title: "Conférence Tech Innovation",
    date: "Mardi 2 septembre 2025",
    time: "09:00 à 17:00",
    location: "Centre de Congrès",
    venue: "Centre de Congrès",
    city: "59000 Lille",
    image: "/placeholder.svg?height=80&width=120",
    isNew: false,
    dateObj: new Date("2025-09-02"),
  },
  {
    id: 7,
    title: "Marché aux Puces Vintage",
    date: "Mercredi 3 septembre 2025",
    time: "08:00 à 16:00",
    location: "Place du Marché",
    venue: "Place du Marché",
    city: "67000 Strasbourg",
    image: "/placeholder.svg?height=80&width=120",
    isNew: false,
    dateObj: new Date("2025-09-03"),
  },
  {
    id: 8,
    title: "Spectacle de Danse Contemporaine",
    date: "Jeudi 4 septembre 2025",
    time: "20:30 à 22:00",
    location: "Opéra de la Ville",
    venue: "Opéra de la Ville",
    city: "44000 Nantes",
    image: "/placeholder.svg?height=80&width=120",
    isNew: true,
    dateObj: new Date("2025-09-04"),
  },
  {
    id: 9,
    title: "Salon du Livre et de la BD",
    date: "Vendredi 5 septembre 2025",
    time: "10:00 à 19:00",
    location: "Palais des Congrès",
    venue: "Palais des Congrès",
    city: "35000 Rennes",
    image: "/placeholder.svg?height=80&width=120",
    isNew: false,
    dateObj: new Date("2025-09-05"),
  },
  {
    id: 10,
    title: "Festival Gastronomique",
    date: "Samedi 6 septembre 2025",
    time: "12:00 à 22:00",
    location: "Esplanade Charles de Gaulle",
    venue: "Esplanade Charles de Gaulle",
    city: "34000 Montpellier",
    image: "/placeholder.svg?height=80&width=120",
    isNew: true,
    dateObj: new Date("2025-09-06"),
  },
]

export default function EventList() {
  const [sortBy, setSortBy] = useState("recent")

  const sortedEvents = [...mockEvents].sort((a, b) => {
    if (sortBy === "recent") {
      return b.dateObj.getTime() - a.dateObj.getTime()
    } else {
      return a.dateObj.getTime() - b.dateObj.getTime()
    }
  })

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex  justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Événements</h1>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Plus récents</SelectItem>
            <SelectItem value="oldest">Plus anciens</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="h-[600px] w-full">
        <div className="space-y-4">
          {sortedEvents.map((event) => (
            <Card key={event.id} className="px-0 w-full sm:px-4 p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col w-full sm:flex-row items-start sm:items-center gap-4">
                {/* Event Image */}
                <div className="relative flex-shrink-0 w-full sm:w-auto">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={120}
                    height={80}
                    className="rounded-lg object-cover w-full sm:w-[120px] h-[80px]"
                  />
                  {event.isNew && (
                    <Badge className="absolute -top-2 -right-2 bg-green-100 text-green-800 hover:bg-green-100">
                      {"Nouveau"}
                    </Badge>
                  )}
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0 w-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{event.title}</h3>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-orange-600">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{event.time} {"(heure : France)"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>
                        {event.venue} {"•"} {event.city}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6"
                  >
                    {"Réserver"}
                  </Button>
                </div>
              </div>
            </Card>

          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
