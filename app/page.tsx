import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { coverageTypes } from '../data/coverage-types';
import { SITE } from '../data/site';

export const metadata = {
  title: 'Tiny Home Insurance NZ — Specialist Cover for THOWs, Container Homes & Off-Grid Dwellings',
  description: 'Get specialist insurance for your tiny home in New Zealand. Building, contents, transit, and liability cover for tiny houses on wheels, container homes, and off-grid dwellings. Free adviser matching.',
};

const lifestyleTypes = [
  {
    icon: '🚛',
    title: 'Tiny House on Wheels',
    subtitle: 'THOW',
    desc: 'Freedom to roam NZ\'s backroads, lifestyle blocks, and communities — with specialist cover that travels with you.',
    gradient: 'from-amber-900/80 to-stone-900/90',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '☀️',
    title: 'Off-Grid Cabin',
    subtitle: 'Solar · Rainwater · Battery',
    desc: 'Living off the grid on a lifestyle block or rural property, self-sufficient and surrounded by New Zealand nature.',
    gradient: 'from-green-900/80 to-brand-900/90',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '📦',
    title: 'Container Home',
    subtitle: 'Repurposed · Modern · Sustainable',
    desc: 'Architectural container conversions from Northland to Southland — specialist cover for non-standard construction.',
    gradient: 'from-slate-800/80 to-stone-900/90',
    img: 'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🏠',
    title: 'Fixed Foundation',
    subtitle: 'Sub-50m² · Compact Living',
    desc: 'Compact homes built for intentional living — on rural sections, lifestyle blocks, or tucked into urban plots.',
    gradient: 'from-stone-700/80 to-stone-900/90',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.72) 0%, rgba(10,50,20,0.60) 50%, rgba(0,20,5,0.78) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        {/* subtle grain overlay for organic feel */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-8 tracking-wide">
              🌿 Specialist Tiny Home Insurance · New Zealand
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Live Free.<br />
              <span className="text-green-300">Live Tiny.</span><br />
              Live Protected.
            </h1>

            <p className="text-xl md:text-2xl text-stone-200 mb-4 leading-relaxed font-light">
              Whether your home travels NZ&apos;s back roads, sits off-grid on a lifestyle block, or nestles in a container on a hillside farm — standard insurance wasn&apos;t built for you.
            </p>
            <p className="text-lg text-stone-300 mb-10 leading-relaxed">
              We match you with NZ-licensed advisers who specialise in tiny home cover. Free, no-obligation, within one business day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-900/40 text-lg">
                Get a Free Quote →
              </Link>
              <Link href="/coverage/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all text-lg">
                Explore Coverage
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-stone-300">
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> NZ-licensed advisers</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Response within 1 business day</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> THOWs, container homes &amp; off-grid</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> 100% free &amp; no obligation</span>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ── LIFESTYLE TYPES ──────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Your Home. Your Way.</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">
              Built for the Way Tiny Home People Live
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Mainstream insurers designed their policies for 200m² houses in the suburbs. The tiny home lifestyle is different — and your cover should be too.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifestyleTypes.map(t => (
              <div key={t.title}
                className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end group cursor-default"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 30%, rgba(0,20,5,0.92) 100%), url('${t.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                <div className="absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, rgba(0,20,5,0.85) 0%, transparent 60%)` }} />
                <div className="relative p-6 text-white">
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <div className="text-xs font-bold text-green-300 tracking-widest uppercase mb-1">{t.subtitle}</div>
                  <h3 className="text-xl font-extrabold mb-2">{t.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 px-8 rounded-xl transition shadow-md shadow-brand-900/20">
              Get Specialist Cover →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SPECIALIST ───────────────────────────────────────── */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,46,22,0.96) 0%, rgba(10,60,30,0.95) 50%, rgba(3,30,12,0.97) 100%), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">The Tiny Home Challenge</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-8 leading-snug">
                Why Standard Home Insurance<br />Falls Short
              </h2>
              <div className="space-y-5">
                {[
                  {
                    bad: true,
                    title: 'THOWs are usually declined outright',
                    desc: 'Most NZ insurers require a permanent foundation. A tiny house on wheels doesn\'t qualify — leaving you uninsured.',
                  },
                  {
                    bad: true,
                    title: 'Non-standard construction is excluded',
                    desc: 'Recycled timber, corten steel, polycarbonate cladding, and SIP panels trigger exclusions in standard policies.',
                  },
                  {
                    bad: true,
                    title: 'Off-grid systems aren\'t covered',
                    desc: 'Your solar array, battery bank, composting system, and rainwater tanks need specific endorsement — rarely included by default.',
                  },
                  {
                    bad: false,
                    title: 'Our advisers know exactly who will cover you',
                    desc: 'We work with specialists who understand the NZ tiny home market and can place your exact home at full replacement value.',
                  },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.bad ? '✗' : '✓'}</span>
                    <div>
                      <div className={`font-bold text-base ${item.bad ? 'text-red-300' : 'text-green-300'}`}>{item.title}</div>
                      <div className="text-stone-300 text-sm mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
                <QuoteForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE TYPES ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">What We Cover</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">Comprehensive Cover for Every Tiny Home</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              From the structure and contents through to transit, off-grid systems, and landlord cover — specialist policies built around how you actually live.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverageTypes.slice(0, 6).map(ct => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="group rounded-2xl border border-stone-200 hover:border-green-400 bg-stone-50 hover:bg-green-50 p-6 transition-all hover:shadow-md hover:shadow-green-100">
                <div className="text-4xl mb-4">{ct.icon}</div>
                <h3 className="font-bold text-stone-900 text-lg mb-2 group-hover:text-green-800 transition">{ct.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{ct.shortDesc}</p>
                <div className="mt-4 text-green-700 text-sm font-semibold group-hover:text-green-600 transition">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage/"
              className="inline-flex items-center gap-2 border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-bold py-3 px-8 rounded-xl transition">
              View All Coverage Types
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Simple Process</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">Three Steps to Specialist Cover</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us About Your Home',
                desc: 'Fill in the short quote form — your home type, location, what you need covered. Two minutes, no commitment.',
                detail: 'THOW, container, off-grid, fixed — we handle them all.',
              },
              {
                step: '02',
                title: 'A Specialist Contacts You',
                desc: 'A NZ-licensed adviser who actually knows tiny homes reviews your details and reaches out within one business day.',
                detail: 'No call centres. Real advisers who understand your lifestyle.',
              },
              {
                step: '03',
                title: 'Choose the Right Cover',
                desc: 'Compare options tailored to your situation and budget. No pressure, no hidden fees, no obligation.',
                detail: 'Cover that fits your home exactly — not a standard template.',
              },
            ].map(s => (
              <div key={s.step} className="relative bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
                <div className="text-6xl font-black text-stone-100 absolute top-6 right-6 leading-none select-none">{s.step}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white font-extrabold text-lg flex items-center justify-center mb-5">
                    {s.step.replace('0', '')}
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-xl mb-3">{s.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-green-700 text-sm font-semibold">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL QUOTE FORM ───────────────────────────────────────── */}
      <QuoteForm variant="full" />

      {/* ── FINAL CTA BANNER ─────────────────────────────────────── */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5,46,22,0.88) 0%, rgba(3,30,12,0.94) 100%), url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-5xl mb-6">🏡</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Your Tiny Home Deserves<br />
            <span className="text-green-300">Real Protection</span>
          </h2>
          <p className="text-stone-300 text-xl mb-10 leading-relaxed">
            Connect with a NZ specialist today. Free quote, no obligation, response within one business day.
          </p>
          <Link href="/contact/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-extrabold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-green-900/40 text-xl">
            Get My Free Quote →
          </Link>
          <p className="mt-6 text-stone-400 text-sm">
            No spam. No pressure. NZ-licensed advisers only.
          </p>
        </div>
      </section>

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
