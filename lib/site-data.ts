export const COMPANY = {
  name: 'TechPlus Trust Ltd',
  shortName: 'TechPlus Trust',
  tagline: 'We hatch your success',
  email: 'techplustrust@gmail.com',
  phone: '+250 786 812 474',
  phoneHref: '+250786812474',
  website: 'www.techplustrust.com',
  whatsapp: 'https://wa.me/250786812474',
  linkedin: 'https://www.linkedin.com/company/techplus-trust-ltd',
  x: 'https://x.com/Techplustrustrw',
  instagram: 'https://www.instagram.com/techplustrust.ltd?igsh=cXo1MXdpcHd2dTl1',
  address: 'Kigali, Rwanda',
  hours: '24/7',
  founded: '2023',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
]

export type Incubator = {
  model: string
  capacity: string
  target: string
  features: string[]
  blurb: string
}

export const INCUBATORS: Incubator[] = [
  {
    model: 'TPT-240',
    capacity: '240 eggs',
    target: 'Smallholder farmers',
    features: ['Portable design', 'Solar panel compatible', 'Digital thermostat'],
    blurb:
      'Perfect for the smallholder farmer ready to scale. Runs entirely on solar power with a precision thermostat for optimal hatch rates.',
  },
  {
    model: 'TPT-500',
    capacity: '500 eggs',
    target: 'Emerging farmers',
    features: ['Automatic turning', 'Humidity control', 'Dual power'],
    blurb:
      'A step up for the growing farm — automatic egg turning and humidity control on a reliable dual-power system.',
  },
  {
    model: 'TPT-1000',
    capacity: '1,000 eggs',
    target: 'Small cooperatives',
    features: ['Enhanced ventilation', 'Data logging', 'SMS alerts'],
    blurb:
      'Built for small cooperatives, with enhanced ventilation, data logging and SMS alerts so you never miss a beat.',
  },
  {
    model: 'TPT-5000',
    capacity: '5,000 eggs',
    target: 'Medium cooperatives',
    features: ['Industrial-grade sensors', 'Remote monitoring', 'Dual power'],
    blurb:
      'Industrial-grade sensors and remote monitoring for medium cooperatives running serious volume.',
  },
  {
    model: 'TPT-40000',
    capacity: '40,000 eggs',
    target: 'Large cooperatives / NGOs',
    features: ['Full automation', 'Climate control', 'Hatchery management system'],
    blurb:
      'A fully automated hatchery system with climate control and management software for large cooperatives and NGOs.',
  },
]

export const UNIVERSAL_FEATURES = [
  'Solar + grid hybrid power system',
  'Automatic egg turning mechanism',
  'Precise temperature & humidity control',
  'Durable construction for rural environments',
  'Local spare parts availability',
  '12-month warranty',
  'Training included with purchase',
]

export const VALUES = [
  {
    title: 'Innovation',
    description: 'We leverage technology to solve real agricultural challenges.',
  },
  {
    title: 'Accessibility',
    description: 'Our solutions are designed for affordability and ease of use.',
  },
  {
    title: 'Sustainability',
    description: 'Solar power and local manufacturing reduce environmental impact.',
  },
  {
    title: 'Community',
    description: 'We grow by growing with farmers — their success is our success.',
  },
  {
    title: 'Quality',
    description: 'From incubators to chicks, we never compromise on standards.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and trust in every interaction.',
  },
]

export const IMPACT_STATS = [
  { value: 10, suffix: '+', label: 'Active Hatching Stations' },
  { value: 500, suffix: '+', label: 'Chicks Hatched' },
  { value: 100, suffix: '+', label: 'Farmers Trained' },
  { value: 5, suffix: '+', label: 'Districts Served' },
]

export const SUCCESS_STORIES = [
  {
    name: 'Jean-Pierre',
    location: 'Nyagatare District',
    quote:
      'I hatched my first batch of 200 chicks with zero experience. The training made all the difference.',
    result: 'Grew flock from 50 to 300 birds in one year',
  },
  {
    name: 'Marie-Claire',
    location: 'Bugesera Cooperative',
    quote:
      'The decentralized hatching station cut our chick mortality dramatically. Our members now share reliable supply.',
    result: '80+ cooperative members supplied with healthy chicks',
  },
  {
    name: 'David',
    location: 'Development Partner',
    quote:
      'A reliable local manufacturer with real impact metrics made TechPlus the obvious partner for our poultry program.',
    result: 'Sustainable poultry project across multiple districts',
  },
]
