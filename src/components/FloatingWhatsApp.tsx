import React, { useState } from 'react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../data/translations';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const t = translations[currentLang];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessages.generalConsultation
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2A0A38] text-[#FAF6EE] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#D4AF37]/50 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="font-medium">
            {t.whatsappMessages.floatingTooltip}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#FAF6EE]/60 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with pulsing ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Harshita on WhatsApp"
      >
        {/* Pulsing beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />

        {/* Status indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D4AF37] border-2 border-white rounded-full z-20" />
      </a>
    </aside>
  );
};
