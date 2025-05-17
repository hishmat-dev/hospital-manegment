import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Patient/Profile"
import AddPatient from "../pages/Patient/AddPatient"
import AllPatient from "../pages/Patient/AllPatient"
import DetailPatient from "../pages/Patient/DetailPatient"

// Doctor Management
import AddDoctor from "../pages/Doctor/AddDoctor"
import AllDoctors from "../pages/Doctor/AllDoctors"
import DoctorProfile from "../pages/Doctor/DoctorProfile"
import EditProfile from "../pages/Doctor/EditProfile"

// Appointment Management
import BookAppointment from "../pages/Appointment/BookAppointment"
import AppointmentList from "../pages/Appointment/AppointmentList"
import CalendarView from "../pages/Appointment/CalendarView"
import EditAppointment from "../pages/Appointment/EditAppointment"

// Bed Management
import BedList from "../pages/BedManagement/BedList"
import AssignBed from "../pages/BedManagement/AssignBed"

// Placeholder components for other routes
const TransferBed = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Transfer Bed</h1>
    <p>This is the Transfer Bed page.</p>
  </div>
)
const BedAvailability = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Bed Availability</h1>
    <p>This is the Bed Availability page.</p>
  </div>
)

const OPDQueue = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">OPD Queue</h1>
    <p>This is the OPD Queue page.</p>
  </div>
)
const OPDConsultation = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">OPD Consultation</h1>
    <p>This is the OPD Consultation page.</p>
  </div>
)
const OPDBilling = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">OPD Billing</h1>
    <p>This is the OPD Billing page.</p>
  </div>
)

const AddLabTest = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Add Lab Test</h1>
    <p>This is the Add Lab Test page.</p>
  </div>
)
const LabReports = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Lab Reports</h1>
    <p>This is the Lab Reports page.</p>
  </div>
)
const PatientLabHistory = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Patient Lab History</h1>
    <p>This is the Patient Lab History page.</p>
  </div>
)

const DrugInventory = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Drug Inventory</h1>
    <p>This is the Drug Inventory page.</p>
  </div>
)
const PrescriptionIssuance = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Prescription Issuance</h1>
    <p>This is the Prescription Issuance page.</p>
  </div>
)
const StockAlerts = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Stock Alerts</h1>
    <p>This is the Stock Alerts page.</p>
  </div>
)
const BillingIntegration = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Billing Integration</h1>
    <p>This is the Billing Integration page.</p>
  </div>
)

const GenerateBill = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Generate Bill</h1>
    <p>This is the Generate Bill page.</p>
  </div>
)
const BillingHistory = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Billing History</h1>
    <p>This is the Billing History page.</p>
  </div>
)
const InvoiceView = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Invoice View</h1>
    <p>This is the Invoice View page.</p>
  </div>
)

const MedicalReports = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Medical Reports</h1>
    <p>This is the Medical Reports page.</p>
  </div>
)
const DischargeSummary = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Discharge Summary</h1>
    <p>This is the Discharge Summary page.</p>
  </div>
)
const PrescriptionView = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Prescription View</h1>
    <p>This is the Prescription View page.</p>
  </div>
)

const EmergencyIntake = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Emergency Intake</h1>
    <p>This is the Emergency Intake page.</p>
  </div>
)
const TriageManagement = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Triage Management</h1>
    <p>This is the Triage Management page.</p>
  </div>
)
const EmergencyQueue = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Emergency Queue</h1>
    <p>This is the Emergency Queue page.</p>
  </div>
)

const VitalsTracking = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Vitals Tracking</h1>
    <p>This is the Vitals Tracking page.</p>
  </div>
)
const MedicationSchedule = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Medication Schedule</h1>
    <p>This is the Medication Schedule page.</p>
  </div>
)
const ShiftHandover = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Shift Handover</h1>
    <p>This is the Shift Handover page.</p>
  </div>
)

