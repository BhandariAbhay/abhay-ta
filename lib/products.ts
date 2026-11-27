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
        description: 'Attendance management software for biometric devices
