export interface CoverageContent {
  slug: string;
  intro: string;
  fullDescription: string;
  notCovered: string[];
  nzContext: string;
  howToChoose: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  relatedBlogSlugs: string[];
}

export const coverageContent: CoverageContent[] = [
  {
    slug: 'building-structure',
    intro: `Building and structure insurance is the foundation of any comprehensive tiny home insurance package. This cover protects the physical structure of your home — the shell, roof, walls, windows, doors, plumbing, electrical systems, and permanently fixed fittings — against the full range of insurable perils: fire, storm, flood, earthquake, theft, vandalism, and accidental damage. For tiny home owners, specialist building insurance is essential because mainstream home insurers simply aren't set up to cover non-standard construction, homes on wheels, or off-grid dwellings. Whether your tiny home sits on a private foundation, wheels, or is a container conversion, specialist cover ensures your structure is protected at full replacement cost, so if the worst happens, you can rebuild.`,

    fullDescription: `Building and structure insurance for tiny homes works differently from traditional house insurance. While a standard home insurance policy is designed around a single-storey or two-storey brick-and-tile suburban house on a concrete foundation with a rateable value, your tiny home may be a transportable dwelling on a steel chassis, a container conversion with corten steel cladding, a polystyrene-panel construction, or a hybrid of recycled and modern materials.

Specialist tiny home building insurance starts with an accurate sum insured — the amount it would cost to rebuild your home from scratch, including materials, labour, and any specialised tradespeople required (e.g., specialist joiners, off-grid system installers). This is not what you paid for the home; it's what it would cost to reconstruct it today.

The policy covers the building structure as a unit — not individual components. So if your kitchen burns down, the entire cost of rebuilding that room (walls, plumbing, electrics, cabinetry, appliances) is covered as part of the overall structural repair, provided the damage is caused by an insured peril.

Most specialist policies include accidental damage cover, which means unintentional damage from incidents like a water pipe burst, an electrical fire, or a towing accident causing structural impact are covered. Some policies restrict accidental damage for specific scenarios (like collision damage during transit for a stationary THOW), so it's essential to understand what your policy considers "accidental."

For tiny homes on wheels, building cover applies when the home is stationary on a declared site. Once the home is in transit, you shift to transit cover — a separate component of your policy. For off-grid tiny homes, building cover should explicitly include damage to fixed off-grid systems (solar panels, battery banks, charge controllers, inverters) that form part of the structural installation.`,

    notCovered: [
      'Wear and tear, gradual deterioration, or lack of maintenance (e.g., roof leaks caused by deferred maintenance)',
      'Damage from pests (rodents, termites) unless sudden and accidental',
      'Damage from faulty design, poor construction, or defective materials supplied at the time of build',
      'Damage occurring while the home is in transit (for THOW — covered separately under transit cover)',
      'Damage from illegal activity or while the home is unoccupied for extended periods without declared occupancy suspension',
      'Costs arising from lack of building consent or non-compliance with Building Code (though the insurance itself is not invalidated)',
      'Personal liability or injury claims (covered under public liability, not building)',
      'Consequential losses like loss of rental income (covered separately under loss of use if included)',
    ],

    nzContext: `In New Zealand, building and structure insurance sits alongside the Natural Hazards Insurance Act 2023, which established the Natural Disaster Fund (replacing the Earthquake Commission fund from 1 April 2023). For tiny home owners with a registered address and separate rateable value, building cover may be subject to the Act's requirement that you also hold EQC or equivalent natural disaster cover for earthquake and certain natural hazards.

However, many tiny homes — especially THOWs on rural private land or off-grid dwellings without a street address — may not qualify for EQC registration. In these cases, your specialist building policy should explicitly cover earthquake, landslip, and storm, as these are not automatically covered under the Natural Disaster Fund for unregistered dwellings.

The Building Code (NZS 3604 and related standards) sets out minimum requirements for new builds, but many tiny homes use alternative construction methods or materials that fall outside standard Code compliance. Your insurer will assess your home's construction at the time of underwriting. If your tiny home was built before 2023 without building consent (which was allowable for dwellings under 70m² until the regulatory exemption ended), disclosure of this fact is essential — non-disclosure could affect claim settlement.

Healthy Homes Standards (insulation, ventilation, heating, moisture management, and pool safety — introduced in 2023 for rentals) don't directly affect insurance cover, but if you're renting out your tiny home, your landlord liability cover should reflect compliance with these standards. Non-compliant rental properties may face higher premiums or exclusions.`,

    howToChoose: `Choosing the right building cover for your tiny home starts with an accurate sum insured. Get quotes from at least two specialists and ask each to explain how they calculated the sum insured. A good adviser will consider not just the size of your home (m²) but also the specification: standard finishes cost less to rebuild than high-spec joinery, custom installations, or luxury materials. If you have receipts or documentation from your build, provide them.

Next, confirm the cover explicitly accepts your home type: THOW (with conditions on what "stationary" means — does it include moving within a campground?), off-foundation builds, container conversions, or whatever applies. Ask whether accidental damage is included as standard or by endorsement.

For off-grid homes, ask specifically how the policy treats solar panels, battery systems, and rainwater infrastructure. Are they covered under the building policy, or do they require a separate off-grid systems endorsement? Understanding this distinction can mean the difference between full recovery and a partial claim if your battery bank is damaged in a fire.

Finally, consider your location. A tiny home on Waiheke Island, for example, may face different premium loadings or exclusions around water damage or storm risk compared to one in South Canterbury. Your adviser should explain any loadings or exclusions that apply to your specific location and why.`,

    faqs: [
      {
        q: `If my tiny home is worth $150,000 but it would cost $250,000 to rebuild, what sum insured should I have?`,
        a: `The sum insured must reflect the full cost to rebuild your home at today's prices, including materials, labour, and site costs. In your case, $250,000 is the correct figure. Insuring for only $150,000 (what you paid) leaves you underinsured and vulnerable to a claim shortfall if damage occurs. Your adviser can help you get an accurate rebuild quote from specialist tiny home builders or contract estimators.`,
      },
      {
        q: `My tiny home is on wheels in a park, and my insurer says they only cover it "while stationary." Does that mean I can't move it?`,
        a: `No, it means building cover applies only when the home is stationary on a declared site. When you're moving the home between parks or locations, you need transit cover to take over. Many policies make the switch automatic, but it's essential to declare your site clearly to your insurer and notify them of any planned relocations. Some parks have quiet periods where moves are permitted; check your lease and inform your insurer before moving.`,
      },
      {
        q: `Is earthquake damage covered under my tiny home building policy, or do I need EQC?`,
        a: `This depends on your home's status. If you have a registered address and separate rateable value, you may be eligible for the Natural Disaster Fund (the NZ government scheme replacing EQC from April 2023). Your specialist insurer will advise whether you qualify. If you don't have a registered address or rateable value, earthquake cover must be included in your specialist building policy. Always confirm explicitly with your insurer whether earthquake damage is covered.`,
      },
      {
        q: `My tiny home was built without building consent before the rules changed. Does this affect my insurance?`,
        a: `Non-disclosure of building consent status could affect your claim. When you apply for insurance, you must declare whether your home has building consent or, if not, why (e.g., it was built before regulatory changes). If your home was built under the previous exemption for dwellings under 70m², this is generally acceptable. But don't assume — always disclose fully. A good adviser will help you explain the consent situation to your insurer.`,
      },
    ],

    relatedSlugs: ['contents-insurance', 'loss-of-use', 'off-grid-systems'],
    relatedBlogSlugs: ['tiny-home-insurance-nz-guide', 'tiny-home-building-consent-exemption-2026', 'tiny-home-earthquake-insurance-nz'],
  },

  {
    slug: 'contents-insurance',
    intro: `Contents insurance protects everything inside your tiny home — your furniture, electronics, clothing, tools, appliances, valuables, and personal possessions. While tiny homes are compact, residents typically own as many personal belongings as anyone else; the difference is that when a single insurable event (like a fire or flood) occurs, your entire inventory is at risk in one confined space. Specialist contents insurance for tiny homes ensures your belongings are properly valued and covered regardless of whether you live in a fixed tiny home, a THOW, or an off-grid dwelling. This cover is essential for renters and owners alike.`,

    fullDescription: `Contents insurance works on a straightforward principle: it covers items you'd take with you if you moved out. This includes furniture (beds, sofas, dining tables, shelving), electronics (TV, laptop, tablet, gaming equipment), kitchen appliances (fridge, stove, microwave, coffee machine), clothing and personal effects, tools and equipment, sports gear, and valuables like cameras, jewellery, and musical instruments.

Your contents are typically covered under an "all-risks" policy, meaning they're insured against loss or damage from any cause unless specifically excluded. This includes theft, fire, flood, storm, accidental breakage, and vandalism. Some items may require specific endorsement — high-value items like engagement rings, artwork, or electronics — to ensure they're covered for their full replacement value.

For tiny home owners, the key advantage of specialist contents cover is that it's designed around your specific living situation. If you live in a THOW at a campground, standard home contents policies might exclude cover for "non-permanent residences" or "caravans." A specialist policy is underwritten specifically for tiny home living, whether you're parked on rural land, in a tiny home village, or at a holiday park.

Indemnity versus replacement cost is an important distinction. Some policies provide indemnity (depreciated value), while others provide replacement-as-new cover. Replacement-as-new is significantly better and is standard for specialist tiny home contents. This means if your five-year-old furniture is damaged, the insurer covers the cost of new furniture of equivalent quality, not a depreciated amount.

For items in common areas (if you live in a tiny home village with shared facilities), clarify whether community property is covered under your individual contents policy or under the village's collective policy.`,

    notCovered: [
      'Wear and tear, fading, or gradual deterioration of items',
      'Damage to items from pets (unless pet-related damage is specifically endorsed)',
      'Valuables left unattended in vehicles or common areas (typically covered only in your locked home)',
      'Business stock or equipment (unless you have a home-based business endorsement)',
      'Money and documents (typically limited to a small amount; important documents are excluded)',
      'Items belonging to guests or temporary occupants (unless you have landlord cover)',
      'Damage caused by inherent defect or faulty manufacture',
      'Damage from extremes of temperature or humidity (unless caused by an insured peril like a burst pipe)',
      'Items left unoccupied for extended periods (usually defined as 60+ days without declared suspension)',
    ],

    nzContext: `Contents insurance in New Zealand has historically been less tightly regulated than building insurance, but the Financial Markets Conduct Act 2013 requires all insurers to provide clear information about what is and isn't covered. When you buy contents insurance for a tiny home, the insurer must provide you with a product information document explaining coverage, limits, exclusions, and any conditions.

For renters in tiny homes (whether in a village, park, or someone else's land), contents insurance is essential. Your landlord's building insurance covers the structure, not your belongings. Contents cover also provides public liability protection if you accidentally damage the landlord's property (e.g., a fire in your kitchen spreads to the structure).

If you're renting out your tiny home to tenants or guests, contents cover for your own possessions (appliances, furnishings that stay with the home) might be included under landlord insurance rather than personal contents cover. Clarify this with your adviser; coverage can overlap, but you don't want gaps.

The January 2026 building consent exemption (dwellings under 70m²) doesn't directly affect contents insurance, but if you own a tiny home built under this exemption, you may be in a non-standard property type, and your insurer may apply specific underwriting conditions or endorsements to contents cover.`,

    howToChoose: `Start by doing an inventory of your belongings. Walk through your tiny home room by room and list (roughly) what's there: furniture, electronics, clothing, kitchen items, tools, hobby equipment. This exercise helps you understand what you need to declare and ensures you're not underinsuring.

Estimate the replacement-as-new value of your inventory. For a modest tiny home with standard furniture, this might be $30,000–$50,000. If you have high-spec appliances, lots of electronics, or collectibles, it could be significantly higher. Use online pricing (Noel Leeming, Bunnings, Harvey Norman) to estimate replacement cost, not what you paid.

Ask your adviser whether specific valuable items (jewellery, cameras, art, collectibles) need separate endorsement or declaration. For a $5,000 camera or engagement ring, explicit declaration is important.

Confirm the sum insured covers your total inventory at replacement cost. Some policies offer a sum insured option where you declare a total amount, and the insurer covers items up to that limit. Others require you to list high-value items separately. Understand which approach your policy uses.

Finally, clarify how the policy treats temporary occupancy. If you're away from your tiny home for extended periods (e.g., a THOW owner travelling for a month), you need to understand whether cover continues and any requirements for the home to be unoccupied.`,

    faqs: [
      {
        q: `I live in a tiny home village, and my furniture is built-in. Is this covered under contents or building insurance?`,
        a: `Built-in furniture is typically covered under building insurance (as it's permanently fixed to the structure), while removable furniture and belongings are covered under contents. Your village landlord may own the built-in items, in which case they're covered under the landlord's building policy, not yours. Check your village lease to confirm what you own and what remains the landlord's responsibility.`,
      },
      {
        q: `My THOW contents policy excludes items in my carport or outdoor areas. Can I extend cover to my outdoor seating?`,
        a: `Yes, most policies allow outdoor items to be covered by endorsement, though they may be subject to different conditions or sub-limits. Ask your adviser whether outdoor furniture, bicycles, and garden items can be added to your cover. Usually, there's an extra premium, and theft from unattended outdoor areas may have specific exclusions.`,
      },
      {
        q: `What happens to my contents insurance if I move my THOW to a new location?`,
        a: `You must notify your insurer of any change in location. If you're moving within New Zealand, the insurer will typically confirm cover continues (possibly with a small adjustment to premium for location risk). When you move, building cover pauses and transit cover activates. Once you reach your new site, you notify the insurer again and building cover resumes. Your contents cover should continue throughout, provided you notify of the move.`,
      },
      {
        q: `I have a home-based business. Are my work tools and equipment covered under contents insurance?`,
        a: `Standard contents policies typically exclude business equipment and stock. If you have a home-based business (e.g., freelance design work, artisan crafts), ask your adviser about a home-business endorsement. This extends cover to business equipment, tools, and inventory. You may also need business liability cover, which is separate from contents insurance.`,
      },
    ],

    relatedSlugs: ['building-structure', 'public-liability', 'landlord-insurance'],
    relatedBlogSlugs: ['tiny-home-insurance-nz-guide', 'tiny-home-contents-insurance-nz', 'tiny-home-renting-airbnb-insurance'],
  },

  {
    slug: 'transit-towing-cover',
    intro: `Transit and towing cover protects a tiny home on wheels while it's being relocated — whether you're moving to a new site, attending a showcase, or having the home professionally transported. This is a crucial and often-overlooked cover type for THOW owners. Most standard building insurance explicitly excludes damage that occurs while the home is in transit, and caravan or trailer insurance doesn't provide adequate coverage for a full-time dwelling. Specialist transit cover fills this gap, ensuring your THOW is protected from the moment the handbrake is released until it's stationary at its new site.`,

    fullDescription: `Transit cover for a tiny home on wheels operates under a different set of risk principles than building cover. When your THOW is being towed along a New Zealand road — potentially for several hours or days — it's exposed to unique risks: overturning on a corner, collision with another vehicle, jackknifing if towing incorrectly, weather damage while in motion, and theft from a rest stop.

Standard building insurance typically excludes transit because the risk profile is fundamentally different: you're no longer managing a stationary residential property; you're operating a mobile asset in traffic. Transit cover is designed specifically for these mobile risks.

The cover typically includes structural damage from towing accidents, overturning or rolling during transport, collision damage to the home's structure, road accident damage (impact from another vehicle), accidental damage that occurs while the home is in motion, loading and unloading damage (if using professional movers), and theft of the THOW while in transit (though this is usually covered only if the home is left unattended for short periods, not overnight without security).

For THOW owners in New Zealand, it's essential to understand that transit cover usually requires compliance with NZTA Road User Charges Act requirements. Your THOW must have a valid Warrant of Fitness (WoF) or Certificate of Fitness (CoF) and be registered and insured as a mobile unit for road use. Transit cover typically doesn't apply if you're towing with an unregistered or unfit unit — so maintaining your THOW's road-legal status is a precondition of cover.

Most policies allow periodic moves (e.g., quarterly site changes, annual migration between seasons) to be covered as continuous transit, but they exclude permanent relocation or continuous travel. If you're planning to tow your THOW to Australia or undertake an extended journey, you'll need to discuss this with your insurer as standard NZ transit cover terminates at the border.`,

    notCovered: [
      'Damage to the towing vehicle (your truck, car, or tow vehicle) — you need separate vehicle insurance for the tow vehicle',
      'Damage caused by incorrect or unlawful towing (e.g., towing with an unregistered or unfit tow vehicle, exceeding legal weight limits)',
      'Damage from wear and tear, vibration, or normal transit stress',
      'Damage occurring while the home is being towed illegally (without WoF/CoF, excess load, unsafe rigging)',
      'Damage from the THOW breaking down or mechanical failure (covered under roadside assistance/breakdown insurance, not transit)',
      'Cover extending outside New Zealand borders',
      'Damage while the home is hitched but the tow vehicle is parked (this reverts to building cover once the home is stationary)',
      'Theft from an unattended THOW at a rest stop for extended periods (usually excluded after 12 hours)',
    ],

    nzContext: `In New Zealand, a THOW on a registered trailer chassis with wheels is classified as a vehicle for Road User Charges Act purposes. This means:

1. Your THOW must have a valid Certificate of Fitness (CoF) if it exceeds certain weight or dimension thresholds, or a Warrant of Fitness (WoF) if it's under certain specifications. These are issued by an approved CoF/WoF inspector (usually a mechanic or certified vehicle inspector) and must be renewed annually.

2. Your THOW must be registered with the NZ Transport Agency (NZTA) and have a registration plate and rego disk. The rego tax is based on weight and unladen weight rating.

3. The tow vehicle pulling your THOW must also have a current WoF/CoF and be registered.

4. You must comply with Land Transport Rules around dimensions, weight distribution, and towing speeds (usually 90 km/h maximum for towing a THOW).

Transit cover is contingent on all these road-legal requirements being met. If you're stopped by the police and found to be towing without a valid CoF or with an unsafe load, your insurer may deny a transit claim on the grounds of breach of law.

The NZTA website provides detailed information on CoF/WoF requirements for THOWs. Most approved inspectors in regional centres can conduct these assessments; costs typically range from $200–$400 for a CoF.`,

    howToChoose: `If you own a THOW, transit cover is non-negotiable. When your adviser quotes for your policy, confirm that transit cover is included and ask specifically what events it covers (structural damage, collision, rollover, theft) and what the policy requires of you (valid CoF/WoF, registered vehicle, lawful towing).

Understand the frequency cap: can you move your THOW 12 times per year, or are you limited to fewer moves? If you're planning seasonal migration (e.g., Northland in winter, South Island in summer), ensure the policy allows this.

Ask about the geographic scope: does transit cover apply anywhere in New Zealand, or are there excluded regions? Some insurers may exclude high-risk routes or areas with poor road conditions.

If you're using a professional THOW transport company, ask your insurer whether cover applies while the transport company is towing, or whether you need to be present. Some policies require you to be inside the home; others apply regardless.

Finally, confirm the sum insured under transit cover is the same as under your building cover. If your home is insured for $250,000 when stationary but only $150,000 in transit, you're underprotected during moves — a collision could result in a claim shortfall.`,

    faqs: [
      {
        q: `I want to move my THOW to a different site next month. What do I need to do with my insurer?`,
        a: `Notify your insurer at least 48 hours before you plan to move (some policies require less notice, but it's safest to give advance warning). Confirm your current site location and your destination site. On the day of the move, your building cover automatically pauses and transit cover activates. Once your THOW is parked and stationary at the new site, notify your insurer again and provide the new site address. Building cover resumes. Keep records of when you move and where you move to for your insurer's records.`,
      },
      {
        q: `My THOW has been at the same site for three years. Do I still have transit cover if I suddenly need to move?`,
        a: `Yes. The fact that you haven't moved doesn't affect your cover. Transit cover is a component of your overall policy and remains active as long as your policy is in force and you're compliant with all conditions (valid CoF/WoF, registered home, lawful towing). When you move, just notify your insurer and cover switches from building to transit.`,
      },
      {
        q: `What if my THOW breaks down while I'm towing it? Does my insurance cover the tow truck?`,
        a: `Transit cover covers damage to the THOW itself (structural, collision, etc.), but not mechanical breakdown or the cost of roadside assistance and towing to a mechanic. You'll need a separate breakdown insurance or roadside assistance policy for that. Many vehicle insurance policies for your tow vehicle include roadside assistance; check your tow vehicle policy. Some THOW owners also take out specialist breakdown cover for peace of mind.`,
      },
      {
        q: `Can I tow my THOW across the Tasman to Australia? Does my transit cover apply?`,
        a: `No. Transit cover in NZ is limited to NZ territory and doesn't extend to overseas relocation. If you're planning to ship your THOW to Australia or another country, you'd need separate marine/transport insurance for the voyage, and you'd need to arrange Australian insurance before arrival. This is a significant undertaking and requires specialist advice — contact your insurer well in advance if you're considering this.`,
      },
    ],

    relatedSlugs: ['building-structure', 'public-liability'],
    relatedBlogSlugs: ['thow-insurance-nz', 'nzta-rules-tiny-home-wheels-nz', 'tiny-home-insurance-nz-guide'],
  },

  {
    slug: 'public-liability',
    intro: `Public liability insurance protects you if a visitor or member of the public is injured at your tiny home, or if your property accidentally causes damage to a neighbour's building, vehicle, or belongings. This cover is essential for every tiny home owner — whether you're living full-time in your own home or renting it out. A single accident (a guest slipping on a wet step, a fire spreading to a neighbour's property, your THOW rolling and hitting another vehicle) could expose you to a six-figure legal claim. Public liability insurance provides both the legal defence and compensation costs, ensuring a single incident doesn't devastate your finances.`,

    fullDescription: `Public liability insurance covers two main categories: bodily injury (a visitor is injured at your property) and property damage (your property accidentally causes damage to someone else's). The policy pays for legal costs (defending a claim, court fees, lawyer's fees) and compensation payments (medical costs, lost income, ongoing care, pain and suffering for injuries; repair or replacement costs for damaged property).

For a tiny home owner, common public liability scenarios include a guest tripping on a step and fracturing an ankle, a spark from your fireplace or wood burner spreading to a neighbour's building, a fire inside your home that spreads to adjacent structures, a THOW breaking loose and hitting another vehicle, water damage from a burst pipe affecting a neighbour, or a guest being injured by a defect in the property that you should have known about and fixed.

The key protection is that the insurer covers the cost of defending the claim, even if the claim turns out to be frivolous or unfounded. This legal defence cost alone can exceed $50,000. Without insurance, you'd pay these costs yourself while waiting for the claim to be resolved.

Public liability is typically quoted on a per-incident limit (e.g., $5 million per incident, $10 million aggregate) and an annual premium. For most tiny home owners, a $5 million per-incident limit is appropriate. This seems high, but if a guest is seriously injured and requires ongoing care costing hundreds of thousands of dollars, a $5 million limit may be fully exhausted.

For THOW owners at campgrounds or parks, public liability is especially important. If your home breaks free from its moorings and hits another THOW or a vehicle, you're exposed to significant liability. Campgrounds and holiday parks often require proof of public liability cover before they'll allow you to site there — some require minimum limits of $2 million.`,

    notCovered: [
      'Injuries to people who live in your home (family or paying tenants) — these are covered under ACC or employment law, not public liability',
      'Damage to your own property (covered under building and contents insurance)',
      'Claims arising from your own business (unless you have a home-business endorsement; then business liability applies)',
      'Intentional injury or assault (liability for criminal acts is typically excluded)',
      'Liability arising from extreme criminal negligence (e.g., knowingly allowing a dangerous condition and a visitor is injured)',
      `Contractual liability (e.g., you signed a contract with a builder and they sue you for non-payment — this isn't covered)`,
      'Claims from a defect in something you sold (product liability — separate from public liability)',
      'Professional liability (if you give advice in your professional capacity and it causes loss)',
      'Fines or penalties imposed by a court or regulator',
    ],

    nzContext: `In New Zealand, the Health and Safety at Work Act 2015 places duties on occupiers (property owners and occupiers) to ensure their property is safe for visitors. This means you have a legal responsibility to:

- Maintain safe access and egress (safe steps, handrails, non-slip surfaces)
- Ensure the property is free from hazards (broken glass, exposed wiring, unstable structures)
- Warn visitors of any known hazards (e.g., an uneven floor, a low-hanging beam in a tiny home)
- Maintain plumbing and electrical systems in safe condition

If a visitor is injured because you failed to meet these duties, they can sue you for damages. The Health and Safety at Work Act also provides for regulator investigation; in extreme cases, a failure of duty can lead to prosecution.

The Residential Tenancies Act (if you rent out your tiny home) requires you to keep the property in good condition and safe for tenants. Public liability insurance doesn't cover intentional breach of tenancy law, but it does cover accidental injury on the property. Separate landlord insurance (which includes public liability) is more appropriate for rental tiny homes.

The Building Code sets standards for construction, but tiny homes — especially those built before 2023 under the small-dwelling exemption — may not fully comply with current Code standards. Compliance status can affect insurance underwriting. A non-compliant tiny home isn't automatically ineligible for public liability, but the insurer may require specific conditions or load the premium.`,

    howToChoose: `Public liability is straightforward to choose: ensure it's included in your tiny home insurance package at an appropriate limit. For most owner-occupied tiny homes, $5 million per incident is standard. For THOW owners at campgrounds, check whether the park requires a specific limit and ensure your policy meets or exceeds it.

If you're renting out your tiny home (long-term, Airbnb, or short-stay), ask your adviser whether your personal public liability cover extends to rental use, or whether you need a separate landlord liability endorsement. Rental use typically requires separate cover or an explicit endorsement.

If you have a home-based business, confirm whether your public liability extends to business-related visitors (clients, contractors) or whether you need a separate home-business endorsement.

Ask your adviser to explain what "claims-made" versus "occurrence" cover means. Occurrence-based policies (preferred) cover incidents that happen during the policy year, regardless of when you claim. Claims-made policies cover claims made during the policy year, even if the incident happened years earlier. Most tiny home public liability is occurrence-based.

Finally, understand whether your cover is provided by a single insurer or arranged through a broker network. If arranged through a network, ensure the insurer is regulated by the Financial Markets Authority (FMA).`,

    faqs: [
      {
        q: `A guest slipped on my THOW's wet step and injured her ankle. What do I do?`,
        a: `Immediately notify your insurer in writing (email is fine). Provide details of when the incident occurred, where exactly (the step), what caused the slip (wet surface), who was present, and any injury treatment that occurred. The insurer will assign a claims manager who will investigate. Don't admit fault, and don't offer to pay for medical costs directly (the insurer will manage this). The insurer will defend the claim if the guest sues. This is exactly what public liability is designed to cover.`,
      },
      {
        q: `My THOW is parked at a holiday park that requires proof of $2 million public liability cover. My policy is $5 million. Do I need to upgrade?`,
        a: `No. A $5 million limit exceeds the park's requirement of $2 million. When you site your THOW at the park, provide a copy of your policy schedule (or a certificate of currency from your insurer) showing the public liability limit. The park should accept this. Make sure the policy clearly states it covers THOW and camping/park site occupancy.`,
      },
      {
        q: `I rent out my tiny home on Airbnb. Does my existing public liability cover rental guests, or do I need landlord insurance?`,
        a: `Standard personal public liability typically excludes or restricts coverage for rental occupants. For Airbnb or short-stay rental, ask your insurer whether your current policy can be endorsed to cover rental guests, or whether you need a separate landlord liability or rental property endorsement. Some insurers treat short-stay rental (Airbnb) differently from long-term tenancy (covered under residential tenancy law). Clarify this with your adviser — rental income changes your risk profile.`,
      },
      {
        q: `What's the difference between public liability and landlord liability?`,
        a: `Public liability covers injury to visitors/public and accidental property damage. Landlord liability (part of landlord insurance) covers the same, plus additional protections for rental properties: loss of rental income if the home is damaged, tenant-caused damage beyond normal wear and tear, legal costs for tenancy disputes, and rent default by tenants. If you're renting out your tiny home, you need landlord cover, not just personal public liability.`,
      },
    ],

    relatedSlugs: ['building-structure', 'contents-insurance', 'landlord-insurance'],
    relatedBlogSlugs: ['tiny-home-insurance-nz-guide', 'tiny-home-public-liability-nz', 'tiny-home-renting-airbnb-insurance'],
  },

  {
    slug: 'off-grid-systems',
    intro: `Off-grid systems cover protects your investment in renewable energy and water independence. If you've installed solar panels, a battery bank (Tesla Powerwall or similar), a charge controller, an inverter, a rainwater collection system, or a composting toilet, you've made a significant capital investment. Standard building insurance often doesn't adequately cover these systems — they may be excluded, undervalued, or subject to sub-limits. Specialist off-grid systems cover ensures that if your solar array is damaged by a storm, your battery bank fails, or your rainwater tank is damaged, you're not left paying out of pocket for repairs or replacement.`,

    fullDescription: `Off-grid systems cover treats renewable energy and water infrastructure as separate, valuable assets. These systems represent a major investment — a 5kW solar array can cost $15,000–$25,000 installed, a battery bank $5,000–$15,000, and a rainwater system another $3,000–$8,000. If these are damaged or fail, the repair or replacement cost is substantial.

The cover typically includes damage to solar panels from hail, wind, storm, or tree damage; battery bank failure or damage from overcharging, overheating, or physical impact; inverter and charge controller damage; wiring and cabling damage; rainwater tank damage or contamination; greywater treatment system failure; composting toilet system damage; and theft of solar panels or valuable components.

For many off-grid systems, the value assessment is critical. An insurer may offer an indemnity value (depreciated, based on age and condition) or replacement value (cost of new components). Replacement value is significantly better and is standard for specialist off-grid cover. A 10-year-old solar array that's still generating at 90% efficiency doesn't lose 90% of its value under indemnity; replacement value cover recognizes that the cost of a new, equivalent-spec array is what matters.

Some off-grid systems cover includes business continuity protection — if your off-grid systems fail and your home becomes uninhabitable, loss of use cover kicks in to cover temporary accommodation costs while repairs are made. This is particularly important for remote off-grid dwellers who may have limited nearby rental options.

Off-grid systems can be undergoing rapid technological change. When you take out off-grid cover, ensure the policy is flexible enough to cover new components you might add later (e.g., an additional battery module, a backup generator). Some policies require you to declare all off-grid components at the outset; others have a default sum insured for "approved off-grid systems" and allow additions by amendment.`,

    notCovered: [
      'Gradual degradation or loss of efficiency (solar panels naturally lose ~0.5% efficiency per year; this is not covered)',
      `Lack of maintenance (if a battery bank fails because you didn't follow manufacturer charging protocols, the failure may not be covered)`,
      'Damage from incorrect installation or improper setup (if components are wired incorrectly and fail, the insurer may deny the claim)',
      `Damage from manufacturing defect (typically covered by the manufacturer's warranty, not insurance)`,
      `Cosmetic damage that doesn't affect functionality`,
      `Loss of income from non-generation (if your solar array is damaged and you lose the benefit of solar generation for a month, that lost benefit isn't covered)`,
      'Failure due to failure of complementary systems (if your MPPT charge controller fails because the battery connections were loose, causation may be disputed)',
      'Damage occurring before you took out the cover',
    ],

    nzContext: `New Zealand has become a leader in distributed solar generation, with over 200,000 residential solar installations as of 2026. However, the regulatory framework is still evolving:

1. **Solar and Building Code**: A solar array installed on a tiny home roof is considered a building alteration. If your tiny home has building consent, the solar installation should comply with the Building Code and may require a Code Compliance Certificate (CCC). If your tiny home was built before 2023 under the small-dwelling exemption, it may not have building consent, and adding solar may or may not trigger a building consent requirement (this varies by council).

2. **Electrical Standards**: All off-grid electrical systems must comply with the Electrical Code of Practice and be installed by a certified electrician. DIY electrical installations in off-grid systems may not be covered by insurance if they don't comply with the Code.

3. **EQC and Natural Hazards**: Solar panels and battery banks may be covered under the Natural Disaster Fund (formerly EQC) if your home has a registered address and separate rateable value. However, off-grid systems on unregistered dwellings (many private rural THOWs) are not eligible for Natural Disaster Fund cover and must be covered by your private insurance.

4. **Grid Connection and Net Metering**: If your tiny home is eventually connected to the national grid, net metering regulations may apply, and your insurance may need to be updated to reflect the change in system configuration.`,

    howToChoose: `Start by documenting your off-grid system. Get a list of all components from your installer: make, model, capacity, and installation date for each solar panel, inverter, charge controller, battery bank, rainwater tank, and any other system. This documentation is essential for accurate valuation.

Obtain a written quote from your installer or a system assessor for the replacement cost of each major component at current market prices (not what you paid if the system is old). This gives you the accurate sum insured figure.

Ask your adviser whether off-grid systems are covered under your building policy, or whether they require a separate endorsement or policy. Some insurers bundle off-grid cover; others treat it as optional. Clarify the premium impact of adding off-grid cover.

Understand the valuation basis: is it replacement value (new system, current prices) or depreciated value? Replacement value is strongly preferred. Confirm that the sum insured allows for future additions (if you're planning to expand your system).

If you have a battery bank, clarify coverage for battery failure from degradation. Modern batteries degrade gradually; if a battery bank failure is due to normal degradation (not a specific insured event), is it covered? This varies between policies and is worth understanding upfront.`,

    faqs: [
      {
        q: `My solar array cost me $18,000 five years ago and is still working perfectly. What sum insured should I use for insurance?`,
        a: `The sum insured should reflect the replacement cost of a new, equivalent-spec array at current prices, not the $18,000 you paid five years ago. Solar prices have fallen significantly; a new 5kW array that's similar quality and capacity might now cost $12,000–$15,000. However, if you have a custom high-spec system (premium panels, integrated monitoring, etc.), current replacement cost might be higher than what you paid. Get a current quote from a solar installer for your replacement cost.`,
      },
      {
        q: `My battery bank is showing signs of degradation. Will my insurance cover the replacement?`,
        a: `It depends on whether the degradation is from normal usage (not covered) or from a specific insured event (covered). If a manufacturing defect caused the degradation, that may be covered under the battery manufacturer's warranty, not insurance. However, if external damage (hail, flood, electrical surge) caused the failure, that's an insured event and should be covered. Discuss the specific failure mode with your insurer to determine coverage.`,
      },
      {
        q: `I want to add a second battery bank to my off-grid system. Do I need to notify my insurer?`,
        a: `Yes. Any significant addition to your off-grid system should be notified to your insurer. Provide details of the new battery bank (make, model, capacity, installation date) and ask your insurer to update your sum insured and policy. This ensures the new component is covered and the total sum insured reflects your actual system value.`,
      },
      {
        q: `Is my rainwater system covered under off-grid systems insurance, or under building insurance?`,
        a: `Rainwater collection (tank, pump, filtration) is typically covered under off-grid systems insurance. However, if the rainwater tank is part of the permanent building structure (e.g., integrated into the foundation or structure), it may be covered under building insurance. Ask your adviser to clarify which cover applies to each component of your rainwater system.`,
      },
    ],

    relatedSlugs: ['building-structure', 'loss-of-use'],
    relatedBlogSlugs: ['off-grid-tiny-home-insurance', 'tiny-home-insurance-nz-guide', 'lifestyle-block-tiny-home-insurance-nz'],
  },

  {
    slug: 'loss-of-use',
    intro: `Loss of use insurance covers the cost of temporary accommodation if your tiny home is damaged and uninhabitable while repairs are carried out. If a fire, flood, or storm damages your home significantly, you'll need somewhere to live during the repair period — whether that's a rental home, hotel, or (for THOW owners) a campground with a powered site. Loss of use insurance covers these costs so you're not forced to absorb weeks or months of temporary accommodation costs on top of the stress of dealing with damage. For tiny home owners in rural or remote locations with limited nearby rental options, this cover is particularly valuable.`,

    fullDescription: `Loss of use cover operates on a simple principle: if your tiny home becomes uninhabitable due to an insured event (fire, flood, structural damage, etc.), the insurer covers the reasonable cost of temporary alternative accommodation until repairs are complete or your home is deemed habitable again.

For a THOW owner in a campground, loss of use might cover powered-site fees at a nearby campground. For a tiny home in a rural area, it might cover a holiday rental in the nearest town. For an owner in a tiny home village, it might cover a rental flat nearby. The cover is flexible and adapts to what's reasonable for your circumstances.

The policy typically includes rental accommodation costs, hotel or motel costs, campground or powered-site fees, additional living expenses (meals, transport, laundry if renting unfurnished), storage costs for your contents if the home is damaged and contents are removed, and pet boarding costs if you need temporary accommodation that doesn't allow pets.

The cover usually operates under a daily limit (e.g., $250 per day) up to a total limit (e.g., $50,000 aggregate). So if repairs take four weeks, and you stay in a campground at $40 per night, you'll reach $1,120 in costs, well within a $50,000 aggregate limit. For longer repair periods (e.g., extensive fire damage requiring three months of repair), the daily limit becomes the binding constraint.

One important point: loss of use cover is only triggered when the damage is assessed as making the home uninhabitable. If you have minor damage (a broken window, minor interior damage) and you can still live in the home, loss of use doesn't apply. The threshold for "uninhabitable" is typically assessed by the insurer's loss adjuster based on safety, weather-tightness, and serviceability standards.`,

    notCovered: [
      'Accommodation costs if you choose to stay with friends or family (loss of use covers actual out-of-pocket costs, not notional costs)',
      `Costs for luxury or premium accommodation above what's reasonable for your circumstances (if you normally rent at $150/night but choose a $400/night hotel, the insurer covers only the reasonable amount)`,
      'Accommodation during the "waiting period" (typically 7–14 days) while the damage is assessed and repairs are being arranged; you cover this yourself',
      'Costs from a non-insured event (e.g., if your tiny home is damaged by excluded events like war or riot)',
      'Accommodation if you choose not to repair the home (loss of use applies only while active repairs are underway)',
      `Costs if the home is damaged while empty or abandoned (if you've vacated the home for extended periods without the insurer's knowledge)`,
      `Lost income or business interruption (if you run a business from your tiny home, loss of income from the business isn't covered)`,
    ],

    nzContext: `For tiny home owners in rural or remote areas, loss of use cover is particularly important because alternative accommodation options are often limited and expensive. For example:

- A tiny home owner in rural Southland with damage to their home may have limited rental options within a 50km radius, forcing accommodation costs to be high.
- A THOW owner at a remote holiday park may find local campgrounds booked out in peak season, forcing accommodation costs upward.
- A tiny home owner in a rural community without nearby rentals may be forced into hotel accommodation, which is expensive.

The Natural Disaster Fund (formerly EQC) in New Zealand covers temporary accommodation costs for some homeowners after earthquake or natural disaster, but the cover is limited ($25,000 aggregate, $30 per night) and only applies to registered residential dwellings. For many tiny homes (especially THOWs and off-grid dwellings without registered addresses), EQC doesn't apply, making private loss of use insurance essential.

Healthy Homes Standards in New Zealand set minimum standards for insulation, ventilation, heating, and moisture control in rental properties. If your tiny home doesn't meet these standards while being rented (by you or a previous owner), the home may not be legally rentable. If you're forced to temporarily vacate your own occupied tiny home due to damage, loss of use cover applies. But if you've rented out a non-compliant home and tenants are displaced, the landlord liability and loss-of-income aspects are covered under landlord insurance, not personal loss of use cover.`,

    howToChoose: `When choosing loss of use cover limits, consider your circumstances. If you live in a rural area with limited rental options, you'll want a higher daily limit and aggregate limit because temporary accommodation will be expensive. If you're in an urban area or a tiny home village with abundant rental options, you might accept a lower daily limit.

Research typical temporary accommodation costs in your area. In central Auckland or Wellington, a serviced apartment might cost $200–$300/night. In rural areas, a holiday rental might be $80–$150/night. The daily limit in your policy should comfortably cover these costs, including a buffer for meal costs and additional living expenses.

Ask your adviser about the "waiting period" — the number of days after damage occurs before loss of use cover kicks in. A 7-day waiting period is common; this means you cover the first week of accommodation costs yourself. If you have savings and can absorb a week of costs, a 7-day waiting period reduces your premium. If you can't, you might opt for a lower or zero waiting period.

Confirm that loss of use cover applies to your specific situation. If you're a THOW owner, does the cover include campground fees? If you're a long-term renter, does it cover your scenario? If you're in a tiny home village, does it cover rental accommodation in the wider area if the village units are fully occupied?

Finally, consider the repair period realities. The insurer will estimate how long repairs will take; if repairs are estimated at two months and your aggregate limit covers only five weeks of accommodation, you'll have a gap. Discuss potential repair timelines with your adviser.`,

    faqs: [
      {
        q: `My tiny home was damaged in a storm and is being repaired. The repairs will take two months. Is my loss of use cover triggered immediately?`,
        a: `No. After damage occurs, the insurer typically has a waiting period (7–14 days) before loss of use cover applies. This waiting period allows time for the insurer to assess the damage and confirm the home is uninhabitable. On day 8, loss of use cover (if included) activates, and the insurer starts reimbursing reasonable accommodation costs. You bear the cost of accommodation during the first 7 days. Once repairs are complete and the insurer deems the home habitable again, loss of use ends, even if cosmetic repairs remain.`,
      },
      {
        q: `I live in a tiny home village, and my unit is being repaired. The village management won't let me stay in a temporary village unit. Can I stay in a hotel nearby and claim loss of use?`,
        a: `Yes, provided the hotel costs are reasonable for your circumstances. Loss of use covers the cost of reasonable alternative accommodation. If the village is full and hotels are the only nearby option, hotel costs should be covered. However, if you choose a luxury hotel when a budget option is available, the insurer will typically reimburse only the reasonable amount. Get pre-approval from your insurer before booking temporary accommodation to avoid disputes about what's "reasonable."`,
      },
      {
        q: `My THOW is being repaired, and I'm staying at a powered campground site at $60 per night. The insurer is only offering to pay $40 per night. What can I do?`,
        a: `If your policy has a daily limit of $40, that's the maximum the insurer will pay per night. However, if you can argue that $60 per night is the reasonable rate for powered sites in your area (and this is genuinely the case), you might negotiate. Get quotes from 2–3 other nearby campgrounds showing their powered-site rates. If $60 is the market rate, the insurer may increase the reimbursement. If $40 is market rate and the campground is more expensive, the insurer will stick to $40.`,
      },
      {
        q: `Can I claim loss of use if I stay with family and don't actually pay for accommodation?`,
        a: `No. Loss of use covers actual out-of-pocket costs for accommodation. If you stay with family for free, there are no claimable costs. However, if family members incur costs (e.g., increased utility bills, groceries) due to hosting you, some of these additional living expenses might be claimed if they're documented. But the primary cover is for paid temporary accommodation.`,
      },
    ],

    relatedSlugs: ['building-structure', 'contents-insurance'],
    relatedBlogSlugs: ['tiny-home-insurance-nz-guide', 'tiny-home-total-loss-claim-nz'],
  },

  {
    slug: 'landlord-insurance',
    intro: `Landlord insurance is specialist cover for tiny home owners who rent out their property — whether to long-term tenants, Airbnb guests, or seasonal workers. If you're renting out your tiny home, standard residential insurance often doesn't apply; landlord insurance is purpose-built to cover rental properties. This cover includes protection against tenant-caused damage, loss of rental income while repairs are underway, rent default by tenants, legal costs for tenancy disputes, and public liability for tenant or guest injury. For tiny home owners generating rental income, landlord insurance is essential to protect your investment and your rental cash flow.`,

    fullDescription: `Landlord insurance combines building, contents, public liability, and loss-of-income protection into a single policy designed for rental properties. The cover addresses the specific risks of having tenants or guests living in your property.

Building cover under a landlord policy covers the physical structure, fittings, and permanent installations, similar to owner-occupied building cover. However, landlord policies also cover tenant-caused damage — damage beyond normal wear and tear caused by the tenant. Normal wear and tear (worn carpet, faded paint) is the landlord's responsibility. But if a tenant punches a hole in the wall, damages appliances through misuse, or breaks windows, landlord insurance covers the repair or replacement cost, less any amount you recover from the tenant's bond.

Loss of rental income is a key component of landlord insurance. If your tiny home is damaged and uninhabitable, your tenants vacate and you lose rental income during the repair period. Landlord insurance covers this loss. A policy might cover $100/week of rental income for up to 12 weeks, meaning if repairs take three months and you're losing $200/week in rental income, you'll receive $12,000 in cover.

Rent default cover protects you if a tenant refuses to pay or leaves without paying. The insurer typically covers rent default after 8–12 weeks of unpaid rent (you must provide proof of the default and evidence that you've attempted recovery). This cover is valuable if you have a tenant in financial difficulty who can't pay.

Legal costs cover pays for your legal representation in disputes with tenants — e.g., disputes over bond deductions, eviction proceedings, or damage claims. Residential tenancy disputes in New Zealand are typically managed through the Tenancy Tribunal (a lower-cost, faster process), but legal costs can still mount if you're pursuing a complex claim or defending a tenant counter-claim.

Public liability under landlord cover is broader than owner-occupied cover — it covers injury to tenants, guests, and visitors. An owner-occupied public liability policy typically excludes injury to "occupants" (people living in the home), but a landlord policy explicitly includes tenant injury claims. This is crucial: if a tenant is injured because of a defect in your tiny home, they can sue you; landlord liability cover defends this claim and pays compensation.`,

    notCovered: [
      'Damage from the tenant using the property for an illegal purpose or unauthorized commercial use (if you rented to a tenant and they were running an illegal operation, insurance may not cover resulting damage)',
      `Normal wear and tear (carpets, paint, fixtures naturally wearing out is the landlord's responsibility)`,
      'Loss of rental income if you choose not to repair the home (cover applies only while active repairs are underway)',
      `Rent default by a tenant if you didn't follow proper debt recovery procedures (must show evidence of demand letters, tribunal applications, etc.)`,
      `Landlord's own intentional or reckless damage to the property`,
      'Damage excluded from the building cover (e.g., gradual deterioration, lack of maintenance)',
      `Loss of income from the tenant's business or personal use (if a tenant runs a business from the home and loses business income due to damage, that's not covered)`,
      'Disputes unrelated to the property or tenancy (e.g., personal conflict with a tenant)',
      'Fines or penalties for breach of tenancy law or building code non-compliance',
    ],

    nzContext: `Landlord insurance in New Zealand must comply with the Residential Tenancies Act 1986 (as amended) and the Health and Safety at Work Act 2015. Key requirements:

1. **Residential Tenancies Act**: Your tenancy agreement must be compliant with the Act. You must provide safe, clean, and healthy accommodation. You're prohibited from taking unauthorized bond deductions. If you're breaking the law in your tenancy practices, your insurer may deny claims arising from illegal conduct.

2. **Healthy Homes Standards**: From 1 July 2023, all rental properties must meet the Healthy Homes Standards: insulation, ventilation, heating, moisture management, and pool safety. If your tiny home doesn't meet these standards and a tenant claims breach of the standards (leading to a bond dispute or Tenancy Tribunal claim), your insurer may exclude cover for disputes arising from non-compliance. Ensuring your tiny home meets the standards before tenants arrive protects your insurability.

3. **Bonds**: You must hold tenant bonds in a authorized bank account and provide prescribed information to the tenant. Improper bond handling can lead to Tenancy Tribunal claims against you. Landlord insurance covers legal costs for disputes over bonds, but not for your breach of the Bond Regulations.

4. **Building Consent**: If your tiny home requires building consent and doesn't have Code Compliance Certificate, your insurability is affected. Some insurers exclude cover for properties without building consent, or require you to obtain a Certificate of Acceptance (a less stringent process). If your tiny home was built before 2023 under the small-dwelling exemption, you should disclose this when applying for landlord cover.

5. **Short-Stay Rentals (Airbnb)**: Airbnb and short-stay rental properties are treated differently from long-term tenancies under the Residential Tenancies Act. Airbnb doesn't fall under the Act, so some landlord policies specifically exclude Airbnb cover, or require a separate endorsement. Clarify whether your landlord policy covers Airbnb if that's your intended use.`,

    howToChoose: `Start by clarifying your rental model: are you renting long-term (12-month agreements with Residential Tenancies Act protections), short-stay seasonal (e.g., 6-month winter rentals), or Airbnb? Each model has different insurance requirements.

For long-term rentals, landlord insurance is standard. Get quotes from several insurers and compare:
- Building damage cover limits (ensure it covers full rebuild cost)
- Loss of rental income limits (how much weekly rent is covered and for how long)
- Rent default cover thresholds (how long must rent be unpaid before cover applies)
- Legal costs limits (typically $10,000–$25,000)
- Public liability limits (typically $2–$5 million)

For Airbnb or short-stay rental, ask explicitly whether your policy covers this use. Some insurers don't; others require a separate short-stay rental endorsement or recommend business interruption insurance instead of residential landlord cover.

Ask about any conditions: do you need to have tenancy legal advice before entering an agreement? Must you meet Healthy Homes Standards? Is building consent required? Understanding these conditions upfront helps you avoid disputes when you claim.

Finally, confirm the process for claiming loss of rental income. You'll need to provide proof of the missed rent (lease agreement showing rent amount, bank statements showing non-payment, evidence of debt recovery attempts). Be prepared to document this if damage occurs.`,

    faqs: [
      {
        q: `I'm renting my tiny home on Airbnb. Can I use standard landlord insurance?`,
        a: `It depends. Standard residential landlord insurance is designed for long-term tenancies under the Residential Tenancies Act. Airbnb is a commercial short-stay rental and may not be covered under standard landlord insurance. Contact your insurer and ask explicitly whether Airbnb is covered or whether you need a separate short-stay rental endorsement. Some insurers require business insurance for Airbnb properties. Failing to disclose Airbnb use could result in claims being denied.`,
      },
      {
        q: `A tenant damaged the kitchen appliances and left without paying the last month's rent. Does my landlord insurance cover both the damage and the unpaid rent?`,
        a: `Yes, potentially. Tenant-caused damage (beyond normal wear and tear) is covered under the building component of landlord insurance, and you can claim for the cost of replacing the appliances. For the unpaid rent, you can claim under the rent default component, but there are conditions: you must have made a written demand for payment, waited a specified period (typically 8–12 weeks), and followed proper debt recovery procedures (including Tenancy Tribunal application if necessary). Provide documentation of these steps to your insurer with the rent default claim.`,
      },
      {
        q: `My tiny home is in a village where residents have rights to shared facilities. Does landlord insurance cover liability for shared areas?`,
        a: `Liability for shared facilities (communal gardens, BBQ areas, parking) is typically covered under the village's collective insurance, not your individual landlord policy. However, your policy covers liability arising from your unit itself. If a guest is injured in your tiny home (not in shared areas), that's covered under your landlord public liability. Clarify with your insurer and the village management which party is responsible for shared areas.`,
      },
      {
        q: `My tiny home is seasonal rental only (December–February). Do I need landlord insurance all year?`,
        a: `Yes, you should have cover year-round, even during off-season months. If damage occurs in the off-season (e.g., a fire in June when the home is empty), you want to be insured. However, you can notify your insurer of the seasonal occupancy pattern, which may allow them to adjust your premium or cover. Some insurers offer seasonal policies that suspend cover during specified periods, but clarify the conditions — you don't want a gap in cover if you accidentally rent during what was supposed to be off-season.`,
      },
    ],

    relatedSlugs: ['building-structure', 'contents-insurance', 'public-liability'],
    relatedBlogSlugs: ['tiny-home-insurance-nz-guide', 'tiny-home-renting-airbnb-insurance', 'healthy-homes-standards-tiny-home-nz'],
  },
];
