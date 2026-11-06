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
  doctorHours: 'Clinic services are available during regular operating hours.',
  doctorHoursFil: 'Available ang mga serbisyo ng klinika sa regular na oras ng operasyon.',
  xrayHours: 'No X-ray service listed for Mayor Juan R. Sanchez Health Center',
  xrayHoursFil: 'Walang nakalistang serbisyo ng X-ray sa Mayor Juan R. Sanchez Health Center',
  dentalHours: 'Dental services are available during the posted clinic schedule.',
  dentalHoursFil: 'Available ang dental services ayon sa nakapaskil na iskedyul ng klinika.',
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
    daysEn: 'Monday-Tuesday MJRS | Wednesday Outreach | Thursday-Friday Delfin Salonga',
    daysFil: 'Lunes-Martes MJRS | Miyerkules Outreach | Huwebes-Biyernes Delfin Salonga',
    hours: 'Confirm directly with the assigned dental clinic',
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
    title: 'Maternity / Pregnant',
    titleFil: 'Maternity / Pangangalaga sa Buntis',
    shortDesc: 'Prenatal care, check-ups, and maternal health monitoring.',
    shortDescFil: 'Pagsusuri sa buntis, prenatal check-up, at pangangalaga sa ina.',
    fullDesc: 'Prenatal and postnatal care at Mayor Juan R. Sanchez Health Center. Contact the center for the available nurse or midwife.',
    fullDescFil: 'Prenatal at postnatal na pangangalaga sa Mayor Juan R. Sanchez Health Center. Makipag-ugnayan sa center para sa available na nurse o midwife.',
    category: 'maternity',
    schedule: 'Monday-Friday: 7:00 AM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-4:00 PM',
    location: 'Maternity Section, Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Mayor Juan R. Sanchez nurse', 'Mayor Juan R. Sanchez midwives'],
    requirements: ['Valid ID / Proof of Residency', 'Mother & Child Health Record Book'],
    requirementsFil: ['Valid ID o Katunayan ng Paninirahan', 'Booklet ng Buntis'],
    badge: 'Maternity',
    badgeFil: 'Maternity'
  },
  {
    id: 'nutrition',
    title: 'Nutrition (BNS)',
    titleFil: 'Nutrisyon (BNS)',
    shortDesc: 'Nutrition screening for children 0-59 months. Operation Timbang runs January to March in each barangay and tracks height, weight, and nutrition status.',
    shortDescFil: 'Pagsubaybay sa nutrisyon ng mga batang 0-59 buwan. Isinasagawa ang Operation Timbang mula Enero hanggang Marso sa bawat barangay upang masukat ang taas, timbang, at katayuan sa nutrisyon.',
    fullDesc: 'Barangay Nutrition Scholars (BNS) focus on children 0-59 months old. Operation Timbang (OPT) is conducted January to March per barangay. Evaluates weight, height, and nutritional status: underweight, severe underweight, normal, obese.',
    fullDescFil: 'Nangangalaga sa mga bata edad 0-59 buwan. Nagsasagawa ng Operation Timbang (OPT) tuwing Enero hanggang Marso sa bawat barangay upang suriin ang timbang, tangkad, at antas ng nutrisyon (underweight, severe underweight, normal, obese).',
    category: 'nutrition',
    schedule: 'Monday to Friday: 7:00 AM - 4:00 PM | OPT: Jan - March',
    scheduleFil: 'Lunes hanggang Biyernes: 7:00 AM - 4:00 PM | OPT: Enero - Marso',
    location: 'Nutrition Desk / Community',
    keyPersonnel: ['Ms. Monina C. De Borja (BNS)', 'Ms. Emily O. Velarde (BNS)', 'Ms. Maria Teresa H. Castillo (BNS)'],
    requirements: ['Child Immunization / Baby Book', 'Birth Certificate or proof of age'],
    requirementsFil: ['Baby Book ng bata', 'Katunayan ng edad'],
    image: NUTRITION_IMAGE,
    badge: '0-59 Months',
    badgeFil: '0-59 Buwan'
  },
  {
    id: 'dental',
    title: 'Dental Clinic',
    titleFil: 'Dental Clinic',
    shortDesc: 'Dental services rotate between Mayor Juan R. Sanchez, dental outreach, and Delfin Salonga.',
    shortDescFil: 'Ang dental services ay nasa rotasyon sa Mayor Juan R. Sanchez, dental outreach, at Delfin Salonga.',
    fullDesc: 'Dental schedule: Monday and Tuesday at Mayor Juan R. Sanchez Health Center, Wednesday at Dental Outreach, and Thursday and Friday at Delfin Salonga Health Center.',
    fullDescFil: 'Dental schedule: Lunes at Martes sa Mayor Juan R. Sanchez Health Center, Miyerkules sa Dental Outreach, at Huwebes at Biyernes sa Delfin Salonga Health Center.',
    category: 'dental',
    schedule: 'Mon-Tue: MJRS | Wed: Outreach | Thu-Fri: Delfin Salonga',
    scheduleFil: 'Lunes-Martes: MJRS | Miyerkules: Outreach | Huwebes-Biyernes: Delfin Salonga',
    location: 'Rotating dental locations in Pateros',
    keyPersonnel: ['Chevily C. Reyes, DMD (Dentist III)', 'Ms. Luzviminda F. Mesina (Dental Aide)', 'Ms. Eliza A. Gapayao (Utility Worker)'],
    requirements: ['Valid ID / Health Card'],
    requirementsFil: ['Valid ID o Health Card'],
    image: DENTAL_IMAGE,
    badge: 'Rotating Dental Schedule',
    badgeFil: 'Rotating Dental Schedule'
  },
  {
    id: 'animal_bite',
    title: 'Animal Bite',
    titleFil: 'Animal Bite (Kagat ng Hayop)',
    shortDesc: 'Assessment, wound care, and post-exposure anti-rabies vaccination.',
    shortDescFil: 'Pagsusuri sa kagat o kalmot ng hayop at bakuna laban sa rabies.',
    fullDesc: 'Care and post-exposure vaccination for animal bites and scratches. Wash bite wound thoroughly with soap and clean water for 15 minutes before proceeding to the clinic.',
    fullDescFil: 'Paggamot at bakuna laban sa rabies para sa mga nakagat o nakalmot ng hayop. Hugasan agad ang sugat ng sabon at tubig nang 15 minuto bago magtungo sa clinic.',
    category: 'animal_bite',
    schedule: 'Monday to Friday: 7:00 AM - 4:00 PM',
    scheduleFil: 'Lunes hanggang Biyernes: 7:00 AM - 4:00 PM',
    location: 'Animal Bite Section',
    keyPersonnel: ['Mayor Juan R. Sanchez duty personnel'],
    requirements: ['Patient ID and bite history details'],
    requirementsFil: ['Valid ID at impormasyon ukol sa kagat'],
    badge: 'Animal Bite Care',
    badgeFil: 'Gamot sa Rabies'
  },
  {
    id: 'checkup',
    title: 'Check Up',
    titleFil: 'Check Up / Konsultasyon',
    shortDesc: 'Mayor Juan R. Sanchez has no permanent doctor; duty personnel provide consultation Tuesday-Friday mornings.',
    shortDescFil: 'Walang permanenteng doktor sa Mayor Juan R. Sanchez; may duty personnel para sa konsultasyon tuwing Martes-Biyernes ng umaga.',
    fullDesc: 'General check-ups are handled by clinic staff during the posted Monday-Friday schedule from 7:00 AM to 4:00 PM.',
    fullDescFil: 'Ang general check-up ay ginagawa ng clinic staff tuwing Lunes-Biyernes mula 7:00 AM hanggang 4:00 PM.',
    category: 'checkup',
    schedule: 'Monday-Friday: 7:00 AM-4:00 PM',
    scheduleFil: 'Lunes-Biyernes: 7:00 AM-4:00 PM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Nurse', 'Midwife', 'Scheduled duty personnel'],
    requirements: ['Valid ID / Barangay Proof', 'Current medications if any'],
    requirementsFil: ['Valid ID o Patunay ng Tirahan', 'Kasalukuyang iniinom na gamot kung mayroon'],
    badge: 'Nurse/Midwife Check-Up',
    badgeFil: 'Check-Up ng Nurse/Midwife'
  },
  {
    id: 'antigen-testing',
    title: 'COVID-19 Antigen Testing',
    titleFil: 'COVID-19 Antigen Testing',
    shortDesc: 'COVID-19 antigen testing is available every Thursday from 9:30 to 10:00 AM.',
    shortDescFil: 'Ang COVID-19 antigen testing ay tuwing Huwebes mula 9:30 hanggang 10:00 AM.',
    fullDesc: 'COVID-19 antigen testing is conducted every Thursday from 9:30 to 10:00 AM. Confirm current availability with the health center before visiting.',
    fullDescFil: 'Ang COVID-19 antigen testing ay isinasagawa tuwing Huwebes mula 9:30 hanggang 10:00 AM. Kumpirmahin muna ang availability sa health center bago pumunta.',
    category: 'antigen_testing',
    schedule: 'Thursday, 9:30 AM-10:00 AM',
    scheduleFil: 'Huwebes, 9:30 AM-10:00 AM',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Mayor Juan R. Sanchez Health Center staff'],
    requirements: ['Valid ID', 'Health center screening instructions'],
    requirementsFil: ['Valid ID', 'Mga tagubilin sa screening ng health center'],
    badge: 'Thursday Testing',
    badgeFil: 'Testing tuwing Huwebes'
  },
  {
    id: 'xray',
    title: 'X-RAY CLINIC',
    titleFil: 'X-RAY CLINIC',
    shortDesc: 'No X-ray service is listed for Mayor Juan R. Sanchez Health Center.',
    shortDescFil: 'Walang nakalistang serbisyo ng X-ray sa Mayor Juan R. Sanchez Health Center.',
    fullDesc: 'The supplied information does not list X-ray services at Mayor Juan R. Sanchez Health Center. Ask municipal health staff for referral information to another available clinic.',
    fullDescFil: 'Walang nakalistang serbisyo ng X-ray sa ibinigay na impormasyon para sa Mayor Juan R. Sanchez Health Center. Makipag-ugnayan sa municipal health staff para sa referral sa ibang klinika.',
    category: 'xray',
    schedule: 'Not available at Mayor Juan R. Sanchez',
    scheduleFil: 'Walang available sa Mayor Juan R. Sanchez',
    location: 'Mayor Juan R. Sanchez Health Center',
    keyPersonnel: ['Municipal Health Staff'],
    requirements: ['Ask staff for referral information'],
    requirementsFil: ['Magtanong sa kawani para sa referral'],
    image: RADIOLOGY_IMAGE,
    badge: 'Referral Required',
    badgeFil: 'Kailangan ng Referral'
  },
  {
    id: 'pharmacy',
    title: 'MEDS: Available Maintenance & TB Program Medications',
    titleFil: 'MGA GAMOT: High Blood, Diabetes, at TB Program',
    shortDesc: 'Medicines for high blood maintenance, diabetes, and the TB program. Contact the health center to confirm current availability.',
    shortDescFil: 'May mga gamot para sa high blood maintenance, diabetes, at TB program. Makipag-ugnayan sa health center upang kumpirmahin ang kasalukuyang supply.',
    fullDesc: 'The health center provides medicines for high blood maintenance, diabetes, and the TB program. Please contact the clinic to confirm current availability and requirements.',
    fullDescFil: 'May mga gamot ang health center para sa high blood maintenance, diabetes, at TB program. Makipag-ugnayan sa klinika upang kumpirmahin ang kasalukuyang supply at mga kailangan.',
    category: 'pharmacy',
    schedule: 'Monday to Friday: 7:00 AM - 4:00 PM',
    scheduleFil: 'Lunes hanggang Biyernes: 7:00 AM - 4:00 PM',
    location: 'Pharmacy Window',
    keyPersonnel: ['Carmencita P. Ison, MD', 'Mayor Juan R. Sanchez Health Center staff'],
    requirements: ['Doctor Prescription', 'Barangay Residency / Health Booklet'],
    requirementsFil: ['Reseta ng doktor', 'Health booklet o Katunayan ng Paninirahan'],
    badge: 'Free Meds',
    badgeFil: 'Libreng Gamot'
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
  {
    id: 'opt-2026',
    title: 'Operation Timbang (OPT) - Children 0-59 Months',
    titleFil: 'Operation Timbang (OPT) - Mga Bata 0-59 Buwan',
    description: 'Nutrition screening for children aged 0-59 months, including weight, height, and nutritional status.',
    descriptionFil: 'Pagsusuri sa timbang, tangkad, at nutritional status ng mga batang 0-59 buwan.',
    targetBarangay: 'Barangay Sta. Ana Zones 1-6',
    scheduleDate: 'January - March',
    timeWindow: 'Confirm with the health center',
    location: 'Mayor Juan R. Sanchez Health Center',
    capacity: 60,
    slotsRemaining: 25,
    eligibility: 'Children aged 0-59 months',
    eligibilityFil: 'Mga batang edad 0 hanggang 59 buwan',
    category: 'opt'
  },
  {
    id: 'dental-rotation',
    title: 'Dental Clinic Rotation',
    titleFil: 'Rotation ng Dental Clinic',
    description: 'Monday and Tuesday at Mayor Juan R. Sanchez, Wednesday at Dental Outreach, and Thursday-Friday at Delfin Salonga.',
    descriptionFil: 'Lunes at Martes sa Mayor Juan R. Sanchez, Miyerkules sa Dental Outreach, at Huwebes-Biyernes sa Delfin Salonga.',
    targetBarangay: 'Barangay Sta. Ana Zones 1-6',
    scheduleDate: 'Monday - Friday',
    timeWindow: 'Confirm with the assigned dental clinic',
    location: 'Mayor Juan R. Sanchez, Dental Outreach, or Delfin Salonga',
    capacity: 35,
    slotsRemaining: 12,
    eligibility: 'Dental patients',
    eligibilityFil: 'Pasyenteng nangangailangan ng dental service',
    category: 'dental'
  }
];

