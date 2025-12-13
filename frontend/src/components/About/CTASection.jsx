export default function CTASection() {
  return (
    <section className="py-16 container mx-auto px-4 text-center pb-0">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px'
          }}
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-ivory mb-6">
        Experience Our Legacy
      </h2>
      <p className="text-lg font-sans text-brand-ivory/80 max-w-2xl mx-auto mb-8 leading-relaxed">
        Join us to discover a world of elegance and heritage. Contact us or book your stay today.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center bg-brand-ivory/10 text-brand-ivory px-8 py-4 rounded-xl font-sans font-semibold text-base border border-brand-ivory/20 hover:bg-brand-ivory/20 hover:border-brand-ivory/30 transition-all duration-300 backdrop-blur-sm"
        >
          Contact Us
        </a>
        <a 
          href="/book" 
          className="inline-flex items-center justify-center bg-gold-gradient text-brand-navy px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-lg hover:shadow-gold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Subtle gold shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          Book Now
        </a>
      </div>

      {/* Subtle decorative element */}
      <div className="mt-12 flex justify-center">
        <div className="w-16 h-px bg-brand-gold/40"></div>
      </div>
    </section>
  );
}