'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const coverageLinks = [
  { label: 'Building & Structure', href: '/coverage/building-structure/', icon: '🏠' },
  { label: 'Contents Insurance', href: '/coverage/contents-insurance/', icon: '📦' },
  { label: 'Transit & Towing Cover', href: '/coverage/transit-towing-cover/', icon: '🚛' },
  { label: 'Public Liability', href: '/coverage/public-liability/', icon: '🛡️' },
  { label: 'Off-Grid Systems', href: '/coverage/off-grid-systems/', icon: '☀️' },
  { label: 'Loss of Use', href: '/coverage/loss-of-use/', icon: '🏕️' },
  { label: 'Landlord Insurance', href: '/coverage/landlord-insurance/', icon: '🔑' },
];

const navLinks = [
  { label: 'FAQs', href: '/faq/' },
  { label: 'Compare', href: '/compare/' },
  { label: 'Blog', href: '/blog/' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [mobileCoverageOpen, setMobileCoverageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoverageOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-100 shadow-sm h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center font-extrabold text-slate-900 text-lg leading-tight flex-shrink-0">
          TinyHomeInsurance<span className="text-brand-700">.co.nz</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-700">

          {/* Coverage Types dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCoverageOpen(o => !o)}
              onMouseEnter={() => setCoverageOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-stone-50 transition"
            >
              Coverage Types
              <svg className={`w-4 h-4 transition-transform duration-200 ${coverageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {coverageOpen && (
              <div
                onMouseLeave={() => setCoverageOpen(false)}
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50"
              >
                <Link href="/coverage/"
                  onClick={() => setCoverageOpen(false)}
                  className="block px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-brand-700 transition">
                  All Coverage Types →
                </Link>
                <div className="border-t border-stone-100 mt-1 pt-1">
                  {coverageLinks.map(l => (
                    <Link key={l.href} href={l.href}
                      onClick={() => setCoverageOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-brand-50 hover:text-brand-800 transition">
                      <span className="text-base w-6 text-center">{l.icon}</span>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-stone-50 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact/"
            className="hidden sm:inline-flex px-4 py-2 bg-brand-700 text-white text-sm font-bold rounded-lg hover:bg-brand-800 transition shadow-sm">
            Get a Quote
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded text-slate-600 hover:text-brand-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-stone-200 shadow-lg md:hidden z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">

            {/* Coverage Types accordion */}
            <button
              onClick={() => setMobileCoverageOpen(o => !o)}
              className="w-full flex items-center justify-between py-2 px-3 rounded text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-800 transition">
              Coverage Types
              <svg className={`w-4 h-4 transition-transform ${mobileCoverageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileCoverageOpen && (
              <div className="pl-4 space-y-1 pb-1">
                <Link href="/coverage/" onClick={() => setMobileOpen(false)}
                  className="block py-2 px-3 rounded text-sm text-brand-700 font-bold hover:bg-brand-50 transition">
                  All Coverage Types
                </Link>
                {coverageLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2 px-3 rounded text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-800 transition">
                    <span>{l.icon}</span>{l.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-2 px-3 rounded text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-800 transition">
                {l.label}
              </Link>
            ))}

            <Link href="/contact/" onClick={() => setMobileOpen(false)}
              className="block mt-2 py-2.5 px-3 bg-brand-700 text-white font-bold rounded-lg text-center hover:bg-brand-800 transition">
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
