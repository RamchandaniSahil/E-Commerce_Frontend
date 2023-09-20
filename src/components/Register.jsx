import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { createAccount } from "../Helper/Auth";

export default function Register() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log("NAME: ", name);
      // console.log("EMAIL: ", email);
      // console.log("PASSWORD: ", password);
      const data = {
        name,
        email,
        password,
      };
      // SetPassword("new-password");
      const response = await createAccount(data);
      console.log("response = ", response);
      navigate("/login");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <div className="bg-neutral-100 h-screen flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-violet-400 my-3">
          <h1>Create New Account</h1>
        </div>
        <div className="my-10">
          <Form method="POST" className="flex flex-col" onSubmit={handleSubmit}>
            <label className="w-96 mb-4">
              <p>
                Name:- <strong className="text-red-900">*</strong>
              </p>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 w-full"
                placeholder="Enter Your Name"
                required
                autoComplete="on"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
            </label>
            <label className="w-96 mb-4">
              <p>
                Email:- <strong className="text-red-900">*</strong>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 w-full"
                placeholder="Enter Your Name"
                required
                autoComplete="on"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </label>
            <label className="w-96 mb-4">
              <p>
                Password:- <strong className="text-red-900">*</strong>
              </p>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 w-full"
                placeholder="Enter Your Name"
                required
                autoComplete="on"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </label>
            {/* <label className="w-96 mb-4">
              <p>
                Conform Password:- <strong className="text-red-900">*</strong>
              </p>
              <input
                type="password"
                name="conformPassword"
                id="conformPassword"
                className="p-2 w-full"
                placeholder="Enter Your Name"
                required
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </label> */}
            <input
              type="submit"
              value="Create Account"
              className="bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 "
            />
          </Form>
        </div>
        <div>
          <p>
            Already have Account{" "}
            <Link to="/login" className="text-violet-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
