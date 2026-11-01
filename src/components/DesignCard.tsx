import React from 'react';
import { BlouseDesign, Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../data/translations';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';

interface DesignCardProps {
  design: BlouseDesign;
  currentLang: Language;
  onQuickView: (design: BlouseDesign) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({
  design,
  currentLang,
  onQuickView,
}) => {
  const t = translations[currentLang];
  const designName = design.name[currentLang] || design.name.en;
  const categoryLabel = design.categoryLabel[currentLang] || design.category;
  const description = design.description[currentLang] || design.description.en;

  const whatsappMessage = t.whatsappMessages.designInquiry(
    designName,
    categoryLabel
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="group flex flex-col bg-gradient-to-b from-[#2B0C38] via-[#22072D] to-[#180422] rounded-2xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#F9E79F] shadow-xl hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1">
      {/* Image Container with Hover Action */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#100216]">
        <img
          src={design.image}
          alt={designName}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
        />

        {/* Gradient Scrim for deep rich contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#180422] via-transparent to-black/20 pointer-events-none" />

        {/* Category Badge on Image */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#180422]/90 backdrop-blur-md border border-[#D4AF37]/60 text-[10px] font-bold text-[#F9E79F] uppercase tracking-wider shadow-md">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>{categoryLabel}</span>
        </div>

        {/* Quick View Button overlay */}
        <button
          type="button"
          onClick={() => onQuickView(design)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF6EE] hover:bg-white text-[#1A0624] text-xs font-bold shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label={`View details for ${designName}`}
        >
          <Eye className="w-3.5 h-3.5 text-[#B8860B]" />
          <span>{t.gallery.quickView}</span>
        </button>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5 justify-between">
        <div>
          {/* Design Name in bright crisp white */}
          <h3 className="font-playfair font-bold text-lg text-white group-hover:text-[#F9E79F] transition-colors leading-snug mb-2 line-clamp-1 drop-shadow-sm">
            {designName}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#FAF6EE]/75 leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Feature Specs in Clean Contrast */}
          <div className="text-[11px] text-[#FAF6EE]/70 space-y-1.5 mb-5 pt-3 border-t border-[#D4AF37]/25 bg-[#20062B]/50 p-2.5 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[#D4AF37] font-medium">{t.modal.neckType}:</span>
              <span className="text-white font-semibold truncate ml-2">
                {design.features.neckType[currentLang]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#D4AF37] font-medium">{t.modal.fabric}:</span>
              <span className="text-white font-semibold truncate ml-2">
                {design.features.fabric[currentLang]}
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp Enquiry Button - Dashing Shimmer WhatsApp Action */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider border border-white/60 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all group/btn active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366] group-hover/btn:scale-110 transition-transform" />
            <span>{t.gallery.enquireOnWhatsApp}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
