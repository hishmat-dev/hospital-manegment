import { User, Phone, Mail, Calendar, MapPin, Award, Clock, Edit, Printer, Download } from "lucide-react"

export default function DoctorProfile() {
  // Sample doctor data
  const doctor = {
    id: "D-1001",
    name: "Dr. Sarah Wilson",
    specialization: "Cardiology",
    department: "Cardiology",
    experience: 12,
    gender: "Female",
    age: 42,
    bloodGroup: "A+",
    phone: "+1 (555) 123-4567",
    email: "sarah.wilson@hospital.com",
    address: "456 Medical Center Blvd, Anytown, USA",
    emergencyContact: "John Wilson (Husband) - +1 (555) 987-6543",
    joiningDate: "2011-05-20",
    medicalLicense: "ML-98765432",
    medicalSchool: "Harvard Medical School",
    graduationYear: "2005",
    schedule: [
      { day: "Monday", startTime: "09:00 AM", endTime: "05:00 PM" },
      { day: "Tuesday", startTime: "09:00 AM", endTime: "05:00 PM" },
      { day: "Wednesday", startTime: "09:00 AM", endTime: "01:00 PM" },
      { day: "Thursday", startTime: "09:00 AM", endTime: "05:00 PM" },
      { day: "Friday", startTime: "09:00 AM", endTime: "05:00 PM" },
    ],
    certifications: [
      { name: "Board Certified in Cardiology", year: "2008" },
      { name: "Advanced Cardiac Life Support (ACLS)", year: "2020" },
      { name: "Fellow of the American College of Cardiology", year: "2015" },
    ],
    publications: [
      {
        title: "Advances in Cardiac Imaging Techniques",
        journal: "Journal of Cardiology",
        year: "2019",
      },
      {
        title: "Long-term Outcomes of Stent Placement in Coronary Artery Disease",
        journal: "New England Journal of Medicine",
        year: "2017",
      },
      {
        title: "Risk Factors for Heart Failure in Young Adults",
        journal: "American Heart Journal",
        year: "2015",
      },
    ],
    currentPatients: 42,
    totalPatients: 1248,
    appointmentsToday: 8,
    performanceRating: 4.8,
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Doctor Profile</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
            <Edit size={18} className="mr-2" />
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <Printer size={18} className="mr-2" />
            Print
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Download size={18} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Doctor Information Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 p-6 flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <User size={40} className="text-blue-500" />
            </div>
            <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
            <p className="text-blue-100">{doctor.specialization}</p>
            <p className="text-blue-100">Doctor ID: {doctor.id}</p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Award size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Department</p>
                  <p>{doctor.department}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Experience</p>
                  <p>{doctor.experience} years</p>
                </div>
              </div>
              <div className="flex items-center">
                <User size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Gender</p>
                  <p>{doctor.gender}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Age</p>
                  <p>{doctor.age} years</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p>{doctor.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p>{doctor.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Address</p>
                  <p>{doctor.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Emergency Contact</p>
                  <p>{doctor.emergencyContact}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Joining Date</p>
                  <p>{doctor.joiningDate}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-2">Performance Rating</h3>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= Math.floor(doctor.performanceRating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{doctor.performanceRating}/5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-700">Current Patients</h3>
              <p className="text-3xl font-bold text-blue-500 mt-2">{doctor.currentPatients}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Patients</h3>
              <p className="text-3xl font-bold text-green-500 mt-2">{doctor.totalPatients}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-700">Today's Appointments</h3>
              <p className="text-3xl font-bold text-purple-500 mt-2">{doctor.appointmentsToday}</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Weekly Schedule</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Day</th>
                    <th className="py-2 px-4 text-left">Start Time</th>
                    <th className="py-2 px-4 text-left">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {doctor.schedule.map((schedule, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{schedule.day}</td>
                      <td className="py-2 px-4">{schedule.startTime}</td>
                      <td className="py-2 px-4">{schedule.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Medical License</p>
                <p className="font-medium">{doctor.medicalLicense}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Medical School</p>
                <p className="font-medium">{doctor.medicalSchool}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Graduation Year</p>
                <p className="font-medium">{doctor.graduationYear}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Specialization</p>
                <p className="font-medium">{doctor.specialization}</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Certifications</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Certification</th>
                    <th className="py-2 px-4 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {doctor.certifications.map((cert, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{cert.name}</td>
                      <td className="py-2 px-4">{cert.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Publications</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Title</th>
                    <th className="py-2 px-4 text-left">Journal</th>
                    <th className="py-2 px-4 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {doctor.publications.map((pub, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{pub.title}</td>
                      <td className="py-2 px-4">{pub.journal}</td>
                      <td className="py-2 px-4">{pub.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
