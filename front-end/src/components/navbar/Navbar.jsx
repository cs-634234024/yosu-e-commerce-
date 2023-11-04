import { faFacebook, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-3  mx-auto md:container">
      <div className="grid items-center grid-cols-[50%_50%] md:grid-cols-[40%_30%_30%]">
        <div className="flex items-center">
          <div className="py-2 px-3 md:hidden">
            <FontAwesomeIcon className="" icon={faBars} />
          </div>
          <div className="text-xl font-medium"> Yosu Brand </div>
        </div>
        <div className="hidden md:inline-block">
          <FontAwesomeIcon className=" text-xl mx-5" icon={faFacebook} />
          <FontAwesomeIcon className=" text-xl mx-5" icon={faInstagram} />
          <FontAwesomeIcon className=" text-xl mx-5" icon={faLine} />
        </div>
        <div className="flex justify-end">
            <div className="px-3 py-2 bg-primary text-white rounded-md hover:scale-105 duration-500 cursor-pointer "> Get Started </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
