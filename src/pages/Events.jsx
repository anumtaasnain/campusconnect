import React, { useState } from "react";
import eventsData from "../Json/events.json"; // apna JSON file ka path sahi rakhna
import cards from "../Json/home.json";
import { useEffect } from "react";


function Events() {
   useEffect(() => {
      // Filter functionality for events
      document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.remove("active");
          });
  
          // Add active class to clicked button
          button.classList.add("active");
  
          const filter = button.getAttribute("data-filter");
  
          // Show/hide events based on filter
          document.querySelectorAll(".event-card").forEach((card) => {
            if (
              filter === "all" ||
              card.getAttribute("data-category") === filter
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
  
      // small accessibility helpers
      document.querySelectorAll(".btn-accent").forEach((b) =>
        b.addEventListener("keyup", (e) => {
          if (e.key === "Enter") b.click();
        })
      );
     
    });

  return (
    <div className="events-page">
      {/* HERO BANNER */}
      <section className="events-hero">
        <div className="overlay">
          <h1>Campus Events</h1>
          <p>
            Stay updated with all upcoming and past events – technical, cultural,
            sports & workshops.
          </p>
        </div>
      </section>

              <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="section-title">Upcoming Events</h3>
              <div className="filter-buttons">
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
              <div className="row">
                {cards.upEvents.map((upCard) => (
                  <div
                    className="col-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    key={upCard.id}
                  >
                    <div
                      className="event-card"
                      data-category={upCard.category.toLowerCase()}
                    >
                      <img src={upCard.img} alt="Hackathon" />
                      <div className="event-card-body">
                        <div className="event-date">{upCard.date}</div>
                        <h5>{upCard.heading}</h5>
                        <p>{upCard.p}</p>
                        <div className="event-category">{upCard.category}</div>
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
