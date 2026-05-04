import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center text-white text-sm font-black">🏡</span>
              <span className="font-extrabold text-white text-base">TinyHomeInsurance<span className="text-brand-400">.co.nz</span></span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Specialist insurance for tiny homes, tiny houses on wheels, container homes, and off-grid dwellings across New Zealand.
            </p>
          </div>
          {/* Coverage */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Coverage Types</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coverage/building-structure/" className="hover:text-brand-400 transition">Building &amp; Structure</Link></li>
              <li><Link href="/coverage/contents-insurance/" className="hover:text-brand-400 transition">Contents Insurance</Link></li>
              <li><Link href="/coverage/transit-towing-cover/" className="hover:text-brand-400 transition">Transit &amp; Towing Cover</Link></li>
              <li><Link href="/coverage/public-liability/" className="hover:text-brand-400 transition">Public Liability</Link></li>
              <li><Link href="/coverage/off-grid-systems/" className="hover:text-brand-400 transition">Off-Grid Systems</Link></li>
              <li><Link href="/coverage/landlord-insurance/" className="hover:text-brand-400 transition">Landlord Insurance</Link></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq/" className="hover:text-brand-400 transition">FAQs</Link></li>
              <li><Link href="/blog/" className="hover:text-brand-400 transition">Blog &amp; Guides</Link></li>
              <li><Link href="/about/" className="hover:text-brand-400 transition">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-brand-400 transition">Get a Quote</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy/" className="hover:text-brand-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-brand-400 transition">Terms of Use</Link></li>
              <li><Link href="/disclaimer/" className="hover:text-brand-400 transition">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 text-sm text-stone-500 space-y-2">
          <p>
            <strong className="text-stone-400">Financial Advice Disclosure:</strong> TinyHomeInsurance.co.nz connects consumers with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. We are a referral service and do not provide financial advice directly.
          </p>
          <p>
            © {year} TinyHomeInsurance.co.nz · All rights reserved ·{' '}
            <Link href="/privacy/" className="hover:text-brand-400 transition">Privacy</Link> ·{' '}
            <Link href="/terms/" className="hover:text-brand-400 transition">Terms</Link> ·{' '}
            <Link href="/disclaimer/" className="hover:text-brand-400 transition">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
