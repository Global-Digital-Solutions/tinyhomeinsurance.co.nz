import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '../../../data/coverage-types';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return coverageTypes.map(ct => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) return {};
  return {
    title: `${ct.name} for Tiny Homes NZ | TinyHomeInsurance.co.nz`,
    description: ct.shortDesc,
  };
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) notFound();

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/coverage/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">
            ← Coverage Types
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{ct.icon}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold">{ct.name}</h1>
          </div>
          <p className="text-xl text-brand-100 max-w-2xl">{ct.shortDesc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">About {ct.name}</h2>
              <p className="text-stone-700 leading-relaxed">{ct.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4">Who Needs This Cover</h3>
                <ul className="space-y-2">
                  {ct.whoNeeds.map(item => (
                    <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4">What It Covers</h3>
                <ul className="space-y-2">
                  {ct.whatCovers.map(item => (
                    <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
              <h3 className="font-bold text-brand-900 mb-3">Other Coverage Types</h3>
              <ul className="space-y-2">
                {coverageTypes.filter(c => c.slug !== ct.slug).map(c => (
                  <li key={c.slug}>
                    <Link href={`/coverage/${c.slug}/`} className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand-600 font-medium transition">
                      <span>{c.icon}</span>{c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${ct.name} — ${SITE.name}`,
        description: ct.description,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: 'NZ',
      })}} />
    </div>
  );
}
