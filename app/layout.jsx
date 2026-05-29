import "./globals.css";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";
import { SocialLinks } from "./components/SocialLinks";
import { WhatsAppButton } from "./components/WhatsAppButton";

export const metadata = {
  title: "OXYDIARY | Stainless Steel Drinkware Manufacturer",
  description:
    "OEM/ODM stainless steel drinkware manufacturing for global brands, importers, distributors, and corporate gift programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <SocialLinks variant="floating" />
        <SiteFooter />
      </body>
    </html>
  );
}
