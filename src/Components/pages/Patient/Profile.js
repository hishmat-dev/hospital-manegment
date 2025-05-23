import { useState } from "react";
import {
  User,
  Save,
  X,
  Plus,
  Trash2,
  Search,
} from "lucide-react";
import { patients } from "../../data/patients";

export default function Profile() {
  const [patientss] = useState(patients);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [patient, setPatient] = useState(patients[0]);
  const [formData, setFormData] = useState(patients[0]);
  const [editMode, setEditMode] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = patientss.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPatients(results);
  };

  const handleSelectPatient = (p) => {
    setPatient(p);
    setFormData(p);
    setSearchTerm("");
    setFilteredPatients([]);
    setEditMode(false);
  };

  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const handleSimpleArrayChange = (section, index, value) => {
    const updated = [...formData[section]];
    updated[index] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const addArrayItem = (section, emptyItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], emptyItem],
    }));
  };

  const removeArrayItem = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData({ ...formData, [section]: updated });
  };

  const handleSave = () => {
    setPatient(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(patient);
    setEditMode(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Profile</h1>

      {/* Search */}
      <div className="mb-4 relative max-w-md">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full outline-none text-sm"
          />
        </div>
        {searchTerm && filteredPatients.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-md w-full shadow">
            {filteredPatients.map((p) => (
              <li
                key={p.id}
                onClick={() => handleSelectPatient(p)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {p.name} ({p.id})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-main-color p-6 flex justify-between items-center text-white">
          <div className="flex items-center">
            <User size={40} className="mr-4" />
            <div>
              <h2 className="text-2xl font-bold">{patient.name}</h2>
              <p>Patient ID: {patient.id}</p>
            </div>
          </div>
          <div>
            {editMode ? (
              <>
                <button onClick={handleSave} className="bg-white text-green-600 px-4 py-2 rounded-md font-medium mr-2 flex items-center gap-1">
                  <Save size={16} /> Save
                </button>
                <button onClick={handleCancel} className="bg-white text-red-600 px-4 py-2 rounded-md font-medium flex items-center gap-1">
                  <X size={16} /> Cancel
                </button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)} className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Age", name: "age" },
              { label: "Gender", name: "gender" },
              { label: "Blood Group", name: "bloodGroup" },
              { label: "Phone", name: "phone" },
              { label: "Email", name: "email" },
              { label: "Address", name: "address" },
              { label: "Emergency Contact", name: "emergencyContact" },
              { label: "Registration Date", name: "registrationDate" },
            ].map(({ label, name }) => (
              <div key={name}>
                <p className="text-sm text-gray-500">{label}</p>
                {editMode ? (
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleBasicChange}
                    className="w-full border px-2 py-1 rounded text-sm"
                  />
                ) : (
                  <p>{patient[name]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Medical History */}
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-4">Medical History</h3>
          {formData.medicalHistory.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              {editMode ? (
                <>
                  <input
                    placeholder="Condition"
                    value={item.condition}
                    onChange={(e) => handleArrayChange("medicalHistory", index, "condition", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    type="date"
                    value={item.diagnosedDate}
                    onChange={(e) => handleArrayChange("medicalHistory", index, "diagnosedDate", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    placeholder="Status"
                    value={item.status}
                    onChange={(e) => handleArrayChange("medicalHistory", index, "status", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <button onClick={() => removeArrayItem("medicalHistory", index)} className="text-red-600 mt-1 flex items-center">
                    <Trash2 size={16} />
                  </button>
                </>
              ) : (
                <p className="col-span-3">• {item.condition} ({item.diagnosedDate}) - {item.status}</p>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={() => addArrayItem("medicalHistory", { condition: "", diagnosedDate: "", status: "" })} className="text-blue-600 flex items-center mt-2">
              <Plus size={16} className="mr-1" /> Add History
            </button>
          )}
        </div>

        {/* Allergies */}
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-4">Allergies</h3>
          {formData.allergies.map((allergy, index) => (
            <div key={index} className="flex items-center mb-2">
              {editMode ? (
                <>
                  <input
                    value={allergy}
                    onChange={(e) => handleSimpleArrayChange("allergies", index, e.target.value)}
                    className="border px-2 py-1 rounded w-full"
                  />
                  <button onClick={() => removeArrayItem("allergies", index)} className="text-red-600 ml-2">
                    <Trash2 size={16} />
                  </button>
                </>
              ) : (
                <p>• {allergy}</p>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={() => addArrayItem("allergies", "")} className="text-blue-600 flex items-center mt-2">
              <Plus size={16} className="mr-1" /> Add Allergy
            </button>
          )}
        </div>

        {/* Current Medications */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Current Medications</h3>
          {formData.currentMedications.map((med, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              {editMode ? (
                <>
                  <input
                    placeholder="Medication"
                    value={med.name}
                    onChange={(e) => handleArrayChange("currentMedications", index, "name", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    placeholder="Dosage"
                    value={med.dosage}
                    onChange={(e) => handleArrayChange("currentMedications", index, "dosage", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    placeholder="Frequency"
                    value={med.frequency}
                    onChange={(e) => handleArrayChange("currentMedications", index, "frequency", e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                  <button onClick={() => removeArrayItem("currentMedications", index)} className="text-red-600 mt-1 flex items-center">
                    <Trash2 size={16} />
                  </button>
                </>
              ) : (
                <p className="col-span-3">• {med.name} - {med.dosage} ({med.frequency})</p>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={() => addArrayItem("currentMedications", { name: "", dosage: "", frequency: "" })} className="text-blue-600 flex items-center mt-2">
              <Plus size={16} className="mr-1" /> Add Medication
            </button>
          )}
        </div>

        {/* Recent Visits */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Visits</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Doctor</th>
                <th className="py-2 px-4 text-left">Department</th>
                <th className="py-2 px-4 text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              {patient.recentVisits.map((visit, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 px-4">{visit.date}</td>
                  <td className="py-2 px-4">{visit.doctor}</td>
                  <td className="py-2 px-4">{visit.department}</td>
                  <td className="py-2 px-4">{visit.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
