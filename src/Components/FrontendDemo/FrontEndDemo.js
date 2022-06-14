import React from "react";
import img from "../../Assets/f-bg.png";
import Demos from "../../Demos";
const FrontEndDemo = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-[100vw]" src={img} alt="" />
        <div className="absolute top-[25%] left-[40%]">
          <h2
            style={{ letterSpacing: ".2em" }}
            className="text-[22px] font-bold  text-black font-inherit uppercase "
          >
            30+ Front-end Demo {Demos.length}
          </h2>
          <p className="font-style text-center mt-2">just for you</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 w-[90%]  mx-auto">
        {Demos.map((demo) => (
          <div className="w-[246px] h-[236px]  ">
            <img src={demo.img} alt="" />
            <h3 className="text-2xl font-semibold text-center mt-3 text-info">
              {demo.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEndDemo;
