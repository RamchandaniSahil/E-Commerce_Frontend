import React from "react";
import image from "../images/img-6.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="flex flex-col w-full h-full justify-evenly items-center">
        <div className="text-5xl font-bold text-fuchsia-800">
          <h1>ABOUT OUR CYCLE STORE</h1>
        </div>
        <div className="text-lg font-semibold text-gray-700 text-center ">
          <p className="overflow-auto px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Libero eveniet doloremque voluptates incidunt in placeat recusandae,
            vel amet sequi, minima a explicabo sit. <br /> Cum labore qui
            inventore vel voluptatem eius!
          </p>
        </div>
        <div className="">
          <img src={image} alt="" className="w-auto h-auto" />
        </div>
        <div>
          <Link
            to={`about`}
            className="bg-fuchsia-800 px-12 py-3 font-bold text-white text-lg hover:bg-fuchsia-400 hover:text-slate-700"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </>
  );
}
