import Link from 'next/link';
import { coverageTypes } from '../../data/coverage-types';

export const metadata = {
  title: 'Tiny Home Insurance Coverage Types | TinyHomeInsurance.co.nz',
  description: 'Explore all coverage types for tiny homes in NZ — building, contents, transit, liability, off-grid systems, and landlord insurance.',
};

export default function CoveragePage() {
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-4">Tiny Home Coverage Types</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A comprehensive tiny home insurance package goes beyond just the building. Explore the covers available for your specific situation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map(ct => (
            <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
              className="bg-white rounded-xl p-6 border border-stone-200 hover:border-brand-500 hover:shadow-md transition group flex flex-col">
              <div className="text-4xl mb-4">{ct.icon}</div>
              <h2 className="font-bold text-stone-900 text-xl mb-2 group-hover:text-brand-700 transition">{ct.name}</h2>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">{ct.shortDesc}</p>
              <div className="mt-4 text-brand-700 font-semibold text-sm group-hover:text-brand-800 transition">Learn more →</div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center bg-brand-800 rounded-2xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-3">Not Sure What Cover You Need?</h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">Our NZ-licensed advisers will assess your specific situation and recommend the right combination of covers for your tiny home.</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition">
            Get Free Advice →
          </Link>
        </div>
      </div>
    </div>
  );
}
