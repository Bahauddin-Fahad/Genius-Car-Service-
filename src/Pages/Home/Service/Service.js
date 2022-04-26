import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-details">
      <img src={img} alt="" />
      <h2 className="text-2xl font-semibold">Name: {name}</h2>
      <h3 className=" text-lg font-semibold">Price: {price}</h3>
      <p>Details: {description}</p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className=" bg-gray-800 text-white font-medium py-1 px-3 mt-3 rounded-md"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
