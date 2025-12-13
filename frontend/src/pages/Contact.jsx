import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "LuxeStay Resort & Spa\nCoastal Road, \nKenya",
      link: "#"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+254 700 123 456\n+254 711 987 654",
      link: "tel:+254700123456"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "reservations@luxestay.com\ninfo@luxestay.com",
      link: "mailto:reservations@luxestay.com"
    }
  ];

  return (
    <main className="min-h-screen bg-brand-charcoal pt-20 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '120px'
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-brown/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-brand-gold/40 mr-4"></div>
            <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Get In Touch</span>
            <div className="w-12 h-px bg-brand-gold/40 ml-4"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-ivory mb-6">
            Contact LuxeStay
          </h1>
          <p className="text-lg text-brand-ivory/80 leading-relaxed">
            Ready to experience African luxury? Our team is here to craft your perfect stay. 
            Reach out and let's begin your journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-ivory mb-6">Let's Connect</h2>
              <p className="text-brand-ivory/80 mb-8 leading-relaxed">
                Whether you're planning a romantic getaway, business retreat, or family vacation, 
                our dedicated team is committed to making your LuxeStay experience extraordinary.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-ivory mb-2">{method.title}</h3>
                    <p className="text-brand-ivory/80 whitespace-pre-line leading-relaxed">{method.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-brand-charcoal/50 to-brand-charcoal/30 border border-brand-ivory/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-serif font-bold text-brand-ivory mb-4">Service Hours</h3>
              <div className="space-y-2 text-brand-ivory/80">
                <div className="flex justify-between">
                  <span>Reservations</span>
                  <span className="text-brand-gold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Front Desk</span>
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Spa & Wellness</span>
                  <span>7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fine Dining</span>
                  <span>7:00 AM - 11:00 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-charcoal/80 to-brand-charcoal/60 border border-brand-ivory/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-serif font-bold text-brand-ivory mb-2">Send a Message</h2>
            <p className="text-brand-ivory/60 mb-8">We typically respond within 2 hours during business hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-ivory/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-ivory/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-brand-ivory/80 text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-orange-500 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Event Planning</option>
                  <option value="spa">Spa & Wellness</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-ivory/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can make your stay extraordinary..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gold-gradient text-brand-navy font-sans font-semibold py-4 rounded-xl shadow-lg hover:shadow-gold transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-brand-charcoal/50 to-brand-charcoal/30 border border-brand-ivory/10 rounded-3xl overflow-hidden"
        >
          <div className="h-96 bg-gradient-to-br from-brand-gold/10 to-brand-brown/10 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-brand-gold/40 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-brand-ivory/60 font-serif text-lg">Interactive Map Coming Soon</p>
              <p className="text-brand-ivory/40 text-sm mt-2">Coastal Road, Kenya</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-4">
            Ready for an Unforgettable Experience?
          </h3>
          <p className="text-brand-ivory/80 mb-6">
            Book your stay directly with us for exclusive benefits and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/book"
              className="inline-flex items-center justify-center bg-gold-gradient text-brand-navy px-8 py-4 rounded-xl font-sans font-semibold shadow-lg hover:shadow-gold transition-all duration-300"
            >
              Book Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/gallery"
              className="inline-flex items-center justify-center bg-brand-ivory/10 text-brand-ivory px-8 py-4 rounded-xl font-sans font-semibold border border-brand-ivory/20 hover:bg-brand-ivory/20 transition-all duration-300"
            >
              View Gallery
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;