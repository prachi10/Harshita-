import React from 'react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER, DISPLAY_PHONE, BUSINESS_ADDRESS } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const whatsappFooterUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessages.generalConsultation
  )}`;

  return (
    <footer className="bg-[#2A0A38] text-[#FAF6EE] border-t-2 border-[#D4AF37]/40 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/25">
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="lg" />
            <p className="font-playfair italic text-lg text-[#F9E79F] leading-snug">
              “Your Style, Our Stitch – Every Blouse Tells a Story!”
            </p>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 max-w-md leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Location & Contact (6 cols) */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="space-y-2 md:text-right">
              <span className="text-xs font-cinzel uppercase tracking-widest text-[#D4AF37]">
                Home Boutique Location
              </span>
              <p className="text-sm text-[#FAF6EE] flex items-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_ADDRESS}</span>
              </p>
              <p className="text-sm text-[#FAF6EE] flex items-center md:justify-end gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {DISPLAY_PHONE}</span>
              </p>
            </div>

            <div>
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#AA7C11] text-[#1A0624] text-xs font-bold uppercase tracking-wider border border-[#FFF1BD] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-[#1A0624] stroke-[#D4AF37]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6EE]/70 gap-4">
          <p>
            © {new Date().getFullYear()} Harshita Blouse Creations. {t.footer.allRightsReserved}
          </p>

          {/* Required Credit: "Designed & Developed by Moti Technologies" */}
          <div className="flex items-center gap-1.5 font-medium text-[#FAF6EE]/90">
            <span>Designed & Developed by</span>
            <span className="text-[#D4AF37] font-semibold tracking-wide">
              Moti Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
