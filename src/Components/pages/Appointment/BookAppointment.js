"use client"

import { useState } from "react"
import { Calendar, Clock, User, Search, Save, X } from "lucide-react"

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Sample doctors data
  const doctors = [
    {
      id: "D-1001",
      name: "Dr. Sarah Wilson",
      specialization: "Cardiology",
      department: "Cardiology",
      availableSlots: [
        { time: "09:00 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "11:00 AM", available: true },
        { time: "12:00 PM", available: true },
        { time: "02:00 PM", available: false },
        { time: "03:00 PM", available: true },
        { time: "04:00 PM", available: true },
      ],
    },
    {
      id: "D-1002",
      name: "Dr. Michael Brown",
      specialization: "Neurology",
      department: "Neurology",
      availableSlots: [
        { time: "09:00 AM", available: true },
        { time: "10:00 AM", available: true },
        { time: "11:00 AM", available: false },
        { time: "12:00 PM", available: false },
        { time: "02:00 PM", available: true },
        { time: "03:00 PM", available: true },
        { time: "04:00 PM", available: false },
      ],
    },
    {
      id: "D-1003",
      name: "Dr. Emily White",
      specialization: "Oncology",
      department: "Oncology",
      availableSlots: [
        { time: "09:00 AM", available: false },
        { time: "10:00 AM", available: true },
        { time: "11:00 AM", available: true },
        { time: "12:00 PM", available: true },
        { time: "02:00 PM", available: false },
        { time: "03:00 PM", available: false },
        { time: "04:00 PM", available: true },
      ],
    },
  ]

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Book Appointment</h1>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Save size={18} className="mr-2" />
            Save Appointment
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <X size={18} className="mr-2" />
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Patient Information</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Patient ID *</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter patient ID"
                  />
                  <button type="button" className="bg-blue-500 text-white p-2 rounded-r-md">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Patient Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter patient name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter age"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Appointment Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Appointment Details</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Appointment Type *</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Appointment Type</option>
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="emergency">Emergency</option>
                  <option value="routine-checkup">Routine Checkup</option>
                  <option value="procedure">Procedure</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Department *</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="ophthalmology">Ophthalmology</option>
                  <option value="gynecology">Gynecology</option>
                  <option value="oncology">Oncology</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date *</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                  <Calendar size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Reason for Visit *</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reason for visit"
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Notes</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter additional notes"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Doctor Selection and Time Slots */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Select Doctor & Time Slot</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Search Doctor</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search by name or specialization"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto border rounded-md">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedDoctor?.id === doctor.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="flex items-center">
                    <User size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium">{doctor.name}</p>
                      <p className="text-sm text-gray-500">{doctor.specialization}</p>
                    </div>
                  </div>
                </div>
              ))}
              {filteredDoctors.length === 0 && <div className="p-3 text-center text-gray-500">No doctors found</div>}
            </div>

            {selectedDoctor && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Available Time Slots for {selectedDate || "Selected Date"}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {selectedDoctor.availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`p-2 rounded-md text-center text-sm ${
                        !slot.available
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : selectedTimeSlot === slot.time
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      disabled={!slot.available}
                      onClick={() => setSelectedTimeSlot(slot.time)}
                    >
                      <div className="flex items-center justify-center">
                        <Clock size={14} className="mr-1" />
                        {slot.time}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t">
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
