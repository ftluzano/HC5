import {
  ClinicPublicSettings,
  StaffMember,
  ServiceDetail,
  MedicationStock,
  ZoneCoverage,
  OutreachProgram,
  NewsUpdate
} from '../types';

export const DEFAULT_CLINIC_PUBLIC_SETTINGS: ClinicPublicSettings = {
  clinicHours: 'Monday-Friday: 7:00 AM-4:00 PM',
  clinicHoursFil: 'Lunes-Biyernes: 7:00 AM-4:00 PM',
  doctorHours: 'AM 7:00 AM-11:30 AM: Child immunization, pre natal check-up, family planning, and NCD maintenance medicine.',
  doctorHoursFil: 'AM 7:00 AM-11:30 AM: Child immunization, pre natal check-up, family planning, at NCD maintenance medicine.',
  xrayHours: 'PM 12:00 PM-4:00 PM: TB enrollment and TB medicines, medical check-up, and adolescent/mental health counseling.',
  xrayHoursFil: 'PM 12:00 PM-4:00 PM: TB enrollment at TB meds, medical check-up, at adolescent/mental health counseling.',
  dentalHours: 'Cervical cancer screening (VIA, Pap-smear): Monday-Friday, AM and PM.',
  dentalHoursFil: 'Cervical cancer screening (VIA, Pap-smear): Lunes-Biyernes, AM at PM.',
  clinicAddress: 'P. Rosales St., Brgy. Sta. Ana, Pateros, Metro Manila',
  clinicAddressFil: 'P. Rosales St., Brgy. Sta. Ana, Pateros, Metro Manila',
  contactPhone: 'No hotline available',
  contactEmail: '',
  emergencyPhone: '',
  emergencyPhoneFil: '',
  holidayAdvisory: 'Verify clinic operations before visiting on holidays.',
  holidayAdvisoryFil: 'Kumpirmahin muna ang operasyon ng klinika bago bumisita kapag holiday.',
};

export const HERO_IMAGE = '/src/assets/images/hero_health_center_1792606776580.jpg';
export const RADIOLOGY_IMAGE = '/src/assets/images/clinic_radiology_xray_1792606793637.jpg';
export const DENTAL_IMAGE = '/src/assets/images/clinic_dental_care_1792606794053.jpg';
export const NUTRITION_IMAGE = '/src/assets/images/nutrition_opt_children_1792606794303.jpg';

export const OPERATING_HOURS_DATA = {
  generalFacility: {
    daysEn: 'Monday-Friday',
    daysFil: 'Lunes-Biyernes',
    hours: '7:00 AM - 4:00 PM',
  },
  doctorClinic: {
    monday: 'Services available during regular clinic hours',
    tuesdayToFriday: '7:00 AM - 4:00 PM',
  },
  xrayRadiology: {
    daysEn: 'Not available at Mayor Juan R. Sanchez',
    daysFil: 'Walang available sa Mayor Juan R. Sanchez',
    floor: 'Ask health center staff for referral information',
    hours: 'Referral required',
  },
  dentalClinic: {
    daysEn: 'Cervical cancer screening Monday-Friday, AM and PM',
    daysFil: 'Cervical cancer screening Lunes-Biyernes, AM at PM',
    hours: '7:00 AM - 11:30 AM and 12:00 PM - 4:00 PM',
  }
};

export const LEGACY_STAFF_DIRECTORY: StaffMember[] = [];

