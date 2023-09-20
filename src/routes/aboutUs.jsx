import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function AboutUs() {
  return (
    <>
      <section className="h-screen">
        <section className="h-screen bg-gradient-to-t from-white to-violet-700">
          {/* <Navbar /> */}
          <Hero />
        </section>
        <section className="h-screen bg-gradient-to-b from-white  via-purple-500 to-violet-400">
          <About />
        </section>
        {/* <Footer /> */}
      </section>
    </>
  );
}
