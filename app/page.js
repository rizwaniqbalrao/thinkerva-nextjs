'use client';
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import Timeline from '@/components/sections/Timeline';
import Pricing from '@/components/sections/Pricing';
import CtaBanner from '@/components/sections/CtaBanner';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  // Scroll to hash section when navigating from another page (e.g. /#contact)
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 200);
      }
    };
    tryScroll();
  }, []);

  return (
    <>
      <Preloader onDone={() => setHeroVisible(true)} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero visible={heroVisible} />
        <Marquee />
        <About />
        <Expertise />
        <Services />
        <Industries />
        <Timeline />
        <Pricing />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
