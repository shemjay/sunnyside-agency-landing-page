import React from "react";
import Emily from "../../images/image-emily.jpg";
import Thomas from "../../images/image-thomas.jpg";
import Jennie from "../../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="w-full  flex items-center flex-col p-14 gap-8">
      <h1 className="font-Fraunces font-bold text-2xl uppercase text-neutral-darkGrayishBlue tracking-widest">
        Client Testimonials
      </h1>

      <div className="grid grid-cols-3">
        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full p-4 gap-14">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Emily} alt="" />
          </div>

          <div className="font-Barlow text-neutral-veryDarkGrayishBlue font-bold text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod urna id malesuada dictum.
          </div>

          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Emily R.</p>
            <p className="text-neutral-darkGrayishBlue font-bold font-Barlow">Marketing Director</p>
          </div>
        </div>

        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full p-4 gap-14">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Thomas} alt="" />
          </div>

          <div className="font-Barlow text-neutral-veryDarkGrayishBlue font-bold text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod urna id malesuada dictum.
          </div>

          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Thomas S.</p>
            <p className="text-neutral-darkGrayishBlue font-bold font-Barlow">Chief Operating Officer</p>
          </div>
        </div>

        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full p-4 gap-14">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Jennie} alt="" />
          </div>

          <div className="font-Barlow text-neutral-veryDarkGrayishBlue font-bold text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod urna id malesuada dictum.
          </div>

          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Jennie F.</p>
            <p className="text-neutral-darkGrayishBlue font-bold font-Barlow">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
