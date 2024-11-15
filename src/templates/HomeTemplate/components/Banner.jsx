import React from "react";
import InputSearch from "../../../components/Input/InputSearch/InputSearch";
import Svgs from "../../../components/Input/svgs";

const Banner = () => {
  return (
    <div className="container mb-5 mt-28">
      <div className="bg-bg-banner bg-no-repeat bg-contain bg-center h-[500px]">
        <div className="h-[420px] flex justify-center items-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-6xl text-white mb-5 leading-[70px] ">
              Scale your professional workforce with
              <span className="font-[Macan] font italic ml-4 font-semibold">
                freelancers
              </span>
            </h1>
            <InputSearch placeholder="Search for any service..." />
          </div>
        </div>

        <div className="flex justify-center gap-5 items-center">
          <p className="text-gray-300 mb-1">Trusted by:</p>
          <ul className="flex gap-5">
            <li>
              <Svgs.meta />
            </li>
            <li>
              <Svgs.google />
            </li>
            <li>
              <Svgs.netflix />
            </li>
            <li>
              <Svgs.pg />
            </li>
            <li>
              <Svgs.paypal />
            </li>
            <li>
              <Svgs.payoneer />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
