import { Utensils } from "lucide-react";

export default function DiningSubGrid({ dining }) {
  if (!dining.length)
    return <p className="text-center text-brand-ivory/80 py-12">No dining options match your criteria.</p>;

  return (
    <section className="py-10 bg-brand-navy animate-gradient relative z-10">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-8 text-center tracking-wide">
        <Utensils className="inline-block h-6 w-6 mr-2 text-brand-gold" /> Explore Our Dining
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dining.map((rest, index) => (
            <div
              key={rest.id}
              className="rounded-2xl overflow-hidden bg-gold-flecks dining-card"
              style={{ animation: `fadeInScale 0.7s ease-in-out forwards`, animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              <img
                src={rest.image}
                alt={rest.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-gradient-to-t from-brand-navy/70 to-transparent">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-brand-ivory">{rest.name}</h4>
                  <span className="text-xs md:text-sm font-sans font-semibold bg-gold-gradient text-brand-navy px-2 py-0.5 rounded-full">
                    {rest.cuisine}
                  </span>
                </div>
                <p className="text-xs md:text-sm font-sans text-brand-ivory/90 mb-2">{rest.description}</p>
                <p className="text-xs md:text-sm font-sans text-brand-gold font-semibold mb-1">{rest.priceRange}/person</p>
                <p className="text-xs font-sans text-brand-ivory/80 mb-2">Hours: {rest.hours}</p>
                <div className="flex gap-2">
                  <a
                    href={`/menu/${rest.id}`}
                    className="inline-block bg-brand-ivory/20 text-brand-ivory px-3 py-1 rounded-xl font-sans font-semibold text-xs hover:bg-brand-ivory/40 transition-all duration-300"
                  >
                    View Menu
                  </a>
                  <a
                    href={`/reserve/${rest.id}`}
                    className="inline-block bg-gold-gradient text-brand-navy px-3 py-1 rounded-xl font-sans font-semibold text-xs shadow-gold hover:scale-105 transition-all duration-300"
                  >
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dining-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.35);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .dining-card:hover {
          transform: scale(1.04);
          border-color: rgba(212, 175, 55, 0.7);
          box-shadow: 0 10px 28px rgba(212, 175, 55, 0.45);
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(15px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(135deg, #0B1C2C, #1C1C1C);
          background-size: 200% 200%;
          animation: gradientShift 20s ease-in-out infinite;
        }
        .bg-gold-flecks {
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="50" cy="50" r="2" fill="%23D4AF37" fill-opacity="0.25"/%3E%3Ccircle cx="150" cy="75" r="1.5" fill="%23D4AF37" fill-opacity="0.2"/%3E%3Ccircle cx="80" cy="180" r="1" fill="%23D4AF37" fill-opacity="0.2"/%3E%3C/svg%3E');
          background-size: 200px 200px;
        }
      `}</style>
    </section>
  );
}
