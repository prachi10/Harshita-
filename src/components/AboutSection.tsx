import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { Sparkles, Check, Scissors, Heart, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[#1A0624] via-[#250831] to-[#1A0624] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Grand Gold Border Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37] via-[#FFF1BD] to-[#996515] opacity-50 blur-xs -z-10 shadow-[0_0_25px_rgba(212,175,55,0.3)]" />

              <div className="rounded-3xl p-8 bg-gradient-to-b from-[#2E0E3D] via-[#240830] to-[#1A0624] text-[#FAF6EE] shadow-2xl border-2 border-[#D4AF37]/60 text-center relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#996515]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Big Bespoke Logo */}
                <div className="mb-6 flex justify-center">
                  <BrandLogo variant="stacked" theme="dark" size="lg" />
                </div>

                <div className="border-t border-[#D4AF37]/35 pt-6 mt-6">
                  <p className="font-playfair italic text-lg sm:text-xl text-[#F9E79F] font-bold mb-2 drop-shadow-sm">
                    “{t.about.signatureTagline}”
                  </p>
                  <p className="text-xs text-[#FAF6EE]/80 tracking-widest font-cinzel uppercase font-semibold">
                    Kasba Bawada · Kolhapur, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E0E3D] border border-[#D4AF37]/50 text-xs font-cinzel text-[#F9E79F] uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.about.sectionSubtitle}</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              {t.about.sectionTitle}
            </h2>

            {/* Exact Required Brief Text with High-Contrast Legibility */}
            <div className="space-y-4 text-base sm:text-lg text-[#FAF6EE]/90 leading-relaxed font-normal mb-8">
              <p className="font-playfair font-semibold text-xl sm:text-2xl text-white">
                {t.about.paragraph1}
              </p>
              <p>
                {t.about.paragraph2}
              </p>
              <p>
                {t.about.paragraph3}
              </p>
              <p className="font-playfair italic text-xl text-[#F9E79F] font-semibold pt-2 drop-shadow-sm">
                “{t.about.signatureTagline}”
              </p>
            </div>

            {/* Our Values / Craftsmanship Points */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/35">
              <div className="p-4 rounded-xl bg-[#280B33] border border-[#D4AF37]/40 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#1A0624] flex items-center justify-center mb-2.5 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-playfair font-bold text-sm text-white mb-1">
                  {t.about.values.attentionToDetail.title}
                </h4>
                <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                  {t.about.values.attentionToDetail.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#280B33] border border-[#D4AF37]/40 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#1A0624] flex items-center justify-center mb-2.5 font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="font-playfair font-bold text-sm text-white mb-1">
                  {t.about.values.customFit.title}
                </h4>
                <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                  {t.about.values.customFit.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#280B33] border border-[#D4AF37]/40 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#1A0624] flex items-center justify-center mb-2.5 font-bold">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-playfair font-bold text-sm text-white mb-1">
                  {t.about.values.traditionalModern.title}
                </h4>
                <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                  {t.about.values.traditionalModern.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process Strip with Dashing Cards */}
        <div className="mt-20 pt-12 border-t border-[#D4AF37]/35">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.howItWorks.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/80">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2B0C38] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl relative hover:border-[#F9E79F] transition-all">
              <span className="text-xs font-cinzel font-bold text-[#F9E79F] uppercase tracking-wider block mb-2">
                Step 01
              </span>
              <h4 className="font-playfair font-bold text-base text-white mb-1.5">
                {t.howItWorks.step1.title}
              </h4>
              <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                {t.howItWorks.step1.desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2B0C38] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl relative hover:border-[#F9E79F] transition-all">
              <span className="text-xs font-cinzel font-bold text-[#F9E79F] uppercase tracking-wider block mb-2">
                Step 02
              </span>
              <h4 className="font-playfair font-bold text-base text-white mb-1.5">
                {t.howItWorks.step2.title}
              </h4>
              <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                {t.howItWorks.step2.desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2B0C38] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl relative hover:border-[#F9E79F] transition-all">
              <span className="text-xs font-cinzel font-bold text-[#F9E79F] uppercase tracking-wider block mb-2">
                Step 03
              </span>
              <h4 className="font-playfair font-bold text-base text-white mb-1.5">
                {t.howItWorks.step3.title}
              </h4>
              <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                {t.howItWorks.step3.desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2B0C38] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl relative hover:border-[#F9E79F] transition-all">
              <span className="text-xs font-cinzel font-bold text-[#F9E79F] uppercase tracking-wider block mb-2">
                Step 04
              </span>
              <h4 className="font-playfair font-bold text-base text-white mb-1.5">
                {t.howItWorks.step4.title}
              </h4>
              <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
                {t.howItWorks.step4.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
