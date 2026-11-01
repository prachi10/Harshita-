/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, BlouseDesign } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DesignModal } from './components/DesignModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDesign, setSelectedDesign] = useState<BlouseDesign | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'designs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('designs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A0624] text-[#FAF6EE] selection:bg-[#D4AF37] selection:text-[#1A0624]">
      {/* Navigation Top Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onExploreClick={handleExploreClick}
        />

        {/* Blouse Designs Gallery (All 12 Categories) */}
        <Gallery
          currentLang={currentLang}
          onQuickView={(design) => setSelectedDesign(design)}
        />

        {/* About Harshita & Craftsmanship */}
        <AboutSection currentLang={currentLang} />

        {/* Contact & Location Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer with Moti Technologies credit */}
      <Footer currentLang={currentLang} />

      {/* Floating WhatsApp Button visible throughout */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Quick View / Stitching Advisory Modal */}
      <DesignModal
        design={selectedDesign}
        currentLang={currentLang}
        onClose={() => setSelectedDesign(null)}
      />
    </div>
  );
}
