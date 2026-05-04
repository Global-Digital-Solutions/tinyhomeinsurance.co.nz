import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import QuoteForm from '../../../components/QuoteForm';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | TinyHomeInsurance.co.nz`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-stone-900 mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-stone-800 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<p key={i} className="font-semibold text-stone-900 mt-4 mb-1">{line.slice(2, -2)}</p>);
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(<p key={i} className="text-stone-700 leading-relaxed mb-4">{line}</p>);
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">
            ← All Guides
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide text-brand-300 bg-brand-700/50 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-stone-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 bg-white rounded-xl border border-stone-200 p-8">
            <p className="text-xl text-stone-600 mb-8 pb-8 border-b border-stone-100 leading-relaxed font-medium">{post.excerpt}</p>
            <div>{renderContent(post.content)}</div>
          </article>

          <aside className="space-y-6">
            <QuoteForm variant="compact" />
            {related.length > 0 && (
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
                <ul className="space-y-3">
                  {related.map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}/`} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
