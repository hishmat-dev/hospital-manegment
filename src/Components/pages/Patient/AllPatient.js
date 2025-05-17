import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, UserPlus, Filter, Edit, Trash, Eye } from "lucide-react";

const initialPatients = [
  { id: "P-1001", name: "Ali Raza", age: 45, gender: "Male", phone: "+92 300 1234567", lastVisit: "2023-05-18", status: "Active" },
  { id: "P-1002", name: "Ayesha Khan", age: 32, gender: "Female", phone: "+92 301 2345678", lastVisit: "2023-04-22", status: "Active" },
  { id: "P-1003", name: "Umar Farooq", age: 58, gender: "Male", phone: "+92 302 3456789", lastVisit: "2023-05-10", status: "Active" },
  { id: "P-1004", name: "Sana Malik", age: 27, gender: "Female", phone: "+92 303 4567890", lastVisit: "2023-03-15", status: "Inactive" },
  { id: "P-1005", name: "Tariq Jameel", age: 63, gender: "Male", phone: "+92 304 5678901", lastVisit: "2023-05-05", status: "Active" },
  { id: "P-1006", name: "Fatima Zahra", age: 41, gender: "Female", phone: "+92 305 6789012", lastVisit: "2023-02-28", status: "Active" },
  { id: "P-1007", name: "Bilal Ahmed", age: 52, gender: "Male", phone: "+92 306 7890123", lastVisit: "2023-04-12", status: "Inactive" },
  { id: "P-1008", name: "Hira Sheikh", age: 36, gender: "Female", phone: "+92 307 8901234", lastVisit: "2023-05-01", status: "Active" },
  { id: "P-1009", name: "Zain Ali", age: 48, gender: "Male", phone: "+92 308 9012345", lastVisit: "2023-03-20", status: "Active" },
  { id: "P-1010", name: "Mehwish Bano", age: 29, gender: "Female", phone: "+92 309 0123456", lastVisit: "2023-04-18", status: "Active" },
];

export default function AllPatient() {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [editingPatientId, setEditingPatientId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this patient?");
    if (confirmed) {
      setPatients((prev) => prev.filter((p) => p.id !== id));
      if (editingPatientId === id) {
        setEditingPatientId(null);
        setSelectedStatus("");
      }
    }
  };

  const handleView = (id) => {
    const patient = patients.find((p) => p.id === id);
    if (patient) {
      alert(
        `Patient Details:\n
      ID: ${patient.id}
      Name: ${patient.name}
      Age: ${patient.age}
      Gender: ${patient.gender}
      Phone: ${patient.phone}
      Last Visit: ${patient.lastVisit}
      Status: ${patient.status}`
      );
    } else {
      alert("Patient not found");
    }
  };


  const handleEdit = (id) => {
    const patient = patients.find((p) => p.id === id);
    if (patient) {
      setEditingPatientId(id);
      setSelectedStatus(patient.status);
    }
  };

  const saveStatusUpdate = () => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === editingPatientId ? { ...patient, status: selectedStatus } : patient
      )
    );
    setEditingPatientId(null);
    setSelectedStatus("");
  };

  const cancelEdit = () => {
    setEditingPatientId(null);
    setSelectedStatus("");
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || patient.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Patients</h1>
        <Link
          to="/patient-management/add-patient"
          className="bg-main-color text-white px-4 py-2 rounded-md flex items-center"
        >
          <UserPlus size={18} className="mr-2" />
          Add New Patient
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="relative mb-4 md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
            <select
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Patients</option>
              <option value="Active">Active Patients</option>
              <option value="Inactive">Inactive Patients</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Last Visit</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{patient.id}</td>
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                  <td className="py-3 px-4">{patient.gender}</td>
                  <td className="py-3 px-4">{patient.phone}</td>
                  <td className="py-3 px-4">{patient.lastVisit}</td>
                  <td className="py-3 px-4">
                    {editingPatientId === patient.id ? (
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="p-1 border rounded"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${patient.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                          }`}
                      >
                        {patient.status}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      {editingPatientId === patient.id ? (
                        <>
                          <button
                            onClick={saveStatusUpdate}
                            className="text-green-600 hover:text-green-800"
                            title="Save"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-red-600 hover:text-red-800"
                            title="Cancel"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleView(patient.id)}
                            className="text-blue-500 hover:text-blue-700"
                            title="View"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleEdit(patient.id)}
                            className="text-yellow-500 hover:text-yellow-700"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(patient.id)}
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                          >
                            <Trash size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-600">Showing {filteredPatients.length} patients</div>
        </div>
      </div>
    </div>
  );
}