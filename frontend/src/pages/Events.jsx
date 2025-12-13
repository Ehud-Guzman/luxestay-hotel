// src/pages/Events.jsx
import { useState, useEffect } from "react";
import HeroSection from "../components/Events/HeroSection";
import FilterBar from "../components/Events/FilterBar";
import EventList from "../components/Events/EventList";
import features from "../config/features.json";

export default function Events({ tier = "premium" }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);
  const showEvents = features[tier]?.content?.events ?? true;

  // Use env variable for backend URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/api/events`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEvents();
  }, [API_URL]);

  // Filter events based on search and type
  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "all" || event.type === filter;
    const matchesSearch =
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!showEvents) return null;

  return (
    <main className="pt-20 pb-16 relative z-10 bg-brand-charcoal animate-gradient">
      <HeroSection />
      <section className="py-12 container mx-auto px-4">
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <EventList events={filteredEvents} />
      </section>
    </main>
  );
}
