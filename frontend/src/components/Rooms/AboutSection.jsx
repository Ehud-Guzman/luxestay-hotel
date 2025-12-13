// src/components/AboutSection.jsx
import { Star, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-ivory to-black-200">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Floating Card Wrapper */}
        <div className="bg-navy-blue/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 transform transition-transform duration-500 hover:-translate-y-2">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/images/tribe-hotel-lobby.jpg"
              alt="Luxury Hotel Lobby"
              className="rounded-xl shadow-xl object-cover w-full h-96"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">
              Welcome to Serenity Retreat
            </h2>
            <p className="text-lg md:text-xl font-sans text-brand-charcoal mb-6">
              Experience the pinnacle of luxury and comfort at our oceanfront resort.
              Our curated suites, world-class dining, and exceptional services ensure
              an unforgettable stay.
            </p>

            {/* Features / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Star className="text-amber-500 h-6 w-6" />
                <span className="text-brand-charcoal font-medium">5-Star Luxury Suites</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-emerald-500 h-6 w-6" />
                <span className="text-brand-charcoal font-medium">Eco-Friendly Practices</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-amber-500 h-6 w-6" />
                <span className="text-brand-charcoal font-medium">Award-Winning Dining</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-emerald-500 h-6 w-6" />
                <span className="text-brand-charcoal font-medium">Tranquil Spa & Wellness</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#rooms"
              className="mt-8 inline-block bg-gold-gradient text-brand-navy px-8 py-3 rounded-xl font-sans font-semibold text-lg shadow-gold hover:scale-105 transition-all duration-300"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
