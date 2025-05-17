import React from "react"
import { Users, Calendar, Stethoscope, Bed, Activity, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  
  const stats = [
    { title: "Total Patients", value: 1248, icon: <Users size={24} />, color: "bg-blue-500" },
    { title: "Today's Appointments", value: 42, icon: <Calendar size={24} />, color: "bg-green-500" },
    { title: "Available Beds", value: 64, icon: <Bed size={24} />, color: "bg-purple-500" },
    { title: "Doctors On Duty", value: 28, icon: <Stethoscope size={24} />, color: "bg-yellow-500" },
    { title: "Emergency Cases", value: 8, icon: <AlertTriangle size={24} />, color: "bg-red-500" },
    { title: "Surgeries Today", value: 12, icon: <Activity size={24} />, color: "bg-indigo-500" },
  ]

  const specialties = [
    { name: "Orthopedics", doctors: 12, patients: 145 },
    { name: "Cardiology", doctors: 8, patients: 203 },
    { name: "Neurology", doctors: 6, patients: 87 },
    { name: "Pediatrics", doctors: 10, patients: 176 },
    { name: "Oncology", doctors: 5, patients: 92 },
    { name: "Dermatology", doctors: 4, patients: 68 },
    { name: "Ophthalmology", doctors: 6, patients: 112 },
    { name: "Gynecology", doctors: 7, patients: 134 },
  ]

  const recentPatients = [
    {
      id: "P-1001",
      name: "John Smith",
      age: 45,
      doctor: "Dr. Sarah Wilson",
      department: "Cardiology",
      status: "Admitted",
    },
    {
      id: "P-1002",
      name: "Emma Johnson",
      age: 32,
      doctor: "Dr. Michael Brown",
      department: "Orthopedics",
      status: "Discharged",
    },
    {
      id: "P-1003",
      name: "Robert Davis",
      age: 58,
      doctor: "Dr. Lisa Chen",
      department: "Neurology",
      status: "Admitted",
    },
    {
      id: "P-1004",
      name: "Sophia Martinez",
      age: 27,
      doctor: "Dr. James Taylor",
      department: "Dermatology",
      status: "Outpatient",
    },
    {
      id: "P-1005",
      name: "William Thompson",
      age: 63,
      doctor: "Dr. Emily White",
      department: "Oncology",
      status: "Admitted",
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-m text-main-color">Hospital Dashboard</h1>
        <p className="">Welcome to TapMed Hospital Management System</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-main-color rounded-full p-3 mr-4">
              {React.cloneElement(stat.icon, { className: "text-white" })}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Specialties */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Available Specialties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Specialty</th>
                  <th className="py-2 px-4 text-left">Doctors</th>
                  <th className="py-2 px-4 text-left">Patients</th>
                </tr>
              </thead>
              <tbody>
                {specialties.map((specialty, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{specialty.name}</td>
                    <td className="py-2 px-4">{specialty.doctors}</td>
                    <td className="py-2 px-4">{specialty.patients}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Patients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Department</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{patient.id}</td>
                    <td className="py-2 px-4">{patient.name}</td>
                    <td className="py-2 px-4">{patient.department}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          patient.status === "Admitted"
                            ? "bg-blue-100 text-blue-800"
                            : patient.status === "Discharged"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
