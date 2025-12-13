import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MilestonesSection() {
  const milestones = [
    { 
      year: "2010", 
      event: "Founding", 
      description: "LuxeStay is born on Kenya's coast, blending African heritage with luxury hospitality.",
      icon: "🏛️"
    },
    { 
      year: "2015", 
      event: "First Award", 
      description: "Recognized as Best Luxury Hotel in East Africa for our cultural integration and service excellence.",
      icon: "🏆"
    },
    { 
      year: "2020", 
      event: "Sustainability Initiative", 
      description: "Launched eco-friendly practices, partnering with local communities for a greener future.",
      icon: "🌱"
    },
    { 
      year: "2025", 
      event: "Cultural Expansion", 
      description: "Introduced Maasai-inspired events and artisanal collaborations to celebrate Kenyan traditions.",
      icon: "🎨"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-brand-charcoal to-brand-charcoal/95">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-brand-gold/40 mr-4"></div>
            <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Our Journey</span>
            <div className="w-12 h-px bg-brand-gold/40 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mb-4">
            Milestones of Excellence
          </h2>
          <p className="text-lg text-brand-ivory/80 max-w-2xl mx-auto">
            Celebrating over a decade of redefining luxury hospitality while honoring African heritage
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Central Gold Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-gold via-brand-gold/60 to-brand-gold hidden lg:block">
            {/* Line Glow Effect */}
            <div className="absolute inset-0 bg-brand-gold/20 blur-sm"></div>
          </div>

          {/* Mobile Central Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold lg:hidden"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 lg:space-y-0"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center lg:items-start ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="relative group">
                    {/* Card Glow */}
                    <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative bg-gradient-to-br from-brand-charcoal/80 to-brand-charcoal/90 border border-brand-ivory/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-2xl">
                      {/* Year Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                        <span className="text-2xl mr-3">{milestone.icon}</span>
                        <span className="text-brand-gold font-serif font-bold text-lg">{milestone.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-3">
                        {milestone.event}
                      </h3>
                      
                      <p className="text-brand-ivory/90 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot Connector */}
                <div className="hidden lg:flex flex-col items-center justify-center w-12 relative">
                  {/* Central Dot */}
                  <div className="w-6 h-6 rounded-full bg-brand-gold border-4 border-brand-charcoal z-10 relative">
                    {/* Dot Glow */}
                    <div className="absolute inset-0 rounded-full bg-brand-gold/40 animate-ping"></div>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-12 w-0.5 h-24 bg-gradient-to-b from-brand-gold/40 to-transparent"></div>
                  )}
                </div>

                {/* Year Indicator - Opposite Side */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12 text-left' : 'lg:pr-12 text-right'} hidden lg:block`}>
                  <div className={`inline-flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {index % 2 === 1 && (
                      <span className="text-6xl font-serif font-bold text-brand-gold/20 mr-4">{milestone.year}</span>
                    )}
                    <div className={`text-right ${index % 2 === 0 ? 'text-left' : ''}`}>
                      <span className="text-4xl font-serif font-bold text-brand-gold/40 block">{milestone.year}</span>
                      <span className="text-sm text-brand-ivory/60 uppercase tracking-widest">{milestone.event}</span>
                    </div>
                    {index % 2 === 0 && (
                      <span className="text-6xl font-serif font-bold text-brand-gold/20 ml-4">{milestone.year}</span>
                    )}
                  </div>
                </div>

                {/* Mobile Connector */}
                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-20 w-0.5 h-8 bg-gradient-to-b from-brand-gold/40 to-transparent"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse"></div>
          <div className="absolute -bottom-4 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-ivory/20 animate-pulse delay-1000"></div>
        </div>

        {/* Timeline Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center space-x-3 text-brand-ivory/60">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="font-serif italic">Continuing our journey of excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}