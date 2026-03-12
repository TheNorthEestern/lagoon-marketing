const navigation = [
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
  { name: "Pricing", href: "#pricing" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5"
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

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Lagoon Studio. All rights reserved.
          macOS and Apple Silicon are trademarks of Apple Inc.
        </div>
      </div>
    </footer>
  );
}
