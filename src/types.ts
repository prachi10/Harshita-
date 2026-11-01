export type Language = 'en' | 'mr' | 'hi';

export type BlouseCategory =
  | 'Bridal Blouse Designs'
  | 'Designer Blouses'
  | 'Traditional Blouses'
  | 'Maggam Work Blouses'
  | 'Princess Cut Blouses'
  | 'Padding Blouses'
  | 'Simple Blouses'
  | 'Back Neck Designs'
  | 'Front Neck Designs'
  | 'Sleeve Designs'
  | 'Modern Blouse Designs'
  | 'Wedding Collection';

export interface BlouseDesign {
  id: string;
  name: {
    en: string;
    mr: string;
    hi: string;
  };
  category: BlouseCategory;
  categoryLabel: {
    en: string;
    mr: string;
    hi: string;
  };
  image: string;
  description: {
    en: string;
    mr: string;
    hi: string;
  };
  features: {
    neckType: { en: string; mr: string; hi: string };
    sleeveStyle: { en: string; mr: string; hi: string };
    fabric: { en: string; mr: string; hi: string };
    workType: { en: string; mr: string; hi: string };
  };
  isFeatured?: boolean;
}
