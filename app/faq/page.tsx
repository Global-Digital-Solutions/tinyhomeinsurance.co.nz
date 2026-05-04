'use client';
import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '../../data/faqs';

const categories = Array.from(new Set(faqs.map(f => f.category)));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-4">Tiny Home Insurance FAQs</h1>
          <p className="text-xl text-stone-600">Answers to the most common questions about insuring tiny homes in New Zealand.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['All', ...categories].map(cat => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${activeCategory === cat ? 'bg-brand-700 text-white' : 'bg-white border border-stone-300 text-stone-700 hover:border-brand-500'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {filtered.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-stone-50 transition">
                <div>
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{faq.category}</span>
                  <p className="font-semibold text-stone-900 mt-0.5">{faq.question}</p>
                </div>
                <span className="text-brand-600 flex-shrink-0 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-stone-700 leading-relaxed text-sm border-t border-stone-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-brand-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-brand-100 mb-6">Our NZ-licensed advisers are happy to discuss your specific situation. Get in touch for free, no-obligation advice.</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition">
            Talk to an Adviser →
          </Link>
        </div>
      </div>
    </div>
  );
}
