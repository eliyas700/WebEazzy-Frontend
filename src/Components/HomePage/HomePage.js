import React from "react";
import img from "../../Assets/in-hero-product-large-bce22ad495460b9f4ecb3ba9ae001c159106992815d73339fd27436dd16dcf4c.webp";
import FrontEndDemo from "../FrontendDemo/FrontEndDemo";
const HomePage = () => {
  return (
    <div>
      <div className="bg-[#FBF7ED] flex justify-between items-center">
        <div className="w-[50%]">
          <div className="w-[80%] mx-auto">
            {" "}
            <h1 className="font-bold text-5xl text-[#008060]">
              The easiest way to sell online in India{" "}
            </h1>
            <p className="text-info text-lg  mt-6 w-[95%]">
              Try one of the most powerful platforms on the market for free. No
              technical knowledge needed.
            </p>
            <div className="flex justify-between items-center mt-4">
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-[40px] w-[68%] px-2 py-1 border-2 overflow-hidden"
              />
              <button className="btn-primary text-white text-lg font-bold border-2 py-2 px-4">
                Try for free
              </button>
            </div>
            <p className="text-info text-sm mt-5 ">
              Try WebEazzy free for 14 days, no credit card required. By
              entering your email, you agree to receive marketing emails from
              WebEazzy.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <FrontEndDemo />
      </div>
    </div>
  );
};

export default HomePage;
