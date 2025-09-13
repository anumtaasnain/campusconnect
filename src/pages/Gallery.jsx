import React, { useState, useEffect } from "react";
import "../css/gallery.css";

const eventsData = [
  { id: 1, imageThumbnail: "/18.avif", date: "February 28, 2024", category: ["sports", "2024"] },
  { id: 2, imageThumbnail: "/17.avif", date: "November 22, 2023", category: ["sports", "2023"] },
  { id: 3, imageThumbnail: "/3.avif", date: "March 8, 2024", category: ["technical", "2024"] },
  { id: 4, imageThumbnail: "/20.avif", date: "April 5, 2024", category: ["cultural", "2024"] },
  { id: 5, imageThumbnail: "/14.avif", date: "March 18, 2024", category: ["sports", "2024"] },
  { id: 6, imageThumbnail: "/19.avif", date: "November 22, 2023", category: ["sports", "2023"] },
  { id: 7, imageThumbnail: "/3.avif", date: "March 8, 2024", category: ["technical", "2024"] },
  { id: 8, imageThumbnail: "/12.avif", date: "April 5, 2024", category: ["cultural", "2024"] },
  { id: 9, imageThumbnail: "/5.avif", date: "March 18, 2024", category: ["sports", "2024"] },
  { id: 10, imageThumbnail: "/5.avif", date: "March 18, 2022", category: ["sports", "2022"] },
  { id: 11, imageThumbnail: "/5.avif", date: "March 18, 2021", category: ["sports", "2021"] },
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [bookmarked, setBookmarked] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Load bookmarks on first render
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
    setBookmarked(savedBookmarks);
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const toggleBookmark = (eventId) => {
  setBookmarked((prev) => {
    let updated;
    if (prev.includes(eventId)) {
      updated = prev.filter((id) => id !== eventId);
    } else {
      updated = [...prev, eventId];
    }

    // Immediately update localStorage
    localStorage.setItem("bookmarkedEvents", JSON.stringify(updated));
    return updated;
  });
};
  const categories = [
    "All",
    ...Array.from(new Set(eventsData.flatMap((event) => event.category.map((c) => c.toLowerCase())))),
  ];

  // Filtering Logic
  let filteredEvents = eventsData;

  if (filter !== "All") {
    filteredEvents = filteredEvents.filter((event) =>
      event.category.some((c) => c.toLowerCase() === filter.toLowerCase())
    );
  }

  if (showBookmarks) {
    filteredEvents = filteredEvents.filter((event) => bookmarked.includes(event.id));
  }

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

        {/* Bookmark Toggle Button */}
        <button
          className={`filter-btn bookmark-btn ${showBookmarks ? "active" : ""}`}
          onClick={() => setShowBookmarks((prev) => !prev)}
        >
          🔖 Bookmarks ({bookmarked.length})
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="gallery-card">
              <img src={event.imageThumbnail} alt={`Event ${event.id}`} />
              <div className="card-info">
                <div className="card-info-top">
                  <span className="category-tag">{event.category.join(", ")}</span>
                  <span className="date-tag">{event.date}</span>
                </div>

                {/* Bookmark Icon */}
                <button
                  className={`bookmark-icon-bottom ${bookmarked.includes(event.id) ? "active" : ""}`}
                  onClick={() => toggleBookmark(event.id)}
                >
                  {bookmarked.includes(event.id) ? "🔖" : "📑"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            {showBookmarks ? "No bookmarked events yet." : "No events found."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
