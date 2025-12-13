import { Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[28rem] overflow-hidden -mt-[72px]"> {/* negative margin = navbar height */}
      {/* Background image */}
      <div
        className="w-full h-full absolute top-0 left-0 object-cover parallax"
        style={{
          backgroundImage: `url("/images/events-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/60">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-ivory tracking-tight mb-4">
            <Calendar className="inline-block h-10 w-10 mr-2 text-brand-gold" /> Celebrate in Style
          </h1>
          <p className="text-xl font-sans text-brand-ivory/80 max-w-2xl mx-auto">
            Create unforgettable moments with our tailored event experiences.
          </p>
          <a
            href="#events"
            className="mt-6 inline-block bg-gold-gradient text-brand-navy px-10 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}
