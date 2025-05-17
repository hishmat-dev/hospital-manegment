import { Save, X } from "lucide-react"

export default function EditProfile() {
  // Sample doctor data for pre-filling the form
  const doctor = {
    id: "D-1001",
    firstName: "Sarah",
    lastName: "Wilson",
    specialization: "Cardiology",
    department: "Cardiology",
    experience: 12,
    gender: "Female",
    dateOfBirth: "1981-08-15",
    bloodGroup: "A+",
    maritalStatus: "Married",
    phone: "+1 (555) 123-4567",
    email: "sarah.wilson@hospital.com",
    address: "456 Medical Center Blvd",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    emergencyContactName: "John Wilson",
    emergencyContactRelationship: "Husband",
    emergencyContactPhone: "+1 (555) 987-6543",
    medicalLicense: "ML-98765432",
    medicalSchool: "Harvard Medical School",
    graduationYear: "2005",
    schedule: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      startTime: "09:00",
      endTime: "17:00",
    },
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Doctor Profile</h1>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <X size={18} className="mr-2" />
            Cancel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          {/* Personal Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                  defaultValue={doctor.firstName}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                  defaultValue={doctor.lastName}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date of Birth *</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.dateOfBirth}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender *</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Blood Group</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.bloodGroup}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Marital Status</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.maritalStatus}
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Specialization *</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.specialization}
                >
                  <option value="">Select Specialization</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Urology">Urology</option>
                  <option value="Psychiatry">Psychiatry</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Department *</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={doctor.department}
                >
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Radiology">Radiology</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Experience (Years) *</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter years of experience"
                  min="0"
                  defaultValue={doctor.experience}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Medical License Number *</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter license number"
                  defaultValue={doctor.medicalLicense}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Medical School</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter medical school"
                  defaultValue={doctor.medicalSchool}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Graduation Year</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter graduation year"
                  min="1950"
                  max="2023"
                  defaultValue={doctor.graduationYear}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                  defaultValue={doctor.phone}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                  defaultValue={doctor.email}
                />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street address"
                  defaultValue={doctor.address}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                  defaultValue={doctor.city}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">State/Province</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter state/province"
                  defaultValue={doctor.state}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter postal code"
                  defaultValue={doctor.postalCode}
                />
              </div>
            </div>
          </div>

          {/* Schedule Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Schedule Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Available Days</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { day: "Monday", key: "monday" },
                    { day: "Tuesday", key: "tuesday" },
                    { day: "Wednesday", key: "wednesday" },
                    { day: "Thursday", key: "thursday" },
                    { day: "Friday", key: "friday" },
                    { day: "Saturday", key: "saturday" },
                    { day: "Sunday", key: "sunday" },
                  ].map(({ day, key }) => (
                    <label key={key} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500"
                        defaultChecked={doctor.schedule[key]}
                      />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Working Hours</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Start Time</label>
                    <input
                      type="time"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={doctor.schedule.startTime}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">End Time</label>
                    <input
                      type="time"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={doctor.schedule.endTime}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Emergency Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Contact Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter contact name"
                  defaultValue={doctor.emergencyContactName}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Relationship</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter relationship"
                  defaultValue={doctor.emergencyContactRelationship}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                  defaultValue={doctor.emergencyContactPhone}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Cancel
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
