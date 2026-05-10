'use client';
import { useState } from 'react';

interface ContactFormProps {
  formSubject: string;
}

export default function ContactForm({ formSubject }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const homeTypes = [
    ['thow', 'Tiny House on Wheels'],
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
    ['transit', 'Transit / Towing Cover'],
    ['landlord', 'Landlord Insurance'],
    ['off-grid', 'Off-Grid Systems Cover'],
    ['not-sure', 'Not Sure — Need Advice'],
  ];

  const inputClass = "w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent text-stone-900 placeholder-stone-400 text-sm";
  const labelClass = "block text-sm font-semibold text-stone-800 mb-1.5";

  return (
    <form action="/api/submit-form" method="POST" onSubmit={() => setSubmitting(true)} className="space-y-5">
      <input type="hidden" name="_subject" value={formSubject} />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name</label>
          <input type="text" name="first_name" required placeholder="Jane" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input type="text" name="last_name" required placeholder="Smith" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email Address</label>
          <input type="email" name="email" required placeholder="jane@email.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" required placeholder="021 XXX XXXX" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Tiny Home Type</label>
        <select name="home_type" required className={inputClass}>
          <option value="">Select your home type...</option>
          {homeTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass}>Cover Required</label>
        <select name="cover_type" required className={inputClass}>
          <option value="">What would you like covered?</option>
          {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass}>Location (City / Region)</label>
        <input type="text" name="location" placeholder="e.g. Canterbury, Waikato, Northland..." className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Tell Us About Your Home <span className="text-stone-400 font-normal">(optional)</span></label>
        <textarea name="details" rows={3} placeholder="e.g. Custom built 2024, 28m², solar + battery, parked on private lifestyle block..."
          className={`${inputClass} resize-none`} />
      </div>

      <button type="submit" disabled={submitting}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-green-900/20">
        {submitting ? 'Sending Your Enquiry…' : 'Get My Quote →'}
      </button>

      <p className="text-center text-xs text-stone-400 leading-relaxed">
        No obligation · No cost to you · NZ-licensed advisers · Your information is handled in accordance with our{' '}
        <a href="/privacy/" className="underline hover:text-green-700">Privacy Policy</a>.
      </p>
    </form>
  );
}