export const NEWS_UPDATES: NewsUpdate[] = [
  {
    id: 'news-1',
    title: 'Operation Timbang (OPT) Schedule: January to March',
    titleFil: 'Operation Timbang (OPT) Iskedyul: Enero hanggang Marso',
    summary: 'Operation Timbang screens children aged 0-59 months for weight, height, and nutritional status.',
    summaryFil: 'Sinusuri ng Operation Timbang ang timbang, tangkad, at nutritional status ng mga batang 0-59 buwan.',
    content: 'Operation Timbang is conducted from January to March. Contact Mayor Juan R. Sanchez Health Center for the current barangay schedule and requirements.',
    contentFil: 'Isinasagawa ang Operation Timbang mula Enero hanggang Marso. Makipag-ugnayan sa Mayor Juan R. Sanchez Health Center para sa kasalukuyang iskedyul at mga kailangan.',
    date: 'February 2026',
    category: 'Campaign',
    categoryFil: 'Kampanya',
    author: 'Mayor Juan R. Sanchez Nutrition Services',
    readTime: '1 min read'
  },
  {
    id: 'news-2',
    title: 'Mayor Juan R. Sanchez X-Ray Service Notice',
    titleFil: 'Abiso sa Serbisyo ng X-Ray sa Mayor Juan R. Sanchez',
    summary: 'No X-ray service is listed at Mayor Juan R. Sanchez Health Center.',
    summaryFil: 'Walang nakalistang serbisyo ng X-ray sa Mayor Juan R. Sanchez Health Center.',
    content: 'Ask Mayor Juan R. Sanchez health center staff for referral information to another clinic.',
    contentFil: 'Magtanong sa kawani ng Mayor Juan R. Sanchez Health Center para sa referral sa ibang klinika.',
    date: 'February 2026',
    category: 'Schedule',
    categoryFil: 'Iskedyul',
    author: 'Radiological Section',
    readTime: '1 min read'
  },
  {
    id: 'news-3',
    title: 'Dental Clinic Rotation Schedule',
    titleFil: 'Iskedyul ng Rotation ng Dental Clinic',
    summary: 'Dental services rotate among Mayor Juan R. Sanchez, Dental Outreach, and Delfin Salonga.',
    summaryFil: 'Nag-rotate ang dental services sa Mayor Juan R. Sanchez, Dental Outreach, at Delfin Salonga.',
    content: 'Monday and Tuesday: Mayor Juan R. Sanchez. Wednesday: Dental Outreach. Thursday and Friday: Delfin Salonga.',
    contentFil: 'Lunes at Martes: Mayor Juan R. Sanchez. Miyerkules: Dental Outreach. Huwebes at Biyernes: Delfin Salonga.',
    date: 'January 2026',
    category: 'Schedule',
    categoryFil: 'Iskedyul',
    author: 'Dental Clinic',
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
