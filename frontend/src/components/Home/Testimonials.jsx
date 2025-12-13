import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import features from "../../config/features.json";

const testimonials = [
  {
    quote: "An unforgettable stay!",
    author: "Jane Doe",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "Pure luxury and relaxation.",
    author: "John Smith",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    quote: "The best hotel experience ever!",
    author: "Emily Brown",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Testimonials({ tier = "premium" }) {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

  const showTestimonials = tier === "standard" || tier === "premium" || features[tier]?.content?.testimonials;
  const isPremium = tier === "premium";

  useEffect(() => {
    if (isPremium) {
      const timer = setInterval(() => {
        setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPremium]);

  console.log(`Rendering Testimonials for tier: ${tier}`, {
    showTestimonials,
    isPremium,
    currentSlide: currentTestimonialSlide,
    testimonials: testimonials.map(t => t.quote)
  });

  if (!showTestimonials) return null;

  return (
    <section className="py-12 relative z-10 pb-0">
      <style jsx>{`
        .testimonial-card {
          ${isPremium ? `
            animation: slideIn 0.7s ease-in-out both;
            backdrop-filter: blur(14px);
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(212, 175, 55, 0.4);
          ` : `
            animation: fadeIn 0.6s ease-in-out both;
          `}
        }
        .testimonial-card:hover {
          ${isPremium ? `
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(212, 175, 55, 0.5);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(255, 255, 255, 0.2));
          ` : `
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          `}
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-serif text-center mb-10 tracking-wide ${isPremium ? "text-brand-gold/90" : "text-brand-charcoal"}`}>
          Guest Reviews
        </h2>

        {tier === "standard" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="testimonial-card bg-white/80 p-6 rounded-2xl border border-brand-gold/20 shadow-premium transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  <div className="flex">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 text-brand-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-sans text-brand-smoke text-center italic">"{t.quote}"</p>
                <p className="text-sm font-sans text-brand-charcoal text-center mt-2">— {t.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative max-w-2xl mx-auto h-64 overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === currentTestimonialSlide ? "opacity-100 z-0 translate-x-0" : "opacity-0 z-0 translate-x-10"}`}
              >
                <div className="testimonial-card bg-white/80 p-6 rounded-2xl border border-brand-gold/20 shadow-premium">
                  <div className="flex items-center justify-center mb-4">
                    <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full mr-3 object-cover" />
                    <div className="flex">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 text-brand-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-sans text-brand-smoke text-center italic">"{t.quote}"</p>
                  <p className="text-sm font-sans text-brand-charcoal text-center mt-2">— {t.author}</p>
                </div>
              </div>
            ))}
            {isPremium && (
              <>
                <button
                  onClick={() => setCurrentTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-brand-navy/50 text-brand-gold hover:bg-brand-navy/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-brand-navy/50 text-brand-gold hover:bg-brand-navy/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="flex justify-center mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 mx-1 rounded-full ${index === currentTestimonialSlide ? "bg-brand-gold" : "bg-brand-ivory/50"}`}
                      onClick={() => setCurrentTestimonialSlide(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}