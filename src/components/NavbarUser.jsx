import React from "react";
import logo from "../images/logo.png";
import cart from "../images/trolly-icon.png";
import { Link } from "react-router-dom";

export default function NavbarUser({ user }) {
  return (
    <>
      <nav className="flex items-center justify-between text-white p-4 text-lg bg-gradient-to-t from-white to-violet-700 fixed top-0 w-full">
        <div>
          <Link to={`/`}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex">
            <Link to={`/`} className="px-4 hover:text-slate-300">
              <li>Home</li>
            </Link>
            <Link to={`/about`} className="px-4 hover:text-slate-300">
              <li>About</li>
            </Link>
            <Link to={`/shop`} className="px-4 hover:text-slate-300">
              <li>Shop</li>
            </Link>
            <Link to={`/contactus`} className="px-4 hover:text-slate-300">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex">
          <Link to={`/`} className="hover:text-slate-300">
            {user}
          </Link>
          <Link to={`/login`} className="px-4 hover:text-slate-300">
            Login
          </Link>
          <Link to={`/cart`} className="px-4">
            <img src={cart} alt="Cart" />
          </Link>
        </div>
      </nav>
    </>
  );
}
