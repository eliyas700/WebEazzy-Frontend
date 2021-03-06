import React from "react";
import img from "../../Assets/in-hero-product-large-bce22ad495460b9f4ecb3ba9ae001c159106992815d73339fd27436dd16dcf4c.webp";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import EmailTemplate from "../EmailTemplate/EmailTemplate";
import FrontEndDemo from "../FrontendDemo/FrontEndDemo";
import TrailModal from "../Header/TrailModal";
const HomePage = () => {
  return (
    <div>
      <div className="bg-[#FBF7ED] flex justify-between items-center">
        <div className="w-[50%]">
          <div className="w-[80%] mx-auto">
            {" "}
            <h1 className="font-bold text-5xl text-[#5593C1]">
              We don't simply create websites ; we create websites that GET
              RESULTS
            </h1>
            <p className="text-info text-lg  mt-6 w-[95%]"></p>
            <div className="flex justify-between items-center mt-4">
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-[40px] w-[68%] px-2 py-1 border-2 overflow-hidden"
              />
              <label
                for="my-modal-3"
                className="btn-primary text-white text-lg  border-2 py-2 px-4 btn modal-button normal-case font-semibold"
              >
                Try for free
              </label>
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
      <div>
        <EmailTemplate />
      </div>
      <div>
        <CoreFeatures />
      </div>
      <TrailModal />
    </div>
  );
};

export default HomePage;
