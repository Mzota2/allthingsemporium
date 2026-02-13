export interface SiteConfig {
  appTitle: string;
  appDescription: string;
  brandImageUrl?: string;
  defaultBusinessName?: string;
  defaultContactEmail?: string;
  defaultContactPhone?: string;
  appUrl?: string;
  // Developer contact details for escalations (admins → developers)
  developerSupportEmail?: string;
  developerSupportPhone?: string;
  developerSupportName?: string;
  // AI support display information
  aiSupportName?: string;
  aiSupportDescription?: string;
}

export const SITE_CONFIG: SiteConfig = {
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || 'All Things Emporium',
  appDescription:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Discover your signature scent at ALL THINGS EMPORIUM, your premier destination for curated perfumes and cosmetics. Explore our exclusive collection of captivating fragrances and beauty essentials, meticulously selected to complement every mood, style, and occasion.',
  brandImageUrl:
    process.env.NEXT_PUBLIC_BRAND_IMAGE_URL || 'https://allthingsemporium.vercel.app/logo.png',
  defaultBusinessName: process.env.NEXT_PUBLIC_DEFAULT_BUSINESS_NAME || 'All Things Emporium',
  defaultContactEmail: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_EMAIL || 'hie@allthingsemporium.techcure.tech',
  defaultContactPhone: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_PHONE || '+265 981 819 389',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://allthingsemporium.vercel.app',
  developerSupportEmail: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_EMAIL || 'support@techcure.tech',
  developerSupportName: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_NAME || 'TechCure Support',
  developerSupportPhone: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_PHONE || '+265 981 819 389',
  // AI support show name & description when present
  aiSupportName: process.env.NEXT_PUBLIC_AI_SUPPORT_NAME || 'AI Support',
  aiSupportDescription: process.env.NEXT_PUBLIC_AI_SUPPORT_DESCRIPTION || 'Automated assistance — responses are suggestions. Use Request human support for help.',
};
