import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[28rem] bg-navy-gradient overflow-hidden">
      <div
        className="w-full h-full parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529154036614-a60975f5c760')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/70">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-ivory tracking-tight mb-4">
            <Heart className="inline-block h-10 w-10 mr-2 text-brand-gold" /> Our Legacy of Hospitality
          </h1>
          <p className="text-xl font-sans text-brand-ivory/80 max-w-2xl mx-auto">
            Rooted in African warmth and modern elegance, we create unforgettable experiences.
          </p>
          <a
            href="#story"
            className="mt-6 inline-block bg-gold-gradient text-brand-navy px-10 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300"
          >
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
