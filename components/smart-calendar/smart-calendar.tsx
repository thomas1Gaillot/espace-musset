"use client"

import { EventData } from "@/types/event-types"
import { useMemo, useState } from "react"
import { CalendarHeader } from "./calendar-header"
import { EventCard } from "./event-card"
import { EventDetailsSheet } from "./event-details-sheet"


interface SmartCalendarProps {
  events: EventData[]
}

export function SmartCalendar({ events }: SmartCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  const { calendarDays, eventsMap } = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // Get first day of month and adjust for Monday start
    const firstDay = new Date(year, month, 1)
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7 // Convert Sunday=0 to Monday=0

    // Get last day of month
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()

    // Create calendar grid
    const days: (Date | null)[] = []

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    // Add empty cells to complete the grid (6 weeks)
    while (days.length < 32) {
      days.push(null)
    }

    // Group events by date
    const eventsByDate = new Map<string, EventData[]>()
    events.forEach((event) => {
      const dateKey = event.dateObj.toDateString()
      if (!eventsByDate.has(dateKey)) {
        eventsByDate.set(dateKey, [])
      }
      eventsByDate.get(dateKey)!.push(event)
    })

    return { calendarDays: days, eventsMap: eventsByDate }
  }, [currentDate, events])

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }


  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event)
    setIsSheetOpen(true)
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isCurrentMonth = (date: Date | null) => {
    if (!date) return false
    return date.getMonth() === currentDate.getMonth()
  }

  return (
    <div className="h-max flex flex-col bg-white/60 rounded-lg">
      <CalendarHeader
        currentDate={currentDate}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth} />

      <div className="flex-1 w-full overflow-x-auto">
        <div className=" w-full  shadow-sm h-full flex flex-col">
          {/* Days of week header */}
          <div className="grid grid-cols-7 border-b border-secondary/20">
            {daysOfWeek.map((day) => (
              <div key={day} className="p-2 sm:p-3 text-[10px] sm:text-xs  font-light text-gray-600 text-end">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 flex-1 overflow-hidden">
            {calendarDays.map((date, index) => {
              const dateEvents = date ? eventsMap.get(date.toDateString()) || [] : []
              const hasMoreEvents = dateEvents.length > 2
              const visibleEvents = dateEvents.slice(0, 2)

              return (
                <div
                  key={index}
                  className={`border-r border-secondary/20  border-b p-1 sm:p-2 h-[80px]  w-[54px] sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[120px]  overflow-hidden
                    ${!date ? "bg-gray-50/60" : isCurrentMonth(date) ? "bg-transparent" : "bg-gray-50/60"
                    }`}
                >
                  {date && (
                    <>
                      <div className="relative flex w-full justify-end items-end">
                        <span
                          className={`absolute top-0  w-0 h-0 text-[10px] sm:text-xs font-medium 
                        ${isToday(date)
                              ? "bg-primary text-white w-5 h-5 sm:w-6 sm:h-6 right-1 rounded-full flex items-center justify-center"
                              : "text-gray-400 right-3"
                            }`}
                        >
                          {date.getDate()}
                        </span>
                      </div>



                      <div className="space-y-1  overflow-hidden">
                        {visibleEvents.map((event) => (
                          <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} truncate={visibleEvents.length > 1} />
                        ))}
                        {hasMoreEvents && (
                          <div className="text-[10px] sm:text-xs text-gray-500 px-1 sm:px-2 py-1">+{dateEvents.length - 2} autres</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <EventDetailsSheet event={selectedEvent} isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  )
}
