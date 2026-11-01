import { BlouseDesign } from '../types';

export const BLOUSE_DESIGNS: BlouseDesign[] = [
  // 1. Bridal Blouse Designs
  {
    id: 'bridal-royal-zardozi',
    name: {
      en: 'Royal Zardozi Bridal Silk Blouse',
      mr: 'शाही जर्दोजी ब्रायडल सिल्क ब्लाउज',
      hi: 'शाही जरदोज़ी ब्राइडल सिल्क ब्लाउज',
    },
    category: 'Bridal Blouse Designs',
    categoryLabel: {
      en: 'Bridal Blouse Designs',
      mr: 'ब्रायडल ब्लाउज',
      hi: 'ब्राइडल ब्लाउज',
    },
    image: '/src/assets/images/hero_royal_bridal_blouse_1793528511423.jpg',
    description: {
      en: 'Heavily hand-embroidered royal purple bridal blouse featuring authentic golden zardozi embroidery, intricate floral foliage, and Kundan stone borders with a sweetheart neckline.',
      mr: 'अस्सल सोनेरी जर्दोजी भरतकाम, कुंदन स्टोन बॉर्डर आणि मनमोहक स्वीटहार्ट गळ्यासह जांभळ्या रंगाचा नवरीसाठी खास सिल्क ब्लाउज.',
      hi: 'असली सुनहरी जरदोज़ी कढ़ाई, कुंदन स्टोन बॉर्डर और आकर्षक स्वीटहार्ट गले के साथ बैंगनी रंग का दुल्हन का खास सिल्क ब्लाउज।',
    },
    features: {
      neckType: { en: 'Sweetheart Deep Cut', mr: 'स्वीटहार्ट डीप कट', hi: 'स्वीटहार्ट डीप कट' },
      sleeveStyle: { en: 'Elbow-Length Heavy Embroidered', mr: 'कोपरपर्यंत भरतकाम केलेली बाही', hi: 'कोहनी तक कढ़ाईदार आस्तीन' },
      fabric: { en: 'Pure Raw Silk / Kanjeevaram', mr: 'शुद्ध रॉ सिल्क / कांजीवरम', hi: 'शुद्ध रॉ सिल्क / कांजीवरम' },
      workType: { en: 'Zardozi, Kundan & Sequins', mr: 'जर्दोजी, कुंदन आणि टिकल्या', hi: 'जरदोज़ी, कुंदन और सितारे' },
    },
    isFeatured: true,
  },
  {
    id: 'bridal-temple-lakshmi-maggam',
    name: {
      en: 'Temple Jewelry Lakshmi Bridal Blouse',
      mr: 'मंदिर ज्वेलरी महालक्ष्मी ब्रायडल ब्लाउज',
      hi: 'टेंपल ज्वेलरी महालक्ष्मी ब्राइडल ब्लाउज',
    },
    category: 'Bridal Blouse Designs',
    categoryLabel: {
      en: 'Bridal Blouse Designs',
      mr: 'ब्रायडल ब्लाउज',
      hi: 'ब्राइडल ब्लाउज',
    },
    image: '/src/assets/images/blouse_bridal_temple_kundan_1793529941648.jpg',
    description: {
      en: 'Royal heritage bridal piece with Goddess Lakshmi seated under a carved golden arch, studded with rubies, emeralds, pearls, and pure zardozi wirework on deep velvet.',
      mr: 'देवी महालक्ष्मीच्या सुवर्ण कमळातील कमानीची अप्रतिम कलाकुसर, रुबी आणि मोत्यांच्या लटकनसह शिवलेला शाही ब्रायडल ब्लाउज.',
      hi: 'देवी महालक्ष्मी के सुनहरे मेहराब की भव्य नक्काशी, रूबी और मोतियों की लटकन से सजा शाही ब्राइडल ब्लाउज।',
    },
    features: {
      neckType: { en: 'Broad Regal U with Pearl Fringe', mr: 'मोती झालर असलेला रुंद यु गळा', hi: 'मोती झालर वाला चौड़ा यू गला' },
      sleeveStyle: { en: 'Peacock Temple Arch Sleeve', mr: 'मयूर मंदिर कमानीची भरलेली बाही', hi: 'मयूर मंदिर मेहराबदार आस्तीन' },
      fabric: { en: 'Micro Velvet & Silk Blend', mr: 'मायक्रो व्हेलव्हेट व सिल्क', hi: 'माइक्रो वेलवेट व सिल्क' },
      workType: { en: 'Temple Maggam & Antique Zari', mr: 'टेंपल मग्गम व अँटिक जरी', hi: 'टेंपल मग्गम व एंटीक जरी' },
    },
    isFeatured: true,
  },

  // 2. Maggam Work Blouses
  {
    id: 'maggam-royal-peacock',
    name: {
      en: 'Peacock Motif Maggam Cutout Blouse',
      mr: 'मोर डिझाईन मग्गम वर्क कटआउट ब्लाउज',
      hi: 'मयूर डिजाइन मग्गम वर्क कटआउट ब्लाउज',
    },
    category: 'Maggam Work Blouses',
    categoryLabel: {
      en: 'Maggam Work Blouses',
      mr: 'मग्गम वर्क ब्लाउज',
      hi: 'मग्गम वर्क ब्लाउज',
    },
    image: '/src/assets/images/blouse_maggam_peacock_work_1793528511544.jpg',
    description: {
      en: 'Masterpiece back neck cutout adorned with dual golden peacocks, micro-pearl beadwork, floral creeper detailing, and handmade matching latkans on royal purple silk.',
      mr: 'दोन सुवर्ण मयूर डिझाईन, सुबक मोती वर्क आणि मॅचिंग लटकन्ससह पाठ गळ्याची उत्कृष्ट मग्गम कलाकुसर.',
      hi: 'दो सुनहरे मोर डिजाइन, बारीक मोती वर्क और लटकन के साथ बैक नेक पर शानदार मग्गम वर्क।',
    },
    features: {
      neckType: { en: 'Teardrop Keyhole Cutout', mr: 'टियरड्रॉप की-होल कटआउट', hi: 'टियरड्रॉप की-होल कटआउट' },
      sleeveStyle: { en: 'Medium Sleeve with Border Work', mr: 'काठ वर्क असलेली मध्यम बाही', hi: 'बॉर्डर वर्क वाली मध्यम आस्तीन' },
      fabric: { en: 'Bangalore Silk / Brocade', mr: 'बंगलोर सिल्क / ब्रोकेड', hi: 'बैंगलोर सिल्क / ब्रोकेड' },
      workType: { en: 'Handcrafted Aari & Maggam Work', mr: 'हस्तनिर्मित आरी व मग्गम वर्क', hi: 'हस्तनिर्मित आरी और मग्गम वर्क' },
    },
    isFeatured: true,
  },
  {
    id: 'maggam-heavy-floral-vines',
    name: {
      en: 'Intricate Floral Vine Maggam Artwork',
      mr: 'सुबक वेलबुट्टी मग्गम वर्क ब्लाउज',
      hi: 'बारीक बेलबूटी मग्गम वर्क ब्लाउज',
    },
    category: 'Maggam Work Blouses',
    categoryLabel: {
      en: 'Maggam Work Blouses',
      mr: 'मग्गम वर्क ब्लाउज',
      hi: 'मग्गम वर्क ब्लाउज',
    },
    image: '/src/assets/images/blouse_bridal_sleeve_embroidery_1793528631959.jpg',
    description: {
      en: 'Dense floral vine maggam work flowing through the entire back and sleeve frame with miniature gold beads and crystal drop latkans.',
      mr: 'बारीक सुवर्ण मण्यांची वेलबुट्टी, क्रिस्टल आणि मोत्यांच्या लटकनसह पाठीवर आणि बाहीवर केलेली मनमोहक मग्गम शिलाई.',
      hi: 'बारीक सुनहरे मोतियों की बेलबूटी और क्रिस्टल लटकनों से सजी बैक व आस्तीन की मनमोहक मग्गम सिलाई।',
    },
    features: {
      neckType: { en: 'Pot Neck with Maggam Outline', mr: 'मग्गम आउटलाईन पॉट नेक', hi: 'मग्गम आउटलाइन पॉट नेक' },
      sleeveStyle: { en: 'Heavy Embroidered Hanging Tassels', mr: 'झुमका लटकन असलेली भरगच्च बाही', hi: 'झुमका लटकन वाली आस्तीन' },
      fabric: { en: 'Heavy Raw Silk', mr: 'हेवी रॉ सिल्क', hi: 'हैवी रॉ सिल्क' },
      workType: { en: 'Cutdana & Bullion Maggam', mr: 'कटदाणा व सुवर्ण मग्गम', hi: 'कटदाना व सुनहरी मग्गम' },
    },
  },

  // 3. Traditional Blouses
  {
    id: 'traditional-paithani-lotus',
    name: {
      en: 'Kolhapuri Paithani Lotus Motif Blouse',
      mr: 'कोल्हापुरी पैठणी कमळ डिझाईन ब्लाउज',
      hi: 'कोल्हापुरी पैठणी कमल डिजाइन ब्लाउज',
    },
    category: 'Traditional Blouses',
    categoryLabel: {
      en: 'Traditional Blouses',
      mr: 'पारंपारिक ब्लाउज',
      hi: 'पारंपरिक ब्लाउज',
    },
    image: '/src/assets/images/blouse_traditional_paithani_gold_1793528513796.jpg',
    description: {
      en: 'Traditional Kolhapur Paithani blouse featuring a majestic hand-cut lotus flower back neck with authentic zari border integration and traditional golden dori tassels.',
      mr: 'अस्सल कोल्हापुरी पैठणीच्या जरी काठासह कमळाच्या आकाराचा पारंपारिक बॅक नेक आणि देखणी सुवर्ण दोरी.',
      hi: 'कोल्हापुरी पैठणी के सुनहरे जरी बॉर्डर के साथ कमल के आकार का पारंपरिक बैक नेक और सुंदर डोरी।',
    },
    features: {
      neckType: { en: 'Lotus Window Back Neck', mr: 'कमळ खिडकी बॅक नेक', hi: 'कमल खिड़की बैक नेक' },
      sleeveStyle: { en: 'Traditional Broad Paithani Border', mr: 'पारंपारिक रुंद पैठणी काठ', hi: 'पारंपरिक चौड़ा पैठणी बॉर्डर' },
      fabric: { en: 'Pure Yeola / Kolhapur Paithani Silk', mr: 'अस्सल पैठणी सिल्क', hi: 'असली पैठणी सिल्क' },
      workType: { en: 'Zari Border Appliqué & Piping', mr: 'जरी काठ फिनिशिंग व पायपिंग', hi: 'जरी बॉर्डर फिनिशिंग व पाइपिंग' },
    },
    isFeatured: true,
  },
  {
    id: 'traditional-khun-kolhapur-blouse',
    name: {
      en: 'Heritage Kolhapuri Khun Silk Blouse',
      mr: 'अस्सल कोल्हापुरी खण सिल्क ब्लाउज',
      hi: 'असली कोल्हापुरी खन सिल्क ब्लाउज',
    },
    category: 'Traditional Blouses',
    categoryLabel: {
      en: 'Traditional Blouses',
      mr: 'पारंपारिक ब्लाउज',
      hi: 'पारंपरिक ब्लाउज',
    },
    image: '/src/assets/images/blouse_princess_cut_sweetheart_1793529943580.jpg',
    description: {
      en: 'Traditional Maharashtrian Khun blouse tailored with authentic woven motifs, rich gold border contrast, and comfortable soft cotton lining.',
      mr: 'महाराष्ट्राचा पारंपारिक खण ब्लाउज, सुंदर नक्षीकाम, सोन्याच्या काठाची शोभा आणि मजबूत फिटिंगसह.',
      hi: 'महाराष्ट्र का पारंपरिक खन ब्लाउज, सुंदर नक्काशी, सुनहरी किनारी और मजबूत फिटिंग के साथ।',
    },
    features: {
      neckType: { en: 'Traditional Round / Square Neck', mr: 'पारंपारिक गोल / चौकोनी गळा', hi: 'पारंपरिक गोल / चौकोर गला' },
      sleeveStyle: { en: 'Puff Sleeve with Border Cuff', mr: 'पफ बाही व काठाचा कफ', hi: 'पफ आस्तीन व किनारी कफ' },
      fabric: { en: 'Pure Kolhapuri Khun Fabric', mr: 'अस्सल कोल्हापुरी खण कापड', hi: 'असली कोल्हापुरी खन कपड़ा' },
      workType: { en: 'Traditional Handloom Tailoring', mr: 'पारंपारिक हातमाग शिलाई', hi: 'पारंपरिक हैंडलूम सिलाई' },
    },
  },

  // 4. Designer Blouses
  {
    id: 'designer-princess-boatneck',
    name: {
      en: 'Contemporary Dual-Tone Boatneck Blouse',
      mr: 'कंटेम्पररी ड्युअल-टोन बोटनेक ब्लाउज',
      hi: 'कंटेम्परेरी डुअल-टोन बोटनेक ब्लाउज',
    },
    category: 'Designer Blouses',
    categoryLabel: {
      en: 'Designer Blouses',
      mr: 'डिझायनर ब्लाउज',
      hi: 'डिजाइनर ब्लाउज',
    },
    image: '/src/assets/images/blouse_designer_velvet_modern_1793528640265.jpg',
    description: {
      en: 'Architectural princess-cut designer blouse in deep royal purple with soft cream contrast panels and metallic gold piping, presenting a sophisticated modern silhouette.',
      mr: 'शाही जांभळा व क्रीम रंगाच्या जोडणीसह सोन्याच्या पायपिंगचा आधुनिक प्रिन्सेस कट डिझायनर ब्लाउज.',
      hi: 'शाही बैंगनी और क्रीम रंग के संयोजन के साथ सुनहरी पाइपिंग वाला मॉडर्न प्रिंसेस कट डिजाइनर ब्लाउज।',
    },
    features: {
      neckType: { en: 'Sophisticated Boat Neck', mr: 'क्लासिकल बोट नेक', hi: 'क्लासिकल बोट नेक' },
      sleeveStyle: { en: 'Three-Quarter Tailored Sleeve', mr: 'थ्री-फोर्थ टेलर्ड बाही', hi: 'थ्री-फोर्थ फिटेड आस्तीन' },
      fabric: { en: 'Chanderi Silk & Raw Silk', mr: 'चंदेरी व रॉ सिल्क', hi: 'चंदेरी और रॉ सिल्क' },
      workType: { en: 'Metallic Gold Fine Piping & Inset', mr: 'गोल्डन बारीक पायपिंग व कट', hi: 'गोल्डन बारीक पाइपिंग व कट' },
    },
    isFeatured: true,
  },
  {
    id: 'designer-sheer-net-sequin',
    name: {
      en: 'Couture Sheer Net Sleeve Designer Blouse',
      mr: 'शियर नेट बाही व टिकली वर्क डिझायनर ब्लाउज',
      hi: 'शीयर नेट आस्तीन व सितारा वर्क डिजाइनर ब्लाउज',
    },
    category: 'Designer Blouses',
    categoryLabel: {
      en: 'Designer Blouses',
      mr: 'डिझायनर ब्लाउज',
      hi: 'डिजाइनर ब्लाउज',
    },
    image: '/src/assets/images/blouse_boatneck_sheer_designer_1793529941993.jpg',
    description: {
      en: 'High-fashion modern designer blouse with sheer embroidered net sleeves, delicate golden micro-sequins, and a statement teardrop back cutout with gold buttons.',
      mr: 'हाय-फॅशन डिझायनर ब्लाउज, ज्यावर पारदर्शक नेट बाहीवर सोनेरी टिकल्यांचे सुबक काम आणि पाठीवर सोनेरी बटणे आहेत.',
      hi: 'हाई-फैशन डिजाइनर ब्लाउज, जिसमें शीयर नेट आस्तीन पर सुनहरे सितारों का काम और पीछे सुनहरे बटन हैं।',
    },
    features: {
      neckType: { en: 'Jewel Boat Neckline', mr: 'ज्वेल बोट नेक', hi: 'ज्वेल बोट नेक' },
      sleeveStyle: { en: 'Embroidered Sheer Net Sleeve', mr: 'भरतकाम केलेली नेट बाही', hi: 'कढ़ाईदार शीयर नेट आस्तीन' },
      fabric: { en: 'Silk & French Net', mr: 'सिल्क व फ्रेंच नेट', hi: 'सिल्क व फ्रेंच नेट' },
      workType: { en: 'Sequin Floral Cutwork', mr: 'टिकली वर्क व कटवर्क', hi: 'सितारा वर्क व कटवर्क' },
    },
    isFeatured: true,
  },

  // 5. Back Neck Designs
  {
    id: 'back-neck-crisscross-dori-latkan',
    name: {
      en: 'Royal Criss-Cross Dori & Velvet Latkans',
      mr: 'रॉयल क्रिस-क्रॉस दोरी व व्हेलव्हेट लटकन बॅक नेक',
      hi: 'रॉयल क्रिस-क्रॉस डोरी व वेलवेट लटकन बैक नेक',
    },
    category: 'Back Neck Designs',
    categoryLabel: {
      en: 'Back Neck Designs',
      mr: 'बॅक नेक डिझाईन्स',
      hi: 'बैक नेक डिजाइन्स',
    },
    image: '/src/assets/images/blouse_back_dori_latkan_gold_1793529941142.jpg',
    description: {
      en: 'Dramatic broad U-cut back neck framed with zardozi paisley border, golden criss-cross corset dori, and handcrafted velvet conical latkans with pearl cascades.',
      mr: 'कैरी नक्षीची सुवर्ण जरी बॉर्डर, सोनेरी आडवी दोरी आणि मोत्यांच्या लडींनी सजवलेले व्हेलव्हेट लटकन असलेला आकर्षक बॅक नेक.',
      hi: 'पैस्ले कैरी की सुनहरी जरी बॉर्डर, सुनहरी डोरी और मोतियों की लड़ियों से सजे वेलवेट लटकन वाला मनमोहक बैक नेक।',
    },
    features: {
      neckType: { en: 'Deep U Back with Corset Dori', mr: 'डीप यु बॅक व क्रिस-क्रॉस दोरी', hi: 'डीप यू बैक व क्रिस-क्रॉस डोरी' },
      sleeveStyle: { en: 'Quarter Sleeve with Paisley Motif', mr: 'कैरी नक्षीची बाही', hi: 'पैस्ले नक्काशी वाली आस्तीन' },
      fabric: { en: 'Pure Raw Silk / Dupion', mr: 'शुद्ध रॉ सिल्क / डुपियन', hi: 'शुद्ध रॉ सिल्क / डुपियन' },
      workType: { en: 'Handmade Tassels & Zari Border', mr: 'हातनिर्मित लटकन व जरी बॉर्डर', hi: 'हस्तनिर्मित लटकन व जरी बॉर्डर' },
    },
    isFeatured: true,
  },
  {
    id: 'back-neck-potli-cutout',
    name: {
      en: 'Potli Button & Deep Cutout Back Neck',
      mr: 'पोटली बटण व डीप कटआउट बॅक नेक',
      hi: 'पोटली बटन व डीप कटआउट बैक नेक',
    },
    category: 'Back Neck Designs',
    categoryLabel: {
      en: 'Back Neck Designs',
      mr: 'बॅक नेक डिझाईन्स',
      hi: 'बैक नेक डिजाइन्स',
    },
    image: '/src/assets/images/blouse_maggam_peacock_work_1793528511544.jpg',
    description: {
      en: 'Dramatic diamond-shaped back opening embellished with handcrafted silk potli buttons along the edge and double hanging latkan tassels.',
      mr: 'डायमंड आकाराचा बॅक नेक, हाताने तयार केलेली रेशमी पोटली बटणे आणि आकर्षक लटकनची कलात्मक जोडणी.',
      hi: 'डायमंड शेप बैक नेक, हस्तनिर्मित रेशमी पोटली बटन और सुंदर लटकन का आकर्षक संगम।',
    },
    features: {
      neckType: { en: 'Diamond Cut with Potli Buttons', mr: 'डायमंड कट पोटली बटण', hi: 'डायमंड कट पोटली बटन' },
      sleeveStyle: { en: 'Quarter Sleeve with Zari Cuff', mr: 'जरी कफ असलेली बाही', hi: 'जरी कफ वाली आस्तीन' },
      fabric: { en: 'Tussar Silk / Matka Silk', mr: 'टसर सिल्क / मटका सिल्क', hi: 'टसर सिल्क / मटका सिल्क' },
      workType: { en: 'Handcrafted Potli & Cutout Binding', mr: 'पोटली वर्क व कटआउट फिनिशिंग', hi: 'पोटली वर्क व कटआउट फिनिशिंग' },
    },
  },

  // 6. Princess Cut Blouses
  {
    id: 'princess-cut-sweetheart-brocade',
    name: {
      en: 'Sweetheart Padded Brocade Princess Cut',
      mr: 'स्वीटहार्ट पॅडेड ब्रोकेड प्रिन्सेस कट',
      hi: 'स्वीटहार्ट पैडेड ब्रोकेड प्रिंसेस कट',
    },
    category: 'Princess Cut Blouses',
    categoryLabel: {
      en: 'Princess Cut Blouses',
      mr: 'प्रिन्सेस कट ब्लाउज',
      hi: 'प्रिंसेस कट ब्लाउज',
    },
    image: '/src/assets/images/blouse_princess_cut_sweetheart_1793529943580.jpg',
    description: {
      en: 'High-couture brocade blouse with sculptured princess seams, delicate micro-pearl neckline piping, and concealed padding for flawless posture and fit.',
      mr: 'सुवर्ण ब्रोकेड सिल्क कापडात शिवलेला, मोत्यांच्या नाजूक पायपिंगसह उत्तम बॉडी फिट देणारा पॅडेड प्रिन्सेस कट ब्लाउज.',
      hi: 'सुनहरे ब्रोकेड सिल्क में सिला, मोतियों की बारीक पाइपिंग और शानदार बॉडी फिट देने वाला पैडेड प्रिंसेस कट ब्लाउज।',
    },
    features: {
      neckType: { en: 'Sculpted Sweetheart Neck', mr: 'स्कल्पटेड स्वीटहार्ट गळा', hi: 'स्कल्प्टेड स्वीटहार्ट गला' },
      sleeveStyle: { en: 'Short Cap Sleeves', mr: 'कॅप स्लीव्ह बाही', hi: 'कैप स्लीव आस्तीन' },
      fabric: { en: 'Banarasi Brocade & Cotton Lining', mr: 'बनारसी ब्रोकेड व कॉटन अस्तर', hi: 'बनारसी ब्रोकेड व कॉटन अस्तर' },
      workType: { en: 'Princess Curve Seam & Pearl Edge', mr: 'प्रिन्सेस कट व मोती बॉर्डर', hi: 'प्रिंसेस कट व मोती किनारी' },
    },
    isFeatured: true,
  },
  {
    id: 'princess-cut-dual-panel',
    name: {
      en: 'Contrasting Gold Piping Princess Cut',
      mr: 'गोल्ड पायपिंग ड्युअल पॅनेल प्रिन्सेस कट',
      hi: 'गोल्ड पाइपिंग डुअल पैनल प्रिंसेस कट',
    },
    category: 'Princess Cut Blouses',
    categoryLabel: {
      en: 'Princess Cut Blouses',
      mr: 'प्रिन्सेस कट ब्लाउज',
      hi: 'प्रिंसेस कट ब्लाउज',
    },
    image: '/src/assets/images/blouse_designer_velvet_modern_1793528640265.jpg',
    description: {
      en: 'Double-stitched princess cut for maximum comfort and crisp bust shape, accented with metallic gold cord piping along the side curves.',
      mr: 'शरीराला अतिशय सुंदर बसणारी डबल टिप शिलाई आणि बाजूच्या वळणावर सुवर्ण पायपिंग असलेली खास डिझाईन.',
      hi: 'शरीर पर बहुत सुंदर बैठने वाली डबल सिलाई और साइड कर्व पर सुनहरी पाइपिंग वाली खास डिजाइन।',
    },
    features: {
      neckType: { en: 'Boat Neck Front / V Back', mr: 'बोट नेक फ्रंट / व्ही बॅक', hi: 'बोट नेक फ्रंट / वी बैक' },
      sleeveStyle: { en: 'Elbow Length', mr: 'कोपरपर्यंत बाही', hi: 'कोहनी तक आस्तीन' },
      fabric: { en: 'Raw Silk & Satin', mr: 'रॉ सिल्क व साटन', hi: 'रॉ सिल्क व साटन' },
      workType: { en: 'Precision Dual Seam Cut', mr: 'अचूक ड्युअल सीम कटिंग', hi: 'सटीक डुअल सीम कटिंग' },
    },
  },

  // 7. Padding Blouses
  {
    id: 'padding-structured-bridal-blouse',
    name: {
      en: 'Ultra-Comfort Padded Bridal Blouse',
      mr: 'अल्ट्रा-कम्फर्ट पॅडेड ब्रायडल ब्लाउज',
      hi: 'अल्ट्रा-कंफर्ट पैडेड ब्राइडल ब्लाउज',
    },
    category: 'Padding Blouses',
    categoryLabel: {
      en: 'Padding Blouses',
      mr: 'पॅडिंग ब्लाउज',
      hi: 'पैडिंग ब्लाउज',
    },
    image: '/src/assets/images/hero_royal_bridal_blouse_1793528511423.jpg',
    description: {
      en: 'Pre-shaped imported light cups integrated seamlessly inside dual-layered muslin lining. Guarantees zero shoulder droop, seamless chest support, and pristine backless styling.',
      mr: 'हलक्या व दर्जेदार कप्ससह शिवलेला पॅडेड ब्लाउज, जो खांदे न उतरता दिवसभर संपूर्ण आराम आणि परिपूर्ण लुक देतो.',
      hi: 'हल्के और उच्च गुणवत्ता वाले कप्स के साथ सिला पैडेड ब्लाउज, जो कंधा गिरे बिना पूरे दिन संपूर्ण आराम देता है।',
    },
    features: {
      neckType: { en: 'Scoop Neck Front & Back', mr: 'स्कूप नेक फ्रंट व बॅक', hi: 'स्कूप नेक फ्रंट व बैक' },
      sleeveStyle: { en: 'Elbow Length', mr: 'कोपरपर्यंत बाही', hi: 'कोहनी तक आस्तीन' },
      fabric: { en: 'Heavy Organza & Raw Silk', mr: 'ऑर्गेंझा व रॉ सिल्क', hi: 'ऑर्गेन्जा और रॉ सिल्क' },
      workType: { en: 'Concealed Premium Padding & Side Zip', mr: 'इनबिल्ट पॅडिंग व कन्सिल्ड झिप', hi: 'इनबिल्ट पैडिंग व इनविजिबल ज़िप' },
    },
  },
  {
    id: 'padding-invisible-cup-velvet',
    name: {
      en: 'Seamless Cup Padded Velvet Blouse',
      mr: 'सीमलेस कप पॅडेड व्हेलव्हेट ब्लाउज',
      hi: 'सीमलेस कप पैडेड वेलवेट ब्लाउज',
    },
    category: 'Padding Blouses',
    categoryLabel: {
      en: 'Padding Blouses',
      mr: 'पॅडिंग ब्लाउज',
      hi: 'पैडिंग ब्लाउज',
    },
    image: '/src/assets/images/blouse_bridal_temple_kundan_1793529941648.jpg',
    description: {
      en: 'Specially designed padding inside heavy velvet fabric so the blouse holds its rich posture without bulky inner seams. Perfect for heavy embroidered bridal sarees.',
      mr: 'जड व्हेलव्हेट आणि भरतकामाच्या ब्लाउजसाठी आतून विशेष पॅडिंग, जेणेकरून ब्लाउजचा आकार दिवसभर ताठ आणि देखणा राहतो.',
      hi: 'भारी वेलवेट और कढ़ाईदार ब्लाउज के लिए अंदर विशेष पैडिंग, ताकि ब्लाउज का आकार पूरे दिन खूबसूरत बना रहे।',
    },
    features: {
      neckType: { en: 'Broad Queen Anne Neck', mr: 'क्वीन अ‍ॅन रुंद गळा', hi: 'क्वीन ऐन चौड़ा गला' },
      sleeveStyle: { en: 'Half Sleeve with Pearl Drops', mr: 'मोती लटकन असलेली हाफ बाही', hi: 'मोती लटकन वाली हाफ आस्तीन' },
      fabric: { en: 'Plush Velvet', mr: 'प्लश व्हेलव्हेट', hi: 'प्लश वेलवेट' },
      workType: { en: 'Breathable Foam Padding Integration', mr: 'हवाबंद कम्फर्ट पॅडिंग', hi: 'कंफर्ट पैडिंग इंटीग्रेशन' },
    },
  },

  // 8. Sleeve Designs
  {
    id: 'sleeve-bullion-hanging-pearls',
    name: {
      en: 'Bullion Gold & Tassel Sleeve Blouse',
      mr: 'बुलियन गोल्ड व लटकन बाही डिझाईन',
      hi: 'बुलियन गोल्ड व लटकन आस्तीन डिजाइन',
    },
    category: 'Sleeve Designs',
    categoryLabel: {
      en: 'Sleeve Designs',
      mr: 'बाही डिझाईन्स',
      hi: 'आस्तीन डिजाइन्स',
    },
    image: '/src/assets/images/blouse_bridal_sleeve_embroidery_1793528631959.jpg',
    description: {
      en: 'Couture sleeve styling loaded with intricate floral vine bullion embroidery, Kundan accents, and hanging golden ghungroo and pearl tassels that sway with every movement.',
      mr: 'बारीक सुवर्ण नक्षीकाम, कुंदन आणि मोत्यांचे झुमके (लटकन) असलेली नवरीच्या ब्लाउजची खास आकर्षक बाही.',
      hi: 'बारीक सुनहरी नक्काशी, कुंदन और लटकते मोतियों वाले झुमकों से सजी दुल्हन के ब्लाउज की आकर्षक आस्तीन।',
    },
    features: {
      neckType: { en: 'Round Deep Neck with Border', mr: 'काठ असलेला गोल खोल गळा', hi: 'बॉर्डर वाला गोल गहरा गला' },
      sleeveStyle: { en: 'Heavy Embroidered Hanging Jhumka Sleeve', mr: 'झुमका लटकन असलेली भरगच्च बाही', hi: 'झुमका लटकन वाली भारी आस्तीन' },
      fabric: { en: 'Micro Velvet / Heavy Raw Silk', mr: 'मायक्रो व्हेलव्हेट / सिल्क', hi: 'माइक्रो वेलवेट / सिल्क' },
      workType: { en: 'Bullion Thread, Kundan & Ghungroo', mr: 'बुलियन दोरा, कुंदन आणि घुंगरू', hi: 'बुलियन धागा, कुंदन और घुंघरू' },
    },
    isFeatured: true,
  },
  {
    id: 'sleeve-sheer-net-cutwork',
    name: {
      en: 'Sheer Net & Golden Cutwork Sleeve',
      mr: 'नेट व सुवर्ण कटवर्क डिझायनर बाही',
      hi: 'नेट व गोल्डन कटवर्क डिजाइनर आस्तीन',
    },
    category: 'Sleeve Designs',
    categoryLabel: {
      en: 'Sleeve Designs',
      mr: 'बाही डिझाईन्स',
      hi: 'आस्तीन डिजाइन्स',
    },
    image: '/src/assets/images/blouse_boatneck_sheer_designer_1793529941993.jpg',
    description: {
      en: 'Modern sheer sleeves with handcrafted floral cutwork and sequin scatter, finished with a stiff golden zari cuff border for clean definition.',
      mr: 'आधुनिक शियर नेट बाहीवर फुलांचे सोनेरी कटवर्क आणि टिकल्यांची नक्षी, काठावर भरीव जरी बॉर्डरसह.',
      hi: 'मॉडर्न शीयर नेट आस्तीन पर फूलों का सुनहरी कटवर्क और सितारों की चमक, मजबूत जरी बॉर्डर के साथ।',
    },
    features: {
      neckType: { en: 'Boat Neck Cut', mr: 'बोट नेक कट', hi: 'बोट नेक कट' },
      sleeveStyle: { en: 'Sheer Floral Appliqué Sleeve', mr: 'शियर फ्लॉवर ॲप्लिक बाही', hi: 'शीयर फ्लावर एप्लिक आस्तीन' },
      fabric: { en: 'Fine Net & Raw Silk', mr: 'बारीक नेट व रॉ सिल्क', hi: 'बारीक नेट व रॉ सिल्क' },
      workType: { en: 'Laser Cutwork & Hand Embroidery', mr: 'कटवर्क व हस्त भरतकाम', hi: 'कटवर्क और हस्त कढ़ाई' },
    },
  },

  // 9. Front Neck Designs
  {
    id: 'front-neck-sweetheart-brocade-gold',
    name: {
      en: 'Regal Sweetheart Cut with Gold Cord',
      mr: 'शाही स्वीटहार्ट कट फ्रंट नेक डिझाईन',
      hi: 'शाही स्वीटहार्ट कट फ्रंट नेक डिजाइन',
    },
    category: 'Front Neck Designs',
    categoryLabel: {
      en: 'Front Neck Designs',
      mr: 'फ्रंट नेक डिझाईन्स',
      hi: 'फ्रंट नेक डिजाइन्स',
    },
    image: '/src/assets/images/blouse_princess_cut_sweetheart_1793529943580.jpg',
    description: {
      en: 'Perfect sweetheart front neck contouring that frames statement bridal necklaces. Finished with delicate golden piping and pearl-edge trimming.',
      mr: 'गळ्यातील दागिन्यांची शोभा वाढवणारा खोल स्वीटहार्ट गळा, बारीक सोन्याची पायपिंग आणि मोत्यांच्या लडीसह.',
      hi: 'गले के गहनों की शोभा बढ़ाने वाला गहरा स्वीटहार्ट गला, बारीक सुनहरी पाइपिंग और मोतियों के साथ।',
    },
    features: {
      neckType: { en: 'Sweetheart Front Neck with Pearl Trim', mr: 'मोती बॉर्डर स्वीटहार्ट फ्रंट नेक', hi: 'मोती बॉर्डर स्वीटहार्ट फ्रंट नेक' },
      sleeveStyle: { en: 'Cap Sleeve with Border', mr: 'कॅप बाही काठासह', hi: 'कैप आस्तीन बॉर्डर के साथ' },
      fabric: { en: 'Heavy Brocade Silk', mr: 'हेवी ब्रोकेड सिल्क', hi: 'हैवी ब्रोकेड सिल्क' },
      workType: { en: 'Micro Piping & Pearl Edging', mr: 'बारीक पायपिंग व मोती काम', hi: 'बारीक पाइपिंग व मोती काम' },
    },
    isFeatured: true,
  },
  {
    id: 'front-neck-scallop-angrakha',
    name: {
      en: 'Scalloped Cut Front Neck Designer Blouse',
      mr: 'स्कॅलॉप कट फ्रंट नेक डिझायनर ब्लाउज',
      hi: 'स्कैलप कट फ्रंट नेक डिजाइनर ब्लाउज',
    },
    category: 'Front Neck Designs',
    categoryLabel: {
      en: 'Front Neck Designs',
      mr: 'फ्रंट नेक डिझाईन्स',
      hi: 'फ्रंट नेक डिजाइन्स',
    },
    image: '/src/assets/images/blouse_designer_velvet_modern_1793528640265.jpg',
    description: {
      en: 'Delicate scallop wave curve running along the neckline with subtle micro-pearl borders, elevating sarees with a youthful, feminine framing.',
      mr: 'गळ्याच्या कडेवर नाजूक लाटांसारखा स्कॅलॉप कट आणि बारीक मोत्यांची किनार देणारा आधुनिक फ्रंट नेक.',
      hi: 'गले के किनारे पर नाजुक लहरों जैसा स्कैलप कट और बारीक मोतियों की किनारी देने वाला फ्रंट नेक।',
    },
    features: {
      neckType: { en: 'Embroidered Scallop V-Neck', mr: 'स्कॅलॉप व्ही-नेक', hi: 'स्कैलप वी-नेक' },
      sleeveStyle: { en: 'Scallop Hem Elbow Sleeve', mr: 'स्कॅलॉप बॉर्डर बाही', hi: 'स्कैलप बॉर्डर आस्तीन' },
      fabric: { en: 'Georgette Silk / Chiffon', mr: 'जॉर्जेट सिल्क / शिफॉन', hi: 'जॉर्जेट सिल्क / शिफॉन' },
      workType: { en: 'Scallop Cutwork & Pearl Edging', mr: 'कटवर्क व बारीक मोती बॉर्डर', hi: 'कटवर्क और बारीक मोती किनारी' },
    },
  },

  // 10. Simple Blouses
  {
    id: 'simple-daily-comfort-cotton',
    name: {
      en: 'Pure Cotton Everyday Elegance Blouse',
      mr: 'प्युअर कॉटन दैनंदिन कम्फर्ट ब्लाउज',
      hi: 'प्योर कॉटन दैनिक कंफर्ट ब्लाउज',
    },
    category: 'Simple Blouses',
    categoryLabel: {
      en: 'Simple Blouses',
      mr: 'साधे ब्लाउज',
      hi: 'साधारण ब्लाउज',
    },
    image: '/src/assets/images/blouse_traditional_paithani_gold_1793528513796.jpg',
    description: {
      en: 'Breathable, durable, and neatly tailored blouse with 4-dart cut or cross-cut for everyday wear, temple visits, and office sarees. Features reinforced armholes.',
      mr: 'ऑफिस, सण किंवा दैनंदिन वापरासाठी अतिशय सुटसुटीत, कॉटन अस्तर आणि मजबूत शिलाई असलेला साधेपणातील सुंदर ब्लाउज.',
      hi: 'ऑफिस और दैनिक उपयोग के लिए आरामदायक, कॉटन अस्तर और मजबूत सिलाई वाला सादगीपूर्ण सुंदर ब्लाउज।',
    },
    features: {
      neckType: { en: 'Classic Round Neck', mr: 'क्लासिक गोल गळा', hi: 'क्लासिक गोल गला' },
      sleeveStyle: { en: 'Regular Short Sleeve', mr: 'नेहमीची साधी बाही', hi: 'साधारण छोटी आस्तीन' },
      fabric: { en: '100% Khadi Cotton / Mulmul', mr: '१००% खादी कॉटन / मलमल', hi: '१००% खादी कॉटन / मलमल' },
      workType: { en: 'Reinforced 4-Tuck Tailoring', mr: 'मजबूत ४-टक शिलाई', hi: 'मजबूत ४-टक्स सिलाई' },
    },
  },
  {
    id: 'simple-katori-cut-marathi',
    name: {
      en: 'Authentic 2-Piece Katori Blouse',
      mr: 'अस्सल दोन-तुकडी कटोरी ब्लाउज',
      hi: 'असली २-पीस कटोरी ब्लाउज',
    },
    category: 'Simple Blouses',
    categoryLabel: {
      en: 'Simple Blouses',
      mr: 'साधे ब्लाउज',
      hi: 'साधारण ब्लाउज',
    },
    image: '/src/assets/images/blouse_designer_velvet_modern_1793528640265.jpg',
    description: {
      en: 'Traditional Maharashtrian 2-piece Katori blouse with perfect cup curvature and shoulder-stay stitching, providing round lift and all-day ease.',
      mr: 'कोल्हापुरी महिलांचा सर्वात लाडका आणि आरामदायक २-पीस कटोरी ब्लाउज, जो कधीही खांदे उतरू देत नाही.',
      hi: 'पारंपरिक २-पीस कटोरी ब्लाउज, जो सही गोलाई और पूरे दिन सहजता प्रदान करता है।',
    },
    features: {
      neckType: { en: 'Round Front & Medium U Back', mr: 'गोल पुढचा व मध्यम यु पाठ गळा', hi: 'गोल आगे व मध्यम यू पीछे गला' },
      sleeveStyle: { en: 'Classic 5-inch Sleeve', mr: '५-इंच साधी बाही', hi: '५-इंच साधारण आस्तीन' },
      fabric: { en: 'Rubia Cotton / Cambric', mr: 'रुबिया कॉटन / कॅम्ब्रिक', hi: 'रूबिया कॉटन / कैम्ब्रिक' },
      workType: { en: 'Hand-Drafted Katori Cutting', mr: 'अचूक कटोरी कटिंग व शिलाई', hi: 'सटीक कटोरी कटिंग व सिलाई' },
    },
  },

  // 11. Modern Blouse Designs
  {
    id: 'modern-halter-corset-fusion',
    name: {
      en: 'High-Neck Cutaway Contemporary Blouse',
      mr: 'हाय-नेक कटअवे मॉडर्न डिझायनर ब्लाउज',
      hi: 'हाई-नेक कटअवे मॉडर्न डिजाइनर ब्लाउज',
    },
    category: 'Modern Blouse Designs',
    categoryLabel: {
      en: 'Modern Blouse Designs',
      mr: 'मॉडर्न ब्लाउज डिझाईन्स',
      hi: 'मॉडर्न ब्लाउज डिजाइन्स',
    },
    image: '/src/assets/images/blouse_boatneck_sheer_designer_1793529941993.jpg',
    description: {
      en: 'Chic runway-inspired high collar with graceful shoulder cutaways and gold hardware hook clasp. Pair effortlessly with contemporary cocktail sarees and lehengas.',
      mr: 'आधुनिक कॉलर डिझाईन, शोल्डर कट आणि सुवर्ण फिनिशिंगसह पार्टी किंवा कॉकटेल साडीसाठी आदर्श मॉडर्न ब्लाउज.',
      hi: 'आधुनिक कॉलर डिजाइन, शोल्डर कट और सुनहरी फिनिशिंग के साथ पार्टी साड़ियों के लिए आदर्श मॉडर्न ब्लाउज।',
    },
    features: {
      neckType: { en: 'Mandarin High-Collar Keyhole', mr: 'मँडरीन हाय-कॉलर की-होल', hi: 'मैंडरिन हाई-कॉलर की-होल' },
      sleeveStyle: { en: 'Sleeveless / Clean Armhole Binding', mr: 'स्लीव्हलेस / क्लिन फिनिशिंग', hi: 'स्लीवलेस / क्लीन फिनिशिंग' },
      fabric: { en: 'Silk Velvet & Metallic Satin', mr: 'सिल्क व्हेलव्हेट व साटन', hi: 'सिल्क वेलवेट व साटन' },
      workType: { en: 'Tailored Minimalist Structure', mr: 'मॉडर्न आर्किटेक्चरल फिटिंग', hi: 'मॉडर्न फिटिंग व फिनिशिंग' },
    },
  },
  {
    id: 'modern-back-corset-belt',
    name: {
      en: 'Corset Style Tie-Up Contemporary Blouse',
      mr: 'कॉर्सेट स्टाईल बांधणी मॉडर्न ब्लाउज',
      hi: 'कॉर्सेट स्टाइल टाई-अप मॉडर्न ब्लाउज',
    },
    category: 'Modern Blouse Designs',
    categoryLabel: {
      en: 'Modern Blouse Designs',
      mr: 'मॉडर्न ब्लाउज डिझाईन्स',
      hi: 'मॉडर्न ब्लाउज डिजाइन्स',
    },
    image: '/src/assets/images/blouse_back_dori_latkan_gold_1793529941142.jpg',
    description: {
      en: 'Modern corset laced back with gold eyelets and shimmering cords. Adjustable snugness tailored for contemporary receptions and cocktail parties.',
      mr: 'पाठीवर आधुनिक कॉर्सेट स्टाईल दोरीचे डिझाईन, रिसेप्शन आणि आधुनिक पार्टी साड्यांसाठी एकदम डॅशिंग आणि स्टायलिश लुक.',
      hi: 'बैक पर मॉडर्न कॉर्सेट स्टाइल डोरी डिजाइन, रिसेप्शन और पार्टी साड़ियों के लिए बेहद स्टाइलिश और डैशिंग लुक।',
    },
    features: {
      neckType: { en: 'Modern Broad Back Cut', mr: 'मॉडर्न रुंद बॅक कट', hi: 'मॉडर्न चौड़ा बैक कट' },
      sleeveStyle: { en: 'Cap Sleeve with Gold Hem', mr: 'कॅप बाही सुवर्ण हेमसह', hi: 'कैप आस्तीन गोल्डन हेम के साथ' },
      fabric: { en: 'Raw Silk & Spandex Blend', mr: 'रॉ सिल्क व स्पॅन्डेक्स', hi: 'रॉ सिल्क व स्पैन्डेक्स' },
      workType: { en: 'Eyelet Lace-Up Corset Fit', mr: 'आयलेट कॉर्सेट फिटिंग', hi: 'आईलेट कॉर्सेट फिटिंग' },
    },
  },

  // 12. Wedding Collection
  {
    id: 'wedding-collection-maharani-regal',
    name: {
      en: 'Maharani Wedding Heritage Blouse',
      mr: 'महारानी वेडिंग हेरिटेज ब्लाउज',
      hi: 'महारानी वेडिंग हेरिटेज ब्लाउज',
    },
    category: 'Wedding Collection',
    categoryLabel: {
      en: 'Wedding Collection',
      mr: 'वेडिंग कलेक्शन',
      hi: 'वेडिंग कलेक्शन',
    },
    image: '/src/assets/images/blouse_bridal_temple_kundan_1793529941648.jpg',
    description: {
      en: 'Regal Kolhapur royal bridal collection piece with full sleeve zardozi jaal work, auspicious kalash embroidery, and hand-finished heritage bullion cord.',
      mr: 'कोल्हापूरच्या शाही परंपरेतून साकारलेला लग्न सोहळ्याचा खास ब्लाउज, ज्यावर संपूर्ण बाहीवर जर्दोजी जाळी आणि कलश भरतकाम आहे.',
      hi: 'कोल्हापुर की शाही परंपरा से प्रेरित शादी का विशेष ब्लाउज, जिस पर पूरी आस्तीन में जरदोज़ी जाल और मंगल कलश कढ़ाई है।',
    },
    features: {
      neckType: { en: 'Royal Broad U with Pearl Trim', mr: 'मोती बॉर्डर असलेला रुंद यु गळा', hi: 'मोती बॉर्डर वाला चौड़ा यू गला' },
      sleeveStyle: { en: 'Full Sleeve Zardozi Jaal', mr: 'फुल स्लीव्ह जर्दोजी जाळी', hi: 'फुल स्लीव जरदोज़ी जाल' },
      fabric: { en: 'Pure Mulberry Silk & Velvet', mr: 'प्युअर मलबेरी सिल्क व व्हेलव्हेट', hi: 'प्योर मलबेरी सिल्क व वेलवेट' },
      workType: { en: 'Zardozi Jaal, Bullion & Pearls', mr: 'जर्दोजी जाळी, सुवर्ण दोरा व मोती', hi: 'जरदोज़ी जाल, सुनहरी धागा व मोती' },
    },
    isFeatured: true,
  },
  {
    id: 'wedding-collection-sangeet-glitz',
    name: {
      en: 'Sangeet & Haldi Golden Glitz Blouse',
      mr: 'संगीत व हळदीसाठी खास गोल्डन ग्लिट्झ ब्लाउज',
      hi: 'संगीत व हल्दी के लिए विशेष गोल्डन ग्लिट्ज़ ब्लाउज',
    },
    category: 'Wedding Collection',
    categoryLabel: {
      en: 'Wedding Collection',
      mr: 'वेडिंग कलेक्शन',
      hi: 'वेडिंग कलेक्शन',
    },
    image: '/src/assets/images/blouse_back_dori_latkan_gold_1793529941142.jpg',
    description: {
      en: 'High-energy celebration blouse with dancing latkans, golden thread paisleys, and a sparkling back cutout designed to turn heads on the dance floor.',
      mr: 'हळदी, संगीत किंवा रिसेप्शनच्या डान्ससाठी पाठ गळ्यावर लटकन आणि चमकणाऱ्या सुवर्ण धाग्यांची अप्रतिम नक्षी असलेला ब्लाउज.',
      hi: 'हल्दी, संगीत या रिसेप्शन के लिए बैक नेक पर खूबसूरत लटकन और चमकते सुनहरे धागों की नक्काशी वाला ब्लाउज।',
    },
    features: {
      neckType: { en: 'Deep Sweetheart Back with Latkan Cascade', mr: 'डीप स्वीटहार्ट बॅक व लटकन माळा', hi: 'डीप स्वीटहार्ट बैक व लटकन लड़ियां' },
      sleeveStyle: { en: 'Elbow Sleeve with Paisley Border', mr: 'कैरी बॉर्डर कोपर बाही', hi: 'कैरी बॉर्डर कोहनी आस्तीन' },
      fabric: { en: 'Silk Brocade', mr: 'सिल्क ब्रोकेड', hi: 'सिल्क ब्रोकेड' },
      workType: { en: 'Golden Gota Patti & Latkan Work', mr: 'गोटा पट्टी व सुवर्ण लटकन', hi: 'गोटा पट्टी व गोल्डन लटकन' },
    },
    isFeatured: true,
  },
];
