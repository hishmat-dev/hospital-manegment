export const createConfig = {
  initialFormData: {
    patientId: "",
    patientContact: "",
    chiefComplaint: "",
    doctorId: "",
    department: "",
    type: "",
    priority: "Normal",
    date: "",
    time: "",
    duration: "30",
    location: "",
    notes: "",
  },

  timeSlots: [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ],

  appointmentTypes: ["Consultation", "Follow-up", "Emergency", "Routine Checkup", "Surgery Consultation"],

  priorities: ["Normal", "Urgent", "Emergency"],

  durations: [
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" },
  ],
}
