import { Wifi, Coffee, Droplet, Bed, Utensils, Calendar, MapPin } from "lucide-react";

const features = {
  basic: [
    { icon: Wifi, title: "High-Speed Wi-Fi", description: "Seamless internet access." },
    { icon: Coffee, title: "Gourmet Breakfast", description: "Delicious daily breakfast." },
    { icon: Droplet, title: "Luxury Pool", description: "Relax in our pristine pool." }
  ],
  standard: [
    { icon: Wifi, title: "High-Speed Wi-Fi", description: "Fast connectivity everywhere." },
    { icon: Coffee, title: "Gourmet Breakfast", description: "Premium breakfast options." },
    { icon: Droplet, title: "Luxury Pool", description: "Serene, heated pool." },
    { icon: Bed, title: "Spa & Wellness", description: "Exclusive spa treatments." }
  ],
  premium: [
    { icon: Bed, title: "Luxurious Suites", description: "Opulent suites for ultimate comfort.", image: "/images/suits.jpg" },
    { icon: Droplet, title: "Spa & Wellness", description: "World-class spa therapies.", image: "/images/spa-wellness.jpg" },
    { icon: Utensils, title: "Fine Dining", description: "Award-winning restaurants.", image: "/images/dining.jpg" },
    { icon: Calendar, title: "Events & Conferences", description: "Host unforgettable events.", image: "/images/Events.jpg" },
    { icon: MapPin, title: "Ocean Views", description: "Breathtaking coastal vistas.", image: "/images/ocean-view.jpg" }
  ]
};

export default function FeatureCards({ tier }) {
  return (
    <div className="mt-12">
      <style jsx>{`
        .feature-card {
          ${tier === "premium" ? `
            animation: slideUp 0.7s ease-in-out both;
            backdrop-filter: blur(14px);
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(212, 175, 55, 0.4);
          ` : `
            animation: fadeIn 0.6s ease-in-out both;
          `}
        }
        .feature-card:hover {
          ${tier === "premium" ? `
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(212, 175, 55, 0.5);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(255, 255, 255, 0.2));
          ` : `
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          `}
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <h2 className={`text-3xl md:text-4xl ${tier === "basic" ? "font-sans" : "font-serif"} text-brand-charcoal text-center mb-10 tracking-wide ${tier === "premium" ? "text-brand-gold/90" : ""}`}>
        {tier === "premium" ? "Unparalleled Amenities" : "Our Amenities"}
      </h2>
      <div className={`grid grid-cols-1 ${tier === "premium" ? "sm:grid-cols-2 lg:grid-cols-5" : tier === "standard" ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"} gap-6`}>
        {features[tier].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="feature-card bg-white/90 p-6 rounded-2xl border border-brand-gold/20 shadow-premium transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {tier === "premium" && feature.image && (
                <div className="h-28 rounded-2xl mb-4" style={{ backgroundImage: `url(${feature.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              )}
              <div className="flex justify-center mb-4"><Icon className="h-8 w-8 text-brand-gold" /></div>
              <h3 className={`text-lg ${tier === "basic" ? "font-sans" : "font-serif"} text-brand-charcoal text-center mb-2`}>{feature.title}</h3>
              <p className="text-sm font-sans text-brand-smoke text-center">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}