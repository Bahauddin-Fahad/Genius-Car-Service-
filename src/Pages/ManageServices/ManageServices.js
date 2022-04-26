import React from "react";
import useServices from "../../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      const remaining = services.filter((service) => service._id !== id);
      setServices(remaining);
    }
  };
  return (
    <div className="min-h-[calc(100vh-187px)] mx-auto">
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div key={services._id}>
          <h4>
            {service.name}
            <button
              onClick={() => handleDelete(service._id)}
              className="border-2"
            >
              X
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
