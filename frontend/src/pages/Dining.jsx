import { useState } from "react";
import HeroSection from "../components/Dining/HeroSection";
import FilterBar from "../components/Dining/FilterBar";
import DiningList from "../components/Dining/DiningList";
import features from "../config/features.json";
import { diningData } from "../data/diningData";

export default function Dining({ tier = "premium" }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const isPremium = tier === "premium";
  const showDining = features[tier]?.content?.dining ?? true;

  const filteredDining = diningData.filter((option) => {
    const matchesFilter = filter === "all" || option.cuisine === filter;
    const matchesSearch =
      option.name.toLowerCase().includes(search.toLowerCase()) ||
      option.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!showDining) return null;

  return (
    <main className="pt-12 mt-0 pb-16 relative z-10 bg-brand-navy animate-gradient">
      <HeroSection />
      <section className="py-12 container mx-auto px-4">
        <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
        <DiningList dining={filteredDining} isPremium={isPremium} />
      </section>
    </main>
  );
}
