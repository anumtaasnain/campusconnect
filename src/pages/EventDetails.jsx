import React from "react";
import "../css/tech.css";
import eventData from "../Json/details.json";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  // Convert id to number since JSON ids are numbers
  const event = eventData.find((e) => e.id === parseInt(id));
  
  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <div className="container">
          <h1 className="display-3 fw-bold">{event.heading}</h1>
          <p className="lead">{event.p}</p>
          <a href="#tech-cards" className="btn btn-custom btn-lg mt-3">
            Explore Skills
          </a>
        </div>
      </div>
      
      {/* Tech Cards Section */}
      <section id="tech-cards" className="py-5">
        <div className="container">
          <h2 className="section-title">{event.heading2}</h2>
          <div className="row g-4">
            {event.cardsData.map((card, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="card-img-top">
                    <i className={
                      index === 0 ? "fab fa-react" : 
                      index === 1 ? "fas fa-server" : 
                      index === 2 ? "fas fa-palette" : 
                      "fab fa-docker"
                    } />
                  </div>
                  <div className="card-body">
                    <div className="tech-icon">
                      <i className={
                        index === 0 ? "fas fa-paint-brush" : 
                        index === 1 ? "fas fa-code" : 
                        index === 2 ? "fas fa-drafting-compass" : 
                        "fas fa-cloud"
                      } />
                    </div>
                    <h5 className="card-title">{card[`h${index+1}`]}</h5>
                    <p className="card-text">{card[`p${index+1}`]}</p>
                    
                    {/* Skill items would need to be customized per card or removed */}
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Skill Name</span>
                        <span className="skill-level">Level</span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "80%" }} />
                      </div>
                    </div>
                    
                    <button
                      className="btn btn-custom mt-3"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal-${index}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">{event.heading} Projects</h2>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Event Project"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <h3>My {event.heading} Projects</h3>
              <p>
                I've worked on various projects that demonstrate my skills and 
                abilities in {event.heading.toLowerCase()}. These projects showcase 
                my expertise and dedication.
              </p>
              <p>
                Each project follows best practices and demonstrates my capabilities 
                in this area, ensuring quality results and positive outcomes.
              </p>
              <a href="#" className="btn btn-custom">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;