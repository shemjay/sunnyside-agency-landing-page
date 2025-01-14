import React from "react";
import Nav from "./Nav";
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className="bg-[url('/images/desktop/image-header.jpg')] relative bg-cover bg-center w-full h-screen flex items-center justify-center text-white">
      <Nav />
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-Fraunces uppercase text-2xl font-bold">We are creatives</h1>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default Hero;
