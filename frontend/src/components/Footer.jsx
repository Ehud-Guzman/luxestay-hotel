import { Crown, Mail, Phone, MapPin, Twitter, Instagram, Send, Star } from "lucide-react";
import { useState } from "react";
import features from "../config/features.json";

export default function Footer({ tier = "premium" }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const isPremium = tier === "premium";
  const navLinks = features[tier]?.navigation?.links || [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Contact", href: "/contact" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      <footer className={`mt-0 py-16 ${isPremium ? "bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-950 backdrop-blur-md shadow-2xl" : "bg-gray-900"} relative z-10 overflow-hidden`}>
        {/* Animated background elements for premium */}
        {isPremium && (
          <>
            <div className="absolute inset-0 bg-starfield opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
            <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            <div className="absolute top-10 right-1/3 w-1 h-1 rounded-full bg-brand-gold animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-brand-gold animate-pulse" style={{ animationDelay: '1s' }}></div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branding */}
            <div className="footer-section p-6">
              <a href="/" className="flex items-center mb-4 group">
                <span className="font-serif text-4xl font-bold text-brand-gold tracking-wider group-hover:scale-105 transition-transform duration-300">LuxeStay</span>
                {isPremium && <Crown className="h-7 w-7 ml-2 text-brand-gold fill-current transform group-hover:rotate-12 transition-transform duration-300" />}
              </a>
              <p className="text-sm font-sans text-brand-ivory/80 leading-relaxed mt-4">
                Experience unparalleled luxury at our coastal haven where every detail is crafted for your comfort.
              </p>
              {isPremium && (
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-gold fill-current mr-1" />
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="footer-section p-6">
              <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4 pb-2 border-b border-brand-gold/30">Explore</h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="link text-base font-sans text-brand-ivory/90 hover:text-brand-gold transition-all duration-300 flex items-center group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-gold/0 mr-3 group-hover:bg-brand-gold transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section p-6">
              <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4 pb-2 border-b border-brand-gold/30">Contact Us</h3>
              <ul className="space-y-4 text-base font-sans text-brand-ivory/90">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>nyamuehud@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>+245 746 527 253</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>123 Coastal Drive, Luxe City</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6 pt-4 border-t border-brand-gold/20">
                <a href="https://twitter.com" className="social-icon p-2 bg-blue-950/50 rounded-full text-brand-ivory/90 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" className="social-icon p-2 bg-blue-950/50 rounded-full text-brand-ivory/90 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-section p-6">
              <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4 pb-2 border-b border-brand-gold/30">Stay Updated</h3>
              <p className="text-sm font-sans text-brand-ivory/80 mb-4">
                Subscribe for exclusive offers and updates.
              </p>
              
              {subscribed ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 text-center">
                  <p className="text-green-300 font-sans font-medium">Thank you for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full bg-blue-950/50 border border-brand-gold/30 rounded-xl px-4 py-3 text-brand-ivory focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder-brand-ivory/50"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1 bg-gradient-to-r from-brand-gold to-amber-800 text-blue-950 px-4 py-2 rounded-xl font-sans font-semibold text-sm hover:shadow-lg hover:from-amber-500 hover:to-brand-gold transition-all duration-300 flex items-center"
                  >
                    <Send className="h-4 w-4 mr-1" /> Subscribe
                  </button>
                </form>
              )}
              
              {isPremium && (
                <p className="text-xs text-brand-ivory/60 mt-4 italic">
                  Premium subscribers receive exclusive deals and early access to new features.
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Credits */}
      <div className="py-4 bg-blue-950/90 text-center border-t border-brand-gold/20">
        <p className="text-xs font-sans text-brand-ivory/70">
          © {new Date().getFullYear()} LuxeStay. All rights reserved. | 
          Designed by{" "}
          <a
            href="https://glimmerink.netlify.app/"
            className="text-brand-gold hover:text-brand-ivory transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] mx-1"
          >
            GlimmerInk Creations
          </a> 
          | Contact: 0746527253
        </p>
      </div>

      <style jsx>{`
        .footer-section {
          position: relative;
          ${isPremium ? `
            animation: fadeInScale 0.8s ease-in-out both;
            backdrop-filter: blur(12px);
            background: linear-gradient(135deg, rgba(30, 30, 60, 0.7), rgba(20, 25, 45, 0.7));
            border: 1px solid rgba(212, 175, 55, 0.15);
            border-radius: 1rem;
            transition: all 0.3s ease;
          ` : `
            animation: fadeIn 0.6s ease-in-out both;
            background: rgba(45, 45, 65, 0.7);
            border-radius: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          `}
        }
        .footer-section:hover {
          ${isPremium ? `
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(212, 175, 55, 0.2);
            border-color: rgba(212, 175, 55, 0.4);
          ` : `
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          `}
        }
        .link:hover, .social-icon:hover {
          ${isPremium ? `
            transform: translateX(5px);
            filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.7));
          ` : `
            transform: translateX(3px);
          `}
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .bg-starfield {
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="30" cy="30" r="1.2" fill="%23D4AF37" fill-opacity="0.4"/%3E%3Ccircle cx="80" cy="70" r="0.8" fill="%23D4AF37" fill-opacity="0.3"/%3E%3Ccircle cx="150" cy="40" r="1" fill="%23D4AF37" fill-opacity="0.5"/%3E%3Ccircle cx="180" cy="120" r="0.8" fill="%23D4AF37" fill-opacity="0.3"/%3E%3Ccircle cx="120" cy="150" r="1.2" fill="%23D4AF37" fill-opacity="0.4"/%3E%3Ccircle cx="50" cy="180" r="0.9" fill="%23D4AF37" fill-opacity="0.5"/%3E%3Ccircle cx="20" cy="100" r="1.1" fill="%23D4AF37" fill-opacity="0.4"/%3E%3C/svg%3E');
          background-size: 300px 300px;
          opacity: 0.2;
        }
      `}</style>
    </>
  );
}