export const STAFF_DIRECTORY: StaffMember[] = [
  { id: 'qd-1', name: 'Carmencita P. Ison, MD, MPA', title: 'Carmencita P. Ison, MD, MPA', role: 'Municipal Health Officer / Head', roleFil: 'Municipal Health Officer / Pinuno', department: 'doctors', departmentName: 'Mayor Juan R. Sanchez Health Center', qualifications: 'Doctor of Medicine, MPA', schedule: 'Assigned municipal health leadership; duty availability varies', scheduleFil: 'Tungkulin sa municipal health leadership; nag-iiba ang availability', location: 'Mayor Juan R. Sanchez Health Center', isHead: true, avatarInitials: 'CI' },
  { id: 'qd-2', name: 'Chevily C. Reyes, DMD', title: 'Chevily C. Reyes, DMD', role: 'Dentist III', roleFil: 'Dentist III', department: 'dental', departmentName: 'Dental Clinic', qualifications: 'Doctor of Dental Medicine (DMD)', schedule: 'Monday and Tuesday at Mayor Juan R. Sanchez', scheduleFil: 'Lunes at Martes sa Mayor Juan R. Sanchez', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'CR' },
  { id: 'qd-3', name: 'Ms. Meizl Joy E. Sincuya', title: 'Meizl Joy E. Sincuya', role: 'Nutrition/Dietitian II', roleFil: 'Nutrition/Dietitian II', department: 'nutrition_bns', departmentName: 'Nutrition Services', qualifications: 'Nutrition/Dietitian II', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'MS' },
  { id: 'qd-4', name: 'Ms. Anna Beatriz C. Castro', title: 'Anna Beatriz C. Castro', role: 'Nutrition Officer', roleFil: 'Nutrition Officer', department: 'nutrition_bns', departmentName: 'Nutrition Services', qualifications: 'Nutrition Officer', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'AC' },
  { id: 'qd-5', name: 'Ms. Anna Lynn O. Candichoy', title: 'Anna Lynn O. Candichoy', role: 'Midwife III', roleFil: 'Midwife III', department: 'nursing_midwifery', departmentName: 'Maternal and Child Health', qualifications: 'Midwife III', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'AC' },
  { id: 'qd-6', name: 'Ms. Emerina A. Assuncion', title: 'Emerina A. Assuncion', role: 'Midwife III', roleFil: 'Midwife III', department: 'nursing_midwifery', departmentName: 'Maternal and Child Health', qualifications: 'Midwife III', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'EA' },
  { id: 'qd-7', name: 'Ms. Etheyl L. Mollo', title: 'Etheyl L. Mollo', role: 'Midwife II', roleFil: 'Midwife II', department: 'nursing_midwifery', departmentName: 'Maternal and Child Health', qualifications: 'Midwife II', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'EM' },
  { id: 'qd-8', name: 'Ms. Zenaida E. Tungol', title: 'Zenaida E. Tungol', role: 'Barangay Nutrition Scholar (BNS)', roleFil: 'Barangay Nutrition Scholar (BNS)', department: 'nutrition_bns', departmentName: 'Barangay Nutrition Services', qualifications: 'Barangay Nutrition Scholar', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'ZT' },
  { id: 'qd-9', name: 'Ms. Leah R. Mirabel', title: 'Leah R. Mirabel', role: 'Barangay Nutrition Scholar (BNS)', roleFil: 'Barangay Nutrition Scholar (BNS)', department: 'nutrition_bns', departmentName: 'Barangay Nutrition Services', qualifications: 'Barangay Nutrition Scholar', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'LM' },
  { id: 'qd-10', name: 'Ms. Luzviminda F. Mesina', title: 'Luzviminda F. Mesina', role: 'Dental Aide', roleFil: 'Dental Aide', department: 'dental', departmentName: 'Dental Clinic', qualifications: 'Dental Aide', schedule: 'Monday and Tuesday at Mayor Juan R. Sanchez', scheduleFil: 'Lunes at Martes sa Mayor Juan R. Sanchez', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'LM' },
  { id: 'qd-11', name: 'Ms. Eliza A. Gapayao', title: 'Eliza A. Gapayao', role: 'Utility Worker', roleFil: 'Utility Worker', department: 'admin_support', departmentName: 'Support Services', qualifications: 'Utility Worker', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'EG' },
  { id: 'qd-12', name: 'Ms. Marian P. Salonga', title: 'Marian P. Salonga', role: 'Barangay Nutrition Scholar (BNS)', roleFil: 'Barangay Nutrition Scholar (BNS)', department: 'nutrition_bns', departmentName: 'Barangay Nutrition Services', qualifications: 'Barangay Nutrition Scholar', schedule: 'Contact the health center for current availability', scheduleFil: 'Makipag-ugnayan sa health center para sa kasalukuyang availability', location: 'Mayor Juan R. Sanchez Health Center', avatarInitials: 'MS' }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'maternity',
    title: 'PRE NATAL CHECK-UP',
    titleFil: 'PRE NATAL CHECK-UP',
    shortDesc: 'Prenatal check-ups and maternal health monitoring.',
    shortDescFil: 'Prenatal check-up at pangangalaga sa kalusugan ng ina.',
    fullDesc: 'Prenatal check-ups are available Monday-Friday from 7:00 AM to 11:30 AM.',
    fullDescFil: 'Available ang prenatal check-up Lunes-Biyernes mula 7:00 AM hanggang 11:30 AM.',
    category: 'maternity',
    schedule: 'Monday-Friday: 7:00 AM-11:30 AM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-11:30 AM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Mayor Juan R. Sanchez nurse', 'Mayor Juan R. Sanchez midwives'],
    requirements: ['Valid ID / Proof of Residency', 'Mother & Child Health Record Book'],
    requirementsFil: ['Valid ID o Katunayan ng Paninirahan', 'Booklet ng Buntis'],
    badge: 'AM service',
    badgeFil: 'Serbisyo sa umaga'
  },
  {
    id: 'nutrition',
    title: 'CHILD IMMUNIZATION',
    titleFil: 'CHILD IMMUNIZATION',
    shortDesc: 'Routine immunization services for children.',
    shortDescFil: 'Regular na pagbabakuna para sa mga bata.',
    fullDesc: 'Child immunization is available Monday-Friday from 7:00 AM to 11:30 AM.',
    fullDescFil: 'Available ang child immunization Lunes-Biyernes mula 7:00 AM hanggang 11:30 AM.',
    category: 'nutrition',
    schedule: 'Monday-Friday: 7:00 AM-11:30 AM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-11:30 AM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Health center immunization staff'],
    requirements: ['Child Immunization / Baby Book', 'Birth Certificate or proof of age'],
    requirementsFil: ['Baby Book ng bata', 'Katunayan ng edad'],
    image: NUTRITION_IMAGE,
    badge: 'AM service',
    badgeFil: 'Serbisyo sa umaga'
  },
  {
    id: 'dental',
    title: 'FAMILY PLANNING SERVICES',
    titleFil: 'FAMILY PLANNING SERVICES',
    shortDesc: 'Family planning counseling and services.',
    shortDescFil: 'Pagpapayo at serbisyo para sa family planning.',
    fullDesc: 'Family planning services are available Monday-Friday from 7:00 AM to 11:30 AM.',
    fullDescFil: 'Available ang family planning services Lunes-Biyernes mula 7:00 AM hanggang 11:30 AM.',
    category: 'dental',
    schedule: 'Monday-Friday: 7:00 AM-11:30 AM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-11:30 AM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Family planning services staff'],
    requirements: ['Valid ID / Health Card'],
    requirementsFil: ['Valid ID o Health Card'],
    image: DENTAL_IMAGE,
    badge: 'AM service',
    badgeFil: 'Serbisyo sa umaga'
  },
  {
    id: 'animal_bite',
    title: 'CERVICAL CANCER SCREENING (VIA, PAP-SMEAR)',
    titleFil: 'CERVICAL CANCER SCREENING (VIA, PAP-SMEAR)',
    shortDesc: 'Cervical cancer screening through VIA and Pap smear.',
    shortDescFil: 'Screening para sa cervical cancer gamit ang VIA at Pap smear.',
    fullDesc: 'Cervical cancer screening (VIA, Pap smear) is available Monday-Friday during both morning and afternoon clinic hours.',
    fullDescFil: 'Available ang cervical cancer screening (VIA, Pap smear) Lunes-Biyernes sa umaga at hapon.',
    category: 'animal_bite',
    schedule: 'Monday-Friday: 7:00 AM-11:30 AM and 12:00 PM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-11:30 AM at 12:00 PM-4:00 PM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Maternal and reproductive health staff'],
    requirements: ['Patient ID and bite history details'],
    requirementsFil: ['Valid ID at impormasyon ukol sa kagat'],
    badge: 'AM and PM service',
    badgeFil: 'Serbisyo sa umaga at hapon'
  },
  {
    id: 'checkup',
    title: 'MEDICAL CHECK-UP',
    titleFil: 'MEDICAL CHECK-UP',
    shortDesc: 'Medical check-ups during the afternoon clinic schedule.',
    shortDescFil: 'Medical check-up sa oras ng klinika sa hapon.',
    fullDesc: 'Medical check-ups are available Monday-Friday from 12:00 PM to 4:00 PM.',
    fullDescFil: 'Available ang medical check-up Lunes-Biyernes mula 12:00 PM hanggang 4:00 PM.',
    category: 'checkup',
    schedule: 'Monday-Friday: 12:00 PM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 12:00 PM-4:00 PM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Nurse', 'Midwife', 'Scheduled duty personnel'],
    requirements: ['Valid ID / Barangay Proof', 'Current medications if any'],
    requirementsFil: ['Valid ID o Patunay ng Tirahan', 'Kasalukuyang iniinom na gamot kung mayroon'],
    badge: 'PM service',
    badgeFil: 'Serbisyo sa hapon'
  },
  {
    id: 'antigen-testing',
    title: 'ADOLESCENT/MENTAL HEALTH COUNSELING',
    titleFil: 'ADOLESCENT/MENTAL HEALTH COUNSELING',
    shortDesc: 'Counseling services for adolescents and mental health concerns.',
    shortDescFil: 'Counseling para sa adolescent at mental health concerns.',
    fullDesc: 'Adolescent and mental health counseling is available Monday-Friday from 12:00 PM to 4:00 PM.',
    fullDescFil: 'Available ang adolescent at mental health counseling Lunes-Biyernes mula 12:00 PM hanggang 4:00 PM.',
    category: 'antigen_testing',
    schedule: 'Monday-Friday: 12:00 PM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 12:00 PM-4:00 PM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Adolescent and mental health counseling staff'],
    requirements: ['Valid ID', 'Health center screening instructions'],
    requirementsFil: ['Valid ID', 'Mga tagubilin sa screening ng health center'],
    badge: 'PM service',
    badgeFil: 'Serbisyo sa hapon'
  },
  {
    id: 'xray',
    title: 'TB ENROLLMENT, DISPENSING OF TB MEDS',
    titleFil: 'TB ENROLLMENT, DISPENSING OF TB MEDS',
    shortDesc: 'TB enrollment and dispensing of TB medicines.',
    shortDescFil: 'TB enrollment at pagbibigay ng gamot para sa TB.',
    fullDesc: 'TB enrollment and dispensing of TB medicines are available Monday-Friday from 12:00 PM to 4:00 PM.',
    fullDescFil: 'Available ang TB enrollment at pagbibigay ng gamot para sa TB Lunes-Biyernes mula 12:00 PM hanggang 4:00 PM.',
    category: 'xray',
    schedule: 'Monday-Friday: 12:00 PM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 12:00 PM-4:00 PM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['TB program staff'],
    requirements: ['Ask staff for referral information'],
    requirementsFil: ['Magtanong sa kawani para sa referral'],
    image: RADIOLOGY_IMAGE,
    badge: 'PM service',
    badgeFil: 'Serbisyo sa hapon'
  },
  {
    id: 'pharmacy',
    title: 'DISPENSING OF NCD MAINTENANCE MEDICINE',
    titleFil: 'DISPENSING OF NCD MAINTENANCE MEDICINE',
    shortDesc: 'Dispensing of maintenance medicines for non-communicable diseases.',
    shortDescFil: 'Pagbibigay ng maintenance medicine para sa non-communicable diseases.',
    fullDesc: 'NCD maintenance medicine is dispensed Monday-Friday from 7:00 AM to 11:30 AM.',
    fullDescFil: 'Ibinibigay ang NCD maintenance medicine Lunes-Biyernes mula 7:00 AM hanggang 11:30 AM.',
    category: 'pharmacy',
    schedule: 'Monday-Friday: 7:00 AM-11:30 AM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-11:30 AM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Health center dispensing staff'],
    requirements: ['Doctor Prescription', 'Barangay Residency / Health Booklet'],
    requirementsFil: ['Reseta ng doktor', 'Health booklet o Katunayan ng Paninirahan'],
    badge: 'AM service',
    badgeFil: 'Serbisyo sa umaga'
  }
];

