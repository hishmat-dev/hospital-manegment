"use client"

import { useState } from "react"
import { Search, Save, X, User, Bed } from "lucide-react"

export default function AssignBed() {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selectedBed, setSelectedBed] = useState(null)
  const [patientSearchQuery, setPatientSearchQuery] = useState("")
  const [bedSearchQuery, setBedSearchQuery] = useState("")

  // Sample patients data
  const patients = [
    {
      id: "P-1011",
      name: "David Wilson",
      age: 52,
      gender: "Male",
      phone: "+1 (555) 123-7890",
      email: "david.wilson@example.com",
      diagnosis: "Pneumonia",
      doctor: "Dr. Sarah Wilson",
      department: "Pulmonology",
    },
    {
      id: "P-1012",
      name: "Jennifer Brown",
      age: 38,
      gender: "Female",
      phone: "+1 (555) 234-8901",
      email: "jennifer.brown@example.com",
      diagnosis: "Appendicitis",
      doctor: "Dr. Michael Brown",
      department: "General Surgery",
    },
    {
      id: "P-1013",
      name: "Thomas Clark",
      age: 65,
      gender: "Male",
      phone: "+1 (555) 345-9012",
      email: "thomas.clark@example.com",
      diagnosis: "Myocardial Infarction",
      doctor: "Dr. Sarah Wilson",
      department: "Cardiology",
    },
  ]

  // Sample available beds data
  const availableBeds = [
    {
      id: "B-1002",
      number: "102",
      type: "General",
      ward: "General Ward",
      floor: "1st Floor",
      status: "Available",
    },
    {
      id: "B-1004",
      number: "201",
      type: "Semi-Private",
      ward: "Semi-Private Ward",
      floor: "2nd Floor",
      status: "Available",
    },
    {
      id: "B-1007",
      number: "301",
      type: "Private",
      ward: "Private Ward",
      floor: "3rd Floor",
      status: "Available",
    },
    {
      id: "B-1010",
      number: "402",
      type: "ICU",
      ward: "Intensive Care Unit",
      floor: "4th Floor",
      status: "Available",
    },
  ]

  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(patientSearchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(patientSearchQuery.toLowerCase()),
  )

  // Filter beds based on search query
  const filteredBeds = availableBeds.filter(
    (bed) =>
      bed.number.toLowerCase().includes(bedSearchQuery.toLowerCase()) ||
      bed.type.toLowerCase().includes(bedSearchQuery.toLowerCase()) ||
      bed.ward.toLowerCase().includes(bedSearchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Assign Bed</h1>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Save size={18} className="mr-2" />
            Save Assignment
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <X size={18} className="mr-2" />
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Selection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Select Patient</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Search Patient</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search by name or ID"
                  value={patientSearchQuery}
                  onChange={(e) => setPatientSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto border rounded-md">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedPatient?.id === patient.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="flex items-center">
                    <User size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-gray-500">
                        {patient.id} | {patient.gender}, {patient.age} years
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {filteredPatients.length === 0 && <div className="p-3 text-center text-gray-500">No patients found</div>}
            </div>

            {selectedPatient && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50">
                <h3 className="font-semibold mb-2">Selected Patient Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Name:</p>
                    <p>{selectedPatient.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ID:</p>
                    <p>{selectedPatient.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Age:</p>
                    <p>{selectedPatient.age} years</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Gender:</p>
                    <p>{selectedPatient.gender}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Diagnosis:</p>
                    <p>{selectedPatient.diagnosis}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Doctor:</p>
                    <p>{selectedPatient.doctor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Department:</p>
                    <p>{selectedPatient.department}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bed Selection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Select Bed</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Search Available Beds</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search by bed number, type, or ward"
                  value={bedSearchQuery}
                  onChange={(e) => setBedSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Filter by Type</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200">All</button>
                <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">General</button>
                <button className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200">Semi-Private</button>
                <button className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200">Private</button>
                <button className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200">ICU</button>
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto border rounded-md">
              {filteredBeds.map((bed) => (
                <div
                  key={bed.id}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedBed?.id === bed.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedBed(bed)}
                >
                  <div className="flex items-center">
                    <Bed size={20} className="text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium">Bed #{bed.number}</p>
                      <p className="text-sm text-gray-500">
                        {bed.type} | {bed.ward} | {bed.floor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {filteredBeds.length === 0 && <div className="p-3 text-center text-gray-500">No beds found</div>}
            </div>

            {selectedBed && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50">
                <h3 className="font-semibold mb-2">Selected Bed Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Bed ID:</p>
                    <p>{selectedBed.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Bed Number:</p>
                    <p>{selectedBed.number}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Type:</p>
                    <p>{selectedBed.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Ward:</p>
                    <p>{selectedBed.ward}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Floor:</p>
                    <p>{selectedBed.floor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status:</p>
                    <p className="text-green-600">{selectedBed.status}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Assignment Details */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">Assignment Details</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Admission Date *</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Admission Time *</label>
                <input
                  type="time"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={new Date().toTimeString().slice(0, 5)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Expected Stay (Days)</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter expected stay in days"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Assigned Doctor *</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Doctor</option>
                  <option value="dr-sarah-wilson">Dr. Sarah Wilson</option>
                  <option value="dr-michael-brown">Dr. Michael Brown</option>
                  <option value="dr-lisa-chen">Dr. Lisa Chen</option>
                  <option value="dr-james-taylor">Dr. James Taylor</option>
                  <option value="dr-emily-white">Dr. Emily White</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Reason for Admission *</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reason for admission"
                  rows={3}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter any additional notes"
                  rows={3}
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-green-500 text-white px-4 py-2 rounded-md ${
                  !selectedPatient || !selectedBed ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!selectedPatient || !selectedBed}
              >
                Assign Bed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
