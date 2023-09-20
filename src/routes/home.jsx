import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getAllProducts } from "../Helper/Product";
import NavbarUser from "../components/NavbarUser";
import useUserAuth from "../context/auth";
// import image from "../images/img-1.png";
// import Slider from "../components/Slider";

export async function loader() {
  const products = await getAllProducts();
  return { products };
}

export default function Home() {
  const { details, userDetails } = useUserAuth();
  console.log("USERDETAILS = ", userDetails);
  console.log("DETAILS = ", details);

  return (
    <>
      <section className="h-screen bg-gradient-to-t from-white to-violet-700">
        {/* {userDetails ? <NavbarUser user={userDetails.user} /> : <Navbar />} */}
        {/* <Slider /> */}
        <Hero />
      </section>
      <section className="h-screen">
        <Main />
      </section>
      <section className="h-screen bg-gradient-to-b from-white  via-purple-500 to-violet-400">
        <About />
      </section>
      <section className="h-screen">
        <Main />
      </section>
      <section className="h-screen bg-gradient-to-t from-white to-violet-700">
        <Contact />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </>
  );
}

// https://www.free-css.com/free-css-templates/page287/cycle
// https://wpastra.com/templates/cycle-shop-02/
