import React from "react";
import expert1 from "../../../images/expert-1.jpg";
import expert2 from "../../../images/expert-2.jpg";
import expert3 from "../../../images/expert-3.jpg";
import expert4 from "../../../images/expert-4.jpg";
import expert5 from "../../../images/expert-5.jpg";
import expert6 from "../../../images/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Blademir Russov", img: expert1 },
  { id: 2, name: "Blademir Zigler", img: expert2 },
  { id: 3, name: "Blademir Kane", img: expert3 },
  { id: 4, name: "Blademir Johason", img: expert4 },
  { id: 5, name: "Blademir Alex", img: expert5 },
  { id: 6, name: "Blademir Putin", img: expert6 },
];
const Experts = () => {
  return (
    <div id="experts">
      <h2 className=" text-center text-3xl font-bold mb-3 mt-10">Experts</h2>
      <div
        className="grid gap-5 
       md:grid-cols-2 lg:grid-cols-3 mx-5"
      >
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
