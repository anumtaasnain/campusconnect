import React, { useState } from "react";
import "../css/gallery.css";

 
const eventsData = [
  {
    imageThumbnail: "../18.avif",
    date: "February 28, 2024",
    category: ["sports", "2024"],
  },
  {
   
    imageThumbnail: "../17.avif",
    date: "November 22, 2023",
    category: ["sports", "2023"],
  },
  {

    imageThumbnail: "../3.avif",
    date: "March 8, 2024",
    category: ["technical", "2024"],
  },
  {
   
    imageThumbnail: "../20.avif",
    date: "April 5, 2024",
    category: ["cultural", "2024"],
  },
  {
    
    imageThumbnail: "../14.avif",
    date: "March 18, 2024",
    category: ["sports", "2024"],
  },
  ,
  {
   
    imageThumbnail: "../19.avif",
    date: "November 22, 2023",
    category: ["sports", "2023"],
  },
  {
    
    imageThumbnail: "../3.avif",
    date: "March 8, 2024",
    category: ["technical", "2024"],
  },
  {
    
    imageThumbnail: "../12.avif",
    date: "April 5, 2024",
    category: ["cultural", "2024"],
  },
  {
    imageThumbnail: "../5.avif",
    date: "March 18, 2024",
    category: ["sports", "2024"],
  },
  {
    imageThumbnail: "../5.avif",
    date: "March 18, 2022",
    category: ["sports", "2022"],
  }
  , {
    imageThumbnail: "../5.avif",
    date: "March 18, 2021",
    category: ["sports", "2021"],
  }
];

function Gallery() {
  const [filter, setFilter] = useState("All");

  // Category options dynamically generate
  const categories = [
    "All",
    ...Array.from(
      new Set(eventsData.flatMap((event) => event.category.map((c) => c.toLowerCase())))
    ),
  ];

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((event) => event.category.includes(filter.toLowerCase()));

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Campus Events Gallery</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredEvents.map((event, index) => (
          <div key={index} className="gallery-card">
            <img src={event.imageThumbnail} alt={event.title} />
            <div className="card-info">
              <span className="category-tag">{event.category.join(", ")}</span>
              <span className="date-tag">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;