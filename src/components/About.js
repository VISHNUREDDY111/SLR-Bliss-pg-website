import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <span className="highlight">SLR Bliss Gents PG</span>, your home away from home!
        </p>
        <p>
          Located in the heart of <span className="highlight">Whitefeild, Bangalore</span>, we provide a safe, comfortable, and budget-friendly living experience for students and working professionals. Whether you're new to the city or looking for a better living option, our PG is designed to offer you more than just a room — it's a community.
        </p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🛏️ Fully Furnished Rooms – Clean, spacious, and well-ventilated.</li>
          <li>🔐 Safety First – 24/7 security and CCTV surveillance.</li>
          <li>🌐 High-Speed Wi-Fi – Stay connected anytime.</li>
          <li>🍽️ Hygienic Food – Fresh and nutritious home-style meals.</li>
          <li>🧺 Laundry & Housekeeping – Regular cleaning and laundry services.</li>
          <li>🚶‍♂️ Prime Location – Easy access to colleges, offices, and public transport.</li>
        </ul>
        <p>
          At <span className="highlight">SLR Bliss PG</span>, we believe in creating a stress-free and friendly environment where you can focus on what matters most — your goals and growth. Our team is always here to support you and ensure you feel right at home.
        </p>
        <p>Come stay with us and experience hassle-free living at its best!</p>
      </div>
    </section>
  );
};

export default AboutUs;
