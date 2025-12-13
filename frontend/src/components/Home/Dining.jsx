import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import features from "../../config/features.json";

const dining = [
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Seaside Bistro",
    description: "Savor fresh seafood with breathtaking ocean views in a serene setting."
  },
  {
    image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b",
    title: "Sky Lounge",
    description: "Indulge in craft cocktails in an elegant rooftop ambiance."
  }
];

export default function Dining({ tier = "premium" }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showDining = features[tier]?.content?.dining ?? true;
  const isPremium = tier === "premium";

  useEffect(() => {
    if (isPremium) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % dining.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPremium]);

  if (!showDining) return null;

  return (
    <section className="py-16 relative z-10 bg-gradient-to-b from-brand-ivory to-gray-100 pt-0">
      <style jsx>{`
        .dining-card {
          ${isPremium ? `
            animation: zoomIn 0.7s ease-in-out both;
            backdrop-filter: blur(10px);
            background: rgba(0, 43, 91, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          ` : `
            animation: fadeIn 0.6s ease-in-out both;
            background: rgba(255, 255, 255, 0.95);
          `}
        }
        .dining-card:hover {
          ${isPremium ? `
            transform: scale(1.05);
            box-shadow: 0 12px 32px rgba(0, 43, 91, 0.4);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(0, 43, 91, 0.15));
          ` : `
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          `}
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-texture {
          background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath d="M0 0h20v20H0z"/%3E%3Cpath d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 110 14 7 7 0 010-14z" fill="%23D4AF37" fill-opacity="0.05"/%3E%3C/g%3E%3C/svg%3E');
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-serif font-bold text-center mb-12 tracking-tight text-brand-navy`}>
          <Utensils className="inline-block h-8 w-8 mr-2 text-brand-gold" /> Dining Experiences
        </h2>

        {isPremium ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dining.map((item, index) => (
              <div
                key={index}
                className="dining-card rounded-2xl overflow-hidden bg-texture"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
                <div className="relative p-8 bg-gradient-to-t from-brand-navy/50 to-transparent">
                  <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-brand-ivory/90 mb-4">{item.description}</p>
                  <button className="bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory px-6 py-2 rounded-xl font-sans font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300">
                    Reserve a Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dining.map((item, index) => (
              <div
                key={index}
                className="dining-card rounded-2xl overflow-hidden shadow-premium"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="relative p-6 bg-white/90">
                  <h3 className="text-lg font-serif font-bold text-brand-charcoal">{item.title}</h3>
                  <p className="text-sm font-sans text-brand-smoke mt-1">{item.description}</p>
                  <button className="mt-4 bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory px-6 py-2 rounded-xl font-sans font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300">
                    Reserve a Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="/dining"
            className="inline-block bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory px-8 py-3 rounded-xl font-sans font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore All Dining
          </a>
        </div>
      </div>
    </section>
  );
}