export const MEDICATIONS_STOCK: MedicationStock[] = [
  {
    id: 'med-1',
    name: 'Amlodipine',
    dosage: '5mg / 10mg Tablets',
    category: 'hypertension',
    categoryLabel: 'High Blood Maintenance',
    categoryLabelFil: 'Gamot sa High Blood',
    purpose: 'High blood pressure maintenance medication.',
    purposeFil: 'Gamot sa altapresyon / high blood.',
    stockStatus: 'In Stock',
    availableUnits: 1400,
    refillSchedule: 'Mon - Fri (7:00 AM - 4:00 PM)',
    refillScheduleFil: 'Lunes - Biyernes (7:00 AM - 4:00 PM)',
    requirements: 'Doctor prescription and patient booklet',
    requirementsFil: 'Reseta ng doktor at health booklet'
  },
  {
    id: 'med-2',
    name: 'Losartan',
    dosage: '50mg Tablets',
    category: 'hypertension',
    categoryLabel: 'High Blood Maintenance',
    categoryLabelFil: 'Gamot sa High Blood',
    purpose: 'High blood pressure maintenance medication.',
    purposeFil: 'Gamot sa altapresyon / high blood.',
    stockStatus: 'In Stock',
    availableUnits: 1150,
    refillSchedule: 'Mon - Fri (7:00 AM - 4:00 PM)',
    refillScheduleFil: 'Lunes - Biyernes (7:00 AM - 4:00 PM)',
    requirements: 'Doctor prescription and patient booklet',
    requirementsFil: 'Reseta ng doktor at health booklet'
  },
  {
    id: 'med-3',
    name: 'Metformin',
    dosage: '500mg Tablets',
    category: 'diabetes',
    categoryLabel: 'Diabetics',
    categoryLabelFil: 'Gamot sa Diabetes',
    purpose: 'Blood sugar control for diabetics.',
    purposeFil: 'Gamot sa diabetes.',
    stockStatus: 'In Stock',
    availableUnits: 1800,
    refillSchedule: 'Mon - Fri (7:00 AM - 4:00 PM)',
    refillScheduleFil: 'Lunes - Biyernes (7:00 AM - 4:00 PM)',
    requirements: 'Doctor prescription and FBS test record',
    requirementsFil: 'Reseta ng doktor at rekord ng blood sugar'
  },
  {
    id: 'med-4',
    name: 'Gliclazide',
    dosage: '80mg Tablets',
    category: 'diabetes',
    categoryLabel: 'Diabetics',
    categoryLabelFil: 'Gamot sa Diabetes',
    purpose: 'Blood glucose regulation for diabetics.',
    purposeFil: 'Gamot sa diabetes.',
    stockStatus: 'In Stock',
    availableUnits: 600,
    refillSchedule: 'Mon - Fri (7:00 AM - 4:00 PM)',
    refillScheduleFil: 'Lunes - Biyernes (7:00 AM - 4:00 PM)',
    requirements: 'Doctor prescription',
    requirementsFil: 'Reseta ng doktor'
  },
  {
    id: 'med-5',
    name: 'TB Program Regimen (TB-DOTS)',
    dosage: 'Blister Packs',
    category: 'tb',
    categoryLabel: 'TB Program',
    categoryLabelFil: 'TB Program',
    purpose: 'Tuberculosis treatment under National TB Program.',
    purposeFil: 'Kumpletong gamutan sa TB sa ilalim ng TB Program.',
    stockStatus: 'In Stock',
    availableUnits: 340,
    refillSchedule: 'Scheduled clinic pick-up under Mayor Juan R. Sanchez Health Center staff',
    refillScheduleFil: 'Iskedyul sa clinic kasama ang kawani ng Mayor Juan R. Sanchez Health Center',
    requirements: 'Confirmed sputum diagnosis and TB-DOTS clinic referral',
    requirementsFil: 'Resulta sa pagsusuri ng plema at referral sa TB-DOTS clinic'
  }
];

