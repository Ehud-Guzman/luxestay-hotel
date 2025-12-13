// src/pages/Rooms.jsx
import { useState, useEffect } from "react";
import { Bed } from "lucide-react";
import features from "../config/features.json";
import RoomFilter from "../components/Rooms/RoomFilter";
import RoomCard from "../components/Rooms/RoomCard";
import FeaturedRooms from "../components/Rooms/FeaturedRooms";
import RoomsNewsletter from "../components/Rooms/RoomsNewsletter";
import AboutSection from "../components/Rooms/AboutSection";

export default function Rooms({ tier = "premium" }) {
  const [filter, setFilter] = useState("all");
  const [rooms, setRooms] = useState([]);
  const isPremium = tier === "premium";
  const showRooms = features[tier]?.content?.rooms || true;

  // Fetch rooms from backend2
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Failed to fetch rooms:", err));
  }, []);

  const roomTypes = Array.from(new Set(rooms.map((r) => r.type)));
  const filteredRooms =
    filter === "all" ? rooms : rooms.filter((r) => r.type === filter);

  if (!showRooms) return null;

  return (
    <main className="pt-0 pb-0 relative z-10 bg-brand-navy">
      {/* Hero Section */}
      <section className="relative h-96 bg-navy-gradient overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Rooms Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/50">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory tracking-tight mb-4">
              <Bed className="inline-block h-8 w-8 mr-2 text-brand-gold" />
              Discover Our Rooms
            </h1>
            <p className="text-lg font-sans text-brand-ivory/80 max-w-xl mx-auto">
              Indulge in luxury with our carefully curated rooms and suites.
            </p>
            <a
              href="#rooms"
              className="mt-6 inline-block bg-gold-gradient text-brand-navy px-8 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300"
            >
              Explore Now
            </a>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 container mx-auto px-4">
        <RoomFilter filter={filter} setFilter={setFilter} types={roomTypes} />

        <AboutSection />

        {/* Rooms Grid with alternating layout */}
        <div className="flex flex-col gap-12 mt-8">
          {filteredRooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              index={index}
              isPremium={isPremium}
              reverse={index % 2 === 1} // alternates left/right
            />
          ))}
        </div>
      </section>

      {/* Featured Rooms */}
      <FeaturedRooms tier={tier} />

      {/* Newsletter */}
      <RoomsNewsletter />
    </main>
  );
}
