export interface CoverageType {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  whoNeeds: string[];
  whatCovers: string[];
  icon: string;
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'building-structure',
    name: 'Building & Structure Insurance',
    shortDesc: 'Covers the physical structure of your tiny home against fire, storm, flood, earthquake, and accidental damage.',
    description: 'Building and structure insurance is the cornerstone cover for any tiny home owner. Whether your tiny home is fixed on a foundation or built on a trailer, the structure itself — walls, roof, windows, doors, plumbing, electrical systems, and fixed fittings — needs to be insured at full replacement cost. Standard house insurance policies often exclude tiny homes or apply restrictive conditions; specialist tiny home insurance is designed to cover your specific build type, construction materials, and living situation.',
    whoNeeds: ['Tiny home owners on private land', 'Tiny house on wheels (THOW) owners', 'Container home owners', 'Off-grid tiny home dwellers', 'Tiny homes in tiny home villages or communities', 'Park home and relocatable home owners'],
    whatCovers: ['Fire, smoke, and explosion damage', 'Storm, hail, and flood damage', 'Earthquake and natural disaster', 'Accidental structural damage', 'Vandalism and malicious damage', 'Burst pipes and water damage', 'Electrical fault damage', 'Solar panel and off-grid system damage'],
    icon: '🏠',
  },
  {
    slug: 'contents-insurance',
    name: 'Contents Insurance',
    shortDesc: 'Protects your personal belongings inside your tiny home — furniture, electronics, appliances, clothing, and more.',
    description: 'Living in a tiny home doesn\'t mean your possessions are worth any less. Contents insurance covers everything you\'d take with you if you moved out — furniture, electronics, kitchen appliances, clothing, tools, bicycles, and valuables. Because tiny homes are often in non-standard locations (private land, rural settings, campgrounds) or on wheels, a specialist adviser will ensure your contents cover actually responds when you need it, without exclusions for your living arrangement.',
    whoNeeds: ['All tiny home residents', 'Tiny home owners renting out their home', 'Tiny home owners in tiny home communities', 'Off-grid living residents', 'Container home occupants'],
    whatCovers: ['Furniture and household goods', 'Electronics and appliances', 'Clothing and personal effects', 'Bicycles and sports equipment', 'Tools and equipment', 'Portable valuables (cameras, jewellery)', 'Food spoilage after power failure', 'High-value items (by endorsement)'],
    icon: '📦',
  },
  {
    slug: 'transit-towing-cover',
    name: 'Transit & Towing Cover',
    shortDesc: 'Specialist cover for tiny homes on wheels — protecting your home while it\'s being relocated or towed between sites.',
    description: 'A tiny house on wheels (THOW) faces unique risks that standard building or caravan insurance simply wasn\'t designed for. Transit and towing cover insures your THOW against damage that occurs during transport — whether you\'re relocating to a new site, attending a tiny home showcase, or having your home moved by a professional. This cover typically works alongside your building insurance to provide seamless protection whether your tiny home is stationary or in motion.',
    whoNeeds: ['Tiny house on wheels (THOW) owners', 'Mobile tiny home owners', 'THOW owners who relocate seasonally', 'Tiny homes transported to events or shows', 'Anyone having their tiny home professionally relocated'],
    whatCovers: ['Structural damage during towing', 'Accidental damage while in transit', 'Overturning or rolling during transport', 'Collision damage to the home', 'Road accident damage', 'Loading and unloading damage', 'Theft of THOW while in transit'],
    icon: '🚛',
  },
  {
    slug: 'public-liability',
    name: 'Public Liability',
    shortDesc: 'Protects you if a visitor is injured at your tiny home or you accidentally damage someone else\'s property.',
    description: 'Public liability insurance is essential for any property owner, and tiny home owners are no exception. If a friend, tradesperson, or visitor is injured at your property — or if your tiny home accidentally causes damage to a neighbour\'s property (a fire spreading, a THOW rolling, water damage) — you could face a significant legal claim. Public liability provides both the legal defence and compensation costs, so a single incident doesn\'t put your financial wellbeing at risk.',
    whoNeeds: ['All tiny home owners', 'Tiny home owners hosting Airbnb or short-stay guests', 'THOW owners at campgrounds and holiday parks', 'Tiny home village residents', 'Off-grid property owners with visitors'],
    whatCovers: ['Visitor injury on your property', 'Accidental damage to neighbours\' property', 'Legal defence costs', 'Compensation payments', 'Fire or water damage to adjacent properties', 'Liability as a landlord (short-stay or long-term)'],
    icon: '🛡️',
  },
  {
    slug: 'off-grid-systems',
    name: 'Off-Grid Systems Cover',
    shortDesc: 'Specialist cover for solar panels, battery banks, rainwater collection, and other off-grid infrastructure.',
    description: 'Many tiny home owners invest significantly in off-grid systems — solar panels, battery storage, composting toilets, rainwater tanks, and greywater systems. These systems are often excluded from or undervalued by standard home insurance policies. Specialist off-grid cover ensures your energy and water infrastructure is covered for damage, failure, theft, and storm damage — protecting the investment that makes your tiny home genuinely self-sufficient.',
    whoNeeds: ['Off-grid tiny home owners', 'Tiny homes with solar energy systems', 'Homes with battery storage systems (Tesla Powerwall, etc.)', 'Rainwater collection and greywater system owners', 'Rural tiny home owners not connected to the grid'],
    whatCovers: ['Solar panel damage and theft', 'Battery bank damage or failure', 'Inverter and charge controller damage', 'Rainwater tank and pump damage', 'Composting toilet systems', 'Greywater treatment systems', 'Storm damage to off-grid infrastructure'],
    icon: '☀️',
  },
  {
    slug: 'loss-of-use',
    name: 'Loss of Use / Alternative Accommodation',
    shortDesc: 'Covers the cost of temporary accommodation if your tiny home is damaged and uninhabitable while repairs are carried out.',
    description: 'When your tiny home is seriously damaged — by fire, flood, earthquake, or another insured event — where do you go while repairs are completed? Loss of use insurance covers the cost of temporary accommodation (rental, hotel, or campground fees) and additional living expenses during the repair period. For tiny home owners, who may be living in a non-standard location with limited nearby alternatives, this cover is particularly valuable.',
    whoNeeds: ['Full-time tiny home residents', 'Tiny home owners in rural or remote locations', 'Off-grid dwellers with limited rental alternatives nearby', 'Tiny home owners with no backup accommodation'],
    whatCovers: ['Temporary rental accommodation costs', 'Hotel or motel costs during repair period', 'Campground fees for THOW owners', 'Additional living expenses', 'Storage costs for contents during repair', 'Pet boarding costs'],
    icon: '🏕️',
  },
  {
    slug: 'landlord-insurance',
    name: 'Tiny Home Landlord Insurance',
    shortDesc: 'Purpose-built cover if you rent out your tiny home — protecting you against tenant damage, rent default, and liability.',
    description: 'An increasing number of tiny home owners rent their home through long-term tenancy agreements, Airbnb, or short-stay platforms. Standard residential landlord insurance policies often exclude non-standard dwellings. Tiny home landlord insurance is specifically designed to cover your rental income, protect against tenant-caused damage (beyond normal wear and tear), and provide liability cover for tenant or guest injury.',
    whoNeeds: ['Tiny home owners renting to long-term tenants', 'Tiny home Airbnb hosts', 'Owners of tiny homes in rental villages', 'THOW owners renting to travellers or seasonal workers', 'Anyone earning rental income from a tiny home'],
    whatCovers: ['Malicious tenant damage', 'Accidental damage by tenants or guests', 'Loss of rental income (while repairs are carried out)', 'Rent default by tenants', 'Legal costs for tenancy disputes', 'Liability for tenant or guest injury'],
    icon: '🔑',
  },
];
