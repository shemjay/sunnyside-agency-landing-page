import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-primary-darkModerateCyan">
      <div className="w-40 overflow-hidden cursor-pointer p-4 flex items-center bg-transparent">
        <LogoIcon className="w-40 bg-transparent text-[#2C7566]" />
      </div>

      <ul className="flex flex-row gap-x-12 mt-4 font-Barlow text-[#2C7566]">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>

      <div className="flex space-x-6 mt-16">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <PinterestIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
