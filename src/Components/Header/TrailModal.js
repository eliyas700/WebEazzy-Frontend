import React from "react";

const TrailModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className=" font-bold text-normal mb-4">
            Start WebEazzy for 14 days <br /> Free Trail
          </h1>
          <form>
            <input
              className="w-[90%] mx-auto h-[45px]  border-2 my-3 px-3 "
              type="email"
              placeholder="Email Address"
            />
            <input
              className="w-[90%] mx-auto h-[45px]  border-2 my-3 px-3 "
              type="password"
              placeholder="Password"
            />
            <input
              className="w-[90%] mx-auto h-[45px]  border-2 my-3 px-3 "
              type="text"
              placeholder="Shop Name"
            />
            <input
              className="btn btn-primary"
              type="submit "
              value="Create Your Shop"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrailModal;
