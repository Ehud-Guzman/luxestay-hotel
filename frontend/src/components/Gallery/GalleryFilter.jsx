export default function GalleryFilter({ categories, current, setCurrent }) {
  const buttons = ["All", ...categories];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {buttons.map((cat) => {
        const isActive = current === cat;
        const baseClasses = "px-6 py-2 rounded-xl font-semibold transition-all duration-300";
        const activeClasses = "bg-gold-gradient text-navy";
        const inactiveClasses = "bg-navy/20 text-ivory hover:bg-navy/40";

        return (
          <button
            key={cat}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            onClick={() => setCurrent(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
