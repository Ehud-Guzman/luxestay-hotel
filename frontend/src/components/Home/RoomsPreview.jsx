import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Bed } from "lucide-react";
import features from "../../config/features.json";

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    title: "Deluxe Suite",
    description: "Spacious elegance with modern amenities.",
    price: "$250/night"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Ocean View Room",
    description: "Panoramic coastal vistas for serene stays.",
    price: "$350/night"
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    title: "Presidential Suite",
    description: "Unparalleled luxury for an unforgettable experience.",
    price: "$600/night"
  }
];

export default function RoomsPreview({ tier = "premium" }) {
  const [currentRoomSlide, setCurrentRoomSlide] = useState(0);
  const showRooms = features[tier]?.content?.rooms ?? true;
  const isPremium = tier === "premium";

  useEffect(() => {
    if (isPremium && showRooms) {
      const timer = setInterval(() => setCurrentRoomSlide(prev => (prev + 1) % rooms.length), 5000);
      return () => clearInterval(timer);
    }
  }, [isPremium, showRooms]);

  if (!showRooms) return null;

  return (
    <section className="py-16 relative z-10 bg-gradient-to-b from-brand-ivory to-gray-100">
      <style jsx>{`
        .room-card {
          ${isPremium ? `
            animation: fadeScale 0.8s ease-in-out both;
            backdrop-filter: blur(12px);
            background: rgba(0, 43, 91, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          ` : `
            animation: fadeIn 0.6s ease-in-out both;
            background: rgba(255, 255, 255, 0.95);
          `}
        }
        .room-card:hover {
          ${isPremium ? `
            transform: scale(1.05);
            box-shadow: 0 12px 32px rgba(0, 43, 91, 0.4);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(0, 43, 91, 0.15));
          ` : `
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          `}
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-serif italic text-center mb-12 tracking-tight text-brand-navy`}>
          <Bed className="inline-block h-8 w-8 mr-2 text-brand-gold" /> Our Rooms
        </h2>

        {isPremium ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="room-card rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={room.image} alt={room.title} className="w-full h-80 object-cover" />
                <div className="relative p-8 bg-gradient-to-t from-brand-navy/50 to-transparent">
                  <h3 className="text-2xl font-serif italic text-brand-ivory mb-2">{room.title}</h3>
                  <p className="text-sm font-sans text-brand-ivory/90 mb-2">{room.description}</p>
                  <p className="text-sm font-sans text-brand-ivory font-semibold">Starting from {room.price}</p>
                  <button className="mt-4 bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory px-6 py-2 rounded-xl font-sans font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-96 overflow-hidden max-w-4xl mx-auto">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentRoomSlide ? "opacity-100 z-0 translate-x-0" : "opacity-0 z-0 translate-x-10"}`}
              >
                <img src={room.image} alt={room.title} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-serif text-brand-ivory">{room.title}</h3>
                    <p className="text-sm font-sans text-brand-ivory">{room.description}</p>
                    <p className="text-sm font-sans text-brand-ivory font-semibold mt-1">Starting from {room.price}</p>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => setCurrentRoomSlide((prev) => (prev - 1 + rooms.length) % rooms.length)}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-brand-navy/50 text-brand-gold hover:bg-brand-navy/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentRoomSlide((prev) => (prev + 1) % rooms.length)}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-brand-navy/50 text-brand-gold hover:bg-brand-navy/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="flex justify-center mt-4">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${index === currentRoomSlide ? "bg-brand-gold" : "bg-brand-ivory/50"}`}
                  onClick={() => setCurrentRoomSlide(index)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="/rooms"
            className={`inline-block px-8 py-3 rounded-xl font-sans font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300 ${
              isPremium ? "bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory" : "bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory"
            }`}
          >
            Explore All Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
