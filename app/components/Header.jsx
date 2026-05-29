"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/oem-odm", label: "OEM/ODM" },
  { href: "/factory", label: "Factory" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="OXYDIARY home">
          <strong>OXYDIARY</strong>
          <span>Stainless Steel Drinkware Manufacturer</span>
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
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
