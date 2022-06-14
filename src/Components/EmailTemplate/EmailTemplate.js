import React from "react";
import img1 from "../../Assets/1template.jpg";
import img2 from "../../Assets/sticker.png";
import img3 from "../../Assets/template2.jpg";
import img4 from "../../Assets/template3.jpg";
const EmailTemplate = () => {
  return (
    <div className="w-[90%] h-[fit] mx-auto py-8">
      <div className="grid grid-cols-3 gap-20 mt-20">
        <div>
          <img className="w-[83%]" src={img1} alt="" />
          <img className="mt-7" src={img2} alt="" />
        </div>
        <div>
          <div className="">
            <h1 className="font-bold text-lg text-center text-black my-2 ">
              Email Template
            </h1>
            <p className="text-info py-3 text-center mb-3">
              WebEazzy come with 4+ email template which include two order
              success template & two email template
            </p>
          </div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img className="w-[76%] ml-3" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
