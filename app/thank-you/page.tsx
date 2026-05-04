import Link from 'next/link';

export const metadata = {
  title: 'Thank You — Quote Request Received | TinyHomeInsurance.co.nz',
  description: 'Your tiny home insurance quote request has been received. A NZ-licensed adviser will be in touch within one business day.',
};

export default function ThankYouPage() {
  return (
    <div className="bg-stone-50 min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-7xl mb-6">🏡</div>
        <h1 className="text-4xl font-extrabold text-stone-900 mb-4">Quote Request Received!</h1>
        <p className="text-xl text-stone-600 mb-8 leading-relaxed">
          A NZ-licensed insurance adviser will review your tiny home details and be in touch within <strong>one business day</strong> with options and a quote.
        </p>
        <div className="bg-white rounded-xl border border-stone-200 p-6 mb-8 text-left">
          <h2 className="font-bold text-stone-900 mb-4">What to expect:</h2>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-0.5">✓</span>
              An adviser will contact you by phone or email within one business day
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-0.5">✓</span>
              They may ask a few additional questions about your tiny home
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-0.5">✓</span>
              You&apos;ll receive one or more quotes tailored to your specific situation
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-0.5">✓</span>
              No obligation — you choose whether to proceed
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-8 rounded-xl transition">
            Back to Home
          </Link>
          <Link href="/blog/" className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-brand-500 text-stone-700 font-semibold py-3 px-8 rounded-xl transition">
            Read Our Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
