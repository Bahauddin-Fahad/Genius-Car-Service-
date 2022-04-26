import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="min-h-[calc(100vh-187px)] text-center">
      <h2>Service Details of: {service.name}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <Button className="ml-2" variant="dark">
          Proceed Checkout
        </Button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
