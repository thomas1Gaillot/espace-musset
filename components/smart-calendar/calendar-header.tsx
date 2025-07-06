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
    <div className="flex items-center gap-4 p-4 border-b ">
      <Button
        variant="outline"
        size='sm'
        onClick={onPreviousMonth}
        className="flex items-center gap-2 hover:bg-gray-50 bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex flex-col items-center">
        <h1 className="text-lg flex  gap-1 font-bold text-gray-700">
          {monthNames[currentDate.getMonth()]} 
          <p className="font-light">{currentDate.getFullYear()}</p>
        </h1>
      </div>

      <Button
        variant="outline"
        size='sm'

        onClick={onNextMonth}
        className="flex items-center gap-2 hover:bg-gray-50 bg-transparent"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
