"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "How It Works", link: "#how-it-works" },
  { name: "FAQ", link: "#faq" },
  { name: "Pricing", link: "#pricing" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <a
          href="#"
          className="relative z-20 flex items-center gap-2.5 px-2 py-1"
        >
          <img
            src="/images/lagoon_nav.jpg"
            alt="Lagoon Studio"
            className="app-icon h-8 w-8"
          />
          <span className="font-satoshi text-lg font-bold text-white">
            Lagoon Studio
          </span>
        </a>
        <NavItems items={navItems} />
        <div className="relative z-20 w-0" />
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#"
            className="relative z-20 flex items-center gap-2.5 px-2 py-1"
          >
            <img
              src="/images/lagoon_nav.jpg"
              alt="Lagoon Studio"
              className="app-icon h-8 w-8"
            />
            <span className="font-satoshi text-lg font-bold text-white">
              Lagoon Studio
            </span>
          </a>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-neutral-300 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
