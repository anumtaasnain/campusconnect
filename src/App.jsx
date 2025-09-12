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

      </Routes>
      <Footer />
    </>
  );
}

export default App;
