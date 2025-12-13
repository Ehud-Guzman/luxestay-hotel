import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    roomId: "",
    date: "",
    time: "",
    notes: "",
    guestCount: "",
    specialRequests: ""
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { value: "executive-suite", label: "Executive Suite Booking" },
    { value: "presidential-villa", label: "Presidential Villa" },
    { value: "private-dining", label: "Private Dining Experience" },
    { value: "spa-wellness", label: "Executive Spa & Wellness" },
    { value: "meeting-space", label: "Board Meeting Space" },
    { value: "event-planning", label: "Corporate Event Planning" }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const response = await axios.post("https://luxestay-hotel.onrender.com/api/appointments", form);
      
      setStatus("success");
      setForm({
        name: "", email: "", phone: "", service: "", roomId: "", 
        date: "", time: "", notes: "", guestCount: "", specialRequests: ""
      });
      setCurrentStep(1);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Failed to book appointment. Please contact our concierge directly.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal py-20 px-4 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '120px'
          }}
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-brown/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-brand-gold/40 mr-4"></div>
            <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Executive Booking</span>
            <div className="w-12 h-px bg-brand-gold/40 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mb-4">
            Premium Reservation
          </h2>
          <p className="text-lg text-brand-ivory/80 max-w-2xl mx-auto">
            Our executive team is dedicated to crafting your perfect LuxeStay experience with personalized attention to every detail.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-gold-gradient border-transparent text-brand-navy' 
                    : 'border-brand-ivory/20 text-brand-ivory/40'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 transition-all duration-300 ${
                    currentStep > step ? 'bg-gold-gradient' : 'bg-brand-ivory/20'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-brand-charcoal/80 to-brand-charcoal/60 border border-brand-ivory/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-6">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Full Name *</label>
                    <div className="relative">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 pl-12"
                        placeholder="John Smith"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Email Address *</label>
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 pl-12"
                        placeholder="john.smith@company.com"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Phone Number *</label>
                    <div className="relative">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 pl-12"
                        placeholder="+1 (555) 000-0000"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Guest Count</label>
                    <select
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                    >
                      <option value="">Select number of guests</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests (Contact for group rates)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Booking Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-6">Booking Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Service Type *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Preferred Suite/Villa</label>
                    <input
                      name="roomId"
                      value={form.roomId}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      placeholder="e.g., Presidential Suite 301"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Arrival Date *</label>
                    <div className="relative">
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 pl-12"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Preferred Time *</label>
                    <div className="relative">
                      <input
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 pl-12"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Special Requests */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-6">Additional Preferences</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={form.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      placeholder="Dietary restrictions, accessibility needs, celebration arrangements..."
                    />
                  </div>

                  <div>
                    <label className="block text-brand-ivory/80 text-sm font-medium mb-3">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-4 bg-brand-ivory/5 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      placeholder="Any other information that will help us serve you better..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-brand-ivory/10">
              <motion.button
                type="button"
                onClick={prevStep}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 rounded-xl font-sans font-semibold transition-all duration-300 ${
                  currentStep === 1 
                    ? 'invisible' 
                    : 'bg-brand-ivory/10 text-brand-ivory border border-brand-ivory/20 hover:bg-brand-ivory/20'
                }`}
              >
                Back
              </motion.button>

              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gold-gradient text-brand-navy px-8 py-3 rounded-xl font-sans font-semibold shadow-lg hover:shadow-gold transition-all duration-300"
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gold-gradient text-brand-navy px-8 py-3 rounded-xl font-sans font-semibold shadow-lg hover:shadow-gold transition-all duration-300 relative overflow-hidden disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-100%] animate-shimmer"></span>
                      Processing...
                    </>
                  ) : (
                    "Confirm Reservation"
                  )}
                </motion.button>
              )}
            </div>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <div className="flex items-center text-green-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Reservation confirmed! Our executive concierge will contact you within 30 minutes.</span>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
              >
                <div className="flex items-center text-red-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{errorMsg}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Executive Contact */}
        <div className="text-center mt-8 text-brand-ivory/60">
          <p>For immediate executive assistance, contact our VIP concierge:</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="tel:+254700123456" className="hover:text-brand-gold transition-colors">+254 700 123 456</a>
            <a href="mailto:vip@luxestay.com" className="hover:text-brand-gold transition-colors">vip@luxestay.com</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}