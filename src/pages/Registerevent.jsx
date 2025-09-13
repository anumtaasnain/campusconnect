import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

export default function EventRegistration() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      alert("Please login to register for events");
     navigate('/login')
    }
  }, [user, navigate]);

  if (!user) return null; 
  return (
    <div className="body">
      <div className="container">
        <header>
          <h1>University Event Registration</h1>
          <p className="subtitle">Welcome, {user.firstName}!</p>
        </header>

        <div className="registration-form">
          <h2 className="form-title">Register for Event</h2>

          <p>Hello {user.firstName}, please fill in your details below:</p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="required">
                  First Name
                </label>
                <input type="text" id="firstName" value={user.firstName} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="required">
                  Last Name
                </label>
                <input type="text" id="lastName" value={user.lastName} readOnly />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="required">
                Email Address
              </label>
              <input type="email" id="email" value={user.email} readOnly />
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
