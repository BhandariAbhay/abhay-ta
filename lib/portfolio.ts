export const profile = {
  name: 'Mara Okafor',
  role: 'Product Designer & Front-end Engineer',
  location: 'Lisbon, Portugal',
  email: 'hello@maraokafor.com',
  availability: 'Available for new projects — Q4 2026',
  summary:
    'I design and build calm, considered software for teams who care about the details. Currently helping startups turn rough ideas into products people love to use.',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Read.cv', href: 'https://read.cv' },
  ],
}

export type Project = {
  title: string
  client: string
  year: string
  description: string
  tags: string[]
  image: string
  href: string
}

export const projects: Project[] = [
  {
    title: 'Ledger',
    client: 'Fintech platform',
    year: '2026',
    description:
      'Redesigned the core reporting dashboard for a B2B finance tool, cutting time-to-insight by 40% and unifying three legacy products into one coherent system.',
    tags: ['Product Design', 'React', 'Data Viz'],
    image: '/work/ledger.png',
    href: '#',
  },
  {
    title: 'Field Notes',
    client: 'Outdoor startup',
    year: '2025',
    description:
      'Designed and shipped an offline-first trail companion app with topographic maps, route sharing, and a quiet interface built for focus outdoors.',
    tags: ['Mobile', 'Design System', 'React Native'],
    image: '/work/field.png',
    href: '#',
  },
  {
    title: 'Atlas UI',
    client: 'Open source',
    year: '2025',
    description:
      'An accessible component library with 60+ primitives, design tokens, and documentation. Used by 2,000+ developers and adopted by four product teams.',
    tags: ['Design Systems', 'TypeScript', 'A11y'],
    image: '/work/atlas.png',
    href: '#',
  },
  {
    title: 'Haus Ceramics',
    client: 'Independent studio',
    year: '2024',
    description:
      'Brand refresh and headless storefront for a ceramics studio. Conversion rate doubled in the first quarter after launch.',
    tags: ['E-commerce', 'Next.js', 'Branding'],
    image: '/work/haus.png',
    href: '#',
  },
]

export const experience = [
  {
    company: 'Independent',
    role: 'Design Engineer',
    period: '2024 — Now',
    description: 'Partnering with early-stage teams on product, interface, and front-end architecture.',
  },
  {
    company: 'Northwind Labs',
    role: 'Senior Product Designer',
    period: '2021 — 2024',
    description: 'Led design for the analytics suite and built the company’s first design system.',
  },
  {
    company: 'Studio Parallel',
    role: 'Front-end Developer',
    period: '2018 — 2021',
    description: 'Built marketing sites and interactive experiences for cultural and retail clients.',
  },
]

export const capabilities = [
  'Product strategy',
  'Interaction design',
  'Design systems',
  'Prototyping',
  'React & Next.js',
  'TypeScript',
  'Accessibility',
  'Motion',
]
