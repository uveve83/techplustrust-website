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
  address: 'Kamonyi, Runda, Rwanda',
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
  price: string
  powerConsumption: string
  target: string
  features: string[]
  blurb: string
}

export type PricingTier = {
  model: string
  capacityEggs: number
  priceRWF: number
  powerConsumptionKW: number
}

// Full 17-tier pricing sheet, as provided by TechPlus Trust management
export const PRICING_TABLE: PricingTier[] = [
  { model: 'V1', capacityEggs: 240, priceRWF: 450000, powerConsumptionKW: 0.7 },
  { model: 'V2', capacityEggs: 360, priceRWF: 560000, powerConsumptionKW: 0.7 },
  { model: 'V3', capacityEggs: 480, priceRWF: 620000, powerConsumptionKW: 0.7 },
  { model: 'V4', capacityEggs: 600, priceRWF: 730000, powerConsumptionKW: 1.0 },
  { model: 'V5', capacityEggs: 720, priceRWF: 780000, powerConsumptionKW: 1.0 },
  { model: 'V6', capacityEggs: 900, priceRWF: 900000, powerConsumptionKW: 1.0 },
  { model: 'V7', capacityEggs: 1080, priceRWF: 1000000, powerConsumptionKW: 1.2 },
  { model: 'V8', capacityEggs: 1260, priceRWF: 1300000, powerConsumptionKW: 1.2 },
  { model: 'V9', capacityEggs: 1440, priceRWF: 1500000, powerConsumptionKW: 1.2 },
  { model: 'V10', capacityEggs: 1520, priceRWF: 1650000, powerConsumptionKW: 1.5 },
  { model: 'V11', capacityEggs: 1800, priceRWF: 1800000, powerConsumptionKW: 1.5 },
  { model: 'V12', capacityEggs: 2160, priceRWF: 2000000, powerConsumptionKW: 1.8 },
  { model: 'V13', capacityEggs: 2520, priceRWF: 2500000, powerConsumptionKW: 2.0 },
  { model: 'V14', capacityEggs: 2880, priceRWF: 3000000, powerConsumptionKW: 2.0 },
  { model: 'V15', capacityEggs: 3240, priceRWF: 3300000, powerConsumptionKW: 2.2 },
  { model: 'V16', capacityEggs: 19200, priceRWF: 45000000, powerConsumptionKW: 6.0 },
  { model: 'V17', capacityEggs: 40000, priceRWF: 90000000, powerConsumptionKW: 10.0 },
]

function formatRWF(n: number) {
  return `${n.toLocaleString('en-US')} RWF`
}

export const INCUBATORS: Incubator[] = [
  {
    model: 'V1',
    capacity: '240 eggs',
    price: formatRWF(450000),
    powerConsumption: '0.7 kW',
    target: 'Smallholder farmers',
    features: ['Portable design', 'Solar panel compatible', 'Digital thermostat'],
    blurb:
      'Perfect for the smallholder farmer ready to scale. Runs entirely on solar power with a precision thermostat for optimal hatch rates.',
  },
  {
    model: 'V4',
    capacity: '600 eggs',
    price: formatRWF(730000),
    powerConsumption: '1.0 kW',
    target: 'Emerging farmers',
    features: ['Automatic turning', 'Humidity control', 'Dual power'],
    blurb:
      'A step up for the growing farm — automatic egg turning and humidity control on a reliable dual-power system.',
  },
  {
    model: 'V7',
    capacity: '1,080 eggs',
    price: formatRWF(1000000),
    powerConsumption: '1.2 kW',
    target: 'Small cooperatives',
    features: ['Enhanced ventilation', 'Data logging', 'SMS alerts'],
    blurb:
      'Built for small cooperatives, with enhanced ventilation, data logging and SMS alerts so you never miss a beat.',
  },
  {
    model: 'V15',
    capacity: '3,240 eggs',
    price: formatRWF(3300000),
    powerConsumption: '2.2 kW',
    target: 'Medium cooperatives',
    features: ['Industrial-grade sensors', 'Remote monitoring', 'Dual power'],
    blurb:
      'Industrial-grade sensors and remote monitoring for medium cooperatives running serious volume.',
  },
  {
    model: 'V17',
    capacity: '40,000 eggs',
    price: formatRWF(90000000),
    powerConsumption: '10.0 kW',
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
  { value: 14, suffix: '+', label: 'Hatching Stations Installed' },
  { value: 60000, suffix: '+', label: 'Chicks Hatched' },
  { value: 40, suffix: '+', label: 'Farmers Served' },
  { value: 3, suffix: '', label: 'Provinces Reached' },
]

export const SUCCESS_STORIES = [
  {
    name: 'Omar',
    location: '',
    quote: 'I started with 120 eggs, now I am at 900 eggs.',
    result: 'Scaled capacity from 120 to 900 eggs',
  },
  {
    name: 'Jean',
    location: '',
    quote: 'My profits have increased.',
    result: 'Higher profitability with TechPlus incubators',
  },
  {
    name: 'Isaac',
    location: '',
    quote: 'We have encountered no issues using the machine.',
    result: 'Reliable, trouble-free operation',
  },
]
