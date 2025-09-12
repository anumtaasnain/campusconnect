import React, { useEffect } from "react";
import eventsData from "../Json/events.json"; // JSON file

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
            card.getAttribute("data-category").toLowerCase() === filter
          ) {
             card.parentElement.classList.remove('d-none');
          } else {
            card.parentElement.classList.add('d-none');
          }
        });
      });
    });
  }, []);

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

            {/* FILTER BUTTONS */}
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

            {/* EVENTS LIST */}
            <div className="row">
              {eventsData.map((event) => (
                <div
                  className="col-3"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  key={event.id}
                  style={{marginBottom:'40px'}}
                >
                  <div
                    className="event-card"
                    data-category={event.category.toLowerCase()}
                  >
                    <img src={event.image} alt={event.heading} />
                    <div className="event-card-body">
                      <div className="event-date">{event.event_date}</div>
                      <h5>{event.heading}</h5>
                      <p>{event.description}</p>
                      <div className="event-category">{event.category}</div>
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
