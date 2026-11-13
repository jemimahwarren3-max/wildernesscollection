// Demonstration content for THE WILDERNESS COLLECTION.
// Destinations use real, general geography. Lodges, rates and guest quotes are
// fictional portfolio content and are not real operating properties.
import type { ImageKey } from "./images";

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: ImageKey;
  bestTime: string;
};

export const destinations: Destination[] = [
  {
    slug: "zimbabwe",
    name: "Zimbabwe",
    tagline: "The thundering heart of the collection",
    description:
      "Home to Victoria Falls, the vast elephant herds of Hwange, the remote river wilderness of Mana Pools and the ancient granite hills of Matobo — Zimbabwe is the soul of this collection.",
    image: "victoriaFallsAerial",
    bestTime: "May to October",
  },
  {
    slug: "botswana",
    name: "Botswana",
    tagline: "Water, light and endless horizon",
    description:
      "The Okavango Delta's braided waterways and the salt-white expanse of the Kalahari make Botswana one of Africa's last great wildernesses.",
    image: "antelopeHerd",
    bestTime: "June to September",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    tagline: "Where the bushveld meets the coast",
    description:
      "From private game reserves bordering Kruger to the fynbos-covered mountains of the Cape, South Africa offers extraordinary range within a single journey.",
    image: "lionRoaring",
    bestTime: "Year-round; May to September for game viewing",
  },
  {
    slug: "zambia",
    name: "Zambia",
    tagline: "Walking safari country",
    description:
      "The birthplace of the walking safari, Zambia's Lower Zambezi and South Luangwa valleys offer an intimate, unhurried way to meet the wild.",
    image: "elephantRiver",
    bestTime: "May to October",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    tagline: "The great migration",
    description:
      "The Serengeti's endless plains and Ngorongoro's ancient crater are home to one of the last great wildlife spectacles on Earth.",
    image: "lionsResting",
    bestTime: "June to September; January to February for calving",
  },
];

export type Lodge = {
  slug: string;
  name: string;
  destination: string;
  location: string;
  description: string;
  image: ImageKey;
  gallery: ImageKey[];
  guestCapacity: string;
  rooms: string;
  fromRate: string;
};

export const lodges: Lodge[] = [
  {
    slug: "matobo-hills-house",
    name: "Matobo Hills House",
    destination: "Zimbabwe",
    location: "Matobo National Park, Zimbabwe",
    description:
      "A low, stone-and-thatch homestead settled among the balancing granite boulders of Matobo, where ancient rock art and leopard country meet.",
    image: "lodgePatio",
    gallery: ["lodgePatio", "bedroomCozy", "diningUnderTree"],
    guestCapacity: "Up to 12 guests",
    rooms: "6 suites",
    fromRate: "From $950 per person, per night (sample rate)",
  },
  {
    slug: "mana-river-house",
    name: "Mana River House",
    destination: "Zimbabwe",
    location: "Mana Pools National Park, Zimbabwe",
    description:
      "Set beneath ancient albida trees on the Zambezi floodplain, this riverfront house looks out over some of Africa's most undisturbed elephant country.",
    image: "elephantHerd",
    gallery: ["elephantHerd", "lodgeAerial", "infinityPool"],
    guestCapacity: "Up to 10 guests",
    rooms: "5 tented suites",
    fromRate: "From $1,050 per person, per night (sample rate)",
  },
  {
    slug: "okavango-tented-camp",
    name: "Okavango Tented Camp",
    destination: "Botswana",
    location: "Okavango Delta, Botswana",
    description:
      "Raised above the floodplain on a private concession, this intimate camp drifts between dry-season game drives and wet-season mokoro journeys.",
    image: "lodgeAerial",
    gallery: ["lodgeAerial", "bedroomSuite", "poolEvening"],
    guestCapacity: "Up to 16 guests",
    rooms: "8 suites",
    fromRate: "From $1,200 per person, per night (sample rate)",
  },
  {
    slug: "victoria-falls-pavilion",
    name: "Victoria Falls Pavilion",
    destination: "Zimbabwe",
    location: "Victoria Falls, Zimbabwe",
    description:
      "A quiet retreat above the Zambezi gorge, within reach of the falls' spray and roar, blending colonial-era elegance with contemporary African design.",
    image: "bedroomSuite",
    gallery: ["bedroomSuite", "diningCandlelit", "victoriaFallsRainbow"],
    guestCapacity: "Up to 24 guests",
    rooms: "12 rooms",
    fromRate: "From $780 per person, per night (sample rate)",
  },
];

