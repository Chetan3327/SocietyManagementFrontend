// GalleryGrid.tsx
import React from "react";
import { Link } from "react-router-dom";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-28">
      {items.map((item) => (
        <Link
          to="/gallery/:Societyid/:ImageId"
          key={item.id}
          className="relative overflow-hidden rounded-lg shadow-lg hover:transition-all hover:scale-120 hover:duration-300"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}
    </div>
  );
};

export default GalleryGrid;
