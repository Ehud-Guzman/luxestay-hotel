// src/data/galleryItems.js
import { rooms } from "./roomsData";

// Helper to process images
function processImages(imagesObj, category, startId = 100) {
  let idCounter = startId;
  const items = [];
  for (const path in imagesObj) {
    const file = imagesObj[path];
    const filename = path.split("/").pop();
    // Create a clean title from filename
    const title = filename
      .replace(/\.(jpg|jpeg|png|svg|webp)$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letters

    items.push({
      id: idCounter++,
      title,
      category,
      image: file.default,
      description: title // Just use the title as description for now
    });
  }
  return items;
}

// Rooms
const roomsItems = rooms.map((room) => ({
  id: room.id,
  title: room.title,
  category: "Rooms",
  image: room.image,
  description: room.description
}));

// Dining
const diningImages = import.meta.glob("../images/gallery/dining/*.{jpg,jpeg,png,svg,webp}", { eager: true });
const diningItems = processImages(diningImages, "Dining", 101);

// Events
const eventsImages = import.meta.glob("../images/gallery/events/*.{jpg,jpeg,png,svg,webp}", { eager: true });
const eventsItems = processImages(eventsImages, "Events", 201);

// Wellness
const wellnessImages = import.meta.glob("../images/gallery/wellness/*.{jpg,jpeg,png,svg,webp}", { eager: true });
const wellnessItems = processImages(wellnessImages, "Wellness", 301);

// Combine all
export const galleryItems = [
  ...roomsItems,
  ...diningItems,
  ...eventsItems,
  ...wellnessItems
];
