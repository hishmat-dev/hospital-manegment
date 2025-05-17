import React, { useState } from "react";
import { Save, X } from "lucide-react";

export default function AddPatient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    emergencyContactName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    allergies: "",
    medications: "",
    medicalHistory: "",
    insuranceProvider: "",
    policyNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        maritalStatus: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        emergencyContactName: "",
        emergencyRelationship: "",
        emergencyPhone: "",
        allergies: "",
        medications: "",
        medicalHistory: "",
        insuranceProvider: "",
        policyNumber: "",
      });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Add New Patient</h1>
        <div className="flex space-x-2">
          <button
            type="submit"
            form="patient-form"
            className="bg-main-color text-white px-4 py-2 rounded-md flex items-center"
          >
            <Save size={18} className="mr-2" />
            Save Patient
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center"
          >
            <X size={18} className="mr-2" />
            Cancel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form id="patient-form" onSubmit={handleSubmit}>
          {/* === PERSONAL INFO === */}
          <Section title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} />
              <InputField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} />
              <InputField label="Date of Birth *" name="dob" type="date" value={formData.dob} onChange={handleChange} />
              <SelectField label="Gender *" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
              <SelectField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} />
              <SelectField label="Marital Status" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} options={["Single", "Married", "Divorced", "Widowed"]} />
            </div>
          </Section>

          {/* === CONTACT INFO === */}
          <Section title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} />
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
              <div className="md:col-span-2 lg:col-span-3">
                <InputField label="Address *" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <InputField label="City *" name="city" value={formData.city} onChange={handleChange} />
              <InputField label="State/Province *" name="state" value={formData.state} onChange={handleChange} />
              <InputField label="Postal Code *" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </div>
          </Section>

          {/* === EMERGENCY CONTACT === */}
          <Section title="Emergency Contact">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField label="Contact Name *" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} />
              <InputField label="Relationship *" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} />
              <InputField label="Phone Number *" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} />
            </div>
          </Section>

          {/* === MEDICAL INFO === */}
          <Section title="Medical Information">
            <div className="grid grid-cols-1 gap-4">
              <TextAreaField label="Allergies" name="allergies" value={formData.allergies} onChange={handleChange} />
              <TextAreaField label="Current Medications" name="medications" value={formData.medications} onChange={handleChange} />
              <TextAreaField label="Medical History" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
            </div>
          </Section>

          {/* === INSURANCE INFO === */}
          <Section title="Insurance Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Insurance Provider" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} />
              <InputField label="Policy Number" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
            </div>
          </Section>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Cancel
            </button>
            <button type="submit" className="bg-main-color text-white px-4 py-2 rounded-md">
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b">{title}</h2>
      {children}
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${label.replace("*", "").toLowerCase()}`}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select {label.replace(" *", "")}</option>
        {options.map((opt) => (
          <option key={opt} value={opt.toLowerCase()}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
