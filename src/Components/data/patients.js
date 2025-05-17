export const patients = [
  {
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
    currentMedications: [{ name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily' }],
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
  },
  {
    id: 'PK-2025-02',
    name: 'Fatima Noor',
    age: 38,
    gender: 'Female',
    bloodGroup: 'A-',
    phone: '+92 321 2345678',
    email: 'fatima.noor@karachihospital.pk',
    address: 'Street 12, Phase 3, Karachi, Pakistan',
    emergencyContact: 'Ali Noor (Husband) - +92 300 9876543',
    registrationDate: '2023-08-20',
    allergies: ['Penicillin'],
    vitalSigns: [
      {
        date: '2025-05-10',
        bp: '120/80',
        pulse: 72,
        temp: '98.4°F',
        respRate: 16,
        weight: '65 kg',
      },
    ],
    medicalHistory: [
      { condition: 'Asthma', diagnosedDate: '2010-03-15', status: 'Ongoing' },
    ],
    currentMedications: [{ name: 'Albuterol', dosage: '2 puffs', frequency: 'As needed' }],
    labResults: [
      {
        date: '2025-04-15',
        test: 'Lung Function',
        result: 'Normal',
        notes: 'No signs of obstruction',
      },
    ],
    prescriptions: [
      {
        date: '2025-04-15',
        medication: 'Albuterol',
        dosage: '2 puffs',
        instructions: 'Use as needed for wheezing',
        prescribedBy: 'Dr. Sara Iqbal',
      },
    ],
    recentVisits: [
      {
        date: '2025-05-10',
        doctor: 'Dr. Sara Iqbal',
        department: 'Pulmonology',
        reason: 'Routine asthma checkup',
      },
    ],
  },
  {
    id: 'PK-2025-03',
    name: 'Bilal Ahmed',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '+92 333 1239876',
    email: 'bilal.ahmed@faisalabadhospital.pk',
    address: 'Block D, Phase 1, Faisalabad, Pakistan',
    emergencyContact: 'Sana Ahmed (Wife) - +92 300 1231234',
    registrationDate: '2022-12-01',
    allergies: [],
    vitalSigns: [
      {
        date: '2025-05-01',
        bp: '130/85',
        pulse: 70,
        temp: '98.6°F',
        respRate: 17,
        weight: '78 kg',
      },
    ],
    medicalHistory: [
      { condition: 'Diabetes Type 2', diagnosedDate: '2015-07-20', status: 'Ongoing' },
    ],
    currentMedications: [{ name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }],
    labResults: [
      {
        date: '2025-05-01',
        test: 'Blood Sugar',
        result: 'High',
        notes: 'HbA1c 8.0%',
      },
    ],
    prescriptions: [
      {
        date: '2025-05-01',
        medication: 'Metformin',
        dosage: '500mg',
        instructions: 'Twice daily with meals',
        prescribedBy: 'Dr. Amir Raza',
      },
    ],
    recentVisits: [
      {
        date: '2025-05-01',
        doctor: 'Dr. Amir Raza',
        department: 'Endocrinology',
        reason: 'Diabetes management',
      },
    ],
  },
  {
    id: 'PK-2025-04',
    name: 'Hira Yousaf',
    age: 29,
    gender: 'Female',
    bloodGroup: 'AB+',
    phone: '+92 312 4567890',
    email: 'hira.yousaf@rawalhospital.pk',
    address: 'Sector F-8, Islamabad, Pakistan',
    emergencyContact: 'Yousaf Ali (Brother) - +92 331 2223344',
    registrationDate: '2023-01-15',
    allergies: ['Pollen'],
    vitalSigns: [
      {
        date: '2025-05-12',
        bp: '115/75',
        pulse: 68,
        temp: '98.5°F',
        respRate: 15,
        weight: '58 kg',
      },
    ],
    medicalHistory: [
      { condition: 'Migraines', diagnosedDate: '2018-09-10', status: 'Ongoing' },
    ],
    currentMedications: [{ name: 'Sumatriptan', dosage: '50mg', frequency: 'As needed' }],
    labResults: [
      {
        date: '2025-04-25',
        test: 'MRI Brain',
        result: 'Normal',
        notes: 'No abnormalities detected',
      },
    ],
    prescriptions: [
      {
        date: '2025-04-25',
        medication: 'Sumatriptan',
        dosage: '50mg',
        instructions: 'Take at onset of headache',
        prescribedBy: 'Dr. Farhan Aziz',
      },
    ],
    recentVisits: [
      {
        date: '2025-05-12',
        doctor: 'Dr. Farhan Aziz',
        department: 'Neurology',
        reason: 'Migraine management',
      },
    ],
  },
];
