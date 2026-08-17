"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/oem-odm", label: "OEM/ODM" },
  { href: "/quality", label: "Quality" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
];

const productLinks = [
  { href: "/products/coffee-cups", label: "Coffee Cups" },
  { href: "/products/tumblers", label: "Tumblers" },
  { href: "/products/smart-bottles", label: "Smart Bottles" },
  { href: "/products/water-bottles", label: "Water Bottles" },
  { href: "/products/sports-bottles", label: "Sports Bottles" },
  { href: "/products/kids-bottles", label: "Kids Bottles" },
  { href: "/products/plastic-drinkware", label: "Plastic Drinkware" },
  { href: "/products/glass-drinkware", label: "Glass Drinkware" },
  { href: "/products/lunch-boxes", label: "Lunch Boxes" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="OXYDIARY home">
          <Image
            src="/images/logo.png"
            alt="OxyDiary"
            width={580}
            height={175}
            priority
          />
          <span>CUSTOM DRINKWARE MANUFACTURER</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <Link
            href="/"
            className={pathname === "/" ? "is-active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <div className={`nav-dropdown ${pathname.startsWith("/products") ? "is-active" : ""}`}>
            <Link
              className="nav-menu-button"
              href="/products"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <div className="nav-dropdown-menu">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="quote-link" href="/contact" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
