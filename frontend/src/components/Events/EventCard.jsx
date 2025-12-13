import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EventCard({ event, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-3xl overflow-hidden bg-sparkle shadow-2xl hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <span className="bg-gold-gradient text-brand-navy px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest shadow-lg z-30">
          {event.type}
        </span>
        {event.isFeatured && (
          <span className="bg-brand-ivory/20 backdrop-blur-sm text-brand-ivory px-3 py-1 rounded-full text-xs font-sans font-bold border border-brand-ivory/30">
            Featured
          </span>
        )}
      </div>

      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent"></div>
        
        {/* Date Badge */}
        {event.date && (
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-brand-ivory/20 backdrop-blur-sm rounded-xl p-3 text-center border border-brand-ivory/30">
              <div className="text-brand-gold font-serif font-bold text-lg leading-none">
                {event.date.split(' ')[0]}
              </div>
              <div className="text-brand-ivory text-xs uppercase tracking-widest">
                {event.date.split(' ')[1]}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative p-6 bg-gradient-to-br from-brand-charcoal/95 to-brand-charcoal/80 backdrop-blur-sm">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-6 w-12 h-1 bg-gold-gradient rounded-full"></div>

        <div className="space-y-4">
          {/* Header */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
              {event.name}
            </h4>
            <p className="text-sm font-sans text-brand-ivory/80 leading-relaxed line-clamp-3">
              {event.description}
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 gap-4 py-3 border-y border-brand-ivory/10">
            <div>
              <p className="text-lg font-sans text-brand-gold font-semibold">
                {event.priceRange}
              </p>
              <p className="text-xs text-brand-ivory/60">Starting from</p>
            </div>
            <div>
              <p className="text-sm font-sans text-brand-ivory/80 font-medium">
                {event.capacity}
              </p>
              <p className="text-xs text-brand-ivory/60">Capacity</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-2">
            {event.tags?.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-brand-ivory/10 text-brand-ivory/80 px-2 py-1 rounded-lg text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`/events/${event.id}`}
              className="inline-flex items-center justify-center flex-1 bg-brand-ivory/10 text-brand-ivory px-4 py-3 rounded-xl font-sans font-semibold text-sm border border-brand-ivory/20 hover:bg-brand-ivory/20 hover:border-brand-ivory/30 transition-all duration-300 group/btn"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Details
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`/book-event/${event.id}`}
              className="inline-flex items-center justify-center flex-1 bg-gold-gradient text-brand-navy px-4 py-3 rounded-xl font-sans font-semibold text-sm shadow-lg hover:shadow-gold transition-all duration-300 relative overflow-hidden group/btn"
            >
              {/* Gold shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
              Book Event
            </motion.a>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center justify-between text-xs text-brand-ivory/60 pt-2">
            {event.duration && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.duration}
              </span>
            )}
            {event.location && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {event.location}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}