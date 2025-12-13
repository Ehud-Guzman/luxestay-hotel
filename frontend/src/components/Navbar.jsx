import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Search, Crown, Sparkles } from "lucide-react";
import features from "../config/features.json";

export default function Navbar({ tier = "premium", role = "user", background = "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(background === "light");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const bodyStyle = window.getComputedStyle(document.body);
    const bgColor = bodyStyle.backgroundColor;
    const isLight = bgColor.includes("rgb(255, 255, 255)") || bgColor.includes("rgb(248, 245, 240)");
    setIsLightBackground(background === "light" || isLight);
  }, [background]);

  const tierConfig = features[tier] || {};
  const links = tierConfig.navigation?.links || [];
  const showBookNow = tierConfig.navigation?.showBookNow || false;
  const isPremium = tier === "premium";
  const isBasic = tier === "basic";
  const textColor = isLightBackground ? "text-brand-navy" : "text-brand-ivory/90";

  // Add Admin link for admins only
  if (role === "admin" && !links.some(link => link.href === "/admin")) {
    links.push({ name: "Admin", href: "/admin" });
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/98 backdrop-blur-md py-2 shadow-xl bg-maasai-nav"
          : "bg-brand-navy py-3"
      } ${isPremium ? "border-b border-brand-gold/30" : ""}`}
    >
      <style jsx>{`
        .nav-link {
          ${isPremium ? `animation: fadeIn 0.6s ease-in-out both;` : ""}
        }
        .nav-link.active {
          ${isPremium
            ? "font-bold; border-bottom: 2px solid #D4AF37;"
            : "font-semibold; border-bottom: 1px solid #D4AF37;"}
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-maasai-nav {
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cpath fill="%23D4AF37" fill-opacity="0.15" d="M20 20h160v5H20zM20 40h160v5H20z"/%3E%3Cpath fill="%23F8F5F0" fill-opacity="0.1" d="M40 0v200h5V0z"/%3E%3Ccircle cx="30" cy="30" r="2" fill="%23D4AF37" fill-opacity="0.2"/%3E%3C/svg%3E');
          background-size: 100px 100px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className={`font-serif text-brand-gold tracking-wider flex items-center transition-all text-2xl`}
          >
            {isPremium && <Sparkles className="h-4 w-4 mr-1 text-brand-gold/80" />}
            LuxeStay
            {isPremium && <Crown className="h-4 w-4 ml-1 fill-brand-gold text-brand-gold" />}
          </a>

          {isPremium && (
            <span className="ml-3 px-2 py-1 text-xs bg-gradient-to-r from-brand-gold to-amber-200 text-brand-navy rounded-full font-semibold tracking-wide shadow-gold">
              PREMIUM
            </span>
          )}
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center font-sans ${isBasic ? "justify-end flex-1 mr-4 space-x-6" : "space-x-8"}`}>
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link relative group ${isPremium ? "font-serif" : "font-sans"} ${textColor} hover:text-brand-gold transition-all duration-300 ${
                location.pathname === link.href ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}

          {isPremium && (
            <button className={`p-2 ${textColor} hover:text-brand-gold transition-colors`}>
              <Search className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Book Now + Mobile Menu Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {showBookNow && (
            <a
              href="/booking"
              className={`px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                isPremium
                  ? "bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory"
                  : "bg-gradient-to-r from-brand-gold to-amber-200 text-brand-navy"
              }`}
            >
              Book Now
            </a>
          )}

          {isBasic && <div className="w-4"></div>}
        </div>

        <button className={`md:hidden p-2 ${textColor}`} onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-brand-navy/98 backdrop-blur-md px-6 pb-6 pt-4 space-y-4">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`block py-2 ${isPremium ? "font-serif" : "font-sans"} ${textColor} hover:text-brand-gold transition-colors border-b border-brand-navy/30 hover:border-brand-gold/20 ${
                location.pathname === link.href ? "font-bold border-brand-gold" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {isPremium && (
            <div className="pt-2 border-t border-brand-navy/30">
              <div className="relative mt-2">
                <Search className={`absolute left-3 top-2.5 h-4 w-4 ${textColor}`} />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full bg-brand-navy/50 border border-brand-gold/30 rounded-lg pl-10 pr-4 py-2 ${textColor} focus:outline-none focus:ring-1 focus:ring-brand-gold`}
                />
              </div>
            </div>
          )}

          {showBookNow && (
            <a
              href="/booking"
              className={`block text-center py-3 rounded-xl font-semibold shadow-gold ${
                isPremium
                  ? "bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory"
                  : "bg-gradient-to-r from-brand-gold to-amber-200 text-brand-navy"
              }`}
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
