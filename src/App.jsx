import React from "react";
import { Routes, Route } from "react-router-dom";
import './css/style.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events"
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer.Jsx";
import EventDetails from "./pages/eventDetails";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Registerevent from "./pages/Registerevent";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route  path="/EventDetails/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/register" element={<Registerevent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
