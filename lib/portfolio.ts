export const profile = {
  name: 'Abhay Singh Bhandari',
  role: 'IT Engineer',
  location: 'Ahmedabad, India',
  email: 'abhaysinghbhandari09@gmail.com',
  phone: '+91 90242 36402',
  availability: 'Available for installations & support in Ahmedabad',
  summary:
    'I work across biometric attendance and access control hardware, eSSL, Smart Office and Biomax software, and payroll platforms like Keka, Zoho and Weekmate, from installation through to client support.',
}

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: 'Biometric Attendance',
    category: 'Hardware',
    description:
      'Installing, mounting and configuring fingerprint and face recognition terminals, including enrolling employees, connecting devices to the network and keeping attendance logs accurate.',
    tags: ['eSSL', 'Biomax', 'Face & Fingerprint'],
    image: '/work/biometric.png',
  },
  {
    title: 'Access Control',
    category: 'Hardware',
    description:
      'Setting up RFID and biometric door access with electromagnetic locks, exit switches and controllers so only the right people get through each door.',
    tags: ['RFID', 'EM Locks', 'Door Controllers'],
    image: '/work/access.png',
  },
  {
    title: 'Attendance Software',
    category: 'Software',
    description:
      'Configuring eSSL, Smart Office and Biomax software: shift rules, device sync, leave policies and attendance reports for HR teams.',
    tags: ['Smart Office', 'eSSL', 'Biomax'],
    image: '/work/software.png',
  },
  {
    title: 'Payroll Integration',
    category: 'Integration',
    description:
      'Connecting attendance data with payroll platforms so punches flow straight into salary processing without manual entry.',
    tags: ['Keka', 'Zoho', 'Weekmate'],
    image: '/work/payroll.png',
  },
]

export const services = [
  {
    title: 'Installation',
    description: 'Site survey, device mounting, wiring and network setup for attendance and access hardware.',
  },
  {
    title: 'Configuration',
    description: 'Software setup, employee enrollment, shift and policy rules, and device-to-software sync.',
  },
  {
    title: 'Integration',
    description: 'Linking attendance systems with payroll platforms like Keka, Zoho and Weekmate.',
  },
  {
    title: 'Client support',
    description: 'Troubleshooting, data recovery, training staff and ongoing maintenance after go-live.',
  },
]

export const capabilities = [
  'eSSL',
  'Smart Office',
  'Biomax',
  'Keka',
  'Zoho',
  'Weekmate',
  'Biometric devices',
  'Access control',
  'Networking',
  'Client support',
]
