import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [sharingRoom, setSharingRoom] = useState("1 Sharing");
  const [stayType, setStayType] = useState("Daily Basic");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent actual form submit

    const phone = "919148141544"; // ✅ Replace with your WhatsApp number
    const message = `Hello! I'm interested in your hostel.%0A
Full Name: ${fullName}%0A
Contact Number: ${contactNumber}%0A
Sharing Room: ${sharingRoom}%0A
Stay Type: ${stayType}`;

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div id="contact-form" className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Book Your Stay</h2>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            placeholder="Phone number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sharingRoom">Sharing Room</label>
          <select
            id="sharingRoom"
            value={sharingRoom}
            onChange={(e) => setSharingRoom(e.target.value)}
          >
            <option>1 Sharing</option>
            <option>2 Sharing</option>
            <option>3 Sharing</option>
            <option>4 Sharing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="stayType">Stay Type</label>
          <select
            id="stayType"
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
          >
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
