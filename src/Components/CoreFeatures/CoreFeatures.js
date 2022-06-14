import React from "react";
import Features from "../../Features";

const CoreFeatures = () => {
  return (
    <div>
      <div className="py-9 mb-6 mx-auto">
        <h1 className="text-center font-semibold text-black text-2xl my-3">
          Core Features
        </h1>
        <p className="text-info text-lg text-center">
          And there is many more features..
        </p>
      </div>
      <div className="grid grid-cols-6 gap-12 w-[95%] mx-auto">
        {Features.map((f, index) => (
          <div key={index} className="hover:text-red-600">
            <img
              className="p-[50px] feature-img hover:shadow-xl"
              src={f.img}
              alt=""
            />
            <h1 className="text-center font-semibold my-2 text-lg">{f.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
