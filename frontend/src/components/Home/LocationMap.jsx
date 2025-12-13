export default function LocationMap() {
  return (
    <div className=" pt-0">
      <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal text-center mb-10 tracking-wide">
        Our Location
      </h2>
      <div className="relative rounded-2xl overflow-hidden shadow-premium max-w-4xl mx-auto">
        <img src="https://images.unsplash.com/photo-1598928636135-d146006ff4be" alt="Location Map" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-lg font-serif text-brand-ivory">Prime Coastal Location</h3>
            <p className="text-sm font-sans text-brand-ivory">Explore nearby attractions and stunning ocean views.</p>
            <button className="mt-4 bg-brand-gold text-brand-navy px-6 py-2 rounded-xl font-sans font-semibold text-sm shadow-gold hover:scale-105 transition-all duration-300">
              View Attractions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
