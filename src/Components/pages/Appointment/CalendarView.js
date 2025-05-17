"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, User, MapPin } from "lucide-react"

export default function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Sample appointments data
  const appointments = [
    {
      id: "A-1001",
      patientName: "John Smith",
      patientId: "P-1001",
      doctorName: "Dr. Sarah Wilson",
      department: "Cardiology",
      date: "2023-05-18",
      time: "09:00 AM",
      type: "Consultation",
      status: "Confirmed",
      room: "Room 101",
    },
    {
      id: "A-1002",
      patientName: "Emma Johnson",
      patientId: "P-1002",
      doctorName: "Dr. Michael Brown",
      department: "Neurology",
      date: "2023-05-18",
      time: "10:30 AM",
      type: "Follow-up",
      status: "Completed",
      room: "Room 203",
    },
    {
      id: "A-1003",
      patientName: "Robert Davis",
      patientId: "P-1003",
      doctorName: "Dr. Lisa Chen",
      department: "Neurology",
      date: "2023-05-18",
      time: "11:45 AM",
      type: "Consultation",
      status: "Confirmed",
      room: "Room 205",
    },
    {
      id: "A-1004",
      patientName: "Sophia Martinez",
      patientId: "P-1004",
      doctorName: "Dr. James Taylor",
      department: "Dermatology",
      date: "2023-05-18",
      time: "02:15 PM",
      type: "Procedure",
      status: "Pending",
      room: "Room 302",
    },
    {
      id: "A-1005",
      patientName: "William Thompson",
      patientId: "P-1005",
      doctorName: "Dr. Emily White",
      department: "Oncology",
      date: "2023-05-19",
      time: "09:30 AM",
      type: "Consultation",
      status: "Confirmed",
      room: "Room 401",
    },
    {
      id: "A-1006",
      patientName: "Olivia Wilson",
      patientId: "P-1006",
      doctorName: "Dr. Robert Johnson",
      department: "Orthopedics",
      date: "2023-05-19",
      time: "11:00 AM",
      type: "Follow-up",
      status: "Confirmed",
      room: "Room 105",
    },
    {
      id: "A-1007",
      patientName: "James Anderson",
      patientId: "P-1007",
      doctorName: "Dr. Jennifer Martinez",
      department: "Pediatrics",
      date: "2023-05-19",
      time: "03:45 PM",
      type: "Routine Checkup",
      status: "Confirmed",
      room: "Room 202",
    },
  ]

  // Helper functions for calendar
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDateString = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  // Get appointments for a specific date
  const getAppointmentsForDate = (day) => {
    if (!day) return []

    const dateString = formatDateString(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return appointments.filter((appointment) => appointment.date === dateString)
  }

  // Navigation functions
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format month and year
  const formatMonthYear = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  // Calendar days
  const calendarDays = generateCalendarDays()

  // Get selected date appointments
  const selectedDateString = formatDateString(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
  )
  const selectedDateAppointments = appointments.filter((appointment) => appointment.date === selectedDateString)

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Appointment Calendar</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Book New Appointment</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">List View</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{formatMonthYear(currentMonth)}</h2>
            <div className="flex space-x-2">
              <button onClick={prevMonth} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextMonth} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {calendarDays.map((day, index) => {
              const dateAppointments = getAppointmentsForDate(day)
              const isToday =
                day &&
                new Date().getDate() === day &&
                new Date().getMonth() === currentMonth.getMonth() &&
                new Date().getFullYear() === currentMonth.getFullYear()

              const isSelected =
                day &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentMonth.getMonth() &&
                selectedDate.getFullYear() === currentMonth.getFullYear()

              return (
                <div
                  key={index}
                  className={`min-h-24 border rounded-md p-1 ${
                    !day ? "bg-gray-50" : isSelected ? "bg-blue-50 border-blue-300" : ""
                  } ${isToday ? "border-blue-500" : ""}`}
                  onClick={() => {
                    if (day) {
                      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
                    }
                  }}
                >
                  {day && (
                    <>
                      <div
                        className={`text-right mb-1 ${
                          isToday
                            ? "bg-blue-500 text-white rounded-full w-6 h-6 ml-auto flex items-center justify-center"
                            : ""
                        }`}
                      >
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dateAppointments.slice(0, 3).map((appointment, i) => (
                          <div
                            key={i}
                            className={`text-xs p-1 rounded truncate ${
                              appointment.status === "Confirmed"
                                ? "bg-blue-100 text-blue-800"
                                : appointment.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {appointment.time} - {appointment.patientName}
                          </div>
                        ))}
                        {dateAppointments.length > 3 && (
                          <div className="text-xs text-gray-500 text-center">+{dateAppointments.length - 3} more</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Appointments for selected date */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">
            Appointments for{" "}
            {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h2>

          {selectedDateAppointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No appointments scheduled for this date</div>
          ) : (
            <div className="space-y-4">
              {selectedDateAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-md p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{appointment.patientName}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        appointment.status === "Confirmed"
                          ? "bg-blue-100 text-blue-800"
                          : appointment.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : appointment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">ID: {appointment.patientId}</div>
                  <div className="flex items-center text-sm mb-1">
                    <Clock size={14} className="mr-1" />
                    {appointment.time} - {appointment.type}
                  </div>
                  <div className="flex items-center text-sm mb-1">
                    <User size={14} className="mr-1" />
                    {appointment.doctorName} ({appointment.department})
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin size={14} className="mr-1" />
                    {appointment.room}
                  </div>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md">View</button>
                    <button className="px-3 py-1 text-xs bg-yellow-500 text-white rounded-md">Edit</button>
                    <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-md">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
