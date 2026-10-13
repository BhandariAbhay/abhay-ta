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
    summary: 'Biometric devices, barriers and attendance software from eSSL.',
    products: [
      {
        name: 'Biometric attendance devices',
        description: 'Fingerprint and face recognition terminals for recording attendance.',
        details: ['Installation and employee enrolment'],
      },
      {
        name: 'Boom and attendance barriers',
        description: 'Barrier systems for vehicle access control and staff attendance.',
        details: ['On-site wiring and installation', 'Software configuration'],
      },
      {
        name: 'eSSL attendance software',
        description: 'Desktop, web and cloud versions for managing devices, shifts and reports.',
      },
      {
        name: 'eSSL payroll software',
        description: 'Payroll that works with attendance data from eSSL devices.',
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
