import { useState } from "react";

export default function GalleryItem({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-navy-blue/90 backdrop-blur-md">
      {/* Shimmer / placeholder */}
      {!loaded && (
        <div className="w-full h-48 md:h-56 bg-navy-blue/30 animate-pulse rounded-t-2xl"></div>
      )}

      <img
        src={item.image}
        alt={item.title}
        loading="lazy" // native lazy-load
        className={`w-full object-cover rounded-t-2xl transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />

      <div className="p-4 text-ivory">
        <h3 className="font-serif font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
}
