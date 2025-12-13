// src/components/RoomsNewsletter.jsx
import { useState } from "react";

export default function RoomsNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-500 to-brand-gold text-brand-ivory text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-4">Stay Updated</h2>
      <p className="mb-8 max-w-xl mx-auto text-base md:text-lg">
        Subscribe to our newsletter for the latest room offers, exclusive promotions, and hotel updates.
      </p>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="px-4 py-3 rounded-lg text-black flex-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button 
          type="submit" 
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-gold to-teal-600 text-brand-navy font-semibold hover:scale-105 transition transform shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
