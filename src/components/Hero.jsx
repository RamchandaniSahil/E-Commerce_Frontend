import React from "react";
import cycle from "../images/img-1.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex py-4 my-20">
        <div className=" text-center w-full">
          <div className="flex flex-col align-middle justify-center items-center gap-6 h-full ">
            <p className="absolute top-44 right-[43.7%] bg-violet-600 p-11 rounded-full"></p>
            <p className="absolute top-52 right-[45%] text-white text-xl">
              BEST
            </p>
            <h1 className="text-2xl">
              NEW <br /> MODEL
            </h1>
            <h3 className="text-xl">
              It is a long established fact that a reader will be <br />
              distracted by the readable content
            </h3>
            <Link
              to="/shop"
              className="bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="h-full w-full">
          <img src={cycle} alt="CYCLE" />
        </div>
      </div>
    </>
  );
}
