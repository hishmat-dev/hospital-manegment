import { Search, Filter, Edit, Trash, Eye, Calendar, Clock, User } from "lucide-react"

export default function AppointmentList() {
  // Sample appointment data
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
    },
    {
      id: "A-1008",
      patientName: "Ava Thomas",
      patientId: "P-1008",
      doctorName: "Dr. David Lee",
      department: "Ophthalmology",
      date: "2023-05-20",
      time: "10:15 AM",
      type: "Consultation",
      status: "Pending",
    },
    {
      id: "A-1009",
      patientName: "Michael Jackson",
      patientId: "P-1009",
      doctorName: "Dr. Maria Rodriguez",
      department: "Gynecology",
      date: "2023-05-20",
      time: "01:30 PM",
      type: "Procedure",
      status: "Confirmed",
    },
    {
      id: "A-1010",
      patientName: "Isabella White",
      patientId: "P-1010",
      doctorName: "Dr. Thomas Anderson",
      department: "Psychiatry",
      date: "2023-05-20",
      time: "04:00 PM",
      type: "Consultation",
      status: "Cancelled",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Appointment List</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
            <Calendar size={18} className="mr-2" />
            Calendar View
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Clock size={18} className="mr-2" />
            Book Appointment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="relative mb-4 md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
            <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">All Departments</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
            <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input type="date" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {/* Appointments Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Patient</th>
                <th className="py-3 px-4 text-left">Doctor</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Date & Time</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{appointment.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <User size={18} className="text-gray-500 mr-2" />
                      <div>
                        <p>{appointment.patientName}</p>
                        <p className="text-xs text-gray-500">{appointment.patientId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{appointment.doctorName}</td>
                  <td className="py-3 px-4">{appointment.department}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p>{appointment.date}</p>
                      <p className="text-xs text-gray-500">{appointment.time}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">{appointment.type}</td>
                  <td className="py-3 px-4">
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
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Eye size={18} />
                      </button>
                      <button className="text-yellow-500 hover:text-yellow-700">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-600">Showing 1 to 10 of 35 appointments</div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
            <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">3</button>
            <button className="px-3 py-1 border rounded-md">4</button>
            <button className="px-3 py-1 border rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
