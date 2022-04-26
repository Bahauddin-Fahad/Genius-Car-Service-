import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div id="services" className="mt-10">
      <h1 className="services-header text-4xl font-bold">Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
