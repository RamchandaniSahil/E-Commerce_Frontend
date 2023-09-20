import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginAndLogout from "../components/LoginAndLogout";
import { UserAuthProvider } from "../context/auth";

export default function Login() {
  const [auth, setAuth] = useState(null);
  const [details, setDetails] = useState(null);

  return (
    <>
      <UserAuthProvider value={{ details, auth, setDetails }}>
        <section className="h-screen ">
          <section className=" bg-gradient-to-t from-white to-violet-700">
            <Navbar />
          </section>
          <section className="h-screen">
            <LoginAndLogout />
          </section>
          <Footer />
        </section>
      </UserAuthProvider>
    </>
  );
}
