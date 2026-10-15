export const SITE = "https://chivalrous-scent-unveiled.lovable.app/";
export const UPDATED = "2026-10-15";
export const UPDATED_LABEL = "15 October 2026";
export const BRAND_SOURCE = "https://www.sarkar.store/collections/shop-all";
export const IDENTITY_SOURCE = "https://www.sarkar.store/pages/know-sarkar";
export const SUPPORT = { email: "support@sarkar.store", phone: "+91 9217175575", phoneHref: "tel:+919217175575" };
export const BRAND_LOGO = "https://www.sarkar.store/cdn/shop/files/SARKAR_BLACK_Cropped.png?v=1769150438&width=600";
export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/houseofsarkar" },
  { label: "X", href: "https://x.com/houseofsarkar" },
  { label: "YouTube", href: "https://www.youtube.com/@houseofsarkar" },
  { label: "Facebook", href: "https://www.facebook.com/people/Houseofsarkar/61586511428837/" },
];

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": SITE + "#org",
  name: "Sarkar",
  alternateName: "House of Sarkar",
  url: "https://www.sarkar.store/",
  logo: { "@type": "ImageObject", url: BRAND_LOGO, contentUrl: BRAND_LOGO },
  description: "Sarkar is a premium, unisex fragrance house built on everyday authority, offering four parfums at 25% oil concentration.",
  founder: { "@type": "Person", name: "Bhuvan Bam" },
  email: SUPPORT.email,
  telephone: SUPPORT.phone,
  contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: SUPPORT.email, telephone: SUPPORT.phone },
  sameAs: SOCIALS.map((social) => social.href).concat("https://www.sarkar.store/"),
};