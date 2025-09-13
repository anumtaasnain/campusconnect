import React from "react";
import { Routes, Route } from "react-router-dom";
import './css/style.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events"
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Registerevent from "./pages/Registerevent";
import CalendarPage from "./pages/CalendarPage.jsx";
import EventsCardsDet from "./pages/EventsCardsDet.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventsCardsDet/:id" element={<EventsCardsDet/>} />
        <Route path="/events" element={<Events />} />
        <Route  path="/eventeetails/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/register" element={<Registerevent />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
