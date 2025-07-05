"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarHeaderProps {
  currentDate: Date
  onPreviousMonth: () => void
  onNextMonth: () => void
}

export function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }: CalendarHeaderProps) {
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  return (
    <div className="flex items-center justify-between p-4 border-b ">
      <Button
        variant="outline"
        size="lg"
        onClick={onPreviousMonth}
        className="flex items-center gap-2 hover:bg-gray-50 bg-transparent"
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Précédent</span>
      </Button>

      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h1>
      </div>

      <Button
        variant="outline"
        size="lg"
        onClick={onNextMonth}
        className="flex items-center gap-2 hover:bg-gray-50 bg-transparent"
      >
        <span className="hidden sm:inline">Suivant</span>
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
