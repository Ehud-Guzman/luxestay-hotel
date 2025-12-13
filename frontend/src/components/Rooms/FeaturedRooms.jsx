// src/components/FeaturedRooms.jsx
import { useState, useEffect } from "react";
import { Bed } from "lucide-react";

export default function FeaturedRooms({ tier = "premium" }) {
  const [featuredRooms, setFeaturedRooms] = useState([]);

  useEffect(() => {
    fetch("https://luxestay-hotel.onrender.com/api/rooms")
      .then((res) => res.json())
      .then((data) => {
        // pick top 3 rooms as featured
        setFeaturedRooms(data.slice(0, 3));
      })
      .catch((err) => console.error("Failed to fetch featured rooms:", err));
  }, []);

  if (featuredRooms.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-brand-ivory to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-6">Featured Rooms</h2>
        <p className="text-base text-gray-700">Luxury rooms curated for you</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {featuredRooms.map((room) => (
            <div key={room.id} className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif mb-2">{room.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                <p className="text-sm font-semibold text-brand-gold mb-2">
                  KES {new Intl.NumberFormat("en-KE").format(room.price)}/night
                </p>
                <a
                  href={`/book/${room.id}`}
                  className="inline-block bg-gold-gradient text-brand-navy px-4 py-2 rounded-lg text-sm font-semibold shadow hover:scale-105 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
