import React, { useState } from 'react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER, DISPLAY_PHONE, BUSINESS_NAME, BUSINESS_ADDRESS, MAPS_URL } from '../data/translations';
import { MapPin, MessageCircle, Clock, ExternalLink, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [userName, setUserName] = useState('');
  const [blouseType, setBlouseType] = useState('Bridal Blouse');
  const [eventDate, setEventDate] = useState('');
  const [note, setNote] = useState('');

  const handleCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    let text = '';
    if (currentLang === 'mr') {
      text = `नमस्कार हर्षिता! माझे नाव ${userName || 'ग्राहक'} आहे. मला ${blouseType} शिवून घ्यायचा आहे.${
        eventDate ? ` कार्यक्रम तारीख: ${eventDate}.` : ''
      }${note ? ` अधिक माहिती: ${note}` : ''} कृपया शिलाई तपशील सांगावेत.`;
    } else if (currentLang === 'hi') {
      text = `नमस्ते हर्षिता! मेरा नाम ${userName || 'ग्राहक'} है। मुझे ${blouseType} सिलवाना है।${
        eventDate ? ` कार्यक्रम तिथि: ${eventDate}।` : ''
      }${note ? ` विवरण: ${note}` : ''} कृपया सिलाई जानकारी साझा करें।`;
    } else {
      text = `Hello Harshita! My name is ${userName || 'Customer'}. I would like to stitch a ${blouseType}.${
        eventDate ? ` Function Date: ${eventDate}.` : ''
      }${note ? ` Details: ${note}` : ''} Please share the stitching details.`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessages.generalConsultation
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#1A0624] via-[#240830] to-[#16031F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E0E3D] border border-[#D4AF37]/50 text-xs font-cinzel text-[#F9E79F] uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Kasba Bawada · Kolhapur</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t.contact.sectionTitle}
          </h2>

          <p className="text-base text-[#FAF6EE]/80 leading-relaxed">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Info & Google Maps Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-b from-[#2B0C38] to-[#1C0626] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/45 shadow-2xl space-y-6">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-1.5 drop-shadow-sm">
                  {BUSINESS_NAME}
                </h3>
                <p className="font-playfair italic text-[#F9E79F] text-sm font-semibold">
                  “Your Style, Our Stitch – Every Blouse Tells a Story!”
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-[#D4AF37]/30 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#3D124E] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-md">
                    <MapPin className="w-5 h-5 text-[#F9E79F]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-cinzel text-[#D4AF37] block font-bold">
                      {t.contact.location}
                    </span>
                    <p className="font-semibold text-white mt-0.5">
                      {BUSINESS_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#3D124E] text-[#25D366] flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-md">
                    <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-cinzel text-[#D4AF37] block font-bold">
                      WhatsApp Contact
                    </span>
                    <p className="font-bold text-lg text-[#F9E79F] mt-0.5">
                      {DISPLAY_PHONE}
                    </p>
                    <p className="text-xs text-[#FAF6EE]/75 mt-0.5">
                      Direct WhatsApp chat with Harshita for fittings, fabric & bookings
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#3D124E] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-md">
                    <Clock className="w-5 h-5 text-[#F9E79F]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-cinzel text-[#D4AF37] block font-bold">
                      {t.contact.hours}
                    </span>
                    <p className="text-xs sm:text-sm text-[#FAF6EE]/85 mt-0.5">
                      {t.contact.hoursDetails}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp & Map Buttons with High Contrast */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D4AF37]/30">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] hover:brightness-110 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/60 shadow-[0_0_15px_rgba(37,211,102,0.35)] transition-all group active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>{t.contact.chatWithHarshita}</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#3D124E] hover:bg-[#521969] text-[#F9E79F] text-xs sm:text-sm font-bold tracking-wider border border-[#D4AF37]/60 shadow-md transition-all group active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-[#F9E79F] group-hover:translate-x-0.5 transition-transform" />
                  <span>{t.contact.openGoogleMaps}</span>
                </a>
              </div>

              <p className="text-[11px] text-[#FAF6EE]/80 italic bg-[#20062B] p-3 rounded-xl border border-[#D4AF37]/25 leading-relaxed">
                {t.contact.customNote}
              </p>
            </div>
          </div>

          {/* Right Column: Custom Stitching Inquiry Card (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#2B0C38] to-[#1C0626] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/45 shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-cinzel uppercase tracking-widest text-[#F9E79F] font-bold block mb-1">
                Custom Tailoring
              </span>
              <h3 className="font-playfair font-bold text-2xl text-white">
                Send an Inquiry on WhatsApp
              </h3>
              <p className="text-xs text-[#FAF6EE]/75 mt-1">
                Tell Harshita about your saree, fabric, or upcoming occasion
              </p>
            </div>

            <form onSubmit={handleCustomInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F9E79F] mb-1">
                  Your Name (तुमचे नाव)
                </label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-[#1C0626] border border-[#D4AF37]/40 focus:outline-none focus:border-[#F9E79F] text-xs sm:text-sm text-white placeholder-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F9E79F] mb-1">
                    Blouse Style
                  </label>
                  <select
                    value={blouseType}
                    onChange={(e) => setBlouseType(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#1C0626] border border-[#D4AF37]/40 focus:outline-none focus:border-[#F9E79F] text-xs sm:text-sm text-white"
                  >
                    <option value="Bridal Blouse">Bridal Blouse</option>
                    <option value="Maggam Work Blouse">Maggam Work Blouse</option>
                    <option value="Paithani Traditional Blouse">Paithani Traditional Blouse</option>
                    <option value="Princess Cut Blouse">Princess Cut Blouse</option>
                    <option value="Padded Blouse">Padded Blouse</option>
                    <option value="Designer Boatneck / Back Neck">Designer Boatneck / Back Neck</option>
                    <option value="Simple Everyday Blouse">Simple Everyday Blouse</option>
                    <option value="Other Custom Design">Other Custom Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F9E79F] mb-1">
                    Occasion / Target Date
                  </label>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="e.g. Wedding next month"
                    className="w-full px-4 py-3 rounded-xl bg-[#1C0626] border border-[#D4AF37]/40 focus:outline-none focus:border-[#F9E79F] text-xs sm:text-sm text-white placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F9E79F] mb-1">
                  Specific Requests (Neckline, Sleeve length, Fabric details)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. I have a green Paithani saree and want lotus back neck with elbow sleeves..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1C0626] border border-[#D4AF37]/40 focus:outline-none focus:border-[#F9E79F] text-xs sm:text-sm text-white placeholder-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#C5A059] text-[#1A0624] text-xs sm:text-sm font-bold uppercase tracking-wider border border-[#FFF1BD] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4 text-[#1A0624]" />
                <span>Send via WhatsApp (+91 9082867663)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
