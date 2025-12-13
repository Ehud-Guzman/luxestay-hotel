import { useState } from "react";
import { galleryItems } from "../data/galleryData";
import GalleryFilter from "../components/Gallery/GalleryFilter";
import GalleryGrid from "../components/Gallery/GalleryGrid";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = Array.from(new Set(galleryItems.map((i) => i.category)));

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <main className="pt-24 pb-20 bg-navy-blue">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-4">
          Our Gallery
        </h1>
        <p className="text-lg text-ivory/80 max-w-2xl mx-auto">
          Explore our rooms, dining, events, and wellness experiences
        </p>
      </section>

      <section className="container mx-auto px-6">
        <GalleryFilter categories={categories} current={filter} setCurrent={setFilter} />

        <GalleryGrid items={filteredItems} />
      </section>
    </main>
  );
}
