import React from "react";
import { Link } from "react-router-dom";
// import "../css/navbar.css";

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-xl">
    <a className="navbar-brand brand" href="#">CampusConnect</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav ms-auto align-items-lg-center">
        <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'/events'}>Events</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'/calendar'}>Calendar</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'/gallery'}>Gallery</Link></li>
        <li className="nav-item"><Link className="nav-link active" to={'/about'}>About</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'/contact'}>Contact</Link></li>
        <li className="nav-item ms-3"><Link className="btn btn-outline-accent btn-sm" to={'/registration'}><i className="bi bi-person me-1" /> Student Registration</Link></li>
      </ul>
    </div>
  </div>
</nav>


  );
}

export default Navbar;
