import React from "react";
import { Spinner } from "react-bootstrap";

const Reload = () => {
  return (
    <div className="h-56 w-full flex justify-center items-center">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Reload;
