import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainMenu = () => {
  return (
    <div className="container mx-auto w-full ">
      <div className="grid grid-cols-[50%_50%] px-24 py-5">
        <div className="p-2 max-h-[500px]">
          <div className="h-full rounded-md bg-gradient-to-b from-gray-500 to-gray-200  flex">
            <img src="/images/card/card1.png" alt="" width={300} />
            <div className=" w-full flex flex-col items-center justify-center">
              <div className="">
                <h1 className="font-medium text-xl text-white">
                  Yosu New Brand
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[50%_50%]">
          <div className="grid grid-cols-[50%_50%] ">
            <div className="p-2 ">
              <div className="h-full flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-gray-500 to-gray-200 ">
                <div className="">
                  <FontAwesomeIcon
                    className=" text-4xl text-white mx-5"
                    icon={faHome}
                  />
                  <h1 className="text-center">test</h1>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="h-full flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-gray-500 to-gray-200 ">
                <div className="">
                  <FontAwesomeIcon
                    className=" text-4xl text-white mx-5"
                    icon={faHome}
                  />
                  <h1 className="text-center">test</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="h-full flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-gray-500 to-gray-200 ">
              <div className="">
                <FontAwesomeIcon
                  className=" text-4xl text-white mx-5"
                  icon={faHome}
                />
                <h1 className="text-center">test</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
