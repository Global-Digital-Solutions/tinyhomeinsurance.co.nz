import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-extrabold text-white text-base tracking-tight">
                TinyHomeInsurance<span className="text-green-400">.co.nz</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-5">
              Specialist insurance for tiny homes, tiny houses on wheels, container homes, and off-grid dwellings across New Zealand.
            </p>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> NZ-licensed advisers</div>
              <div className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> Fast response from one trusted provider</div>
              <div className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span> Wheels, containers &amp; off-grid covered</div>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Coverage Types</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/coverage/building-structure/" className="text-stone-400 hover:text-green-400 transition">Building &amp; Structure</Link></li>
              <li><Link href="/coverage/contents-insurance/" className="text-stone-400 hover:text-green-400 transition">Contents Insurance</Link></li>
              <li><Link href="/coverage/transit-towing-cover/" className="text-stone-400 hover:text-green-400 transition">Transit &amp; Towing Cover</Link></li>
              <li><Link href="/coverage/public-liability/" className="text-stone-400 hover:text-green-400 transition">Public Liability</Link></li>
              <li><Link href="/coverage/off-grid-systems/" className="text-stone-400 hover:text-green-400 transition">Off-Grid Systems</Link></li>
              <li><Link href="/coverage/landlord-insurance/" className="text-stone-400 hover:text-green-400 transition">Landlord Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/faq/" className="text-stone-400 hover:text-green-400 transition">FAQs</Link></li>
              <li><Link href="/blog/" className="text-stone-400 hover:text-green-400 transition">Blog &amp; Guides</Link></li>
              <li><Link href="/compare/" className="text-stone-400 hover:text-green-400 transition">Insurer Comparison</Link></li>
              <li><Link href="/about/" className="text-stone-400 hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/contact/" className="text-stone-400 hover:text-green-400 transition">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Legal & CTA */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link href="/privacy/" className="text-stone-400 hover:text-green-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="text-stone-400 hover:text-green-400 transition">Terms of Use</Link></li>
              <li><Link href="/disclaimer/" className="text-stone-400 hover:text-green-400 transition">Disclaimer</Link></li>
            </ul>
            <Link href="/contact/"
              className="inline-flex items-center justify-center w-full gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-5 rounded-xl transition text-sm shadow-lg shadow-green-900/30">
              Get a Quote →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-6 space-y-3">
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-400">Financial Advice Disclosure:</strong> TinyHomeInsurance.co.nz connects consumers with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. We are a referral service and do not provide financial advice directly. Information on this website is general in nature and does not constitute personalised financial advice. Adviser remuneration is by commission from insurers; there is no cost to you for the referral service.
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-400">Comparison Disclaimer:</strong> Insurer information shown on this website is based on publicly available policy wordings and underwriting guidelines as at {year}. Policy terms change; always confirm current terms with the insurer or your adviser before making any insurance decision.
          </p>
          <p className="text-xs text-stone-500">
            © {year} TinyHomeInsurance.co.nz · All rights reserved ·{' '}
            <Link href="/privacy/" className="hover:text-green-400 transition">Privacy</Link> ·{' '}
            <Link href="/terms/" className="hover:text-green-400 transition">Terms</Link> ·{' '}
            <Link href="/disclaimer/" className="hover:text-green-400 transition">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
