import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Get a Free Tiny Home Insurance Quote | TinyHomeInsurance.co.nz',
  description: 'Request a free quote for tiny home insurance in New Zealand. NZ-licensed advisers respond within one business day.',
};

export default function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-brand-100">
            Complete the form below and a NZ-licensed tiny home insurance adviser will be in touch within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <QuoteForm variant="full" />
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <h2 className="font-bold text-stone-900 text-lg mb-4">What Happens Next?</h2>
              <ol className="space-y-4">
                {[
                  { n: '1', title: 'We receive your enquiry', desc: 'Your details are securely forwarded to a NZ-licensed insurance adviser.' },
                  { n: '2', title: 'Adviser reviews your situation', desc: 'The adviser assesses your tiny home type, location, and cover requirements.' },
                  { n: '3', title: 'You receive a call or email', desc: 'Within one business day, the adviser contacts you with options and a quote.' },
                  { n: '4', title: 'Choose your cover', desc: 'Compare options and proceed only if you\'re happy. No pressure, no obligation.' },
                ].map(step => (
                  <li key={step.n} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{step.n}</span>
                    <div>
                      <div className="font-semibold text-stone-900">{step.title}</div>
                      <div className="text-stone-600 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-brand-50 rounded-xl border border-brand-200 p-6">
              <h3 className="font-bold text-brand-900 mb-3">Contact Directly</h3>
              <p className="text-brand-800 text-sm mb-2">Prefer to speak with us directly?</p>
              <p className="font-semibold text-brand-900">Email: <a href={`mailto:${SITE.email}`} className="underline hover:no-underline">{SITE.email}</a></p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 text-sm text-stone-600">
              <p className="font-semibold text-stone-900 mb-2">Financial Advice Disclosure</p>
              <p>TinyHomeInsurance.co.nz is a referral service. We connect you with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. The advisers we refer you to earn commission from insurers; there is no cost to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
