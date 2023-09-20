import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function ContactUs() {
  return (
    <>
      <section className="h-screen">
        <section className="h-screen bg-gradient-to-t from-white to-violet-700">
          <Navbar />
          <Hero />
        </section>
        <section className="h-screen bg-gradient-to-t from-white to-violet-700">
          <Contact />
        </section>
        <Footer />
      </section>
    </>
  );
}
