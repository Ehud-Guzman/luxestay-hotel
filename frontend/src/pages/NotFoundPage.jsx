import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-charcoal relative overflow-hidden flex items-center justify-center mt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* African Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '120px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-brand-brown/5 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-ivory/20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-brand-gold/40 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-serif font-bold text-brand-navy">4</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-ivory/20 rounded-full backdrop-blur-sm border border-brand-ivory/30"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand-gold/30 rounded-full"></div>
            </div>
            
            <div className="relative mx-4">
              <div className="w-28 h-28 bg-brand-ivory/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-ivory/20 shadow-2xl">
                <span className="text-5xl font-serif font-bold text-brand-gold">0</span>
              </div>
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold-gradient rounded-full opacity-80"></div>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-serif font-bold text-brand-navy">4</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-ivory/20 rounded-full backdrop-blur-sm border border-brand-ivory/30"></div>
            </div>
          </div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold text-brand-ivory mb-6"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-brand-ivory/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            It seems this page has wandered off the beaten path. 
            Let us guide you back to luxury and comfort.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center bg-brand-ivory/10 text-brand-ivory px-8 py-4 rounded-xl font-sans font-semibold text-lg border border-brand-ivory/20 hover:bg-brand-ivory/20 hover:border-brand-ivory/30 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center bg-gold-gradient text-brand-navy px-8 py-4 rounded-xl font-sans font-semibold text-lg shadow-lg hover:shadow-gold transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </motion.button>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-brand-ivory/60"
        >
          <p className="mb-4">Need assistance? Our team is here to help</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="tel:+254700123456" className="hover:text-brand-gold transition-colors duration-300">
              +254 700 123 456
            </a>
            <a href="mailto:info@luxestay.com" className="hover:text-brand-gold transition-colors duration-300">
              info@luxestay.com
            </a>
            <a href="/contact" className="hover:text-brand-gold transition-colors duration-300">
              Contact Support
            </a>
          </div>
        </motion.div>

        {/* Decorative Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-6 h-6 rounded-full bg-brand-gold/20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-10 right-10 w-4 h-4 rounded-full bg-brand-ivory/10"
      />
    </div>
  );
}