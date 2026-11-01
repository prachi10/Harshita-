import React, { useState, useMemo } from 'react';
import { BlouseCategory, BlouseDesign, Language } from '../types';
import { translations } from '../data/translations';
import { BLOUSE_DESIGNS } from '../data/blouseDesigns';
import { DesignCard } from './DesignCard';
import { Search, Sparkles, Filter, Info, X, Crown } from 'lucide-react';

interface GalleryProps {
  currentLang: Language;
  onQuickView: (design: BlouseDesign) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang, onQuickView }) => {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<BlouseCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesList: BlouseCategory[] = [
    'Bridal Blouse Designs',
    'Designer Blouses',
    'Traditional Blouses',
    'Maggam Work Blouses',
    'Princess Cut Blouses',
    'Padding Blouses',
    'Simple Blouses',
    'Back Neck Designs',
    'Front Neck Designs',
    'Sleeve Designs',
    'Modern Blouse Designs',
    'Wedding Collection',
  ];

  const filteredDesigns = useMemo(() => {
    return BLOUSE_DESIGNS.filter((design) => {
      const matchesCategory =
        selectedCategory === 'ALL' || design.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const nameEn = design.name.en.toLowerCase();
      const nameMr = design.name.mr.toLowerCase();
      const nameHi = design.name.hi.toLowerCase();
      const cat = design.category.toLowerCase();
      const neck = design.features.neckType[currentLang].toLowerCase();
      const fabric = design.features.fabric[currentLang].toLowerCase();
      const sleeve = design.features.sleeveStyle[currentLang].toLowerCase();

      return (
        nameEn.includes(q) ||
        nameMr.includes(q) ||
        nameHi.includes(q) ||
        cat.includes(q) ||
        neck.includes(q) ||
        fabric.includes(q) ||
        sleeve.includes(q)
      );
    });
  }, [selectedCategory, searchQuery, currentLang]);

  return (
    <section id="designs" className="py-16 md:py-24 bg-gradient-to-b from-[#1A0624] via-[#240830] to-[#1A0624] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Golden Opulence */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E0E3D] border border-[#D4AF37]/50 text-xs font-cinzel text-[#F9E79F] uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>20+ Exclusive Designs Catalog</span>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
            {t.gallery.sectionTitle}
          </h2>

          <p className="text-base text-[#FAF6EE]/80 leading-relaxed">
            {t.gallery.sectionSubtitle}
          </p>
        </div>

        {/* Demo & Inspiration Notice Banner with Dashing Velvet Gold Tone */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-gradient-to-r from-[#2A0A38] via-[#350E45] to-[#2A0A38] border border-[#D4AF37]/50 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#FAF6EE] shadow-lg">
          <Info className="w-5 h-5 text-[#F9E79F] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            {t.gallery.demoNotice}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Search Bar with Gold Glow */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#F9E79F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.gallery.searchPlaceholder}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#280B33] border border-[#D4AF37]/40 focus:outline-none focus:border-[#F9E79F] focus:ring-2 focus:ring-[#D4AF37]/50 text-xs sm:text-sm text-white placeholder-[#FAF6EE]/50 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FAF6EE]/60 hover:text-white p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 12 Categories Filter Buttons with Dashing Metallic Gold Glow */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none px-2 -mx-2">
            {/* All Designs Button */}
            <button
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                selectedCategory === 'ALL'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#AA7C11] text-[#1A0624] border-[#FFF1BD] shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-105'
                  : 'bg-[#2B0C38] hover:bg-[#3D124E] text-[#FAF6EE]/90 border-[#D4AF37]/35'
              }`}
            >
              {t.gallery.allCategory} ({BLOUSE_DESIGNS.length})
            </button>

            {/* Category Buttons */}
            {categoriesList.map((cat) => {
              const label = t.categories[cat];
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#AA7C11] text-[#1A0624] border-[#FFF1BD] shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-105 font-bold'
                      : 'bg-[#2B0C38] hover:bg-[#3D124E] text-[#FAF6EE]/90 border-[#D4AF37]/35'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                currentLang={currentLang}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#2A0A38]/60 rounded-2xl border border-dashed border-[#D4AF37]/40 max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 opacity-80" />
            <p className="text-sm text-[#FAF6EE] font-medium mb-4">
              {t.gallery.noResults}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1A0624] text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
            >
              {t.gallery.clearSearch}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
