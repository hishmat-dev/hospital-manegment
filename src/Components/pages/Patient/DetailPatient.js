import React, { useRef, useState, useEffect } from 'react';
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
  Search,
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { patients } from '../../data/patients'; 

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!filteredPatients.includes(selectedPatient)) {
      setSelectedPatient(filteredPatients[0] || null);
    }
  }, [filteredPatients, selectedPatient]);

  const handlePrint = async () => {
    const element = printRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${selectedPatient.name.replace(/\s/g, '_')}_Report.pdf`);
  };

  if (!selectedPatient) return <p>No patient found.</p>;

  const tableSections = [
    {
      title: 'Vital Signs',
      headers: ['Date', 'BP', 'Pulse', 'Temp', 'Resp Rate', 'Weight'],
      rows: selectedPatient.vitalSigns.map(v => [
        v.date, v.bp, `${v.pulse} bpm`, v.temp, `${v.respRate} /min`, v.weight,
      ]),
    },
    {
      title: 'Medical History',
      headers: ['Condition', 'Diagnosed Date', 'Status'],
      rows: selectedPatient.medicalHistory.map(h => [
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
      rows: selectedPatient.currentMedications.map(m => [m.name, m.dosage, m.frequency]),
    },
    {
      title: 'Lab Results',
      headers: ['Date', 'Test', 'Result', 'Notes'],
      rows: selectedPatient.labResults.map(l => [
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
      rows: selectedPatient.prescriptions.map(p => [
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
      rows: selectedPatient.recentVisits.map(r => [r.date, r.doctor, r.department, r.reason]),
    },
  ];

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-6">
        <label htmlFor="search" className="sr-only">
          Search Patients
        </label>
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <input
            id="search"
            type="search"
            placeholder="Search by name or ID"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-color"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} />
          </div>
        </div>

        {/* Suggestion dropdown */}
        {searchTerm.trim() !== '' && filteredPatients.length > 0 && (
          <ul className="border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto bg-white z-10 absolute ">
            {filteredPatients.map(p => (
              <li
                key={p.id}
                onClick={() => {
                  setSelectedPatient(p);
                  setSearchTerm(p.name);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-main-color hover:text-white"
              >
                {p.name} ({p.id})
              </li>
            ))}
          </ul>
        )}
        {searchTerm.trim() !== '' && filteredPatients.length === 0 && (
          <p className="mt-1 text-sm text-red-500">No patients found</p>
        )}
      </div>

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
              <h2 className="text-xl font-bold text-white">{selectedPatient.name}</h2>
              <p className="text-blue-100">Patient ID: {selectedPatient.id}</p>
            </div>

            <div className="p-6 space-y-4">
              <InfoItem icon={User} label="Gender" value={selectedPatient.gender} />
              <InfoItem icon={Calendar} label="Age" value={`${selectedPatient.age} years`} />
              <InfoItem icon={Activity} label="Blood Group" value={selectedPatient.bloodGroup} />
              <InfoItem icon={Phone} label="Phone" value={selectedPatient.phone} />
              <InfoItem icon={Mail} label="Email" value={selectedPatient.email} />
              <InfoItem icon={MapPin} label="Address" value={selectedPatient.address} />
              <InfoItem icon={Phone} label="Emergency Contact" value={selectedPatient.emergencyContact} />
              <InfoItem icon={Calendar} label="Registration Date" value={selectedPatient.registrationDate} />

              <div>
                <h3 className="font-bold mb-2">Allergies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPatient.allergies.map((a, i) => (
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
