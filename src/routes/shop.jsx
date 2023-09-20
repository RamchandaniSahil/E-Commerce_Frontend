import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { getAllProducts } from "../Helper/Product";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function loader() {
  const products = await getAllProducts();
  return { products };
}

export default function Shop() {
  const [category, setCategory] = useState(null);

  async function getAllCategory() {
    const category = await axios.get(`${BASE_URL}/api/collection`);
    // .then((response) => {
    //   console.log("RESPONSE ", response.data.collections);
    //   return response.data.collections;
    // });
    console.log("CATEGIRY = ", category.data.collections);

    setCategory(category.data.collections);
  }

  useEffect(() => {
    getAllCategory();
  }, ["shop"]);
  return (
    <>
      <section className="h-screen ">
        <section className=" bg-gradient-to-t from-white to-violet-700">
          <Navbar />
        </section>
        <section className="">
          <Products category={category} setCategory={setCategory} />
        </section>
        <Footer />
      </section>
    </>
  );
}
