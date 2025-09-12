import React, { useState } from "react";
import "../css/gallery.css";

const images = [
  { src: "https://source.unsplash.com/random/800x600?technology", category: "Technical" },
  { src: "https://source.unsplash.com/random/700x500?code", category: "Technical" },
  { src: "https://source.unsplash.com/random/600x500?sports", category: "Sports" },
  { src: "https://source.unsplash.com/random/800x600?football", category: "Sports" },
  { src: "https://source.unsplash.com/random/600x800?dance", category: "Cultural" },
  { src: "https://source.unsplash.com/random/700x700?music", category: "Cultural" },
  { src: "https://source.unsplash.com/random/800x600?classroom", category: "Workshops" },
  { src: "https://source.unsplash.com/random/700x500?seminar", category: "Workshops" },
];

function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Campus Gallery</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Technical", "Sports", "Cultural", "Workshops"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img.src} alt={img.category} />
            <span className="category-tag">{img.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
