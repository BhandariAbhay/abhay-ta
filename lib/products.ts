```tsx
export type Product = {
  name: string
  description: string
  details?: string[]
  price?: string
  image?: string // e.g. '/products/essl-terminal.png' (upload the file to public/products/)
}

export type ProductBrand = {
  id: string
  name: string
  summary: string
  products: Product[]
}

export const productBrands: ProductBrand[] = [
  {
    id: 'essl',
    name: 'eSSL',
    summary: 'Biometric devices, access control, barriers and workforce management solutions from eSSL.',
    products: [
      {
        name: 'Fingerprint devices',
        description: 'Fingerprint-based biometric attendance devices for employee identification and attendance tracking.',
        details: [
          'F22',
          'F18',
          'X990',
          'K30 Pro',
          'K21 Pro',
          'Installation and employee enrolment',
        ],
      },
      {
        name: 'Face recognition devices',
        description: 'Face recognition terminals for fast and contactless employee attendance.',
        details: [
          'Face recognition terminals',
          'Employee identification',
          'Attendance tracking',
          'Installation and configuration',
        ],
      },
      {
        name: 'Face + Fingerprint devices',
        description: 'Multi-biometric terminals supporting facial recognition and fingerprint authentication.',
        details: [
          'MB160',
          'MB20',
          'Multi-biometric authentication',
          'Employee enrolment and setup',
        ],
      },
      {
        name: 'Advanced AI biometric devices',
        description: 'Advanced AI-powered face recognition terminals for modern workforce attendance and identification.',
        details: [
          'AI FACE MARS',
          'AI FACE NEPTUNE',
          'AI FACE MAGNUM',
          'AI FACE ORCUS',
          'AI face recognition terminals',
          'Installation and configuration',
        ],
      },
      {
        name: 'Boom and attendance barriers',
        description: 'Automatic boom barrier solutions for vehicle entry, exit and parking access management.',
        details: [
          'Automatic barrier systems',
          'Vehicle access management',
          'On-site wiring and installation',
          'Configuration and testing',
        ],
      },
      {
        name: 'eSSL attendance software',
        description: 'Attendance management software for biometric devices, employee records, shifts, leave and reporting.',
        details: [
          'Attendance management',
          'Shift and leave management',
          'Attendance reports',
          'Device synchronization',
        ],
      },
      {
        name: 'eSSL payroll software',
        description: 'Payroll solutions using attendance data for salary processing and workforce management.',
        details: [
          'Attendance-based payroll',
          'Salary processing',
          'Payroll reports',
          'HR integration',
        ],
      },
      {
        name: 'Downloads',
        description: 'Access biometric device drivers, software installers, firmware, manuals and technical resources.',
        details: [
          'Device drivers',
          'Software installers',
          'Firmware',
          'User manuals',
          'SDKs and utilities',
        ],
      },
      {
        name: 'Access control systems',
        description: 'Complete access control solutions for doors, secure entry, RFID identification and building security.',
        details: [
          'C3-100',
          'C3-200',
          'C3-400',
          'C3 Plus Series',
          'InBio-160',
          'InBio-260',
          'InBio-460',
          'InBio Pro Plus Series',
          'Access control panels',
          'RFID card readers',
          'Mifare card readers',
          'UHF readers',
          'EM locks',
          'Drop bolts',
          'Exit buttons',
          'Door release switches',
          'Door loop accessories',
          'Access control power supplies',
          'Door access management',
        ],
      },
    ],
  },
  {
    id: 'biomax',
    name: 'Biomax',
    summary: 'Biomax biometric devices and Smart Office software.',
    products: [
      {
        name: 'Biometric attendance devices',
        description: 'Fingerprint and face recognition terminals for recording attendance.',
        details: ['Installation and employee enrolment'],
      },
      {
        name: 'Smart Office software',
        description: 'Shift rules, device sync, leave policies and attendance reports for HR teams.',
        details: ['Desktop, web and cloud versions'],
      },
      {
        name: 'Smart Office payroll',
        description: 'Payroll that works with attendance data from Biomax devices.',
      },
    ],
  },
  {
    id: 'weekmate',
    name: 'Weekmate',
    summary: 'Payroll and HR platform connected to your attendance data.',
    products: [
      {
        name: 'Weekmate payroll and HR',
        description: 'Payroll and HR platform for processing salaries from attendance records.',
      },
      {
        name: 'Attendance integration',
        description:
          'Punches from biometric devices connected to Weekmate so they flow into salary processing without manual entry.',
        details: ['Setup and testing', 'Support after go-live'],
      },
    ],
  },
]
```
