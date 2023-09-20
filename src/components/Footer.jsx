import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-slate-500 text-white p-4 justify-center text-lg">
        <p className="text-left px-40">
          Copyright @ 2023{" "}
          <Link
            to={`https://github.com/RamchandaniSahil`}
            target="_blank"
            className="text-violet-400"
          >
            Sahil Ramchandani
          </Link>
        </p>
        <p className="text-right px-40">
          Images and Design taken from{" "}
          <Link
            to={`https://www.free-css.com/free-css-templates/page287/cycle`}
            target="_blank"
            className="text-violet-400"
          >
            free-css
          </Link>{" "}
          and{" "}
          <Link
            to={`https://wpastra.com/templates/cycle-shop-02/`}
            target="_blank"
            className="text-violet-400"
          >
            wpastra
          </Link>
        </p>
      </div>
    </>
  );
}
