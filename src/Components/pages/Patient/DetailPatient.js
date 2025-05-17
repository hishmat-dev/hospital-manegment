import React, { useRef } from 'react';
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Activity,
  Edit,
  Printer,
  Download,
} from 'lucide-react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const patient = {
  id: 'PK-2025-01',
  name: 'Ahmed Khan',
  age: 52,
  gender: 'Male',
  bloodGroup: 'B+',
  phone: '+92 300 1234567',
  email: 'ahmed.khan@lahorehospital.pk',
  address: 'House 45, G-9, Islamabad, Pakistan',
  emergencyContact: 'Farah Khan (Wife) - +92 301 7654321',
  registrationDate: '2024-11-05',
  allergies: ['Dust', 'Shellfish'],
  vitalSigns: [
    {
      date: '2025-05-15',
      bp: '135/85',
      pulse: 76,
      temp: '98.7°F',
      respRate: 18,
      weight: '82 kg',
    },
  ],
  medicalHistory: [
    { condition: 'Hypertension', diagnosedDate: '2019-06-12', status: 'Ongoing' },
    { condition: 'Gallbladder Removal', diagnosedDate: '2022-02-20', status: 'Resolved' },
  ],
  currentMedications: [
    { name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily' },
  ],
  labResults: [
    {
      date: '2025-05-15',
      test: 'CBC',
      result: 'Normal',
      notes: 'Hemoglobin and WBC levels within normal range',
    },
  ],
  prescriptions: [
    {
      date: '2025-05-15',
      medication: 'Amlodipine',
      dosage: '5mg',
      instructions: 'Once daily after breakfast',
      prescribedBy: 'Dr. Hina Malik',
    },
  ],
  recentVisits: [
    {
      date: '2025-05-15',
      doctor: 'Dr. Hina Malik',
      department: 'Internal Medicine',
      reason: 'Hypertension follow-up',
    },
  ],
};

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center mb-2">
      <Icon size={20} className="text-gray-500 mr-3" />
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default function DetailPatient() {
  const printRef = useRef();

  const handlePrint = async () => {
    const element = printRef.current;
    if (!element) return;

    // Use html2canvas to capture
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${patient.name.replace(/\s/g, '_')}_Report.pdf`);
  };

  const tableSections = [
    {
      title: 'Vital Signs',
      headers: ['Date', 'BP', 'Pulse', 'Temp', 'Resp Rate', 'Weight'],
      rows: patient.vitalSigns.map(v => [
        v.date, v.bp, `${v.pulse} bpm`, v.temp, `${v.respRate} /min`, v.weight,
      ]),
    },
    {
      title: 'Medical History',
      headers: ['Condition', 'Diagnosed Date', 'Status'],
      rows: patient.medicalHistory.map(h => [
        h.condition,
        h.diagnosedDate,
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            h.status === 'Ongoing'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {h.status}
        </span>,
      ]),
    },
    {
      title: 'Current Medications',
      headers: ['Medication', 'Dosage', 'Frequency'],
      rows: patient.currentMedications.map(m => [m.name, m.dosage, m.frequency]),
    },
    {
      title: 'Lab Results',
      headers: ['Date', 'Test', 'Result', 'Notes'],
      rows: patient.labResults.map(l => [
        l.date,
        l.test,
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            l.result === 'Normal'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {l.result}
        </span>,
        l.notes,
      ]),
    },
    {
      title: 'Prescriptions',
      headers: ['Date', 'Medication', 'Dosage', 'Instructions', 'Prescribed By'],
      rows: patient.prescriptions.map(p => [
        p.date,
        p.medication,
        p.dosage,
        p.instructions,
        p.prescribedBy,
      ]),
    },
    {
      title: 'Recent Visits',
      headers: ['Date', 'Doctor', 'Department', 'Reason'],
      rows: patient.recentVisits.map(r => [r.date, r.doctor, r.department, r.reason]),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Patient Details</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => alert('Edit feature coming soon!')}
            className="bg-main-color text-white px-4 py-2 rounded-md flex items-center"
          >
            <Edit size={18} className="mr-2" /> Edit Patient
          </button>
          <button
            onClick={handlePrint}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center"
          >
            <Printer size={18} className="mr-2" /> Print
          </button>
          <button
            onClick={() => alert('Export feature coming soon!')}
            className="bg-main-color text-white px-4 py-2 rounded-md flex items-center"
          >
            <Download size={18} className="mr-2" /> Export
          </button>
        </div>
      </div>

      {/* Printable area */}
      <div ref={printRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-main-color p-6 flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-3">
                <User size={40} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-white">{patient.name}</h2>
              <p className="text-blue-100">Patient ID: {patient.id}</p>
            </div>

            <div className="p-6 space-y-4">
              <InfoItem icon={User} label="Gender" value={patient.gender} />
              <InfoItem icon={Calendar} label="Age" value={`${patient.age} years`} />
              <InfoItem icon={Activity} label="Blood Group" value={patient.bloodGroup} />
              <InfoItem icon={Phone} label="Phone" value={patient.phone} />
              <InfoItem icon={Mail} label="Email" value={patient.email} />
              <InfoItem icon={MapPin} label="Address" value={patient.address} />
              <InfoItem icon={Phone} label="Emergency Contact" value={patient.emergencyContact} />
              <InfoItem icon={Calendar} label="Registration Date" value={patient.registrationDate} />

              <div>
                <h3 className="font-bold mb-2">Allergies</h3>
                <div className="flex flex-wrap gap-2">
                  {patient.allergies.map((a, i) => (
                    <span
                      key={i}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {tableSections.map(section => (
              <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        {section.headers.map((h, i) => (
                          <th key={i} className="py-2 px-4 text-left">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, i) => (
                        <tr key={i} className="border-b">
                          {row.map((cell, j) => (
                            <td key={j} className="py-2 px-4">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
