import React, { useEffect, useState } from "react";
import cards from "../Json/home.json";
import '../css/events.css'
import eventsData from "../Json/events.json"; // JSON file
import { Link } from "react-router-dom";

function Events() {
  useEffect(() => {
    // Filter functionality for previous events (scoped to previous section)
    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        document.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Show/hide events based on filter (scoped to previous-events)
        document.querySelectorAll(".previous-events .event-card").forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-category").toLowerCase() === filter
          ) {
            card.parentElement.classList.remove("d-none");
          } else {
            card.parentElement.classList.add("d-none");
          }
        });
      });
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? cards.upEvents
      : cards.upEvents.filter((e) => e.category === selectedCategory);

  return (
    <div className="events-page">
      {/* HERO BANNER */}
      <section className="events-hero">
        <div className="overlay">
          <h1>Campus Events</h1>
          <p>
            Stay updated with all upcoming and past events – technical,
            cultural, sports & workshops.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="section-title">Upcoming Events</h3>

            {/* FILTER BUTTONS */}
            <div
              className="filter-buttons"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              {["All", "Technical", "Cultural", "Sports", "Workshops"].map(
                (category) => (
                  <div
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category === "All" ? "All" : category)
                    }
                    style={{
                      padding: "8px 18px",
                      borderRadius: "20px",
                      border:
                        selectedCategory === category
                          ? "2px solid #8B4513"
                          : "1px solid #ccc",
                      backgroundColor:
                        selectedCategory === category ? "#8B4513" : "#fff",
                      color: selectedCategory === category ? "#fff" : "#333",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedCategory === category ? "#5c3010" : "#f3f3f3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedCategory === category ? "#8B4513" : "#fff")
                    }
                  >
                    {category} Events
                  </div>
                )
              )}
            </div>

            {/* UPDATED CARDS */}
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {filteredData.map((upCard) => (
                <div
                  key={upCard.id}
                  style={{
                    flex: "0 1 280px", // No grow, basis 280px
                    minWidth: "250px",
                    maxWidth: "280px", // Prevent stretching
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    className="event-card"
                    data-category={upCard.category.toLowerCase()}
                  >
                    <Link to={`/EventsCardsDet/${upCard.id}`}>
                      <img
                        src={upCard.img}
                        alt={upCard.heading}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <div style={{ padding: "15px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#8B4513",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {upCard.date}
                      </div>
                      <h5 style={{ marginBottom: "8px", fontSize: "18px" }}>
                        {upCard.heading}
                      </h5>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          minHeight: "50px",
                        }}
                      >
                        {upCard.p}
                      </p>
                      <div
                        style={{
                          marginTop: "10px",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#333",
                        }}
                      >
                        {upCard.category}
                      </div>
                      <Link to={'/register'}>
                        <button className="register-btn">Register</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Previous Events - Updated Code */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="section-title">Previous Events</h3>

            {/* FILTER BUTTONS */}
            <div
              className="filter-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <div className="filter-btn active" data-filter="all">
                All Events
              </div>
              <div className="filter-btn" data-filter="technical">
                Technical
              </div>
              <div className="filter-btn" data-filter="cultural">
                Cultural
              </div>
              <div className="filter-btn" data-filter="sports">
                Sports
              </div>
              <div className="filter-btn" data-filter="workshop">
                Workshops
              </div>
            </div>

            {/* EVENTS LIST - Added wrapper class for scoping */}
            <div
              className="row previous-events"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  style={{
                    flex: "0 1 280px", // No grow, basis 280px
                    minWidth: "250px",
                    maxWidth: "280px", // Prevent stretching
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    className="event-card"
                    data-category={event.category.toLowerCase()}
                  >
                    <img
                      src={event.image}
                      alt={event.heading}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: "15px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#8B4513",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {event.event_date}
                      </div>
                      <h5 style={{ marginBottom: "8px", fontSize: "18px" }}>
                        {event.heading}
                      </h5>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          minHeight: "50px",
                        }}
                      >
                        {event.description}
                      </p>
                      <div
                        style={{
                          marginTop: "10px",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#333",
                        }}
                      >
                        {event.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;