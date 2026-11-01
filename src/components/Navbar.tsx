import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../data/translations';
import { MessageCircle, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'designs', label: t.nav.designs },
    { id: 'contact', label: t.nav.contact },
  ];

  const whatsappGeneralUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessages.generalConsultation
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1C0626]/95 backdrop-blur-md border-b border-[#D4AF37]/35 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 md:gap-8">
          {/* Zone 1: Brand Mark / Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2 group cursor-pointer shrink-0"
          >
            <BrandLogo size="md" variant="horizontal" theme="dark" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all py-1.5 cursor-pointer whitespace-nowrap shrink-0 relative ${
                  activeSection === link.id
                    ? 'text-[#F9E79F] font-semibold text-shadow-sm'
                    : 'text-[#FAF6EE]/75 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B8860B] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Language Selector & Primary WhatsApp CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Dropdown / Segment */}
            <div className="flex items-center bg-[#2E0E3D] border border-[#D4AF37]/40 rounded-xl p-1 text-xs shadow-inner">
              <Globe className="w-3.5 h-3.5 text-[#F9E79F] ml-1 mr-1 hidden sm:inline" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1A0624] shadow-md font-bold'
                    : 'text-[#FAF6EE]/80 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('mr')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  currentLang === 'mr'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1A0624] shadow-md font-bold'
                    : 'text-[#FAF6EE]/80 hover:text-white'
                }`}
                aria-label="मराठी मध्ये बदला"
              >
                मराठी
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  currentLang === 'hi'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1A0624] shadow-md font-bold'
                    : 'text-[#FAF6EE]/80 hover:text-white'
                }`}
                aria-label="हिंदी में बदलें"
              >
                हिंदी
              </button>
            </div>

            {/* Primary Action Button - Dashing Shimmer Gold */}
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#C5A059] text-[#1A0624] hover:brightness-110 text-xs font-bold tracking-wider uppercase border border-[#FFF1BD] shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap shrink-0 group active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#1A0624] group-hover:scale-110 transition-transform" />
              <span>{t.nav.enquireBtn}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F9E79F] hover:bg-[#2E0E3D] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#240830] border-b border-[#D4AF37]/40 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2.5 text-base font-medium transition-colors border-b border-[#3D124E] ${
                  activeSection === link.id
                    ? 'text-[#F9E79F] font-bold'
                    : 'text-[#FAF6EE]/85'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#C5A059] text-[#1A0624] text-sm font-bold uppercase tracking-wider border border-[#FFF1BD] shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#1A0624]" />
                <span>{t.nav.enquireBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
