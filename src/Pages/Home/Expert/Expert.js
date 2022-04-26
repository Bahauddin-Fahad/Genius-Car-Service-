import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="p-4 my-1 border-2 border-slate-500 rounded-md text-center">
      <img className="mx-auto" src={img} alt="" />
      <h4 className="text-xl mt-2 font-semibold">Name: {name}</h4>
    </div>
  );
};

export default Expert;
