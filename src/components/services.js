import React from "react";
import "./Services.css";

const servicesData = [
  { title: "High-Speed Wifi", description: "Enjoy seamless internet access throughout the PG." },
  { title: "Nutritious Meals", description: "Healthy and tasty meals served daily." },
  { title: "Laundry Service", description: "On-time laundry and ironing facilities available." },
  { title: "24/7 Security", description: "CCTV monitoring and security guards ensure your safety." },
  { title: "Daily Housekeeping", description: "Regular room cleaning for a fresh environment." },
  { title: "Ventilated Rooms", description: "Fully Ventilated rooms for your comfort." },
  { title: "Parking Facility", description: "Safe and spacious vehicle parking available." },
  { title: "Gym Access", description: "Stay fit with our fully equipped gym inside the premises." }
];

function Services() {
  return (
    <div id="services" className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
