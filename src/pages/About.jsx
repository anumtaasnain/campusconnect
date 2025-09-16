import React from "react";
import '../css/about.css'

function Home() {
  return (
    <>
      <div>
        <section className="about-hero">
          <div className="container-xl">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="hero-title">About CampusConnect</h1>
                <p className="hero-subtitle">
                  Connecting students, faculty, and the entire campus community
                  through memorable events and experiences.Connecting students, faculty, and the entire campus community
                  through memorable events and experiences.Connecting students, faculty, and the entire campus community
                  through memorable events and experiences.
                </p>
                <a href="#our-story" className="  btn-accent me-3">
                  Our Story
                </a>
                 
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <video
                  className="category-media"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="./l.mp4"
                    type="video/mp4"
                  />
                </video>
                
                </div>


              </div>
            </div>
          
        </section>

        <section className="content-section" id="our-story">
          <div className="container-xl">
            <h2 className="section-title">Our Story</h2>
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="./1.jpg"
                  alt="Campus event"
                  className="story-image w-100"
                />
              </div>
              <div className="col-lg-6">
                <h3 className="subsection-title">
                  From a Simple Idea to Campus-Wide Impact
                </h3>
                <p>
                  CampusConnect was founded in 2018 by a group of students who
                  noticed how difficult it was to stay informed about campus
                  events. What started as a simple event calendar has evolved
                  into the comprehensive platform it is today.
                </p>
                <p>
                  Our journey began when we realized that students were missing
                  out on valuable opportunities simply because they didn't know
                  about them. Faculty were struggling to promote their events,
                  and student organizations found it challenging to reach their
                  target audience.
                </p>
                <p>
                  Today, CampusConnect serves over 15,000 students and 500+
                  faculty members across multiple departments, helping to
                  organize, promote, and manage hundreds of events each year.
                </p>
                <div className="mt-4">
                  <a href="#" className="  btn-accent">
                    Learn More About Our Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section content-section-alt">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="pe-lg-4">
                  <h2 className="section-title text-lg-start">Our Mission</h2>
                  <div className="mission-icon">
                    <i className="bi bi-bullseye" />
                  </div>
                  <p>
                    Our mission is to create a vibrant campus community by
                    connecting students with events, activities, and
                    opportunities that enrich their college experience.
                  </p>
                  <p>
                    We believe that campus events play a crucial role in student
                    development, fostering connections, and creating memories
                    that last a lifetime.
                  </p>
                  <p>
                    By providing a centralized platform for event management and
                    discovery, we aim to make campus life more engaging,
                    inclusive, and memorable for everyone.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-4">
                  <h2 className="section-title text-lg-start">Our Vision</h2>
                  <div className="mission-icon">
                    <i className="bi bi-eye" />
                  </div>
                  <p>
                    We envision a campus where every student feels connected,
                    engaged, and informed about the opportunities available to
                    them.
                  </p>
                  <p>
                    Our goal is to become the central nervous system of campus
                    life, where students don't just attend events but actively
                    shape the campus culture through their participation and
                    leadership.
                  </p>
                  <p>
                    We're committed to continuously improving our platform to
                    meet the evolving needs of our campus community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container-xl">
            <h2 className="section-title">Our Values</h2>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="text-center">
                  <div className="mission-icon">
                    <i className="bi bi-people" />
                  </div>
                  <h4 className="subsection-title">Community</h4>
                  <p>
                    We believe in the power of bringing people together to
                    create a sense of belonging and shared purpose.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="text-center">
                  <div className="mission-icon">
                    <i className="bi bi-lightbulb" />
                  </div>
                  <h4 className="subsection-title">Innovation</h4>
                  <p>
                    We continuously seek new ways to improve the campus event
                    experience through technology and creative solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="text-center">
                  <div className="mission-icon">
                    <i className="bi bi-shield-check" />
                  </div>
                  <h4 className="subsection-title">Inclusivity</h4>
                  <p>
                    We're committed to creating a platform that welcomes and
                    represents all members of our diverse campus community.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <ul className="values-list">
                  <li>
                    We prioritize user experience, making our platform intuitive
                    and easy to use for everyone
                  </li>
                  <li>
                    We value transparency in our operations and communications
                  </li>
                  <li>
                    We foster collaboration between students, faculty, and
                    administration
                  </li>
                  <li>
                    We're dedicated to reliability, ensuring our platform is
                    always available when needed
                  </li>
                  <li>
                    We embrace feedback and continuously strive to improve based
                    on user input
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-3 col-6 mb-5 mb-md-0">
                <div className="stat-number" data-count={5000}>
                  5000+
                </div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="col-md-3 col-6 mb-5 mb-md-0">
                <div className="stat-number" data-count={750}>
                  750+
                </div>
                <div className="stat-label">Events Yearly</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-number" data-count={95}>
                  95%
                </div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-number" data-count={50}>
                  50+
                </div>
                <div className="stat-label">Campus Partners</div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section content-section-alt" id="our-team">
          <div className="container-xl">
            <h2 className="section-title">Our Team</h2>
            <p className="text-center mb-5">
              Meet the dedicated individuals who make CampusConnect possible
            </p>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="team-member">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a9c7c7c7c7c7c7c7c7c7c7c7c7c7c7"
                    alt="Team member"
                    className="team-img"
                  />
                  <h4 className="team-name">Sarah Johnson</h4>
                  <div className="team-role">Founder &amp; Director</div>
                  <p>
                    Passionate about creating connections and enhancing campus
                    life.
                  </p>
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="team-member">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c"
                    alt="Team member"
                    className="team-img"
                  />
                  <h4 className="team-name">Michael Chen</h4>
                  <div className="team-role">Technical Lead</div>
                  <p>
                    Ensures our platform runs smoothly and implements new
                    features.
                  </p>
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-github" />
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="team-member">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c"
                    alt="Team member"
                    className="team-img"
                  />
                  <h4 className="team-name">Jessica Williams</h4>
                  <div className="team-role">Event Coordinator</div>
                  <p>
                    Works with student organizations to promote and manage their
                    events.
                  </p>
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center ">
              <a href="#" className="btn-lg btn-accent">
                View Full Team
              </a>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container-xl">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">Join Our Community</h2>
                <p className="mb-4">
                  Whether you're a student looking to get involved, a faculty
                  member organizing an event, or a department seeking to promote
                  your activities, CampusConnect is here to help.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href="/signup" className="  btn-accent">
                    Create an Account
                  </a>
                  <a href="/events" className="btn-outline-accent">
                    List an Event
                  </a>
                  <a href="/contact" className="btn-outline-accent">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    
    </>
  );
}

export default Home;