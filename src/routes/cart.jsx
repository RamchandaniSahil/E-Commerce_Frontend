import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddToCart from "../components/AddToCart";

export default function Cart() {
  return (
    <>
      <section className="h-screen ">
        <section className=" bg-gradient-to-t from-white to-violet-700">
          <Navbar />
        </section>
        <section className="">
          <AddToCart />
        </section>
        <Footer />
      </section>
    </>
  );
}
