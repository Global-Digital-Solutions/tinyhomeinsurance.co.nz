'use client';
import { useState } from 'react';
import { SITE } from '../data/site';

interface QuoteFormProps {
  variant?: 'compact' | 'full';
}

export default function QuoteForm({ variant = 'compact' }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = () => setSubmitting(true);

  const homeTypes = [
    ['thow', 'Tiny House on Wheels (THOW)'],
    ['fixed', 'Fixed Foundation Tiny Home'],
    ['container', 'Container Home'],
    ['off-grid-cabin', 'Off-Grid Cabin'],
    ['park-home', 'Park Home / Relocatable Home'],
    ['other', 'Other'],
  ];

  const coverTypes = [
    ['building-contents', 'Building + Contents'],
    ['building-only', 'Building / Structure Only'],
    ['contents-only', 'Contents Only'],
    ['landlord', 'Landlord Insurance'],
    ['not-sure', 'Not Sure — Need Advice'],
  ];

  const hiddenFields = (
    <>
      <input type="hidden" name="_next" value={SITE.thankYouUrl} />
      <input type="hidden" name="_subject" value={SITE.formSubject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} />
    </>
  );

  if (variant === 'full') {
    return (
      <section className="bg-gradient-to-r from-brand-700 to-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Tiny Home?</h2>
              <p className="text-lg text-brand-100 mb-6">
                Get specialist quotes from NZ-licensed insurance advisers within one business day — free, no obligation.
              </p>
              <ul className="space-y-3 text-brand-100">
                {['Free, no-obligation quotes', 'Specialist tiny home advisers', 'Covers THOWs, containers & off-grid', '1 business day response'].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <form action={SITE.workerUrl} method="POST" onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl">
              {hiddenFields}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                  <input type="text" name="name" required placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Phone</label>
                  <input type="tel" name="phone" required placeholder="09 XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Tiny Home Type</label>
                  <select name="home_type" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                    <option value="">Select home type...</option>
                    {homeTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Cover Required</label>
                  <select name="cover_type" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                    <option value="">Select cover type...</option>
                    {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-500 text-white font-semibold py-3 rounded-lg transition-colors">
                  {submitting ? 'Submitting…' : 'Get My Free Quote →'}
                </button>
                <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>🔒 256-bit SSL</span>
                  <span>🚫 No Spam</span>
                  <span>⚡ 1 Business Day</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-1">Get Your Free Tiny Home Quote</h3>
      <p className="text-stone-400 text-sm mb-5">NZ-licensed advisers respond within 1 business day</p>
      <form action={SITE.workerUrl} method="POST" onSubmit={handleSubmit} className="space-y-3">
        {hiddenFields}
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Full Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Email</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Phone</label>
          <input type="tel" name="phone" required placeholder="09 XXX XXXX"
            className="w-full px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Tiny Home Type</label>
          <select name="home_type" required
            className="w-full px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <option value="">Select type...</option>
            {homeTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Cover Required</label>
          <select name="cover_type" required
            className="w-full px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <option value="">Select cover...</option>
            {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <button type="submit" disabled={submitting}
          className="w-full bg-brand-700 hover:bg-brand-600 disabled:bg-brand-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
          {submitting ? 'Submitting…' : 'Get My Free Quote →'}
        </button>
        <div className="border-t border-stone-700 pt-3 flex items-center justify-between text-xs text-stone-400">
          <span>🔒 Secure</span>
          <span>🚫 No Spam</span>
          <span>⚡ Fast Response</span>
        </div>
      </form>
    </div>
  );
}
