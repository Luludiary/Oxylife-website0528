import "./globals.css";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";
import { FloatingContactButtons } from "./components/FloatingContactButtons";
import socialLinks from "./config/socialLinks.json";

export const metadata = {
  metadataBase: new URL("https://oxylifediary.com"),
  title: {
    default: "OXYDIARY | Custom Drinkware & Lunch Box Supplier",
    template: "%s | OXYDIARY",
  },
  description:
    "Custom stainless steel, plastic, and glass drinkware plus lunch boxes for global B2B buyers, with model-specific OEM/ODM, packaging, quality, and compliance support.",
  applicationName: "OXYDIARY",
  keywords: [
    "custom drinkware manufacturer",
    "stainless steel water bottle supplier",
    "wholesale tumblers",
    "plastic drinkware supplier",
    "glass drinkware supplier",
    "custom lunch box supplier",
    "private label drinkware",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "OXYDIARY",
    title: "OXYDIARY | Custom Drinkware & Lunch Box Supplier",
    description:
      "Verified stainless steel, plastic, and glass drinkware plus lunch box models for B2B sourcing and private-label projects.",
    url: "/",
    images: [{ url: "/images/logo.png", alt: "OXYDIARY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OXYDIARY | Custom Drinkware & Lunch Box Supplier",
    description:
      "Verified product models, model-specific specifications, customization, and compliance scope for B2B buyers.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://oxylifediary.com/#organization",
        name: "OXYDIARY",
        url: "https://oxylifediary.com",
        description:
          "B2B drinkware and lunch box manufacturing partner for custom, wholesale, OEM, and ODM programs.",
        logo: "https://oxylifediary.com/images/logo.png",
        image: "https://oxylifediary.com/images/logo.png",
        email: "shservice@oxylifediary.com",
        telephone: "+86-151-0210-6279",
        address: {
          "@type": "PostalAddress",
          streetAddress: "181 Yingbin Avenue, Xiangzhu Town",
          addressLocality: "Yongkang",
          addressRegion: "Zhejiang",
          postalCode: "321313",
          addressCountry: "CN",
        },
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+86-151-0210-6279",
          email: "shservice@oxylifediary.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Chinese"],
        },
        sameAs: socialLinks.map((item) => item.url),
        knowsAbout: [
          "Stainless steel drinkware",
          "Plastic drinkware",
          "Glass drinkware",
          "Lunch boxes",
          "Private-label packaging",
          "B2B product sourcing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://oxylifediary.com/#website",
        url: "https://oxylifediary.com",
        name: "OXYDIARY",
        publisher: { "@id": "https://oxylifediary.com/#organization" },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <FloatingContactButtons />
        <SiteFooter />
      </body>
    </html>
  );
}
