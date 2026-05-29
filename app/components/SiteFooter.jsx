import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand">
            <strong>OXYDIARY</strong>
            <span>Stainless Steel Drinkware Manufacturer</span>
          </div>
          <p style={{ marginTop: 18 }}>
            OEM/ODM drinkware manufacturing for global brands, importers,
            distributors, and corporate gift programs.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link href="/products">Products</Link>
            <Link href="/oem-odm">OEM/ODM</Link>
            <Link href="/factory">Factory</Link>
            <Link href="/quality">Quality</Link>
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="footer-links">
            <a href="mailto:sales@oxydiary.com">sales@oxydiary.com</a>
            <span>No. 8 Industry Road, Yongkang City, Zhejiang, China</span>
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
