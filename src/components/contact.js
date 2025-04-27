import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact-form" className="contact-container">
      <form className="contact-form">
        <h2>Book Your Stay</h2>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="text" id="contactNumber" placeholder="Phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="sharingRoom">Sharing Room</label>
          <select id="sharingRoom">
            <option>1 Sharing</option>
            <option>2 Sharing</option>
            <option>3 Sharing</option>
            <option>4 Sharing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="stayType">Stay Type</label>
          <select id="stayType">
            <option>Daily Basic</option>
            <option>Complete Stay</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          🚀 Book Now
        </button>
      </form>
    </div>
  );
}

export default Contact;
