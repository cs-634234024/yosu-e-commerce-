import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[#FFD099]">
      <div className="container mx-auto grid grid-cols-[50%_50%]">
        <div className="h-full flex flex-col justify-center items-center p-5">
          <div className="font-semibold text-xl text-gray-600">
            {" "}
            Comfortable, Stylish, and Affordable T-Shirts by Yosu{" "}
          </div>
          <p className="mt-4 text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi numquam sequi ex voluptatum, dolores dicta facilis magnam fuga nobis doloribus neque, voluptas iusto quis quaerat sint. Velit quae fuga aut?</p>
            <div className="w-full flex justify-end mt-6">
                <button className="mr-20  py-3 px-3 rounded-md bg-[#FF6C22] text-white"> 
                    <span className="pr-2"> <FontAwesomeIcon icon={faBagShopping}/> </span> Shop Now 
                 </button>
            </div>
        </div>
        <div className="flex justify-center">
          <img className="" src={"/mainbanner.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
