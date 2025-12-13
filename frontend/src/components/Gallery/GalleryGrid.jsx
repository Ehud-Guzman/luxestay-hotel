import Masonry from "react-masonry-css";
import GalleryItem from "./GalleryItem";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

export default function GalleryGrid({ items }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    480: 1,
  };

  const slides = items.map((i) => ({
    src: i.image,
    title: i.title,
    description: i.description,
  }));

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="masonry-column flex flex-col gap-6"
      >
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            className="cursor-pointer"
          >
            <GalleryItem item={item} />
          </div>
        ))}
      </Masonry>

      {open && (
        <Lightbox
          slides={slides}
          open={open}
          index={index}
          close={() => setOpen(false)}
          plugins={[Zoom, Captions]}
          animation={{
            zoom: 0.3,       // smooth zoom effect
            swipe: 0.5,      // swipe animation speed
          }}
          captions={{      // style for captions overlay
            show: true,
            descriptionTextAlign: "center",
            descriptionMaxLines: 3,
          }}
        />
      )}
    </>
  );
}
