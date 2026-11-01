import React, { useEffect } from 'react';
import { BlouseDesign, Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../data/translations';
import { X, MessageCircle, Scissors, Sparkles, ShieldCheck } from 'lucide-react';

interface DesignModalProps {
  design: BlouseDesign | null;
  currentLang: Language;
  onClose: () => void;
}

export const DesignModal: React.FC<DesignModalProps> = ({
  design,
  currentLang,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (design) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [design, onClose]);

  if (!design) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#2B0C38] via-[#22072D] to-[#180422] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-[#D4AF37] z-10 my-8">
        {/* Top close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#180422]/90 text-[#FAF6EE] hover:bg-[#D4AF37] hover:text-[#1A0624] flex items-center justify-center transition-all cursor-pointer shadow-lg border border-[#D4AF37]/50"
          aria-label={t.modal.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Big Image (6 cols on desktop) */}
          <div className="md:col-span-6 bg-[#100216] relative min-h-[340px] md:min-h-full">
            <img
              src={design.image}
              alt={designName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180422] via-transparent to-transparent pointer-events-none md:hidden" />
            <div className="absolute bottom-3 left-4 right-4 text-[#F9E79F] text-xs font-cinzel font-bold tracking-wider md:hidden">
              {categoryLabel}
            </div>
          </div>

          {/* Right Column: Specifications & WhatsApp Order CTA (6 cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-[#FAF6EE]">
            <div>
              {/* Category */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#180422] border border-[#D4AF37]/50 text-xs font-cinzel text-[#F9E79F] uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>{categoryLabel}</span>
              </div>

              {/* Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 drop-shadow-sm">
                {designName}
              </h2>

              {/* Description */}
              <p className="text-sm text-[#FAF6EE]/85 leading-relaxed mb-6">
                {description}
              </p>

              {/* Specification Specs Grid */}
              <div className="bg-[#1C0626] rounded-2xl p-4 border border-[#D4AF37]/40 space-y-3 mb-6 shadow-inner">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-[#F9E79F] pb-1 border-b border-[#D4AF37]/30 flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{t.modal.designDetails}</span>
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#D4AF37] block text-[11px] font-semibold">
                      {t.modal.neckType}
                    </span>
                    <span className="font-bold text-white">
                      {design.features.neckType[currentLang]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D4AF37] block text-[11px] font-semibold">
                      {t.modal.sleeveStyle}
                    </span>
                    <span className="font-bold text-white">
                      {design.features.sleeveStyle[currentLang]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D4AF37] block text-[11px] font-semibold">
                      {t.modal.fabric}
                    </span>
                    <span className="font-bold text-white">
                      {design.features.fabric[currentLang]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D4AF37] block text-[11px] font-semibold">
                      {t.modal.workType}
                    </span>
                    <span className="font-bold text-white">
                      {design.features.workType[currentLang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Custom Stitching Advisory Note */}
              <div className="flex items-start gap-2.5 text-xs text-[#FAF6EE]/80 mb-6 bg-[#20062B] p-3 rounded-xl border border-[#D4AF37]/30">
                <ShieldCheck className="w-4 h-4 text-[#F9E79F] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.modal.orderInstruction}
                </p>
              </div>
            </div>

            {/* WhatsApp CTA Area */}
            <div className="pt-2 border-t border-[#D4AF37]/30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] hover:brightness-110 text-white text-sm font-bold tracking-wider uppercase border border-white/60 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all group active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366] group-hover:scale-110 transition-transform" />
                <span>{t.modal.orderButton}</span>
              </a>

              <p className="text-[11px] text-center text-[#F9E79F] mt-2.5 font-medium">
                WhatsApp: +91 9082867663 · Kasba Bawada, Kolhapur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
