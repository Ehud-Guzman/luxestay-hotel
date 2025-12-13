export default function CTASection({ tier }) {
  return (
    <div className="mt-16 text-center">
      {tier === "basic" ? (
        <button className="bg-brand-gold text-brand-navy px-6 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300">
          Book Now
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-gold text-brand-navy px-6 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300">
            Check Availability
          </button>
          <button className={`px-6 py-3 rounded-xl font-sans font-semibold text-base shadow-gold hover:scale-105 transition-all duration-300 ${tier === "premium" ? "bg-gradient-to-r from-brand-gold to-brand-navy text-brand-ivory" : "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10"}`}>
            Subscribe for {tier === "premium" ? "Exclusive " : ""}Offers
          </button>
        </div>
      )}
    </div>
  );
}
