import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Thinkerva.com | AI & Technology Consulting — Dr. Naveed Iqbal',
  description: 'Thinkerva.com — Led by Dr. Naveed Iqbal. Global AI & Technology Consulting, Business Transformation, Aviation, Automotive & FinTech Solutions.',
  keywords: 'Thinkerva, Dr. Naveed Iqbal, AI Consultant, Technology Consulting, Systems Architect, Business Transformation, FinTech, Aviation, Automotive',
  openGraph: {
    title: 'Thinkerva.com | AI & Technology Consulting — Dr. Naveed Iqbal',
    description: 'Thinkerva — Global consulting firm led by Dr. Naveed Iqbal. AI, Engineering, Business Transformation for Governments, Enterprises & Startups.',
    url: 'https://thinkerva.com',
    siteName: 'Thinkerva.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