export type Experience = {
  slug: string;
  name: string;
  description: string;
  image: ImageKey;
};

export const experiences: Experience[] = [
  {
    slug: "guided-safari",
    name: "Guided Safari",
    description: "Open-vehicle game drives led by Africa's finest trackers and guides.",
    image: "lionsResting",
  },
  {
    slug: "walking-safari",
    name: "Walking Safari",
    description: "An unhurried, on-foot encounter with the wilderness, Zambian-style.",
    image: "elephantRiver",
  },
  {
    slug: "private-dining",
    name: "Private Dining",
    description: "Candlelit tables beneath the stars, bush dinners and riverside breakfasts.",
    image: "diningCandlelit",
  },
  {
    slug: "honeymoon-escapes",
    name: "Honeymoon Escapes",
    description: "Secluded suites, private plunge pools and journeys made for two.",
    image: "infinityPool",
  },
  {
    slug: "photography-safaris",
    name: "Photography Safaris",
    description: "Specialist vehicles and guides for travellers chasing the perfect frame.",
    image: "lionRoaring",
  },
  {
    slug: "family-adventures",
    name: "Family Adventures",
    description: "Multi-generational journeys designed around wonder, safely shared.",
    image: "elephantHerd",
  },
];

export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: ImageKey;
  readTime: string;
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "walking-with-elephants-mana-pools",
    title: "Walking With Elephants in Mana Pools",
    category: "Safari Stories",
    excerpt:
      "On the Zambezi floodplain, a morning on foot among the ana trees reframes what it means to share space with giants.",
    image: "elephantHerd",
    readTime: "6 min read",
  },
  {
    slug: "the-light-over-matobo",
    title: "The Light Over Matobo",
    category: "Destinations",
    excerpt:
      "Granite hills older than memory, and the particular quality of light that draws painters and pilgrims alike.",
    image: "lodgePatio",
    readTime: "5 min read",
  },
  {
    slug: "a-case-for-slow-safari",
    title: "A Case for Slow Safari",
    category: "Travel Guides",
    excerpt:
      "Why the best wildlife encounters often come from staying still — and staying longer — in one extraordinary place.",
    image: "antelopeHerd",
    readTime: "4 min read",
  },
];

export type GuestStory = {
  quote: string;
  name: string;
  detail: string;
};

export const guestStories: GuestStory[] = [
  {
    quote:
      "We arrived expecting a safari and left with something closer to a reset. Every detail, down to the light at breakfast, felt considered.",
    name: "A. & J. Fontaine",
    detail: "Matobo Hills House, sample guest story",
  },
  {
    quote:
      "Our guide knew the valley the way most people know their own street. Four days on foot and we never once felt rushed.",
    name: "R. Okafor",
    detail: "Mana River House, sample guest story",
  },
  {
    quote:
      "The kind of quiet luxury that doesn't announce itself. We are already planning our return.",
    name: "S. & T. Lindqvist",
    detail: "Okavango Tented Camp, sample guest story",
  },
];

export const siteConfig = {
  name: "The Wilderness Collection",
  tagline: "Find Yourself Somewhere Extraordinary.",
  description:
    "Discover a collection of extraordinary places, meaningful encounters and unforgettable journeys across Africa.",
  nav: [
    { label: "Destinations", href: "/destinations" },
    { label: "Our Lodges", href: "/lodges" },
    { label: "Experiences", href: "/experiences" },
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
  ],
  ctaLabel: "Plan Your Journey",
  ctaHref: "/plan-your-journey",
};
