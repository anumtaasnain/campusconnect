import React, { useEffect, useRef, useState } from "react";
import cards from "../Json/home.json";
import Events from "./Events";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const tl = gsap.timeline();
  const containerRef = useRef();
  const leftSecRef = useRef();
  const rightSecRef = useRef();

  // ✅ Modal states
  const [showModal, setShowModal] = useState(true);
  const [role, setRole] = useState(null);

  useGSAP(
    () => {
      tl.fromTo(
        leftSecRef.current,
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        rightSecRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.3 }
      );

      gsap.from(".countdown-container .time-box", {
        stagger: {
          duration: 0.3,
          amount: 1,
          grid: [1, 1],
          axis: "y",
          ease: "circ.inOut",
          from: "random",
        },
      });

      gsap.utils.toArray(".event-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const eventDate = new Date(Date.now() + 36 * 60 * 60 * 1000);
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const statusEl = document.getElementById("eventStatus");

    function updateCountdown() {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        daysEl.textContent =
          hoursEl.textContent =
          minutesEl.textContent =
          secondsEl.textContent =
            "00";
        statusEl.textContent = "🎉 36 hours have passed!";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      daysEl.textContent = days.toString().padStart(2, "0");
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
      statusEl.textContent = "⏳ After 36 hours Upcoming New Events...";
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Role-wise message
  const getWelcomeMessage = () => {
    if (role === "student")
      return "🎓 Welcome Student! Explore your campus events and opportunities.";
    if (role === "visitor")
      return "👋 Welcome Visitor! Discover what’s happening on our campus.";
    if (role === "staff")
      return "👨‍🏫 Welcome Staff! Stay updated with college activities and programs.";
    return "";
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? cards.upEvents
      : cards.upEvents.filter((e) => e.category === selectedCategory);

  return (
    <div ref={containerRef}>
      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {!role ? (
              <>
                <h2>Select Your Role</h2>
                <div className="role-buttons">
                  <button onClick={() => setRole("student")}>Student</button>
                  <button onClick={() => setRole("visitor")}>Visitor</button>
                  <button onClick={() => setRole("staff")}>Staff</button>
                </div>
              </>
            ) : (
              <>
                <h2>{getWelcomeMessage()}</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* IMAGE BANNER SECTION */}
      <section className="img-banner">
        <div className="container-FLUID">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
            alt="Campus Banner"
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="row g-4 align-items-center mainCon">
            <div className="col-lg-6 leftCon" ref={leftSecRef}>
              <div className="hero-card">
                <div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="title">
                        COLLEGE
                        <br />
                        EVENT HUB
                      </div>
                      <div className="sub">
                        Stay updated with all campus events - technical,
                        cultural, and sports.
                      </div>
                    </div>
                    <div className="upcoming-badge">
                      TechFest 2025 – July 20
                    </div>
                  </div>

                  <div className="hero-media mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c75646519494e7e1d325b6d321b4c3e"
                      alt="College event"
                      className="event-img floaty"
                    />
                    <div>
                      <p className="mb-1">Featured Event</p>
                      <h5 className="mb-2">Annual Technical Symposium</h5>
                      <p
                        className="small"
                        style={{ color: "var(--warm-taupe)" }}
                      >
                        Showcase your technical skills and innovations. Open to
                        all departments.
                      </p>
                      <a href="#" className="btn-accent mt-2">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-3">
                  <div className="mini-card flex-fill">
                    <img
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=d3e2c386f6e1d17e4455b4b508b8aaba"
                      alt="Cultural event"
                    />
                    <div
                      className="mt-2 small"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Cultural
                    </div>
                    <div className="fw-bold">Annual Cultural Festival</div>
                    <div
                      className="small mt-1"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Aug 15-17, 2025
                    </div>
                  </div>

                  <div className="mini-card flex-fill">
                    <img
                      src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=da22a68a4d69d5bca4e8572dcd3e70d6"
                      alt="Sports event"
                    />
                    <div
                      className="mt-2 small"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Sports
                    </div>
                    <div className="fw-bold">Inter-College Sports Meet</div>
                    <div
                      className="small mt-1"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Sep 5-7, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 rightCard" ref={rightSecRef}>
              <div className="hero-card">
                <div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="title">
                        ENGAGE
                        <br />
                        WITH US
                      </div>
                      <div className="sub">
                        Find events, join clubs, and connect with fellow
                        students.
                      </div>
                    </div>
                    <div className="upcoming-badge">Welcome Day – Aug 25</div>
                  </div>

                  <div className="hero-media mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c75646519494e7e1d325b6d321b4c3e"
                      alt="Student community"
                      className="event-img floaty"
                    />
                    <div>
                      <p className="mb-1">Student Community</p>
                      <h5 className="mb-2">Join a Campus Club</h5>
                      <p
                        className="small"
                        style={{ color: "var(--warm-taupe)" }}
                      >
                        Explore a variety of clubs and societies that match your
                        interests.
                      </p>
                      <a href="#" className="btn-accent mt-2">
                        Explore Clubs
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <div className="mini-card flex-fill">
                    <img
                      src="https://images.unsplash.com/photo-1506748686214-e91022986f34?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c75646519494e7e1d325b6d321b4c3e"
                      alt="Academic Workshop"
                    />
                    <div
                      className="mt-2 small"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Academic
                    </div>
                    <div className="fw-bold">Resume Building Workshop</div>
                    <div
                      className="small mt-1"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Oct 1, 2025
                    </div>
                  </div>

                  <div className="mini-card flex-fill">
                    <img
                      src="https://images.unsplash.com/photo-1549488344-938b8163f910?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c75646519494e7e1d325b6d321b4c3e"
                      alt="Guest Lecture"
                    />
                    <div
                      className="mt-2 small"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Lecture
                    </div>
                    <div className="fw-bold">Guest Lecture Series</div>
                    <div
                      className="small mt-1"
                      style={{ color: "var(--warm-taupe)" }}
                    >
                      Oct 20, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="countdown" className="countdown-container">
            <div className="time-box">
              <span className="num" id="days">
                00
              </span>
              <span className="label">Days</span>
            </div>
            <div className="time-box">
              <span className="num" id="hours">
                00
              </span>
              <span className="label">Hours</span>
            </div>
            <div className="time-box">
              <span className="num" id="minutes">
                00
              </span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-box">
              <span className="num" id="seconds">
                00
              </span>
              <span className="label">Seconds</span>
            </div>
          </div>

          <p
            id="eventStatus"
            style={{
              textAlign: "center",
              marginTop: 10,
              color: "var(--dark-chocolate)",
              fontWeight: 600,
            }}
          ></p>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="section-title">Upcoming Events</h3>
              <div className="filter-buttons">
                <div
                  className="filter-btn active"
                  data-filter="all"
                  onClick={() => setSelectedCategory("All")}
                >
                  All Events
                </div>
                <div
                  className="filter-btn"
                  data-filter="technical"
                  onClick={() => setSelectedCategory("Technical")}
                >
                  Technical
                </div>
                <div
                  className="filter-btn"
                  data-filter="cultural"
                  onClick={() => setSelectedCategory("Cultural")}
                >
                  Cultural
                </div>
                <div
                  className="filter-btn"
                  data-filter="sports"
                  onClick={() => setSelectedCategory("Sports")}
                >
                  Sports
                </div>
                <div
                  className="filter-btn"
                  data-filter="workshop"
                  onClick={() => setSelectedCategory("Workshops")}
                >
                  Workshops
                </div>
              </div>
              <div className="row">
                {filteredData.map((upCard) => (
                  <div
                    className="col-3"
                    key={upCard.id}
                    style={{ marginBottom: "20px" }}
                  >
                    <div
                      className="event-card"
                      data-category={upCard.category.toLowerCase()}
                    >
                      <div className="event-category" style={{position:"absolute" , left:"220px" , color:"white"}}>{upCard.category}</div>
                      <img src={upCard.img} alt="Hackathon" />
                      <div className="event-card-body">
                        <div className="event-date">{upCard.date}</div>
                        <h5>{upCard.heading}</h5>
                        <p>{upCard.p}</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            marginTop: "8px",
                          }}
                        >
                          <Link to={`/EventsCardsDet/${upCard.id}`}>
                          <button
                            
                            style={{
                              padding: "6px 20px",
                              borderRadius: "20px",
                              border: "1px solid brown",
                              backgroundColor: "white",
                              color: "white",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                          >
                            Details
                          </button>
                          </Link>
                          <Link>
                          <button
                            style={{
                              padding: "6px 20px",
                              borderRadius: "20px",
                              border: "1px solid brown",
                              backgroundColor: "white",
                              color: "white",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                          >
                            Register
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 m-5 d-flex justify-content-around">
          <div className="col-12 text-center">
            <h3 className="section-title">Events by Category</h3>
          </div>
          {cards.events.map((card) => (
            <div className="col-md-3 col-6 text-center evByCat" key={card.id}>
              <div className="p-3">
                <i
                  className="bi bi-cpu-fill"
                  style={{ fontSize: 28, color: "var(--earthy-brown)" }}
                />
                <div className="fw-bold">{card.name}</div>
                <div className="small" style={{ color: "var(--warm-taupe)" }}>
                  {card.p}
                </div>
                <Link
                  to={`/EventDetails/${card.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button>View More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="category-container">
          <h2 className="section-title">
            <span style={{ color: "#ff4757" }}>Explore</span>{" "}
            <span style={{ color: "var(--text-primary)" }}>Categories</span>
          </h2>
          <div className="category-grid">
            <div className="left category-item">
              <video className="category-media" autoPlay loop muted playsInline>
                <source src="./u.mp4" type="video/mp4" />
              </video>
              <div className="overlay">
                <h2 className="category-name">Upcoming Events</h2>
                <button className="shop-btn">Explore Now</button>
              </div>
            </div>
            <div className="right">
              <div className="category-item right-top">
                <video
                  className="category-media"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./p.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                  <h2 className="category-name">Recent Event</h2>
                  <button className="shop-btn">Explore Now</button>
                </div>
              </div>
              <div className="category-item right-bottom">
                <video
                  className="category-media"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./l.m" type="video/mp4" />
                </video>
                <div className="overlay">
                  <h2 className="category-name">Previous Events</h2>
                  <button className="shop-btn">Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="section-title">What People Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <div className="d-flex mb-4">
                  <i className="fas fa-quote-left text-primary me-3" />
                  <p className="card-text">
                    The team at EventHorizon exceeded all our expectations for
                    our product launch. Every detail was perfectly executed.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="Sarah Johnson"
                    className="rounded-circle me-3"
                    width={50}
                  />
                  <div>
                    <h6 className="mb-0">Sarah Johnson</h6>
                    <small className="text-muted">
                      Marketing Director, TechCore
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <div className="d-flex mb-4">
                  <i className="fas fa-quote-left text-primary me-3" />
                  <p className="card-text">
                    Our annual conference was transformed into a truly engaging
                    experience. The attendance increased by 40% from previous
                    years.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="rounded-circle me-3"
                    width={50}
                  />
                  <div>
                    <h6 className="mb-0">Michael Chen</h6>
                    <small className="text-muted">
                      Events Manager, EduConnect
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <div className="d-flex mb-4">
                  <i className="fas fa-quote-left text-primary me-3" />
                  <p className="card-text">
                    The wedding they organized for us was nothing short of
                    magical. They thought of everything we could possibly need.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Jessica Williams"
                    className="rounded-circle me-3"
                    width={50}
                  />
                  <div>
                    <h6 className="mb-0">Jessica Williams</h6>
                    <small className="text-muted">Client</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
