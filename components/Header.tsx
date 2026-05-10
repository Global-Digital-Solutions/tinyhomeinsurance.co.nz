'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Coverage Types', href: '/coverage/' },
  { label: 'FAQs', href: '/faq/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { if (open) setOpen(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-100 shadow-sm h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-slate-900 text-lg leading-tight">
          <span className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center text-white text-sm font-black flex-shrink-0">🏡</span>
          <span>TinyHomeInsurance<span className="text-brand-700">.co.nz</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-700 transition">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact/" className="hidden sm:inline-flex px-4 py-2 bg-brand-700 text-white text-sm font-bold rounded-lg hover:bg-brand-800 transition shadow-sm">
            Get a Quote
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded text-slate-600 hover:text-brand-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden z-50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-800 transition">
                {l.label}
              </Link>
            ))}
            <Link href="/contact/" onClick={() => setOpen(false)}
              className="block mt-2 py-2.5 px-3 bg-brand-700 text-white font-bold rounded-lg text-center hover:bg-brand-800 transition">
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
