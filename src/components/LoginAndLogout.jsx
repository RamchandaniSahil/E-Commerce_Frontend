import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Helper/Auth";

export default function LoginAndLogout() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  // const [user, setUser] = useState(null);
  // const [details, setDetails] = useState(null);

  // const userSet = () => {
  //   setUser(true);
  // };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const data = {
        email,
        password,
      };
      const response = loginUser(data).then((response) => {
        console.log("Response = ", response.login.data);
        // setDetails(response.login.data);
        return response.login.data;
      });
      console.log(response);
      // console.log(response.login);
      // setDetails();
      navigate("/");
    } catch (error) {}
  };

  // const userDetails = () => {
  //   return details;
  // };

  return (
    <>
      {/* <UserAuthProvider value={{ details, userDetails }}> */}
      <div className="bg-neutral-100 h-screen flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-violet-400 my-3">
          <h1>Login</h1>
        </div>
        <div className="my-10">
          <form method="post" onSubmit={handleSubmit} className="flex flex-col">
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
                onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="submit"
              value="Login"
              className="bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 cursor-pointer"
            />
          </form>
        </div>
        <div>
          <p>
            Don't have Account{" "}
            <Link to="/signup" className="text-violet-700">
              Create Account
            </Link>
          </p>
        </div>
      </div>
      {/* </UserAuthProvider> */}
    </>
  );
}