export const ZONES_COVERAGE: ZoneCoverage[] = [
  {
    id: 'sta-ana-zone-1',
    name: 'Zone 1',
    poblacion: 'Barangay Sta. Ana',
    assignedBNS: ['Assigned Barangay Nutrition Scholar'],
    assignedMidwife: 'Contact the health center',
    designatedNurse: 'Contact the health center',
    communityOutreachDays: 'Confirm with the health center',
    communityOutreachDaysFil: 'Kumpirmahin sa health center',
    activePatients: 0,
    coverageRate: 'Covered'
  },
  {
    id: 'sta-ana-zone-2',
    name: 'Zone 2',
    poblacion: 'Barangay Sta. Ana',
    assignedBNS: ['Assigned Barangay Nutrition Scholar'],
    assignedMidwife: 'Contact the health center',
    designatedNurse: 'Contact the health center',
    communityOutreachDays: 'Confirm with the health center',
    communityOutreachDaysFil: 'Kumpirmahin sa health center',
    activePatients: 0,
    coverageRate: 'Covered'
  },
  {
    id: 'sta-ana-zone-3',
    name: 'Zone 3',
    poblacion: 'Barangay Sta. Ana',
    assignedBNS: ['Assigned Barangay Nutrition Scholar'],
    assignedMidwife: 'Contact the health center',
    designatedNurse: 'Contact the health center',
    communityOutreachDays: 'Confirm with the health center',
    communityOutreachDaysFil: 'Kumpirmahin sa health center',
    activePatients: 0,
    coverageRate: 'Covered'
  },
  { id: 'sta-ana-zone-4', name: 'Zone 4', poblacion: 'Barangay Sta. Ana', assignedBNS: ['Assigned Barangay Nutrition Scholar'], assignedMidwife: 'Contact the health center', designatedNurse: 'Contact the health center', communityOutreachDays: 'Confirm with the health center', communityOutreachDaysFil: 'Kumpirmahin sa health center', activePatients: 0, coverageRate: 'Covered' },
  { id: 'sta-ana-zone-5', name: 'Zone 5', poblacion: 'Barangay Sta. Ana', assignedBNS: ['Assigned Barangay Nutrition Scholar'], assignedMidwife: 'Contact the health center', designatedNurse: 'Contact the health center', communityOutreachDays: 'Confirm with the health center', communityOutreachDaysFil: 'Kumpirmahin sa health center', activePatients: 0, coverageRate: 'Covered' },
  { id: 'sta-ana-zone-6', name: 'Zone 6', poblacion: 'Barangay Sta. Ana', assignedBNS: ['Assigned Barangay Nutrition Scholar'], assignedMidwife: 'Contact the health center', designatedNurse: 'Contact the health center', communityOutreachDays: 'Confirm with the health center', communityOutreachDaysFil: 'Kumpirmahin sa health center', activePatients: 0, coverageRate: 'Covered' }
];

