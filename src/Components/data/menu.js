import {
  Home,
  Users,
  UserCheck,
  Calendar,
  Bed,
  Stethoscope,
  FlaskRoundIcon as Flask,
  Pill,
  DollarSign,
  FileText,
  AlertTriangle,
  Activity,
  Settings,
  UserX,
} from "lucide-react"

export const menu = [
  {
    title: "Dashboard",
    icon: <Home size={18} />,
    path: "/dashboard",
  },
  {
    title: "Patient Management",
    icon: <Users size={18} />,
    children: ["Profile", "Add Patient", "All Patients", "Patient Details"],
  },
  {
    title: "Doctor Management",
    icon: <UserCheck size={18} />,
    children: ["Add Doctor", "All Doctors", "Doctor Profile", "Edit Profile"],
  },
  {
    title: "Appointments",
    icon: <Calendar size={18} />,
    children: ["Book Appointment", "Appointment List", "Calendar View", "Edit Appointment"],
  },
  {
    title: "Bed Management",
    icon: <Bed size={18} />,
    children: ["Bed List", "Assign Bed", "Transfer Bed", "Bed Availability"],
  },
  {
    title: "OPD",
    icon: <Stethoscope size={18} />,
    children: ["OPD Queue", "OPD Consultation", "OPD Billing"],
  },
  {
    title: "Laboratory",
    icon: <Flask size={18} />,
    children: ["Add Lab Test", "Lab Reports", "Patient Lab History"],
  },
  {
    title: "Pharmacy",
    icon: <Pill size={18} />,
    children: ["Drug Inventory", "Prescription Issuance", "Stock Alerts", "Billing Integration"],
  },
  {
    title: "Billing",
    icon: <DollarSign size={18} />,
    children: ["Generate Bill", "Billing History", "Invoice View"],
  },
  {
    title: "Reports",
    icon: <FileText size={18} />,
    children: ["Medical Reports", "Discharge Summary", "Prescription View"],
  },
  {
    title: "Emergency",
    icon: <AlertTriangle size={18} />,
    children: ["Emergency Intake", "Triage Management", "Emergency Queue"],
  },
  {
    title: "Nursing",
    icon: <Activity size={18} />,
    children: ["Vitals Tracking", "Medication Schedule", "Shift Handover"],
  },
  {
    title: "Visitors",
    icon: <UserX size={18} />,
    children: ["Visitor Entry", "Visitor Logs", "Visiting Rules"],
  },
  {
    title: "Settings",
    icon: <Settings size={18} />,
    children: ["Departments", "Roles & Permissions", "Charges Setup"],
  },
]
