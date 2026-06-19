export const NAV_LINKS = [
  { label: 'Craft', href: '#craft' },
  { label: 'Origins', href: '#origins' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Voices', href: '#voices' },
] as const

export const HERO = {
  eyebrow: 'Specialty Roastery · Est. 2014',
  title: ['Coffee,', 'cinematically', 'engineered.'],
  subtitle:
    'Aurora fuses single-origin craft with an immersive digital ritual. Every cup is a frame in a story worth slowing down for.',
  primaryCta: { label: 'Begin the ritual', href: '#ritual' },
  secondaryCta: { label: 'Explore origins', href: '#origins' },
}

export const STATS = [
  { value: '14', label: 'Years roasting' },
  { value: '36', label: 'Single origins' },
  { value: '4.9', label: 'Avg. rating' },
  { value: '120k', label: 'Cups poured' },
]

export const CRAFT = {
  eyebrow: 'The Craft',
  title: 'Obsessed with the half-degree that changes everything.',
  body: 'We treat roasting like engineering. Airflow, charge temperature, and development time are tuned to the gram — so the sweetness in every origin arrives exactly where it should.',
  points: [
    {
      title: 'Precision roasting',
      body: 'Profiles modeled and replayed to within a half-degree for total consistency.',
    },
    {
      title: 'Traceable origins',
      body: 'Direct relationships with farms across three continents, harvested at peak.',
    },
    {
      title: 'Slow extraction',
      body: 'Brew recipes refined over thousands of pours to honor each bean.',
    },
  ],
}

export const ORIGINS = [
  {
    name: 'Yirgacheffe',
    region: 'Ethiopia',
    notes: 'Jasmine · Bergamot · Honey',
    altitude: '2,100m',
  },
  {
    name: 'Huila',
    region: 'Colombia',
    notes: 'Red Apple · Caramel · Cocoa',
    altitude: '1,750m',
  },
  {
    name: 'Antigua',
    region: 'Guatemala',
    notes: 'Dark Chocolate · Orange · Spice',
    altitude: '1,500m',
  },
  {
    name: 'Gesha',
    region: 'Panama',
    notes: 'Peach · Floral · Tea-like',
    altitude: '1,650m',
  },
]

export const RITUAL = [
  {
    step: '01',
    title: 'Source',
    body: 'We taste hundreds of lots and select only the top fraction for the season.',
  },
  {
    step: '02',
    title: 'Roast',
    body: 'Each origin gets a bespoke profile, replayed with engineering precision.',
  },
  {
    step: '03',
    title: 'Brew',
    body: 'Calibrated recipes pull the clearest expression from every bean.',
  },
  {
    step: '04',
    title: 'Savor',
    body: 'A cup that unfolds slowly — a moment designed to be remembered.',
  },
]

export const PRICING = [
  {
    name: 'Taster',
    price: '24',
    cadence: 'one-time',
    description: 'A curated trio of single origins to find your signature cup.',
    features: ['3 × 120g origins', 'Tasting guide', 'Free local pickup'],
    featured: false,
    cta: 'Order taster',
  },
  {
    name: 'Ritual',
    price: '38',
    cadence: 'per month',
    description: 'A monthly rotation of our finest seasonal lots, delivered.',
    features: [
      '2 × 250g bags monthly',
      'Priority new releases',
      'Free shipping',
      'Brew calibration cards',
    ],
    featured: true,
    cta: 'Start subscription',
  },
  {
    name: 'Atelier',
    price: '120',
    cadence: 'per month',
    description: 'For the devoted — rare micro-lots and private cuppings.',
    features: [
      'Rare micro-lot access',
      'Quarterly virtual cupping',
      'Concierge brew support',
      'Limited Gesha allocation',
    ],
    featured: false,
    cta: 'Join atelier',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'The most beautiful coffee experience I have ever had — online and in the cup. It feels like cinema.',
    name: 'Daniel R.',
    role: 'Product Designer',
  },
  {
    quote:
      'Aurora turned my morning into a ritual I actually look forward to. The clarity in every cup is unreal.',
    name: 'Chika A.',
    role: 'Creative Director',
  },
  {
    quote:
      'A brand that gets detail. Fast, gorgeous, and the coffee backs up every promise the site makes.',
    name: 'Arjun M.',
    role: 'Startup Founder',
  },
]

export const MARQUEE = [
  'Single Origin',
  'Direct Trade',
  'Small Batch',
  'Slow Roasted',
  'Carbon Neutral',
  'Specialty Grade',
]
