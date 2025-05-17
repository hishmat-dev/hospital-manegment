import React, { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  bloodGroup: "",
  maritalStatus: "",
  specialization: "",
  department: "",
  experience: "",
  license: "",
  school: "",
  graduationYear: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  availableDays: [],
  startTime: "",
  endTime: "",
  emergencyContact: {
    name: "",
    relationship: "",
    phone: ""
  }
};

export default function AddDoctor() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmergencyChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      emergencyContact: { ...prev.emergencyContact, [name]: value }
    }));
  };

  const handleDaysChange = (day) => {
    setForm((prev) => {
      const days = prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day];
      return { ...prev, availableDays: days };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor added:", form);
    alert("Doctor added successfully!");
    setForm(initialForm);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Doctor</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-md shadow">
        {/* Personal Info */}
        <Section title="Personal Information">
          <ThreeColGrid>
            <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
            <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
            <Input type="date" label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} />
            <Select label="Gender" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
            <Select label="Blood Group" name="bloodGroup" value={form.bloodGroup} onChange={handleChange} options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} />
            <Select label="Marital Status" name="maritalStatus" value={form.maritalStatus} onChange={handleChange} options={["Single", "Married", "Divorced", "Widowed"]} />
          </ThreeColGrid>
        </Section>

        {/* Professional Info */}
        <Section title="Professional Information">
          <ThreeColGrid>
            <Select label="Specialization" name="specialization" value={form.specialization} onChange={handleChange} options={["Cardiology", "Neurology", "Orthopedics", "Pediatrics"]} />
            <Select label="Department" name="department" value={form.department} onChange={handleChange} options={["Cardiology", "Neurology", "Radiology", "Emergency"]} />
            <Input label="Experience (Years)" name="experience" type="number" value={form.experience} onChange={handleChange} />
            <Input label="Medical License No." name="license" value={form.license} onChange={handleChange} />
            <Input label="Medical School" name="school" value={form.school} onChange={handleChange} />
            <Input label="Graduation Year" name="graduationYear" type="number" value={form.graduationYear} onChange={handleChange} />
          </ThreeColGrid>
        </Section>

        {/* Contact Info */}
        <Section title="Contact Information">
          <ThreeColGrid>
            <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
            <Input label="Email" name="email" value={form.email} onChange={handleChange} />
            <Input label="Address" name="address" value={form.address} onChange={handleChange} className="col-span-3" />
            <Input label="City" name="city" value={form.city} onChange={handleChange} />
            <Input label="State" name="state" value={form.state} onChange={handleChange} />
            <Input label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} />
          </ThreeColGrid>
        </Section>

        {/* Schedule Info */}
        <Section title="Schedule">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Available Days</label>
              <div className="flex flex-wrap gap-3">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <label key={day} className="flex items-center gap-2">
                    <input type="checkbox" checked={form.availableDays.includes(day)} onChange={() => handleDaysChange(day)} />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Start Time" name="startTime" type="time" value={form.startTime} onChange={handleChange} />
              <Input label="End Time" name="endTime" type="time" value={form.endTime} onChange={handleChange} />
            </div>
          </div>
        </Section>

        {/* Emergency Contact */}
        <Section title="Emergency Contact">
          <ThreeColGrid>
            <Input label="Contact Name" name="name" value={form.emergencyContact.name} onChange={handleEmergencyChange} />
            <Input label="Relationship" name="relationship" value={form.emergencyContact.relationship} onChange={handleEmergencyChange} />
            <Input label="Phone Number" name="phone" value={form.emergencyContact.phone} onChange={handleEmergencyChange} />
          </ThreeColGrid>
        </Section>

        <div className="flex justify-end">
          <button type="submit" className="bg-main-color text-white px-6 py-2 rounded-md hover:bg-green-600">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function ThreeColGrid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>;
}

function Input({ label, name, value, onChange, type = "text", className = "" }) {
  return (
    <div className={className}>
      <label className="block text-gray-700 mb-1">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="w-full p-2 border rounded-md" />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full p-2 border rounded-md">
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt.toLowerCase()}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