export const OUTREACH_PROGRAMS: OutreachProgram[] = [
];

export const NEWS_UPDATES: NewsUpdate[] = [
  {
    id: 'news-1',
    title: 'Official Clinic Service Schedule',
    titleFil: 'Opisyal na Iskedyul ng mga Serbisyo ng Klinika',
    summary: 'Monday-Friday: AM services 7:00 AM-11:30 AM; PM services 12:00 PM-4:00 PM.',
    summaryFil: 'Lunes-Biyernes: AM services 7:00 AM-11:30 AM; PM services 12:00 PM-4:00 PM.',
    content: 'AM: child immunization, pre natal check-up, NCD maintenance medicine, family planning services, and cervical cancer screening. PM: TB enrollment and TB medicines, medical check-up, cervical cancer screening, and adolescent/mental health counseling.',
    contentFil: 'AM: child immunization, pre natal check-up, NCD maintenance medicine, family planning services, at cervical cancer screening. PM: TB enrollment at TB meds, medical check-up, cervical cancer screening, at adolescent/mental health counseling.',
    date: 'November 2026',
    category: 'Schedule',
    categoryFil: 'Iskedyul',
    author: 'Mayor Juan R. Sanchez Health Center',
    readTime: '1 min read'
  },
  {
    id: 'news-2',
    title: 'Morning Services: 7:00 AM-11:30 AM',
    titleFil: 'Mga Serbisyo sa Umaga: 7:00 AM-11:30 AM',
    summary: 'Child immunization, pre natal check-up, NCD maintenance medicine, family planning, and cervical cancer screening.',
    summaryFil: 'Child immunization, pre natal check-up, NCD maintenance medicine, family planning, at cervical cancer screening.',
    content: 'Morning services are available Monday-Friday from 7:00 AM to 11:30 AM.',
    contentFil: 'Available ang mga serbisyo sa umaga Lunes-Biyernes mula 7:00 AM hanggang 11:30 AM.',
    date: 'November 2026',
    category: 'Schedule',
    categoryFil: 'Iskedyul',
    author: 'Mayor Juan R. Sanchez Health Center',
    readTime: '1 min read'
  },
  {
    id: 'news-3',
    title: 'Afternoon Services: 12:00 PM-4:00 PM',
    titleFil: 'Mga Serbisyo sa Hapon: 12:00 PM-4:00 PM',
    summary: 'TB enrollment and TB medicines, medical check-up, cervical cancer screening, and adolescent/mental health counseling.',
    summaryFil: 'TB enrollment at TB meds, medical check-up, cervical cancer screening, at adolescent/mental health counseling.',
    content: 'Afternoon services are available Monday-Friday from 12:00 PM to 4:00 PM.',
    contentFil: 'Available ang mga serbisyo sa hapon Lunes-Biyernes mula 12:00 PM hanggang 4:00 PM.',
    date: 'November 2026',
    category: 'Schedule',
    categoryFil: 'Iskedyul',
    author: 'Mayor Juan R. Sanchez Health Center',
    readTime: '1 min read'
  },
  {
    id: 'news-4',
    title: 'Free Maintenance Medicines Available: High Blood, Diabetics, and TB Program',
    titleFil: 'Libreng Gamot: High Blood, Diabetics, at TB Program',
    summary: 'Amlodipine, Losartan, Metformin, Gliclazide, and TB-DOTS medications available for registered patients with prescriptions.',
    summaryFil: 'May suplay ng gamot sa high blood, diabetes, at TB program.',
    content: 'The health center provides free medicines for registered residents: High blood maintenance (Amlodipine, Losartan), Diabetics (Metformin, Gliclazide), and the TB program (TB-DOTS). Present your prescription at the pharmacy window.',
    contentFil: 'Libreng gamot para sa mga residente: High blood maintenance, diabetes, at TB program. Ipakita ang reseta sa pharmacy window.',
    date: 'January 2026',
    category: 'Meds',
    categoryFil: 'Gamot',
    author: 'Health Center Pharmacy',
    readTime: '1 min read'
  }
];

