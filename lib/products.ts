export type Product = {
  name: string
  brand?: string
  description: string
  details?: string[]
  price?: string
  image?: string // e.g. '/products/fingerprint.png' (file goes in public/products/)
}

export type ProductCategory = {
  id: string
  title: string
  summary: string
  products: Product[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'biometric-devices',
    title: 'Biometric devices',
    summary: 'Fingerprint and face recognition terminals for attendance, supplied and installed.',
    products: [
      {
        name: 'Fingerprint attendance terminal',
        brand: 'eSSL · ZKTeco · Timewatch',
        description: 'Standalone terminal that records employee punches and syncs with attendance software.',
        details: ['Installation and employee enrolment', 'Software sync set up for you'],
      },
      {
        name: 'Face recognition terminal',
        brand: 'eSSL · ZKTeco',
        description: 'Contactless attendance for offices, factories and shops.',
        details: ['Installation and employee enrolment'],
      },
      {
        name: 'Fingerprint scanner',
        brand: 'Mantra',
        description: 'Fingerprint scanner for enrolment and software-based attendance.',
      },
    ],
  },
  {
    id: 'access-control',
    title: 'Access control',
    summary: 'Door access so only the right people get through each door.',
    products: [
      {
        name: 'RFID and biometric door access',
        brand: 'eSSL · ZKTeco',
        description: 'Card or fingerprint access for office, factory and shop doors.',
        details: ['Controller, lock and exit switch setup'],
      },
      {
        name: 'Electromagnetic locks and exit switches',
        description: 'Door hardware that works with the controller to lock, release and log access.',
      },
    ],
  },
  {
    id: 'barriers',
    title: 'Barriers',
    summary: 'Boom barriers for vehicles and barriers for staff attendance.',
    products: [
      {
        name: 'Boom barrier',
        brand: 'eSSL · ZKTeco',
        description: 'Vehicle access control for gates at factories, offices and other sites.',
        details: ['On-site wiring and installation', 'Software configuration'],
      },
      {
        name: 'Attendance barrier',
        brand: 'eSSL · ZKTeco',
        description: 'Staff entry barriers that capture attendance as people pass through.',
        details: ['Payroll software integration if needed'],
      },
    ],
  },
  {
    id: 'software-payroll',
    title: 'Software and payroll',
    summary: 'Attendance software and payroll connections for HR teams.',
    products: [
      {
        name: 'eSSL attendance software',
        description: 'Desktop, web and cloud versions for managing devices, shifts and attendance reports.',
      },
      {
        name: 'Smart Office software',
        description: 'Shift rules, device sync, leave policies and attendance reports.',
      },
      {
        name: 'Payroll integration',
        description: 'Attendance data connected to payroll platforms so punches flow into salary processing.',
        details: ['Works with Keka, Zoho and Weekmate'],
      },
    ],
  },
]
