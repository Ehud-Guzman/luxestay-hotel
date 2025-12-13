export default function StorySection() {
  return (
    <section
      id="story"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle African Pattern Background */}
      <div className="absolute inset-0 bg-maasai">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '120px'
          }}
        />
        {/* Additional subtle pattern layer */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10L70 30L50 50L30 30Z" fill="currentColor" className="text-brand-ivory"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-ivory"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Card with Enhanced Styling */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-brown/20 rounded-3xl blur-xl opacity-30"></div>
            
            <div className="relative section-card rounded-3xl p-10 md:p-16 lg:p-20 backdrop-blur-sm bg-gradient-to-br from-maasai/95 to-maasai-dark/95 border border-brand-ivory/10 shadow-2xl">
              
              {/* Section Header with Premium Typography */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="w-12 h-px bg-brand-gold/40 mr-4"></div>
                  <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Our Heritage</span>
                  <div className="w-12 h-px bg-brand-gold/40 ml-4"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-ivory mb-6 relative">
                  The LuxeStay Story
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-brand-gold/60"></div>
                </h2>
              </div>

              {/* Content with Enhanced Typography */}
              <div className="space-y-6 md:space-y-8">
                <div className="relative pl-8 border-l-2 border-brand-gold/30">
                  <p className="text-lg md:text-xl font-sans text-brand-ivory/95 leading-relaxed">
                    Founded in 2010 on the shores of Kenya's vibrant coast, LuxeStay began as a vision to blend global luxury with the rich tapestry of African heritage.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-brand-gold/30">
                  <p className="text-lg md:text-xl font-sans text-brand-ivory/95 leading-relaxed">
                    From handcrafted interiors to locally inspired menus, every element tells a story of resilience and community, woven into the very fabric of our existence.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-brand-gold/30">
                  <p className="text-lg md:text-xl font-sans text-brand-ivory/95 leading-relaxed">
                    Today, LuxeStay stands as a beacon of African elegance, inviting guests to immerse in a world where tradition meets sophistication, and every moment becomes a cherished memory.
                  </p>
                </div>
              </div>

              {/* Signature Element */}
              <div className="text-center mt-12 pt-8 border-t border-brand-ivory/10">
                <div className="inline-flex items-center space-x-3 text-brand-ivory/70">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span className="font-serif italic text-sm">Crafting unforgettable experiences since 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-5 w-3 h-3 rounded-full bg-brand-gold/20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 w-2 h-2 rounded-full bg-brand-ivory/30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-12 w-1 h-1 rounded-full bg-brand-gold/40 animate-pulse delay-500"></div>
    </section>
  );
}