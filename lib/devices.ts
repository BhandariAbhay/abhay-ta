export type Device = {
  name: string
  type: string
  summary: string
  specs: string[]
  brochure?: string // e.g. '/brochures/essl/x990.pdf'
  image?: string // e.g. '/products/essl/x990.jpg'
}

export type DeviceCategory = {
  brand: string // the brand id from lib/products.ts, e.g. 'essl'
  slug: string // used in the web address
  title: string // must match the product name on the brand page
  description: string
  devices: Device[]
}

export const deviceCategories: DeviceCategory[] = [
  {
    brand: 'essl',
    slug: 'fingerprint-devices',
    title: 'Fingerprint devices',
    description:
      'Fingerprint terminals for attendance and door access, with a brochure for each model.',
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
]
