import React from "react";
import location from "../images/map-icon.png";
import call from "../images/call-icon.png";
import mail from "../images/mail-icon.png";
import facebook from "../images/fb-icon.png";
import twitter from "../images/twitter-icon.png";
import linkedin from "../images/linkedin-icon.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="text-5xl font-bold text-fuchsia-400 text-center mt-20">
          <h1>CONTACT US</h1>
        </div>
        <div className="flex mx-16 ">
          <div className="w-[50%] px-4">
            <h2 className="text-3xl font-bold text-fuchsia-300 text-start my-4">
              LET'S GET IN TOUCH
            </h2>
            <form action="#" className="flex flex-col">
              <div className="w-full flex my-2">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  id="firstname"
                  name="firstname"
                  className="border-2 border-black w-[50%] mr-4 p-2"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  id="lastname"
                  name="lastname"
                  className="border-2 border-black w-[50%] ml-4 p-2"
                />
              </div>
              <input
                type="email"
                placeholder="ENTER EMAIL ADDRESS"
                id="email"
                name="email"
                className="border-2 border-black my-2 p-2"
              />
              <textarea
                name="message"
                id="message"
                placeholder="ENTER YOUR MESSAGE"
                cols="30"
                rows="10"
                className="border-2 border-black my-2 p-2 resize-none"
              ></textarea>
              <input
                type="submit"
                value="SEND MESSAGE"
                id="submit"
                name="submit"
                className="cursor-pointer my-2 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700"
              />
            </form>
          </div>
          <div className="w-[50%] px-8">
            <h2 className="text-3xl font-bold text-fuchsia-300 text-start my-4">
              CONTACT DETAILS
            </h2>
            <div className="my-6">
              <div>
                <Link to={`#`} className="flex my-2 text-white">
                  <img src={location} alt="" className="pr-4" />
                  <p className="hover:text-fuchsia-300">
                    Rajkot, Gujarat, India
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`#`} className="flex my-2 text-white">
                  <img src={call} alt="" className="pr-4" />
                  <p className="hover:text-fuchsia-300">
                    Call Now +91 1234567890
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`#`} className="flex my-2 text-white">
                  <img src={mail} alt="" className="pr-4" />
                  <p className="hover:text-fuchsia-300">demo@gmail.com</p>
                </Link>
              </div>
              <div className="flex my-5">
                <Link to={`#`} className="pr-4">
                  <img src={facebook} alt="" />
                </Link>
                <Link to={`#`} className="pr-4">
                  <img src={twitter} alt="" />
                </Link>
                <Link to={`#`} className="pr-4">
                  <img src={linkedin} alt="" />
                </Link>
              </div>
              <div className="w-[70%] my-8">
                <form action="#" className="flex flex-col">
                  <input
                    type="text"
                    placeholder="ENTER YOUR EMAIL"
                    id="firstname"
                    name="firstname"
                    className="border-2 border-black mr-4 p-2"
                  />
                  <input
                    type="submit"
                    value="SUSCRIBE"
                    id="submit"
                    name="submit"
                    className="cursor-pointer my-4 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 w-[50%]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
