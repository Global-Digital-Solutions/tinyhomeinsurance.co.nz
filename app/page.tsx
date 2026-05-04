import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { coverageTypes } from '../data/coverage-types';
import { SITE } from '../data/site';

export const metadata = {
  title: 'Tiny Home Insurance NZ — Specialist Cover for THOWs, Container Homes & Off-Grid Dwellings',
  description: 'Get specialist insurance for your tiny home in New Zealand. Building, contents, transit, and liability cover for tiny houses on wheels, container homes, and off-grid dwellings. Free adviser matching.',
};

const stats = [
  { value: '1 day', label: 'Adviser Response Time' },
  { value: 'Free', label: 'No-Obligation Quotes' },
  { value: 'NZ', label: 'Licensed Advisers' },
  { value: '7+', label: 'Coverage Types' },
];

const homeTypes = [
  { icon: '🚛', label: 'Tiny Houses on Wheels (THOW)' },
  { icon: '🏠', label: 'Fixed Foundation Tiny Homes' },
  { icon: '📦', label: 'Container Homes' },
  { icon: '☀️', label: 'Off-Grid Dwellings & Cabins' },
  { icon: '🏕️', label: 'Park Homes & Relocatable Homes' },
  { icon: '🔑', label: 'Tiny Home Rentals & Airbnb' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-stone-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-700/50 rounded-full px-4 py-1.5 text-brand-200 text-sm font-semibold mb-6">
                🏡 Specialist Tiny Home Insurance
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Insurance Built for <span className="text-brand-400">Tiny Homes</span>
              </h1>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                Standard house insurance wasn't designed for tiny homes. We connect you with NZ-licensed advisers who specialise in THOWs, container homes, and off-grid dwellings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg">
                  Get a Free Quote →
                </Link>
                <Link href="/coverage/" className="inline-flex items-center justify-center gap-2 border border-stone-500 hover:border-brand-400 text-stone-200 font-semibold py-4 px-8 rounded-xl transition">
                  See Coverage Types
                </Link>
              </div>
            </div>
            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-brand-300">{s.value}</div>
                <div className="text-stone-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">We Cover All Types of Tiny Homes</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Mainstream insurers often decline or restrict tiny home cover. Our specialist advisers work with insurers who understand the tiny home market.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {homeTypes.map(t => (
              <div key={t.label} className="bg-stone-50 rounded-xl p-6 border border-stone-200 flex items-center gap-4">
                <span className="text-3xl">{t.icon}</span>
                <span className="font-semibold text-stone-800">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Coverage Types</h2>
            <p className="text-stone-600 text-lg">From building and contents through to transit and off-grid systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.slice(0, 6).map(ct => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="bg-white rounded-xl p-6 border border-stone-200 hover:border-brand-400 hover:shadow-md transition group">
                <div className="text-3xl mb-3">{ct.icon}</div>
                <h3 className="font-bold text-stone-900 text-lg mb-2 group-hover:text-brand-700 transition">{ct.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{ct.shortDesc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/coverage/" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition">
              View all coverage types →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-stone-600 text-lg">Three simple steps to specialist tiny home cover.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Submit Your Details', desc: 'Complete the short quote form with your tiny home type, location, and cover requirements. Takes under 2 minutes.' },
              { step: '2', title: 'Adviser Contacts You', desc: 'A NZ-licensed insurance adviser reviews your situation and contacts you within one business day with options.' },
              { step: '3', title: 'Choose Your Cover', desc: 'Compare quotes and choose the policy that fits your home and budget. No pressure, no obligation.' },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-700 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-stone-900 text-lg mb-2">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Specialist */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why You Need Specialist Tiny Home Insurance</h2>
              <div className="space-y-4">
                {[
                  { icon: '❌', title: 'Standard policies often exclude THOWs', desc: 'Most insurers require a permanent foundation. A THOW needs a specialist policy.' },
                  { icon: '❌', title: 'Non-standard construction is a problem', desc: 'Recycled timber, corten steel, and polycarbonate may be excluded by mainstream insurers.' },
                  { icon: '❌', title: 'Off-grid systems are typically excluded', desc: 'Solar panels, battery banks, and rainwater systems need to be specifically covered.' },
                  { icon: '✅', title: 'Specialist advisers solve all of this', desc: 'Our advisers know which insurers will cover your specific home at full replacement cost.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-stone-300 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Full CTA Form */}
      <QuoteForm variant="full" />

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: SITE.name,
        description: SITE.description,
        url: SITE.domain,
        areaServed: 'NZ',
        serviceType: 'Tiny Home Insurance',
      })}} />
    </>
  );
}
