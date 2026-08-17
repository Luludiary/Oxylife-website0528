import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand">
            <Image
              src="/images/logo.png"
              alt="OxyDiary"
              width={580}
              height={175}
            />
            <span>CUSTOM DRINKWARE MANUFACTURER</span>
          </div>
          <p style={{ marginTop: 18 }}>
            Custom stainless steel, plastic, and glass drinkware plus lunch boxes
            for global brands, importers, distributors, and corporate programs.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link href="/products">Products</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/oem-odm">OEM/ODM</Link>
            <Link href="/factory">Factory</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/resources">Buyer Resources</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="footer-links">
            <a href="https://wa.me/8615102106279" target="_blank" rel="noopener noreferrer">
              Whatsapp: +86 15102106279
            </a>
            <a href="mailto:shservice@oxylifediary.com">Email: shservice@oxylifediary.com</a>
            <span>Address: 181 Yingbin Ave, Xiangzhu Town, Yongkang, Zhejiang 321313, P.R.China</span>
          </div>
        </div>
        <div>
          <h3>Follow Us</h3>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-bottom">Copyright 2026 OXYDIARY. All Rights Reserved.</div>
    </footer>
  );
}
