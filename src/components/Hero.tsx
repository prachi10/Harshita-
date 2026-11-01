import React, { useState } from 'react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../data/translations';
import { MessageCircle, Sparkles, Compass, ShieldCheck, HeartHandshake, Scissors, MapPin, Award, CheckCircle } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
}

const HERO_FEATURED_BLOUSES = [
  {
    id: 'bridal-zardozi',
    title: { en: 'Royal Zardozi Bridal', mr: 'शाही जर्दोजी ब्रायडल', hi: 'शाही जरदोज़ी ब्राइडल' },
    tag: { en: 'Bridal Couture', mr: 'ब्रायडल संग्रह', hi: 'ब्राइडल संग्रह' },
    image: '/src/assets/images/hero_royal_bridal_blouse_1793528511423.jpg',
  },
  {
    id: 'temple-lakshmi',
    title: { en: 'Temple Jewelry Maggam', mr: 'महालक्ष्मी मंदिर मग्गम', hi: 'महालक्ष्मी मंदिर मग्गम' },
    tag: { en: 'Temple Work', mr: 'मंदिर कलाकुसर', hi: 'मंदिर नक्काशी' },
    image: '/src/assets/images/blouse_bridal_temple_kundan_1793529941648.jpg',
  },
  {
    id: 'paithani-lotus',
    title: { en: 'Kolhapuri Paithani Lotus', mr: 'कोल्हापुरी पैठणी कमळ', hi: 'कोल्हापुरी पैठणी कमल' },
    tag: { en: 'Heritage Silk', mr: 'अस्सल पैठणी', hi: 'असली पैठणी' },
    image: '/src/assets/images/blouse_traditional_paithani_gold_1793528513796.jpg',
  },
  {
    id: 'back-dori-latkan',
    title: { en: 'Royal Criss-Cross Dori', mr: 'रॉयल दोरी व लटकन', hi: 'रॉयल डोरी व लटकन' },
    tag: { en: 'Back Neck Glam', mr: 'बॅक नेक डिझाईन', hi: 'बैक नेक डिजाइन' },
    image: '/src/assets/images/blouse_back_dori_latkan_gold_1793529941142.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreClick }) => {
  const t = translations[currentLang];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const activeBlouse = HERO_FEATURED_BLOUSES[activePhotoIdx];

  const whatsappHeroUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessages.generalConsultation
  )}`;

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#1C0626] via-[#2A0A38] to-[#1A0624]">
      {/* Opulent Ambient Lighting Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#601878]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Dashing Brand Copy & Hero Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Royal Location Badge with Gold Glow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E0E3D] border border-[#D4AF37]/60 text-[#F9E79F] text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.hero.welcomeBadge}</span>
              <span className="text-[#D4AF37]">·</span>
              <span className="text-white font-bold">कसबा बावडा, कोल्हापूर</span>
            </div>

            {/* Brand Title with High-Contrast Shimmering Gold Typography */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-4 text-balance">
              Harshita <span className="text-gold-gradient drop-shadow-md">Blouse Creations</span>
            </h1>

            {/* Tagline */}
            <p className="font-playfair italic text-xl sm:text-2xl text-[#F9E79F] font-semibold leading-relaxed mb-6 drop-shadow-sm">
              “{t.hero.tagline}”
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FAF6EE]/85 max-w-2xl leading-relaxed mb-8">
              {t.hero.subtext}
            </p>

            {/* Dashing Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#C5A059] text-[#1A0624] font-bold tracking-wider uppercase text-xs sm:text-sm border border-[#FFF1BD] shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer group"
              >
                <Compass className="w-4 h-4 text-[#1A0624] group-hover:rotate-90 transition-transform duration-300" />
                <span>{t.hero.exploreBtn} (20+ Designs)</span>
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold tracking-wider uppercase text-xs sm:text-sm border-2 border-white/80 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366] group-hover:scale-110 transition-transform" />
                <span>{t.hero.orderWhatsAppBtn}</span>
              </a>
            </div>

            {/* Micro trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#D4AF37]/35 text-xs text-[#FAF6EE]/80 font-medium">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#F9E79F]" />
                <span className="text-white font-semibold">100% Perfect Fit Guarantee</span>
              </div>
              <span className="text-[#D4AF37]/60">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F9E79F]" />
                <span className="text-white font-semibold">Maggam & Zardozi Masters</span>
              </div>
              <span className="text-[#D4AF37]/60">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F9E79F]" />
                <span className="text-white font-semibold">Authentic Paithani Border Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashing Hero Visual Frame with Live Switcher (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Grand Glowing Golden Border Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37] via-[#FFF1BD] to-[#996515] opacity-75 blur-xs -z-10 shadow-[0_0_30px_rgba(212,175,55,0.4)]" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F9E79F]/80 bg-[#1A0624]">
                {/* Active Hero Designer Photography */}
                <div className="relative h-[440px] sm:h-[490px] overflow-hidden">
                  <img
                    key={activeBlouse.id}
                    src={activeBlouse.image}
                    alt={activeBlouse.title[currentLang]}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 animate-in fade-in duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for supreme contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0624] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0624]/90 backdrop-blur-md border border-[#D4AF37] text-[11px] font-bold text-[#F9E79F] uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#F9E79F]" />
                    <span>{activeBlouse.tag[currentLang]}</span>
                  </div>

                  {/* Floating Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1A0624]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#FAF6EE] shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-cinzel uppercase tracking-widest text-[#D4AF37]">
                          Exclusive Kolhapur Pattern
                        </p>
                        <p className="font-playfair text-lg font-bold text-white">
                          {activeBlouse.title[currentLang]}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]">
                        <Scissors className="w-5 h-5 text-[#F9E79F]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4-Thumbnail Switcher Strip */}
                <div className="bg-[#240830] p-2.5 border-t border-[#D4AF37]/40 grid grid-cols-4 gap-2">
                  {HERO_FEATURED_BLOUSES.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all cursor-pointer ${
                        activePhotoIdx === idx
                          ? 'border-[#F9E79F] ring-2 ring-[#D4AF37] scale-105 shadow-md'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Craft Strip with Dashing Velvet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#D4AF37]/35">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2E0E3D] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl hover:border-[#F9E79F] transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#1A0624] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 font-bold" />
            </div>
            <h3 className="font-playfair font-bold text-lg text-white mb-1.5">
              {t.highlights.bridal.title}
            </h3>
            <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
              {t.highlights.bridal.desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2E0E3D] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl hover:border-[#F9E79F] transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#1A0624] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Scissors className="w-6 h-6 font-bold" />
            </div>
            <h3 className="font-playfair font-bold text-lg text-white mb-1.5">
              {t.highlights.fitting.title}
            </h3>
            <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
              {t.highlights.fitting.desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2E0E3D] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl hover:border-[#F9E79F] transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#1A0624] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6 font-bold" />
            </div>
            <h3 className="font-playfair font-bold text-lg text-white mb-1.5">
              {t.highlights.embroidery.title}
            </h3>
            <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
              {t.highlights.embroidery.desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2E0E3D] to-[#1C0626] border border-[#D4AF37]/40 shadow-xl hover:border-[#F9E79F] transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#1A0624] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 font-bold" />
            </div>
            <h3 className="font-playfair font-bold text-lg text-white mb-1.5">
              {t.highlights.kolhapur.title}
            </h3>
            <p className="text-xs text-[#FAF6EE]/75 leading-relaxed">
              {t.highlights.kolhapur.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
