// src/components/Rooms/RoomCard.jsx
import { formatKES } from "../../utils/formatCurrency";

export default function RoomCard({ room, index, isPremium, reverse = false }) {
  return (
    <div
      className={`room-card rounded-2xl overflow-hidden flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-texture`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-96 flex-shrink-0">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-8 bg-gradient-to-t from-brand-navy/80 to-transparent">
        <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-2">{room.title}</h3>
        <p className="text-sm font-sans text-brand-ivory/90 mb-4">{room.description}</p>
        <p className="text-base font-sans text-brand-gold font-semibold mb-2">
          From {formatKES(room.price)}/night
        </p>
        <p className="text-sm font-sans text-brand-ivory/80 mb-4">Size: {room.size}</p>
        <ul className="text-sm font-sans text-brand-ivory/80 mb-4 list-disc list-inside">
          {room.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>
        <a
          href={`/book/${room.id}`}
          className="inline-block bg-gold-gradient text-brand-navy px-6 py-2 rounded-xl font-sans font-semibold text-sm shadow-gold hover:scale-105 transition-all duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
