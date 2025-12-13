export default function RoomFilter({ filter, setFilter, types }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button
        onClick={() => setFilter("all")}
        className={`px-6 py-2 rounded-xl font-sans font-semibold text-sm ${
          filter === "all" ? "bg-gold-gradient text-brand-navy" : "bg-brand-ivory/20 text-brand-ivory hover:bg-brand-ivory/40"
        } transition-all duration-300`}
      >
        All Rooms
      </button>
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-6 py-2 rounded-xl font-sans font-semibold text-sm ${
            filter === type ? "bg-gold-gradient text-brand-navy" : "bg-brand-ivory/20 text-brand-ivory hover:bg-brand-ivory/40"
          } transition-all duration-300`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
