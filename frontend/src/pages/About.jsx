import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from "../components/About/HeroSection.jsx";
import StorySection from "../components/About/StorySection";
import SplitSection from "../components/About/SplitSection";
import MilestonesSection from "../components/About/MilestonesSection";
import CTASection from "../components/About/CTASection";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-0 pb-16 relative z-10 bg-brand-charcoal overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle African Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '150px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-brown/5 rounded-full blur-3xl"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-charcoal/10 to-transparent"></div>
      </div>

      {/* Animated Hero Section */}
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>

      {/* Enhanced Story Section */}
      <motion.div variants={itemVariants}>
        <StorySection />
      </motion.div>

      {/* Premium Split Sections Container */}
      <section 
        ref={sectionRef}
        className="py-20 lg:py-28 container mx-auto px-4 relative"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-brand-gold/40 mr-4"></div>
            <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Our Philosophy</span>
            <div className="w-16 h-px bg-brand-gold/40 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mb-6">
            The Pillars of Excellence
          </h2>
          <p className="text-lg text-brand-ivory/80 max-w-2xl mx-auto">
            Discover the core principles that define the LuxeStay experience and set us apart in luxury hospitality
          </p>
        </motion.div>

        {/* Enhanced Split Sections with Animation */}
        <motion.div 
          variants={containerVariants}
          className="space-y-24 lg:space-y-32"
        >
          <motion.div variants={itemVariants}>
            <SplitSection
              title="Our Heritage"
              subtitle="Rooted in Tradition"
              description="Rooted in the soul of Kenya's coast, our story begins with the Swahili principle of *Heshima*—respect and honor. For decades, we have welcomed travelers as family, creating a sanctuary where tradition meets timeless elegance."
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              stats={[
                { number: "14", label: "Years of Excellence" },
                { number: "50+", label: "Cultural Partnerships" }
              ]}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SplitSection
              title="Our Craft"
              subtitle="Perfected Over Time"
              description="Since opening our doors in 2010, we have refined the art of luxury hospitality. Every detail— from handwoven décor to curated dining experiences—reflects our devotion to excellence. Our team blends world-class professionalism with the warmth of Kenyan spirit."
              image="/images/hero.jpg"
              reverse
              stats={[
                { number: "100+", label: "Handcrafted Elements" },
                { number: "24/7", label: "Personalized Service" }
              ]}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SplitSection
              title="Our Promise"
              subtitle="Beyond Expectations"
              description="We promise more than a stay—we promise a memory. Whether you're celebrating milestones, exploring the city, or seeking serenity, our spaces are designed to inspire, uplift, and linger in your heart long after you depart."
              image="/images/tribe-hotel-lobby.jpg"
              stats={[
                { number: "98%", label: "Guest Satisfaction" },
                { number: "5★", label: "Luxury Standard" }
              ]}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Milestones */}
      <motion.div variants={itemVariants}>
        <MilestonesSection />
      </motion.div>

      {/* Premium CTA Section */}
      <motion.div variants={itemVariants}>
        <CTASection />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-5 w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-1 h-1 rounded-full bg-brand-ivory/20 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-10 w-1.5 h-1.5 rounded-full bg-brand-brown/40 animate-pulse delay-500"></div>
    </motion.main>
  );
}