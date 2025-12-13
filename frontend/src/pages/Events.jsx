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

  // Fetch events from backend2
  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

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
