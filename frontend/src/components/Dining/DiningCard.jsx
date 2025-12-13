import { motion } from 'framer-motion';

export default function DiningCard({ restaurant, isPremium }) {
  return (
    <motion.div 
      className="group relative rounded-3xl overflow-hidden bg-velvet shadow-2xl hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-gold-gradient text-brand-navy px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest shadow-lg z-30">
            Premium Experience
          </span>
        </div>
      )}

      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent z-10 md:hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-transparent to-transparent z-10 hidden md:block"></div>

      <div className="flex flex-col md:flex-row relative">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Restaurant Type Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-brand-ivory/20 backdrop-blur-sm text-brand-ivory px-3 py-1 rounded-full text-xs font-sans font-medium border border-brand-ivory/30">
              {restaurant.type || "Fine Dining"}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-1">
            <span className="bg-brand-gold/90 text-brand-navy px-2 py-1 rounded text-xs font-sans font-bold">
              ⭐ {restaurant.rating || "4.8"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-8 md:w-1/2 bg-gradient-to-br from-brand-navy/95 to-brand-navy/80 backdrop-blur-sm">
          {/* Decorative Element */}
          <div className="absolute top-0 left-0 w-16 h-1 bg-gold-gradient"></div>

          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {restaurant.name}
              </h3>
              <p className="text-sm font-sans text-brand-ivory/90 leading-relaxed">
                {restaurant.description}
              </p>
            </div>

            {/* Price and Hours */}
            <div className="flex flex-wrap gap-6 py-3 border-y border-brand-ivory/10">
              <div>
                <p className="text-lg font-sans text-brand-gold font-semibold">
                  {restaurant.priceRange}/person
                </p>
                <p className="text-xs text-brand-ivory/60">Average price</p>
              </div>
              <div>
                <p className="text-sm font-sans text-brand-ivory/80">
                  {restaurant.hours}
                </p>
                <p className="text-xs text-brand-ivory/60">Operating hours</p>
              </div>
            </div>

            {/* Features */}
            {restaurant.features && (
              <div className="flex flex-wrap gap-2">
                {restaurant.features.map((feature, index) => (
                  <span key={index} className="bg-brand-ivory/10 text-brand-ivory/80 px-3 py-1 rounded-full text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`/menu/${restaurant.id}`}
                className="inline-flex items-center justify-center bg-brand-ivory/10 text-brand-ivory px-6 py-3 rounded-xl font-sans font-semibold text-sm border border-brand-ivory/20 hover:bg-brand-ivory/20 hover:border-brand-ivory/30 transition-all duration-300 group/btn"
              >
                View Menu
                <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`/reserve/${restaurant.id}`}
                className="inline-flex items-center justify-center bg-gold-gradient text-brand-navy px-6 py-3 rounded-xl font-sans font-semibold text-sm shadow-lg hover:shadow-gold transition-all duration-300 relative overflow-hidden group/btn"
              >
                {/* Gold shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                Reserve Now
              </motion.a>
            </div>

            {/* Quick Info */}
            <div className="flex items-center justify-between text-xs text-brand-ivory/60 pt-3">
              <span>{restaurant.cuisine || "African Fusion"}</span>
              <span>{restaurant.dressCode || "Smart Casual"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}