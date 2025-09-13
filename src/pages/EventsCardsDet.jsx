import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import "../css/eventsCarddet.css";
import eventCardDet from "../Json/EventsCards.json";

function EventsCardsDet() {
  const { id } = useParams();
  const eventcardsdet = eventCardDet.find((e) => String(id));

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="football-icon">
          <i className="fas fa-futbol" />
        </div>
        <div className="container">
          <h1 className="display-3 fw-bold">{eventcardsdet.heading}</h1>
          <p className="lead">{eventcardsdet.subtitle}</p>
          <p>{eventcardsdet.desc}</p>
        </div>
      </div>
      {/* Introduction */}
      <section className="container mb-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">{eventcardsdet.heading2}</h2>
            <p>{eventcardsdet.p1}</p>
            <p>{eventcardsdet.p2}</p>
          </div>
        </div>
      </section>
      {/* Football Stats */}
      <section className="container mb-5">
        <h2 className="section-title text-center">{eventcardsdet.heading3}</h2>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-globe" />
            </div>
            <div className="stat-value">4B+</div>
            <div className="stat-label">Fans Worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-users" />
            </div>
            <div className="stat-value">270M+</div>
            <div className="stat-label">Active Players</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-trophy" />
            </div>
            <div className="stat-value">211</div>
            <div className="stat-label">National Associations</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-eye" />
            </div>
            <div className="stat-value">3.5B</div>
            <div className="stat-label">World Cup Viewers</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-history" />
            </div>
            <div className="stat-value">150+</div>
            <div className="stat-label">Years of History</div>
          </div>
        </div>
      </section>
      {/* Football Highlights */}
      <section className="container mb-5">
        <h2 className="section-title text-center">The Essence of Hackathon</h2>
        <div className="row g-4">
          {eventcardsdet.cardsData.map((cardsData) => (
            <div className="col-md-6 col-lg-3">
              <div className="football-card">
                <img
                  src="https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3"
                  className="football-img"
                  alt="Football Rules"
                />
                <div className="card-content">
                  <h3 className="rules-color">
                    <i className="fas fa-book me-2" /> {cardsData.title}
                  </h3>
                  <p>{cardsData.description}</p>
                  <ul>
                    <li>{cardsData.p1}</li>
                    <li>{cardsData.p2}</li>
                    <li>{cardsData.p3}</li>
                    <li>{cardsData.p4}</li>
                    <li>{cardsData.p5}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Player Positions */}
      <section className="container mb-5">
        <h2 className="section-title text-center">
          {eventcardsdet.participant_roles.heading}
        </h2>
        <div className="row">
          {eventcardsdet.participant_roles.roles.map((roles) => (
            <div className="col-md-6">
              <div className="skills-fact">
                <h3>
                  <span className="position-badge">{roles.role}</span>
                </h3>
                <p>{roles.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Skills Showcase */}
      <section className="skills-showcase">
        <div className="container">
          <h2 className="section-title text-center">
            {eventcardsdet.essential_skills.heading}
          </h2>
          <div className="row">
            {eventcardsdet.essential_skills.skills.map((skills) => (
              <div className="col-md-6">
                <div className="skills-fact">
                  <div className="icon-container">
                    <i className="fas fa-futbol" />
                  </div>
                  <h3>{skills.skill}</h3>
                  <p>
                    {skills.description}
                  </p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "95%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* History Timeline */}
      <section className="container my-5">
        <h2 className="section-title text-center">{eventcardsdet.timeline.heading}</h2>
        <div className="timeline">
            {eventcardsdet.timeline.events.map((tlLft) =>{

                <div className="timeline-item left">
            <div className="timeline-content">
              <h3>{tlLft.year}</h3>
              <p>{tlLft.title}</p>
              <p>
                The first governing body of football established in England,
                creating the first unified rules of the game.
              </p>
            </div>
          </div>
        })}
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>1930</h3>
              <p>First FIFA World Cup</p>
              <p>
                The inaugural tournament was held in Uruguay, with the host
                nation defeating Argentina in the final.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="container my-5">
        <h2 className="section-title text-center">
          The Beautiful Game in Action
        </h2>
        <div className="image-gallery">
          <img
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Match"
          />
          <img
            src="https://images.unsplash.com/photo-1599669454699-248893623464?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Stadium"
          />
          <img
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Skills"
          />
          <img
            src="https://images.unsplash.com/photo-1596466596120-2a8e4b5d1a51?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Training"
          />
          <img
            src="https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Game"
          />
          <img
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Trophy"
          />
          <img
            src="https://images.unsplash.com/photo-1529907920281-5884282d3c05?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Team"
          />
          <img
            src="https://images.unsplash.com/photo-1599669454699-248893623464?ixlib=rb-4.0.3"
            className="gallery-img"
            alt="Football Celebration"
          />
        </div>
      </section>
      {/* Quote */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="blockquote">
            <p>
              "Some people believe football is a matter of life and death. I am
              very disappointed with that attitude. I can assure you it is much,
              much more important than that."
            </p>
            <footer className="blockquote-footer mt-3">Bill Shankly</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default EventsCardsDet;
