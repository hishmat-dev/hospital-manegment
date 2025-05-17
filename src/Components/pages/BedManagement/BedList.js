import { Search, Filter, Edit, Trash, Eye, Plus } from "lucide-react"

export default function BedList() {
  // Sample bed data
  const beds = [
    {
      id: "B-1001",
      number: "101",
      type: "General",
      ward: "General Ward",
      floor: "1st Floor",
      status: "Occupied",
      patient: "John Smith",
      patientId: "P-1001",
      admissionDate: "2023-05-10",
      doctor: "Dr. Sarah Wilson",
    },
    {
      id: "B-1002",
      number: "102",
      type: "General",
      ward: "General Ward",
      floor: "1st Floor",
      status: "Available",
      patient: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
    },
    {
      id: "B-1003",
      number: "103",
      type: "General",
      ward: "General Ward",
      floor: "1st Floor",
      status: "Occupied",
      patient: "Emma Johnson",
      patientId: "P-1002",
      admissionDate: "2023-05-12",
      doctor: "Dr. Michael Brown",
    },
    {
      id: "B-1004",
      number: "201",
      type: "Semi-Private",
      ward: "Semi-Private Ward",
      floor: "2nd Floor",
      status: "Available",
      patient: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
    },
    {
      id: "B-1005",
      number: "202",
      type: "Semi-Private",
      ward: "Semi-Private Ward",
      floor: "2nd Floor",
      status: "Occupied",
      patient: "Robert Davis",
      patientId: "P-1003",
      admissionDate: "2023-05-15",
      doctor: "Dr. Lisa Chen",
    },
    {
      id: "B-1006",
      number: "203",
      type: "Semi-Private",
      ward: "Semi-Private Ward",
      floor: "2nd Floor",
      status: "Maintenance",
      patient: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
    },
    {
      id: "B-1007",
      number: "301",
      type: "Private",
      ward: "Private Ward",
      floor: "3rd Floor",
      status: "Available",
      patient: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
    },
    {
      id: "B-1008",
      number: "302",
      type: "Private",
      ward: "Private Ward",
      floor: "3rd Floor",
      status: "Occupied",
      patient: "William Thompson",
      patientId: "P-1005",
      admissionDate: "2023-05-14",
      doctor: "Dr. Emily White",
    },
    {
      id: "B-1009",
      number: "401",
      type: "ICU",
      ward: "Intensive Care Unit",
      floor: "4th Floor",
      status: "Occupied",
      patient: "Sophia Martinez",
      patientId: "P-1004",
      admissionDate: "2023-05-16",
      doctor: "Dr. James Taylor",
    },
    {
      id: "B-1010",
      number: "402",
      type: "ICU",
      ward: "Intensive Care Unit",
      floor: "4th Floor",
      status: "Available",
      patient: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
    },
  ]

  // Calculate bed statistics
  const totalBeds = beds.length
  const occupiedBeds = beds.filter((bed) => bed.status === "Occupied").length
  const availableBeds = beds.filter((bed) => bed.status === "Available").length
  const maintenanceBeds = beds.filter((bed) => bed.status === "Maintenance").length

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Bed Management</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
            <Plus size={18} className="mr-2" />
            Add New Bed
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Beds</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">{totalBeds}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Occupied Beds</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">{occupiedBeds}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Available Beds</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">{availableBeds}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Under Maintenance</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">{maintenanceBeds}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="relative mb-4 md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search beds..."
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
              <option value="all">All Wards</option>
              <option value="general">General Ward</option>
              <option value="semi-private">Semi-Private Ward</option>
              <option value="private">Private Ward</option>
              <option value="icu">Intensive Care Unit</option>
            </select>
            <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </div>

        {/* Beds Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Bed ID</th>
                <th className="py-3 px-4 text-left">Bed Number</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Ward</th>
                <th className="py-3 px-4 text-left">Floor</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Patient</th>
                <th className="py-3 px-4 text-left">Admission Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {beds.map((bed) => (
                <tr key={bed.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{bed.id}</td>
                  <td className="py-3 px-4">{bed.number}</td>
                  <td className="py-3 px-4">{bed.type}</td>
                  <td className="py-3 px-4">{bed.ward}</td>
                  <td className="py-3 px-4">{bed.floor}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        bed.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : bed.status === "Occupied"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {bed.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {bed.patient ? (
                      <div>
                        <p>{bed.patient}</p>
                        <p className="text-xs text-gray-500">{bed.patientId}</p>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4">{bed.admissionDate || <span className="text-gray-400">-</span>}</td>
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
          <div className="text-gray-600">Showing 1 to 10 of 24 beds</div>
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