const VisitorEntry = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Visitor Entry</h1>
    <p>This is the Visitor Entry page.</p>
  </div>
)
const VisitorLogs = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Visitor Logs</h1>
    <p>This is the Visitor Logs page.</p>
  </div>
)
const VisitingRules = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Visiting Rules</h1>
    <p>This is the Visiting Rules page.</p>
  </div>
)

const Departments = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Departments</h1>
    <p>This is the Departments page.</p>
  </div>
)
const RolesPermissions = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Roles & Permissions</h1>
    <p>This is the Roles & Permissions page.</p>
  </div>
)
const ChargesSetup = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Charges Setup</h1>
    <p>This is the Charges Setup page.</p>
  </div>
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/patient-management/profile" element={<Profile />} />
      <Route path="/patient-management/add-patient" element={<AddPatient />} />
      <Route path="/patient-management/all-patients" element={<AllPatient />} />
      <Route path="/patient-management/patient-details" element={<DetailPatient />} />

      <Route path="/doctor-management/add-doctor" element={<AddDoctor />} />
      <Route path="/doctor-management/all-doctors" element={<AllDoctors />} />
      <Route path="/doctor-management/doctor-profile" element={<DoctorProfile />} />
      <Route path="/doctor-management/edit-profile" element={<EditProfile />} />

      <Route path="/appointments/book-appointment" element={<BookAppointment />} />
      <Route path="/appointments/appointment-list" element={<AppointmentList />} />
      <Route path="/appointments/calendar-view" element={<CalendarView />} />
      <Route path="/appointments/edit-appointment" element={<EditAppointment />} />

      <Route path="/bed-management/bed-list" element={<BedList />} />
      <Route path="/bed-management/assign-bed" element={<AssignBed />} />
      <Route path="/bed-management/transfer-bed" element={<TransferBed />} />
      <Route path="/bed-management/bed-availability" element={<BedAvailability />} />

      <Route path="/opd/opd-queue" element={<OPDQueue />} />
      <Route path="/opd/opd-consultation" element={<OPDConsultation />} />
      <Route path="/opd/opd-billing" element={<OPDBilling />} />

      <Route path="/laboratory/add-lab-test" element={<AddLabTest />} />
      <Route path="/laboratory/lab-reports" element={<LabReports />} />
      <Route path="/laboratory/patient-lab-history" element={<PatientLabHistory />} />

      <Route path="/pharmacy/drug-inventory" element={<DrugInventory />} />
      <Route path="/pharmacy/prescription-issuance" element={<PrescriptionIssuance />} />
      <Route path="/pharmacy/stock-alerts" element={<StockAlerts />} />
      <Route path="/pharmacy/billing-integration" element={<BillingIntegration />} />

      <Route path="/billing/generate-bill" element={<GenerateBill />} />
      <Route path="/billing/billing-history" element={<BillingHistory />} />
      <Route path="/billing/invoice-view" element={<InvoiceView />} />

      <Route path="/reports/medical-reports" element={<MedicalReports />} />
      <Route path="/reports/discharge-summary" element={<DischargeSummary />} />
      <Route path="/reports/prescription-view" element={<PrescriptionView />} />

      <Route path="/emergency/emergency-intake" element={<EmergencyIntake />} />
      <Route path="/emergency/triage-management" element={<TriageManagement />} />
      <Route path="/emergency/emergency-queue" element={<EmergencyQueue />} />

      <Route path="/nursing/vitals-tracking" element={<VitalsTracking />} />
      <Route path="/nursing/medication-schedule" element={<MedicationSchedule />} />
      <Route path="/nursing/shift-handover" element={<ShiftHandover />} />

      <Route path="/visitors/visitor-entry" element={<VisitorEntry />} />
      <Route path="/visitors/visitor-logs" element={<VisitorLogs />} />
      <Route path="/visitors/visiting-rules" element={<VisitingRules />} />

      <Route path="/settings/departments" element={<Departments />} />
      <Route path="/settings/roles-and-permissions" element={<RolesPermissions />} />
      <Route path="/settings/charges-setup" element={<ChargesSetup />} />
    </Routes>
  )
}
