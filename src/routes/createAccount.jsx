import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Register";

export default function CreateAccount() {
  return (
    <>
      <section className="h-screen ">
        <section className=" bg-gradient-to-t from-white to-violet-700">
          <Navbar />
        </section>
        <section className="h-screen">
          <Register />
        </section>
        <Footer />
      </section>
    </>
  );
}
