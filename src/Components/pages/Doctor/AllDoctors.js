import { Search, UserPlus, Filter, Edit, Trash, Eye } from "lucide-react"

export default function AllDoctors() {
  // Sample doctor data
  const doctors = [
    {
      id: "D-1001",
      name: "Dr. Sarah Wilson",
      specialization: "Cardiology",
      department: "Cardiology",
      experience: 12,
      phone: "+1 (555) 123-4567",
      email: "sarah.wilson@hospital.com",
      status: "Active",
    },
    {
      id: "D-1002",
      name: "Dr. Michael Brown",
      specialization: "Neurology",
      department: "Neurology",
      experience: 15,
      phone: "+1 (555) 234-5678",
      email: "michael.brown@hospital.com",
      status: "Active",
    },
    {
      id: "D-1003",
      name: "Dr. Emily White",
      specialization: "Oncology",
      department: "Oncology",
      experience: 10,
      phone: "+1 (555) 345-6789",
      email: "emily.white@hospital.com",
      status: "Active",
    },
    {
      id: "D-1004",
      name: "Dr. James Taylor",
      specialization: "Dermatology",
      department: "Dermatology",
      experience: 8,
      phone: "+1 (555) 456-7890",
      email: "james.taylor@hospital.com",
      status: "On Leave",
    },
    {
      id: "D-1005",
      name: "Dr. Lisa Chen",
      specialization: "Neurology",
      department: "Neurology",
      experience: 14,
      phone: "+1 (555) 567-8901",
      email: "lisa.chen@hospital.com",
      status: "Active",
    },
    {
      id: "D-1006",
      name: "Dr. Robert Johnson",
      specialization: "Orthopedics",
      department: "Orthopedics",
      experience: 20,
      phone: "+1 (555) 678-9012",
      email: "robert.johnson@hospital.com",
      status: "Active",
    },
    {
      id: "D-1007",
      name: "Dr. Jennifer Martinez",
      specialization: "Pediatrics",
      department: "Pediatrics",
      experience: 9,
      phone: "+1 (555) 789-0123",
      email: "jennifer.martinez@hospital.com",
      status: "On Leave",
    },
    {
      id: "D-1008",
      name: "Dr. David Lee",
      specialization: "Ophthalmology",
      department: "Ophthalmology",
      experience: 11,
      phone: "+1 (555) 890-1234",
      email: "david.lee@hospital.com",
      status: "Active",
    },
    {
      id: "D-1009",
      name: "Dr. Maria Rodriguez",
      specialization: "Gynecology",
      department: "Gynecology",
      experience: 13,
      phone: "+1 (555) 901-2345",
      email: "maria.rodriguez@hospital.com",
      status: "Active",
    },
    {
      id: "D-1010",
      name: "Dr. Thomas Anderson",
      specialization: "Psychiatry",
      department: "Psychiatry",
      experience: 16,
      phone: "+1 (555) 012-3456",
      email: "thomas.anderson@hospital.com",
      status: "Active",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Doctors</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <UserPlus size={18} className="mr-2" />
          Add New Doctor
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="relative mb-4 md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search doctors..."
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-2">
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
          </div>
        </div>

        {/* Doctors Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Specialization</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Experience</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{doctor.id}</td>
                  <td className="py-3 px-4">{doctor.name}</td>
                  <td className="py-3 px-4">{doctor.specialization}</td>
                  <td className="py-3 px-4">{doctor.department}</td>
                  <td className="py-3 px-4">{doctor.experience} years</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="text-sm">{doctor.phone}</p>
                      <p className="text-xs text-gray-500">{doctor.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        doctor.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {doctor.status}
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
          <div className="text-gray-600">Showing 1 to 10 of 28 doctors</div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
            <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">3</button>
            <button className="px-3 py-1 border rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
