"use client";

import { useState } from "react";
import { IconRefresh } from "@tabler/icons-react";
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

interface NavigationProps {
  onReplayIntro?: () => void;
}

export default function Navigation({ onReplayIntro }: NavigationProps) {
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
        <button
          onClick={onReplayIntro}
          className="relative z-20 flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-sm text-neutral-400 backdrop-blur-sm transition-colors hover:border-neutral-500 hover:text-white"
        >
          <IconRefresh size={16} />
          Replay Intro
        </button>
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
          <div className="flex items-center gap-2">
            <button
              onClick={onReplayIntro}
              className="flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 p-1.5 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <IconRefresh size={16} />
            </button>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
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
