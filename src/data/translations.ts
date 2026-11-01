import { Language, BlouseCategory } from '../types';

export const WHATSAPP_NUMBER = '919082867663';
export const DISPLAY_PHONE = '+91 9082867663';
export const BUSINESS_NAME = 'Harshita Blouse Creations';
export const BUSINESS_ADDRESS = 'Kasba Bawada, Kolhapur, Maharashtra, India – 416006';
export const MAPS_URL = 'https://maps.google.com/?q=Kasba+Bawada,+Kolhapur,+Maharashtra+416006';

export interface Translations {
  nav: {
    home: string;
    about: string;
    designs: string;
    contact: string;
    enquireBtn: string;
  };
  hero: {
    welcomeBadge: string;
    title: string;
    tagline: string;
    subtext: string;
    exploreBtn: string;
    orderWhatsAppBtn: string;
    trustedBy: string;
  };
  highlights: {
    bridal: { title: string; desc: string };
    fitting: { title: string; desc: string };
    embroidery: { title: string; desc: string };
    kolhapur: { title: string; desc: string };
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    allCategory: string;
    filterBy: string;
    searchPlaceholder: string;
    enquireOnWhatsApp: string;
    quickView: string;
    demoNotice: string;
    noResults: string;
    clearSearch: string;
  };
  categories: Record<BlouseCategory, string>;
  modal: {
    designDetails: string;
    category: string;
    fabric: string;
    neckType: string;
    sleeveStyle: string;
    workType: string;
    stitchingTime: string;
    orderHeading: string;
    orderInstruction: string;
    orderButton: string;
    close: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    signatureTagline: string;
    valuesTitle: string;
    values: {
      attentionToDetail: { title: string; desc: string };
      customFit: { title: string; desc: string };
      traditionalModern: { title: string; desc: string };
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    step4: { title: string; desc: string };
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    businessName: string;
    location: string;
    addressText: string;
    whatsappText: string;
    chatWithHarshita: string;
    openGoogleMaps: string;
    hours: string;
    hoursDetails: string;
    customNote: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    allRightsReserved: string;
    designerCredit: string;
    kolhapurPride: string;
  };
  whatsappMessages: {
    designInquiry: (designName: string, category: string) => string;
    generalConsultation: string;
    floatingTooltip: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      designs: 'Designs',
      contact: 'Contact',
      enquireBtn: 'Order on WhatsApp',
    },
    hero: {
      welcomeBadge: 'Boutique Blouse Stitching in Kolhapur',
      title: 'Harshita Blouse Creations',
      tagline: 'Your Style, Our Stitch – Every Blouse Tells a Story!',
      subtext: 'Bespoke bridal, maggam work, princess cut, and traditional blouse stitching crafted with perfection for your most cherished occasions.',
      exploreBtn: 'Explore Designs',
      orderWhatsAppBtn: 'Order on WhatsApp',
      trustedBy: 'Handcrafted with Love in Kasba Bawada, Kolhapur',
    },
    highlights: {
      bridal: {
        title: 'Bridal & Wedding Specialist',
        desc: 'Exquisite bridal blouses with rich zardozi, kundan, and pearl embroidery.',
      },
      fitting: {
        title: 'Flawless Custom Fit',
        desc: 'Precision cuts tailored to your exact measurements for supreme comfort and elegance.',
      },
      embroidery: {
        title: 'Handcrafted Artistry',
        desc: 'Traditional Paithani borders, authentic Maggam work, and creative neck patterns.',
      },
      kolhapur: {
        title: 'Kasba Bawada, Kolhapur',
        desc: 'Personalized home boutique service with dedicated attention to every stitch.',
      },
    },
    gallery: {
      sectionTitle: 'Blouse Design Gallery',
      sectionSubtitle: 'Discover our curated pattern catalog across 12 signature styling categories',
      allCategory: 'All Designs',
      filterBy: 'Filter by Category',
      searchPlaceholder: 'Search by style, neck, sleeve, or fabric...',
      enquireOnWhatsApp: 'Enquire on WhatsApp',
      quickView: 'View Details',
      demoNotice: 'Inspiration & Demo Catalog: All designs shown are curated pattern inspirations. Each blouse is custom-tailored to your exact measurements, fabric, and styling preferences.',
      noResults: 'No blouse designs matched your search. Try another category or keyword.',
      clearSearch: 'Clear Filters',
    },
    categories: {
      'Bridal Blouse Designs': 'Bridal Blouses',
      'Designer Blouses': 'Designer Blouses',
      'Traditional Blouses': 'Traditional Blouses',
      'Maggam Work Blouses': 'Maggam Work Blouses',
      'Princess Cut Blouses': 'Princess Cut Blouses',
      'Padding Blouses': 'Padding Blouses',
      'Simple Blouses': 'Simple Blouses',
      'Back Neck Designs': 'Back Neck Designs',
      'Front Neck Designs': 'Front Neck Designs',
      'Sleeve Designs': 'Sleeve Designs',
      'Modern Blouse Designs': 'Modern Blouse Designs',
      'Wedding Collection': 'Wedding Collection',
    },
    modal: {
      designDetails: 'Design Overview',
      category: 'Category',
      fabric: 'Recommended Fabric',
      neckType: 'Neckline Style',
      sleeveStyle: 'Sleeve Detail',
      workType: 'Craftsmanship',
      stitchingTime: 'Custom Stitching',
      orderHeading: 'Want this tailored for you?',
      orderInstruction: 'Connect directly with Harshita on WhatsApp to discuss your fabric, neck depth, sleeve length, and measurements.',
      orderButton: 'Chat on WhatsApp with this Design',
      close: 'Close',
    },
    about: {
      sectionTitle: 'About Harshita',
      sectionSubtitle: 'The passion and artistry behind every bespoke stitch',
      paragraph1: 'Welcome to Harshita Blouse Creations!',
      paragraph2: 'We believe every woman deserves a blouse that reflects her unique style and personality.',
      paragraph3: 'With creativity, attention to detail and a passion for stitching, Harshita creates beautiful blouse designs for traditional occasions, weddings and everyday elegance.',
      signatureTagline: 'Your Style, Our Stitch – Every Blouse Tells a Story!',
      valuesTitle: 'Our Stitching Philosophy',
      values: {
        attentionToDetail: {
          title: 'Meticulous Attention to Detail',
          desc: 'Every seam, piping, and embellishment is aligned with utmost precision for a seamless silhouette.',
        },
        customFit: {
          title: 'Comfort-First Tailoring',
          desc: 'Expertise in princess cuts and structured padding that accentuates natural grace without discomfort.',
        },
        traditionalModern: {
          title: 'Heritage Meets Modern Elegance',
          desc: 'Honoring Kolhapur Paithani traditions while embracing chic contemporary necklines and sleeve cuts.',
        },
      },
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Easy 4-step custom stitching process via WhatsApp',
      step1: {
        title: '1. Select or Share a Design',
        desc: 'Browse our gallery or send your dream blouse inspiration image via WhatsApp.',
      },
      step2: {
        title: '2. Share Fabric & Measurements',
        desc: 'Provide your measurements or sample blouse, and discuss preferred neckline and sleeve styles.',
      },
      step3: {
        title: '3. Handcrafted Stitching',
        desc: 'Harshita custom cuts and tailors your blouse with pristine finishing and premium lining.',
      },
      step4: {
        title: '4. Perfect Fit Delivery',
        desc: 'Collect your finished blouse in Kasba Bawada, Kolhapur, ready for your celebration.',
      },
    },
    contact: {
      sectionTitle: 'Get in Touch',
      sectionSubtitle: 'Visit our home boutique or send a WhatsApp message anytime',
      businessName: 'Harshita Blouse Creations',
      location: 'Kasba Bawada, Kolhapur',
      addressText: 'Kasba Bawada, Kolhapur, Maharashtra, India – 416006',
      whatsappText: '+91 9082867663',
      chatWithHarshita: 'Chat on WhatsApp',
      openGoogleMaps: 'Open in Google Maps',
      hours: 'Consultation Hours',
      hoursDetails: 'Open Monday – Sunday: 10:00 AM to 8:00 PM (By Appointment)',
      customNote: 'Please WhatsApp before visiting for consultation to ensure dedicated personal attention.',
    },
    footer: {
      aboutText: 'Harshita Blouse Creations specializes in custom handcrafted designer blouses, bridal wear, maggam embroidery, and traditional Paithani blouses in Kasba Bawada, Kolhapur.',
      quickLinks: 'Quick Links',
      allRightsReserved: 'All rights reserved.',
      designerCredit: 'Designed & Developed by Moti Technologies',
      kolhapurPride: 'Kasba Bawada, Kolhapur, Maharashtra – 416006',
    },
    whatsappMessages: {
      designInquiry: (designName: string, category: string) =>
        `Hello Harshita! I liked this blouse design: ${designName} (${category}). Please share the stitching details and price.`,
      generalConsultation:
        'Hello Harshita! I would like to enquire about blouse stitching and discuss a custom design.',
      floatingTooltip: 'Chat with Harshita on WhatsApp',
    },
  },

  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      designs: 'डिझाईन्स',
      contact: 'संपर्क',
      enquireBtn: 'व्हॉट्सॲपवर ऑर्डर करा',
    },
    hero: {
      welcomeBadge: 'कोल्हापुरातील दर्जेदार ब्लाउज शिलाई',
      title: 'हर्षिता ब्लाउज क्रिएशन्स',
      tagline: 'आपली शैली, आमची शिलाई – प्रत्येक ब्लाउज सांगतो एक कथा!',
      subtext: 'ब्रायडल, मग्गम वर्क, प्रिन्सेस कट आणि पारंपारिक ब्लाउज शिलाई आपल्या खास सण-समारंभांसाठी परिपूर्णतेने साकारली जाते.',
      exploreBtn: 'डिझाईन्स पहा',
      orderWhatsAppBtn: 'व्हॉट्सॲपवर ऑर्डर करा',
      trustedBy: 'कसबा बावडा, कोल्हापूर येथे मनापासून तयार केलेले',
    },
    highlights: {
      bridal: {
        title: 'ब्रायडल व लग्न सोहळा विशेषज्ञ',
        desc: 'जर्दोजी, कुंदन आणि मोत्यांच्या आकर्षक भरतकामासह नवरीसाठी खास ब्लाउज.',
      },
      fitting: {
        title: 'उत्तम आणि अचूक फिटिंग',
        desc: 'आपल्या अचूक मापांनुसार आरामदायक आणि आकर्षक शिलाईची खात्री.',
      },
      embroidery: {
        title: 'पारंपारिक कलाकुसर',
        desc: 'पैठणी काठ, अस्सल मग्गम वर्क आणि नावीन्यपूर्ण गळा डिझाईन्स.',
      },
      kolhapur: {
        title: 'कसबा बावडा, कोल्हापूर',
        desc: 'प्रत्येक ब्लाउजकडे विशेष वैयक्तिक लक्ष देणारी घरगुती बुटीक सेवा.',
      },
    },
    gallery: {
      sectionTitle: 'ब्लाउज डिझाईन गॅलरी',
      sectionSubtitle: '१२ खास प्रकारांमधील उत्कृष्ट डिझाईन्सचा संग्रह पहा',
      allCategory: 'सर्व डिझाईन्स',
      filterBy: 'प्रकारानुसार निवडा',
      searchPlaceholder: 'गळा, बाही किंवा कापडानुसार शोधा...',
      enquireOnWhatsApp: 'व्हॉट्सॲपवर चौकशी करा',
      quickView: 'तपशील पहा',
      demoNotice: 'प्रेरणा व डेमो कॅटलॉग: येथे दाखवलेल्या सर्व डिझाईन्स क्युरेट केलेल्या पॅटर्न प्रेरणा आहेत. प्रत्येक ब्लाउज आपल्या अचूक मापांनुसार आणि आवडीनुसार शिवून दिला जातो.',
      noResults: 'आपल्या शोधानुसार कोणतीही डिझाईन आढळली नाही. कृपया दुसरा पर्याय तपासा.',
      clearSearch: 'फिल्टर हटवा',
    },
    categories: {
      'Bridal Blouse Designs': 'ब्रायडल ब्लाउज',
      'Designer Blouses': 'डिझायनर ब्लाउज',
      'Traditional Blouses': 'पारंपारिक ब्लाउज',
      'Maggam Work Blouses': 'मग्गम वर्क ब्लाउज',
      'Princess Cut Blouses': 'प्रिन्सेस कट ब्लाउज',
      'Padding Blouses': 'पॅडिंग ब्लाउज',
      'Simple Blouses': 'साधे ब्लाउज',
      'Back Neck Designs': 'बॅक नेक डिझाईन्स',
      'Front Neck Designs': 'फ्रंट नेक डिझाईन्स',
      'Sleeve Designs': 'बाही डिझाईन्स',
      'Modern Blouse Designs': 'मॉडर्न ब्लाउज डिझाईन्स',
      'Wedding Collection': 'वेडिंग कलेक्शन',
    },
    modal: {
      designDetails: 'डिझाईन तपशील',
      category: 'प्रकार',
      fabric: 'योग्य कापड',
      neckType: 'गळा प्रकार',
      sleeveStyle: 'बाही स्टाईल',
      workType: 'कलाकुसर',
      stitchingTime: 'कस्टम शिलाई',
      orderHeading: 'हे डिझाईन शिवून हवे आहे का?',
      orderInstruction: 'आपल्या कापड, गळ्याची खोली आणि बाहीच्या लांबीबद्दल चर्चा करण्यासाठी थेट व्हॉट्सॲपवर संपर्क साधा.',
      orderButton: 'या डिझाईनसाठी व्हॉट्सॲपवर चर्चा करा',
      close: 'बंद करा',
    },
    about: {
      sectionTitle: 'हर्षिता यांच्याबद्दल',
      sectionSubtitle: 'प्रत्येक सुंदर शिलाईमागील आवड आणि कलाकुसर',
      paragraph1: 'हर्षिता ब्लाउज क्रिएशन्समध्ये आपले सहर्ष स्वागत!',
      paragraph2: 'आमचा विश्वास आहे की प्रत्येक महिलेला तिच्या अनोख्या शैलीचे आणि व्यक्तिमत्त्वाचे प्रतिबिंब देणारा ब्लाउज मिळायलाच हवा.',
      paragraph3: 'सर्जनशीलता, बारीकसारीक तपशीलांवर लक्ष आणि शिलाईची मनस्वी आवड यामुळे हर्षिता पारंपारिक सण, विवाहसोहळे आणि दैनंदिन सौंदर्यासाठी मनमोहक ब्लाउज डिझाईन्स साकारतात.',
      signatureTagline: 'आपली शैली, आमची शिलाई – प्रत्येक ब्लाउज सांगतो एक कथा!',
      valuesTitle: 'आमची शिलाई तत्त्वे',
      values: {
        attentionToDetail: {
          title: 'बारीकसारीक कामावर विशेष लक्ष',
          desc: 'प्रत्येक टीप, पायपिंग आणि फिनिशिंगमध्ये निर्दोष अचूकता.',
        },
        customFit: {
          title: 'आरामदायक फिटिंग',
          desc: 'प्रिन्सेस कट आणि पॅडिंगमध्ये शरीराला शोभून दिसणारी सुखद शिलाई.',
        },
        traditionalModern: {
          title: 'पारंपारिक व आधुनिकतेचा मेळ',
          desc: 'कोल्हापुरी पैठणीचा वारसा जपत आधुनिक गळा व बाही डिझाईन्सची जोड.',
        },
      },
    },
    howItWorks: {
      title: 'ऑर्डर कशी करावी?',
      subtitle: 'व्हॉट्सॲपद्वारे सोपी ४-टप्प्यांची शिलाई प्रक्रिया',
      step1: {
        title: '१. डिझाईन निवडा',
        desc: 'आमच्या गॅलरीमधून निवडा किंवा आपल्या आवडीचा फोटो व्हॉट्सॲपवर पाठवा.',
      },
      step2: {
        title: '२. कापड व मापे द्या',
        desc: 'आपले जुने माप ब्लाउज किंवा अचूक मापे देऊन गळा व बाही निश्चित करा.',
      },
      step3: {
        title: '३. उत्कृष्ट शिलाई',
        desc: 'हर्षिता आपल्या ब्लाउजची उत्तम अस्तर व फिनिशिंगसह शिलाई पूर्ण करतील.',
      },
      step4: {
        title: '४. परिपूर्ण फिटिंगसह डिलिव्हरी',
        desc: 'कसबा बावडा, कोल्हापूर येथे आपला तयार ब्लाउज घेऊन जा.',
      },
    },
    contact: {
      sectionTitle: 'संपर्क साधा',
      sectionSubtitle: 'आमच्या घरी भेट द्या किंवा व्हॉट्सॲपवर मेसेज करा',
      businessName: 'हर्षिता ब्लाउज क्रिएशन्स',
      location: 'कसबा बावडा, कोल्हापूर',
      addressText: 'कसबा बावडा, कोल्हापूर, महाराष्ट्र, भारत – ४१६००६',
      whatsappText: '+91 9082867663',
      chatWithHarshita: 'व्हॉट्सॲपवर बोला',
      openGoogleMaps: 'गुगल मॅप्सवर पहा',
      hours: 'वेळ',
      hoursDetails: 'सोमवार ते रविवार: सकाळी १०:०० ते रात्री ८:०० (अपॉइंटमेंटनुसार)',
      customNote: 'कृपया येण्यापूर्वी व्हॉट्सॲपवर संपर्क साधावा जेणेकरून वैयक्तिक वेळ देता येईल.',
    },
    footer: {
      aboutText: 'हर्षिता ब्लाउज क्रिएशन्स – कसबा बावडा, कोल्हापूर येथील ब्रायडल, मग्गम वर्क आणि पैठणी ब्लाउज शिलाईची विश्वसनीय जागा.',
      quickLinks: 'महत्त्वाचे दुवे',
      allRightsReserved: 'सर्व हक्क राखीव.',
      designerCredit: 'Designed & Developed by Moti Technologies',
      kolhapurPride: 'कसबा बावडा, कोल्हापूर, महाराष्ट्र – ४१६००६',
    },
    whatsappMessages: {
      designInquiry: (designName: string, category: string) =>
        `नमस्कार हर्षिता! मला ही ब्लाउज डिझाईन आवडली: ${designName} (${category}). कृपया शिलाईचे तपशील आणि दर सांगावेत.`,
      generalConsultation:
        'नमस्कार हर्षिता! मला ब्लाउज शिलाईबद्दल चौकशी करायची आहे आणि नवीन डिझाईनबद्दल बोलायचे आहे.',
      floatingTooltip: 'हर्षिता यांच्याशी व्हॉट्सॲपवर बोला',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      designs: 'डिजाइन्स',
      contact: 'संपर्क',
      enquireBtn: 'व्हाट्सएप पर ऑर्डर करें',
    },
    hero: {
      welcomeBadge: 'कोल्हापुर में प्रीमियम ब्लाउज सिलाई',
      title: 'हर्षिता ब्लाउज क्रिएशन्स',
      tagline: 'आपकी शैली, हमारी सिलाई – हर ब्लाउज कहता है एक कहानी!',
      subtext: 'ब्राइडल, मग्गम वर्क, प्रिंसेस कट और पारंपरिक ब्लाउज सिलाई आपके खास अवसरों के लिए पूर्णता के साथ तैयार की जाती है।',
      exploreBtn: 'डिजाइन्स देखें',
      orderWhatsAppBtn: 'व्हाट्सएप पर ऑर्डर करें',
      trustedBy: 'कसबा बावडा, कोल्हापुर में प्रेमपूर्वक निर्मित',
    },
    highlights: {
      bridal: {
        title: 'ब्राइडल एवं वेडिंग विशेषज्ञ',
        desc: 'जरदोज़ी, कुंदन और मोतियों की खूबसूरत कढ़ाई के साथ दुल्हन के लिए खास ब्लाउज।',
      },
      fitting: {
        title: 'बेहतरीन और सटीक फिटिंग',
        desc: 'आपके सटीक नाप के अनुसार आरामदायक और सुंदर सिलाई की गारंटी।',
      },
      embroidery: {
        title: 'हस्तनिर्मित कारीगरी',
        desc: 'पैठणी बॉर्डर, असली मग्गम वर्क और आकर्षक नेक पैटर्न्स।',
      },
      kolhapur: {
        title: 'कसबा बावडा, कोल्हापुर',
        desc: 'हर ब्लाउज पर विशेष व्यक्तिगत ध्यान देने वाली होम बुटीक सेवा।',
      },
    },
    gallery: {
      sectionTitle: 'ब्लाउज डिजाइन गैलरी',
      sectionSubtitle: '१२ विशिष्ट श्रेणियों में हमारे खूबसूरत डिजाइनों का संग्रह देखें',
      allCategory: 'सभी डिजाइन्स',
      filterBy: 'श्रेणी के अनुसार चुनें',
      searchPlaceholder: 'गले, आस्तीन या कपड़े के अनुसार खोजें...',
      enquireOnWhatsApp: 'व्हाट्सएप पर पूछताछ करें',
      quickView: 'विवरण देखें',
      demoNotice: 'प्रेरणा एवं डेमो कैटलॉग: यहाँ दिखाए गए सभी डिजाइन्स प्रेरणा स्वरूप हैं। प्रत्येक ब्लाउज आपके सटीक नाप और पसंद के अनुसार सिला जाता है।',
      noResults: 'आपकी खोज के अनुसार कोई डिजाइन नहीं मिला। कृपया दूसरा शब्द खोजें।',
      clearSearch: 'फ़िल्टर हटाएं',
    },
    categories: {
      'Bridal Blouse Designs': 'ब्राइडल ब्लाउज',
      'Designer Blouses': 'डिजाइनर ब्लाउज',
      'Traditional Blouses': 'पारंपरिक ब्लाउज',
      'Maggam Work Blouses': 'मग्गम वर्क ब्लाउज',
      'Princess Cut Blouses': 'प्रिंसेस कट ब्लाउज',
      'Padding Blouses': 'पैडिंग ब्लाउज',
      'Simple Blouses': 'साधारण ब्लाउज',
      'Back Neck Designs': 'बैक नेक डिजाइन्स',
      'Front Neck Designs': 'फ्रंट नेक डिजाइन्स',
      'Sleeve Designs': 'आस्तीन डिजाइन्स',
      'Modern Blouse Designs': 'मॉडर्न ब्लाउज डिजाइन्स',
      'Wedding Collection': 'वेडिंग कलेक्शन',
    },
    modal: {
      designDetails: 'डिजाइन विवरण',
      category: 'श्रेणी',
      fabric: 'उपयुक्त कपड़ा',
      neckType: 'गला प्रकार',
      sleeveStyle: 'आस्तीन प्रकार',
      workType: 'कारीगरी',
      stitchingTime: 'कस्टम सिलाई',
      orderHeading: 'क्या यह डिजाइन सिलवाना चाहते हैं?',
      orderInstruction: 'अपने कपड़े, गले की गहराई और आस्तीन की लंबाई पर चर्चा करने के लिए सीधे व्हाट्सएप पर संपर्क करें।',
      orderButton: 'इस डिजाइन के लिए व्हाट्सएप पर बात करें',
      close: 'बंद करें',
    },
    about: {
      sectionTitle: 'हर्षिता के बारे में',
      sectionSubtitle: 'हर सुंदर सिलाई के पीछे का समर्पण और कला',
      paragraph1: 'हर्षिता ब्लाउज क्रिएशन्स में आपका स्वागत है!',
      paragraph2: 'हमारा मानना है कि हर महिला को एक ऐसा ब्लाउज मिलना चाहिए जो उसकी अनूठी शैली और व्यक्तित्व को दर्शाए।',
      paragraph3: 'रचनात्मकता, बारीकियों पर ध्यान और सिलाई के प्रति समर्पण के साथ, हर्षिता पारंपरिक अवसरों, शादियों और दैनिक सुंदरता के लिए खूबसूरत ब्लाउज डिजाइन तैयार करती हैं।',
      signatureTagline: 'आपकी शैली, हमारी सिलाई – हर ब्लाउज कहता है एक कहानी!',
      valuesTitle: 'हमारा सिलाई दर्शन',
      values: {
        attentionToDetail: {
          title: 'बारीकियों पर विशेष ध्यान',
          desc: 'हर सिलाई, पाइपिंग और फिनिशिंग में निर्दोष सुंदरता और मजबूती।',
        },
        customFit: {
          title: 'आरामदायक फिटिंग',
          desc: 'प्रिंसेस कट और पैडिंग में शरीर के अनुकूल सुंदर एवं सहज सिलाई।',
        },
        traditionalModern: {
          title: 'परंपरा और आधुनिकता का संगम',
          desc: 'कोल्हापुरी पैठणी की विरासत के साथ आधुनिक नेकलाइन और आस्तीन शैलियां।',
        },
      },
    },
    howItWorks: {
      title: 'ऑर्डर कैसे करें?',
      subtitle: 'व्हाट्सएप के जरिए सरल ४-चरणीय सिलाई प्रक्रिया',
      step1: {
        title: '१. डिजाइन चुनें',
        desc: 'हमारी गैलरी से चुनें या अपनी पसंद की कोई फोटो व्हाट्सएप पर भेजें।',
      },
      step2: {
        title: '२. कपड़ा और नाप दें',
        desc: 'अपना नाप या पुराना सैंपल ब्लाउज देकर गले और आस्तीन की शैली तय करें।',
      },
      step3: {
        title: '३. कुशल सिलाई',
        desc: 'हर्षिता आपके ब्लाउज को बेहतरीन अस्तर और फिनिशिंग के साथ तैयार करेंगी।',
      },
      step4: {
        title: '४. सटीक फिटिंग के साथ डिलीवरी',
        desc: 'कसबा बावडा, कोल्हापुर से अपना तैयार ब्लाउज प्राप्त करें।',
      },
    },
    contact: {
      sectionTitle: 'संपर्क करें',
      sectionSubtitle: 'हमारे घर आएं या कभी भी व्हाट्सएप पर संदेश भेजें',
      businessName: 'हर्षिता ब्लाउज क्रिएशन्स',
      location: 'कसबा बावडा, कोल्हापुर',
      addressText: 'कसबा बावडा, कोल्हापुर, महाराष्ट्र, भारत – ४१६००६',
      whatsappText: '+91 9082867663',
      chatWithHarshita: 'व्हाट्सएप पर बात करें',
      openGoogleMaps: 'गूगल मैप्स पर देखें',
      hours: 'समय',
      hoursDetails: 'सोमवार से रविवार: सुबह १०:०० से रात ८:०० (अपॉइंटमेंट द्वारा)',
      customNote: 'कृपया आने से पहले व्हाट्सएप पर संपर्क करें ताकि व्यक्तिगत रूप से समय दिया जा सके।',
    },
    footer: {
      aboutText: 'हर्षिता ब्लाउज क्रिएशन्स – कसबा बावडा, कोल्हापुर में ब्राइडल, मग्गम वर्क और पैठणी ब्लाउज सिलाई का विश्वसनीय स्थान।',
      quickLinks: 'महत्वपूर्ण लिंक्स',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      designerCredit: 'Designed & Developed by Moti Technologies',
      kolhapurPride: 'कसबा बावडा, कोल्हापुर, महाराष्ट्र – ४१६००६',
    },
    whatsappMessages: {
      designInquiry: (designName: string, category: string) =>
        `नमस्ते हर्षिता! मुझे यह ब्लाउज डिजाइन पसंद आया: ${designName} (${category})। कृपया सिलाई का विवरण और मूल्य साझा करें।`,
      generalConsultation:
        'नमस्ते हर्षिता! मुझे ब्लाउज सिलाई के बारे में पूछताछ करनी है और नए डिजाइन पर चर्चा करनी है।',
      floatingTooltip: 'हर्षिता से व्हाट्सएप पर बात करें',
    },
  },
};
