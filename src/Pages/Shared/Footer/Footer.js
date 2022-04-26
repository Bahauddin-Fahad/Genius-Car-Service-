import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className=" bg-gray-900 mt-4 mb-0">
      <h2 className=" text-2xl font-bold text-white text-center pt-8 pb-8 mb-0">
        Copyright @ {year}
      </h2>
    </footer>
  );
};

export default Footer;
