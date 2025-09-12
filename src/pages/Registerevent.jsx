import React from "react";
import "../css/register.css";

export default function EventRegistration() {
  return (
    <div className="body">
      <div className="container">
        <header>
          <h1>University Event Registration</h1>
          <p className="subtitle">Secure your spot at our upcoming events</p>
        </header>

        <div className="registration-form">
          <h2 className="form-title">Register for Event</h2>

          {/* Event Type Selection */}
          <div className="event-type-section">
            <h3 className="event-type-title">Select Event Type</h3>

            <input
              type="radio"
              id="technical-toggle"
              name="event-type"
              className="event-type-input"
              defaultChecked
            />
            <input
              type="radio"
              id="cultural-toggle"
              name="event-type"
              className="event-type-input"
            />
            <input
              type="radio"
              id="sports-toggle"
              name="event-type"
              className="event-type-input"
            />

            <div className="event-type-options">
              <label htmlFor="technical-toggle" className="event-type-card">
                <div className="event-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="event-type-name">Technical</div>
                <div className="event-type-desc">
                  Hackathons, Workshops, Seminars
                </div>
              </label>

              <label htmlFor="cultural-toggle" className="event-type-card">
                <div className="event-icon">
                  <i className="fas fa-theater-masks"></i>
                </div>
                <div className="event-type-name">Cultural</div>
                <div className="event-type-desc">
                  Music, Dance, Drama, Arts
                </div>
              </label>

              <label htmlFor="sports-toggle" className="event-type-card">
                <div className="event-icon">
                  <i className="fas fa-running"></i>
                </div>
                <div className="event-type-name">Sports</div>
                <div className="event-type-desc">
                  Competitions, Tournaments, Games
                </div>
              </label>
            </div>

            {/* Event Details */}
            <div className="event-details" id="technical-details">
              <div className="event-info">
                <h3>Computer Science Symposium</h3>
                <div className="info-row">
                  <div className="info-label">Date:</div>
                  <div>20 Sep 2025</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Time:</div>
                  <div>10:00 AM – 4:00 PM</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Venue:</div>
                  <div>Main Auditorium</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Details:</div>
                  <div>
                    Join us for a day of tech talks, workshops, and networking
                    with industry experts.
                  </div>
                </div>
              </div>
            </div>

            <div className="event-details" id="cultural-details">
              <div className="event-info">
                <h3>Annual Cultural Festival</h3>
                <div className="info-row">
                  <div className="info-label">Date:</div>
                  <div>25 Sep 2025</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Time:</div>
                  <div>9:00 AM – 9:00 PM</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Venue:</div>
                  <div>University Grounds</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Details:</div>
                  <div>
                    Experience a vibrant celebration of music, dance, art, and
                    diverse cultures.
                  </div>
                </div>
              </div>
            </div>

            <div className="event-details" id="sports-details">
              <div className="event-info">
                <h3>Inter-University Sports Championship</h3>
                <div className="info-row">
                  <div className="info-label">Date:</div>
                  <div>15-17 Oct 2025</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Time:</div>
                  <div>8:00 AM – 6:00 PM Daily</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Venue:</div>
                  <div>Sports Complex</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Details:</div>
                  <div>
                    Cheer for your university teams in various sports
                    competitions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="required">
                  First Name
                </label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="required">
                  Last Name
                </label>
                <input type="text" id="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="required">
                Email Address
              </label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="affiliation" className="required">
                University/Organization
              </label>
              <input type="text" id="affiliation" required />
            </div>

            <div className="form-group">
              <label htmlFor="questions">Questions or Comments</label>
              <textarea id="questions" rows="3"></textarea>
            </div>

            <button type="submit" className="btn">
              Register Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
