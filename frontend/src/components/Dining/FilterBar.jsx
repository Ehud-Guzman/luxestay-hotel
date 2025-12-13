import { Search } from "lucide-react";

export default function FilterBar({ filter, setFilter, search, setSearch }) {
  const cuisines = ["all", "Coastal", "Italian", "Fine Dining"];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-brand-navy/50 border border-brand-gold/30 rounded-xl px-4 py-2 pl-10 text-brand-ivory focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-brand-gold" />
      </div>

      {cuisines.map((cuisine) => (
        <button
          key={cuisine}
          onClick={() => setFilter(cuisine)}
          className={`px-6 py-2 rounded-xl font-sans font-semibold text-sm ${
            filter === cuisine ? "bg-gold-gradient text-brand-navy" : "bg-brand-ivory/20 text-brand-ivory hover:bg-brand-ivory/40"
          } transition-all duration-300`}
        >
          {cuisine === "all" ? "All Dining" : cuisine}
        </button>
      ))}
    </div>
  );
}
