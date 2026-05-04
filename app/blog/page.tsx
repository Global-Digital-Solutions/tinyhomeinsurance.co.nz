import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export const metadata = {
  title: 'Tiny Home Insurance Blog & Guides | TinyHomeInsurance.co.nz',
  description: 'Expert guides on tiny home insurance in NZ — covering THOWs, off-grid living, container homes, and more.',
};

export default function BlogPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-4">Tiny Home Insurance Guides</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Expert articles on tiny home insurance in New Zealand — from THOW cover to off-grid systems and everything in between.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}/`}
              className="bg-white rounded-xl border border-stone-200 hover:border-brand-400 hover:shadow-md transition group overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-brand-800 to-stone-800 h-36 flex items-center justify-center text-5xl">
                {post.category === 'THOW' ? '🚛' : post.category === 'Off-Grid' ? '☀️' : post.category === 'Landlord' ? '🔑' : '🏠'}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-700 bg-brand-50 px-2 py-0.5 rounded">{post.category}</span>
                  <span className="text-xs text-stone-500">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-stone-900 text-lg mb-2 group-hover:text-brand-700 transition leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-brand-700 font-semibold text-sm">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
