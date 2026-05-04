import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'TinyHomeInsurance.co.nz — Specialist Insurance for Tiny Homes in NZ',
  description: 'Get specialist insurance for your tiny home, tiny house on wheels (THOW), container home, or off-grid dwelling. Free broker matching — NZ-licensed advisers respond within one business day.',
  metadataBase: new URL('https://tinyhomeinsurance.co.nz'),
  openGraph: {
    siteName: 'TinyHomeInsurance.co.nz',
    type: 'website',
    locale: 'en_NZ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className="font-sans bg-stone-50 text-stone-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
