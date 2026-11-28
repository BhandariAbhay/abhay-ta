export type Device = {
  name: string
  type: string
  summary: string
  specs: string[]
  brochure?: string // e.g. '/brochures/essl/x990.pdf'
  image?: string // e.g. '/products/essl/x990.jpg'
}

export type Product = {
  name: string
  description: string
  details?: string[]
  price?: string
  image?: string
  devices?: Device[]
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
    summary: 'Biometric devices, barriers, access control and software from eSSL.',
    products: [
      {
        name: 'Fingerprint devices',
        description:
          'Fingerprint terminals for attendance and door access, with a brochure for each model.',
        details: ['Installation and employee enrolment'],
        devices: [
          {
            name: 'X990',
            type: 'Attendance and access control',
            summary:
              'Standalone fingerprint time attendance and access control with a 3-inch colour display and built-in proximity card reader.',
            specs: [
              '10,000 fingerprints and 10,000 cards',
              '1,00,000 transactions',
              'TCP/IP and USB, optional Wi-Fi and GPRS',
              'Works with eTimeTracklite desktop and web',
            ],
            brochure: '/brochures/essl/x990.pdf',
            image: '/products/essl/x990.jpg',
          },
          {
            name: 'F22',
            type: 'Attendance and access control',
            summary:
              'Ultra thin fingerprint attendance and access control terminal with built-in Wi-Fi, a colour screen and a keypad.',
            specs: [
              '3,000 fingerprints and 5,000 cards',
              '30,000 records',
              'Wi-Fi, TCP/IP and RS485',
              'Identification in under 0.5 seconds',
            ],
            brochure: '/brochures/essl/f22.pdf',
            image: '/products/essl/f22.jpg',
          },
          {
            name: 'K30 Pro',
            type: 'Attendance and access control',
            summary:
              'Fingerprint time attendance with access control, a 2.8-inch screen and built-in battery backup.',
            specs: [
              '2,000 users, fingerprints and cards',
              '1,00,000 transactions',
              'TCP/IP and USB-host',
              'Works with eTimeTracklite desktop and web',
            ],
            brochure: '/brochures/essl/k30-pro.pdf',
            image: '/products/essl/k30-pro.jpg',
          },
          {
            name: 'K90 Pro',
            type: 'Attendance and access control',
            summary:
              'Compact fingerprint time attendance with access control and built-in battery backup.',
            specs: [
              '800 fingerprints and 800 cards',
              '80,000 transactions',
              'TCP/IP and USB-host',
              'Works with eTimeTracklite desktop, web and cloud',
            ],
            brochure: '/brochures/essl/k90-pro.pdf',
            image: '/products/essl/k90-pro.jpg',
          },
          {
            name: 'X7',
            type: 'Access control',
            summary:
              'Fingerprint access control with a keypad and card reading, with connections for the door lock and sensors.',
            specs: [
              '500 fingerprints and 500 cards',
              'Password, fingerprint, card or a combination',
              'Connects to a 3rd party electric lock, exit button, door sensor, alarm and bell',
              '12V DC, 3A power supply',
            ],
            brochure: '/brochures/essl/x7.pdf',
            image: '/products/essl/x7.jpg',
          },
          {
            name: 'FR1200',
            type: 'Exit reader',
            summary:
              'Fingerprint exit reader, used together with an access control terminal on the other side of the door.',
            specs: [
              'Optical fingerprint sensor',
              'RS485 connection',
              'Optional Prox, Mifare or HID card reader',
              'Buzzer voice prompt',
            ],
            brochure: '/brochures/essl/fr1200.pdf',
            image: '/products/essl/fr1200.jpg',
          },
          {
            name: 'eSSL9500',
            type: 'USB scanner',
            summary:
              'USB fingerprint scanner for enrolment and software use, with an SDK available for development.',
            specs: [
              '500 dpi optical sensor with a 2-megapixel CMOS camera',
              'USB 2.0 connection',
              'Works in strong sunlight and with dry, wet or rough fingers',
              'Live fingerprint detection',
            ],
            brochure: '/brochures/essl/essl9500.pdf',
            image: '/products/essl/essl9500.jpg',
          },
        ],
      },
      {
        name: 'Face recognition devices',
        description: 'Contactless face recognition terminals for attendance.',
        details: ['Installation and employee enrolment'],
      },
      {
        name: 'Face + Fingerprint devices',
        description: 'Terminals that read both face and fingerprint.',
        details: ['Installation and employee enrolment'],
      },
      {
        name: 'Advanced AI biometric devices',
        description: 'Newer AI-based biometric terminals for attendance and access.',
        details: ['Installation and setup'],
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
      {
        name: 'Downloads',
        description: 'Software, drivers and manuals for eSSL devices.',
      },
      {
        name: 'Access control systems',
        description: 'Card and biometric door access, with locks, exit switches and controllers.',
        details: ['Setup and configuration'],
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
