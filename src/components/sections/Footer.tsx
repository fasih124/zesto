import { Flame } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features",     href: "#features"     },
    { label: "Download",     href: "#download"     },
    { label: "Pricing",      href: "#"             },
  ],
  Restaurants: [
    { label: "Partner With Us", href: "#restaurants" },
    { label: "Dashboard",       href: "#"            },
    { label: "Commission Rates",href: "#"            },
    { label: "Success Stories", href: "#"            },
  ],
  Company: [
    { label: "About",       href: "#" },
    { label: "Blog",        href: "#" },
    { label: "Careers",     href: "#" },
    { label: "Press Kit",   href: "#" },
  ],
  Support: [
    { label: "Help Centre",     href: "#" },
    { label: "Contact Us",      href: "#" },
    { label: "Privacy Policy",  href: "#" },
    { label: "Terms of Service",href: "#" },
  ],
};

const socials = [
  {
    label: "Twitter / X",
    href:  "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href:  "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href:  "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1208] border-t border-[#2D2010]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Top row ── */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* Brand column — spans 2 cols on md */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 bg-[#FF5C1A] rounded-xl flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" fill="white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                Zesto
              </span>
            </a>

            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ fontFamily: "Satoshi, sans-serif", color: "#6B5A48" }}
            >
              Hot food. Zero hassle. Order from the best local restaurants in minutes.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="
                    w-8 h-8 rounded-lg
                    flex items-center justify-center
                    text-[#6B5A48] hover:text-white
                    bg-[#242010] hover:bg-[#FF5C1A]
                    border border-[#3D3420] hover:border-[#FF5C1A]
                    transition-all duration-200
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "Satoshi, sans-serif", color: "#94806A" }}
              >
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "Satoshi, sans-serif", color: "#6B5A48" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom row ── */}
        <div className="border-t border-[#2D2010] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-center sm:text-left"
            style={{ fontFamily: "Satoshi, sans-serif", color: "#4A3C2E" }}
          >
            © {new Date().getFullYear()} Zesto Technologies Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span className="text-xs" style={{ color: "#4A3C2E", fontFamily: "Satoshi, sans-serif" }}>
              Made with
            </span>
            <span className="text-[#FF5C1A] text-xs mx-0.5">♥</span>
            <span className="text-xs" style={{ color: "#4A3C2E", fontFamily: "Satoshi, sans-serif" }}>
              for food lovers everywhere
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}