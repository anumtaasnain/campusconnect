import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3 mb-4 mb-md-0">
        <h5 className="footer-title">CampusConnect</h5>
        <p className="small">Your central hub for all college events, activities, and announcements. Stay informed and engaged with campus life.</p>
        <div className="social-links">
          <Link><i className="bi bi-facebook" /></Link>
          <Link><i className="bi bi-instagram" /></Link>
          <Link><i className="bi bi-twitter" /></Link>
          <Link><i className="bi bi-linkedin" /></Link>
        </div>
      </div>
      <div className="col-md-3 mb-4 mb-md-0">
        <h5 className="footer-title">Quick Links</h5>
        <ul className="footer-links">
          <li><Link >Upcoming Events</Link></li>
          <li><Link >Event Calendar</Link></li>
          <li><Link >Photo Gallery</Link></li>
          <li><Link >Campus Map</Link></li>
          <li><Link >Student Login</Link></li>
        </ul>
      </div>
      <div className="col-md-3 mb-4 mb-md-0">
        <h5 className="footer-title">Resources</h5>
        <ul className="footer-links">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Contact Coordinators</Link></li>
          <li><Link href="#">Event Policies</Link></li>
          <li><Link href="#">FAQs</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5 className="footer-title">Stay Updated</h5>
        <p className="small">Subscribe to get notifications about upcoming events and important announcements.</p>
        <div className="footer-newsletter">
          <input type="email" placeholder="Your email address" />
          <button className="btn  w-100">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-0 small">© 2025 CampusConnect - College Event Management System. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="mb-0 small">Designed with for better campus engagement</p>
        </div>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer