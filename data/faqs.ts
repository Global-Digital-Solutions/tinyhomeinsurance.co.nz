export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // General
  {
    category: 'General',
    question: 'Can I get insurance for a tiny home in New Zealand?',
    answer: 'Yes — tiny home insurance is available in New Zealand, but it requires a specialist approach. Standard house insurance policies from major insurers often exclude or restrict cover for tiny homes, particularly tiny houses on wheels (THOWs), container homes, and off-grid dwellings. Our advisers work with insurers who understand the tiny home market and can arrange appropriate cover for your specific build, location, and living situation.',
  },
  {
    category: 'General',
    question: 'What is classed as a tiny home for insurance purposes?',
    answer: 'For insurance purposes, a tiny home is typically defined as a compact dwelling under 50 square metres. This includes tiny houses on wheels (THOWs) built on trailer platforms, container homes (converted shipping containers), compact fixed-foundation homes, park homes, relocatable homes, and off-grid cabins used as primary residences. Each type has different risk profiles and may require different insurance structures.',
  },
  {
    category: 'General',
    question: 'Why can\'t I just use standard house insurance for my tiny home?',
    answer: 'Standard home insurance policies are designed for conventional houses — they\'re written with assumptions about construction type, foundation, location, and use that don\'t fit tiny homes. Common issues include: exclusions for homes on wheels or without a fixed foundation; restrictions on non-standard materials (recycled timber, corten steel, polycarbonate); cover gaps for off-grid systems like solar and rainwater; and no provision for transit cover during relocation. Specialist tiny home insurance fills these gaps.',
  },
  {
    category: 'General',
    question: 'Is tiny home insurance expensive?',
    answer: 'The cost of tiny home insurance depends on several factors: the replacement value of your home, your location and weather exposure, whether your home is on wheels or fixed, your security arrangements, and the covers you select. Because tiny homes are typically lower in replacement value than conventional houses, premiums can be surprisingly affordable — though specialist cover will cost more than a generic policy that may not actually respond at claim time. Our advisers compare options to find the right balance of cover and cost.',
  },
  // Building & Structure
  {
    category: 'Building & Structure',
    question: 'Does my tiny home need to be on a permanent foundation to be insured?',
    answer: 'No. Specialist tiny home insurers can cover both fixed-foundation tiny homes and tiny houses on wheels (THOWs). The key is ensuring your adviser knows the exact nature of your dwelling so the policy is written appropriately. A THOW typically needs both building cover (when stationary) and transit cover (when being moved), while a fixed tiny home may be insurable under a modified residential or commercial property policy.',
  },
  {
    category: 'Building & Structure',
    question: 'What if my tiny home is built from non-standard materials?',
    answer: 'Many tiny homes use materials that aren\'t typical in conventional construction — recycled timber, polystyrene panels, corten steel, corrugated iron, polycarbonate, or composite materials. Some insurers restrict or exclude non-standard construction; others specialise in it. Our advisers will match you with an insurer who can cover your specific build at full replacement cost, and ensure the sum insured reflects the actual cost to rebuild — which for a custom tiny home can be surprisingly high per square metre.',
  },
  {
    category: 'Building & Structure',
    question: 'Does building insurance cover earthquake damage in New Zealand?',
    answer: 'New Zealand sits on the Pacific Ring of Fire, making earthquake cover a priority. EQC (Earthquake Commission) provides a base level of cover for residential land and buildings under the Natural Hazards Insurance Act 2023, but EQC cover has caps and doesn\'t apply to all tiny home types — particularly THOWs and some non-standard dwellings. Your specialist insurer will clarify how EQC interacts with your policy and ensure you have adequate top-up cover for the full replacement cost of your home.',
  },
  {
    category: 'Building & Structure',
    question: 'What sum insured should I use for my tiny home?',
    answer: 'The sum insured should reflect the full cost to rebuild your tiny home from scratch — not its market value or purchase price. For a custom-built tiny home, this includes materials, labour, design, consenting fees, and site preparation. Many tiny homeowners underinsure because tiny homes are often cheaper to purchase than to rebuild. Your adviser can help you calculate an appropriate sum insured, and some insurers offer agreed-value policies that guarantee the payout in a total loss.',
  },
  // THOW Specific
  {
    category: 'Tiny Houses on Wheels',
    question: 'Do I need special insurance to tow my tiny house on wheels?',
    answer: 'Yes. When your THOW is being towed, your standard car or trailer insurance likely won\'t provide adequate cover for the home itself, and your static building insurance may have a transit exclusion. You\'ll typically need: transit cover for the THOW structure while being moved; appropriate towing vehicle insurance; and potentially a special-type vehicle permit depending on the dimensions of your THOW. Our advisers can help arrange the right combination of covers for towing.',
  },
  {
    category: 'Tiny Houses on Wheels',
    question: 'Does my THOW need a WOF or CoF?',
    answer: 'In New Zealand, tiny houses on wheels are typically classified as heavy trailers if they exceed 3,500kg GVM. Heavy trailers require a Certificate of Fitness (CoF) rather than a Warrant of Fitness (WoF). Your THOW must comply with the dimensions permitted under the Vehicle Dimensions and Mass rule (a maximum of 2.55m wide, 4.25m high, and 12.5m long for a trailer). Compliance with these requirements is often a condition of obtaining transit insurance.',
  },
  {
    category: 'Tiny Houses on Wheels',
    question: 'Can I insure my THOW at a campground or holiday park?',
    answer: 'Yes. Many THOW owners live or holiday at campgrounds and holiday parks. When your THOW is parked on a leased or licensed site, it should be covered by your building insurance as long as your policy doesn\'t have a specific location restriction. Public liability is particularly important at campgrounds, where your home is in close proximity to other people\'s property. Let your adviser know if you move sites regularly, as some policies require notification of relocation.',
  },
  // Off-Grid
  {
    category: 'Off-Grid Living',
    question: 'Are solar panels and battery storage covered under tiny home insurance?',
    answer: 'It depends on the policy. Some building insurance policies automatically include permanently-fixed solar panels, but battery storage systems (such as Tesla Powerwall or similar) may be treated separately. Off-grid systems including rainwater tanks, composting toilets, and greywater treatment systems are often excluded from standard policies. A specialist tiny home adviser will ensure your off-grid infrastructure is specifically covered — either under your building policy or through a dedicated off-grid systems endorsement.',
  },
  {
    category: 'Off-Grid Living',
    question: 'I live off-grid in a remote location — does that affect my insurance?',
    answer: 'Location can affect both your premium and the availability of cover. Remote locations may attract higher premiums due to longer response times for emergency services (fire, for example), greater exposure to weather events, and higher rebuild logistics costs. Some insurers restrict cover in very remote areas. However, specialist tiny home insurers are experienced with off-grid rural living and can typically arrange appropriate cover — it\'s a matter of disclosing your location and situation accurately to your adviser.',
  },
  // Claims
  {
    category: 'Claims',
    question: 'What happens if my tiny home is a total loss?',
    answer: 'If your tiny home is a total loss (destroyed by fire, flood, or another insured event), your insurer will pay out the sum insured under your policy. For custom-built tiny homes, it\'s important that the sum insured reflects the true replacement cost — not market value. Some policies offer agreed value, guaranteeing the insured sum is paid without depreciation deductions. Your adviser will help you set the right sum insured at inception and review it periodically as rebuild costs change.',
  },
  {
    category: 'Claims',
    question: 'How long does a tiny home insurance claim take?',
    answer: 'Claim timelines vary depending on the nature of the loss, the complexity of the damage, and the insurer\'s processes. Simple claims (contents theft, minor damage) can be settled within days to a few weeks. Major structural claims may take longer, particularly if building consents are required for repairs or if there are EQC interactions. Your adviser acts as your advocate throughout the claims process — a significant advantage of using a broker over direct insurance.',
  },
  // Working with an Adviser
  {
    category: 'Working with an Adviser',
    question: 'Why use a broker instead of going direct to an insurer?',
    answer: 'For tiny homes, using a specialist broker is particularly valuable. The tiny home insurance market in New Zealand is thin — few insurers offer appropriate cover, and policy wordings vary significantly. A broker who understands the market knows which insurers will actually respond at claim time for your specific type of tiny home, can negotiate on your behalf, and acts as your advocate throughout the claims process. There\'s no additional cost to you for using a broker — they\'re paid by commission from the insurer.',
  },
  {
    category: 'Working with an Adviser',
    question: 'How quickly will I hear from an adviser after submitting a quote request?',
    answer: 'Our NZ-licensed insurance advisers aim to respond to all enquiries within one business day. For straightforward enquiries, you\'ll typically receive a call or email within a few hours during business hours. Our advisers are based in New Zealand and understand the local market, council requirements, and the specific challenges that tiny home owners face when obtaining insurance.',
  },
  {
    category: 'Working with an Adviser',
    question: 'Is the quote and consultation free?',
    answer: 'Yes — requesting a quote and speaking with one of our advisers is completely free and without obligation. Our advisers are remunerated by commission from insurers, so there\'s no direct cost to you for the advice and quote comparison service. You\'re under no obligation to proceed with any quote you receive.',
  },
];
