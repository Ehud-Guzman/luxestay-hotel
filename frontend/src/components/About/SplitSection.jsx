export default function SplitSection({ title, description, image, reverse }) {
  return (
    <div className="section-card rounded-2xl overflow-hidden mb-12">
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <h2 className="text-3xl font-serif font-bold text-brand-ivory mb-4">{title}</h2>
          <p className="text-base font-sans text-brand-ivory/90">{description}</p>
        </div>
      </div>
    </div>
  );
}
