import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Details from "../components/Details";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../Helper/Product";
import axios from "axios";
// import { getAllProductsById } from "../Helper/Product";
// import { useParams } from "react-router-dom";
// import { getAllProductsById } from "../Helper/Product";
// import { loader } from "./home";

const BASE_URL = "http://localhost:4000";

// async function loader() {
//   const { id } = useParams();
//   const products = await getAllProductsById(id);
//   return { products };
// }

// const loader = () => {
//   const { id } = useParams();
//   const products = getAllProductsById();
// };

export async function loader() {
  const products = await getAllProducts();
  return { products };
}

export default function ProductDetails() {
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

  const { id } = useParams();
  console.log("ID = ", id);
  // async function Loader() {
  //   const products = await getAllProductsById(id);
  //   console.log("PRODUCTS = ", products);
  //   return { products };
  // }
  // Loader();
  // const { id } = useParams();
  // async function loader() {
  //   const product = await getAllProductsById(id);
  //   return { product };
  // }
  // console.log(data);
  // const products = Loader();
  // console.log(products);

  return (
    <>
      <section className="h-screen ">
        <section className=" bg-gradient-to-t from-white to-violet-700">
          <Navbar />
        </section>
        <section className="">
          <Details id={id} category={category} />
        </section>
        <Footer />
      </section>
    </>
  );
}