export const ANALYTICS_DATA = {
  monthlyConsultations: 1842,
  satisfactionRate: 98.4,
  optScreeningProgress: 86.5,
  freePrescriptionsDispensed: 4210,
  zoneDistribution: [
    { name: 'Zone 1', count: 0, percentage: 16.7 },
    { name: 'Zone 2', count: 0, percentage: 16.7 },
    { name: 'Zone 3', count: 0, percentage: 16.7 },
    { name: 'Zone 4', count: 0, percentage: 16.7 },
    { name: 'Zone 5', count: 0, percentage: 16.6 },
    { name: 'Zone 6', count: 0, percentage: 16.6 }
  ],
  serviceBreakdown: [
    { service: 'Check Up (OPD)', patients: 612, share: '33.2%' },
    { service: 'Maternity / Pregnant', patients: 348, share: '18.9%' },
    { service: 'Nutrition (BNS 0-59 mo)', patients: 295, share: '16.0%' },
    { service: 'Animal Bite', patients: 240, share: '13.0%' },
    { service: 'Referral / Other Clinic', patients: 0, share: '0%' },
    { service: 'Dental Clinic (M-W-F)', patients: 132, share: '7.2%' }
  ],
  nutritionClassificationsJanMarch: [
    { status: 'Normal', count: 1145, percentage: 81.8 },
    { status: 'Underweight', count: 124, percentage: 8.9 },
    { status: 'Severe Underweight', count: 28, percentage: 2.0 },
    { status: 'Obese', count: 17, percentage: 1.2 }
  ],
  medicineInventoryStatus: [
    { medication: 'Amlodipine (High blood)', stock: 1400, threshold: 300, healthScore: 'Available' },
    { medication: 'Losartan (High blood)', stock: 1150, threshold: 250, healthScore: 'Available' },
    { medication: 'Metformin (Diabetics)', stock: 1800, threshold: 400, healthScore: 'Available' },
    { medication: 'Gliclazide (Diabetics)', stock: 600, threshold: 150, healthScore: 'Available' },
    { medication: 'TB Program (TB-DOTS)', stock: 340, threshold: 80, healthScore: 'Available' }
  ]
};
