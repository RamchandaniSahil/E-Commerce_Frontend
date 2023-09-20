import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { getAllProductsById } from "../Helper/Product";

// export async function loader() {
//   const products = await getAllProductsById(id);
//   return { products };
// }

export default function Details({ id, category }) {
  const { products } = useLoaderData();
  console.log("CATEGORY = ", category);

  // console.log("DETAIL ID =", id);
  // const products = getAllProductsById(id);
  // console.log(products);

  // console.log(loader);
  // const { products } = loader;
  // console.log("PRODUCTS = ", products);
  // console.log("ID", id);
  // console.log("LOADER = ", loader);
  // async function loader() {
  //   const products = await getAllProductsById(id);
  //   console.log(products);
  //   return { products };
  // }
  // const { products } = loader();
  // console.log("products = ", products);
  return (
    <>
      {products &&
        products.map((result, index) => {
          if (result._id === id) {
            return (
              <div key={index} className="mx-40 my-16 p-16 bg-neutral-100">
                <div className="flex ">
                  {result.photos.map((image, index) => (
                    <div key={index} className="w-[50%] pr-10">
                      <img
                        src={image.secure_url}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                  {category &&
                    category.map((categoryResult, index) => {
                      if (categoryResult._id === result.collectionId) {
                        return (
                          <div key={index} className="w-[50%]">
                            <p className="text-gray-500 mb-4">
                              <Link to={`/`}>Home</Link> /{" "}
                              <Link to={`shop`}>{categoryResult.name}</Link> /{" "}
                              {result.name}
                            </p>
                            <p className="mb-4">{categoryResult.name}</p>
                            <p className="text-3xl font-bold text-violet-400 mb-4">
                              {result.name}
                            </p>
                            <p className="font-medium text-lg">
                              &#8377; {result.price}
                            </p>
                            <p>Description - {result.description}</p>
                            <form action="#" className="my-4">
                              <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                defaultValue={1}
                                className="border-2 border-black mr-2 py-2 px-1 w-[10%] text-center"
                              />
                              <Link
                                to={`cart`}
                                className="cursor-pointer my-4 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 w-[50%]"
                              >
                                ADD TO CART
                              </Link>
                            </form>
                          </div>
                        );
                      }
                    })}
                </div>
                <div className="mt-10 border-t-2 border-t-slate-400">
                  <p className="font-medium text-lg text-violet-700 mb-8">
                    Description
                  </p>
                  <p>{result.description}</p>
                </div>
                {/* <div className="my-16">
                  <p className="text-5xl font-bold text-violet-400 mb-14">
                    Related products
                  </p>
                  <div className="flex flex-wrap gap-12">
                    <div className="shadow-lg shadow-violet-400 rounded-xl ">
                      <Link to={`shop/productId`}>
                        <div className="cursor-pointer">
                          <img
                            src={image1}
                            alt=""
                            className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                          />
                        </div>
                      </Link>
                      <div>
                        <p className="text-lg text-gray-500 px-6">category</p>
                        <Link to={`#`}>
                          <p className="text-2xl font-semibold px-3 cursor-pointer">
                            product Name
                          </p>
                        </Link>
                        <p className="text-end px-7 py-4">price</p>
                      </div>
                    </div>
                    <div className="shadow-lg shadow-violet-400 rounded-xl ">
                      <Link to={`shop/productId`}>
                        <div className="cursor-pointer">
                          <img
                            src={image1}
                            alt=""
                            className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                          />
                        </div>
                      </Link>
                      <div>
                        <p className="text-lg text-gray-500 px-6">category</p>
                        <Link to={`#`}>
                          <p className="text-2xl font-semibold px-3 cursor-pointer">
                            product Name
                          </p>
                        </Link>
                        <p className="text-end px-7 py-4">price</p>
                      </div>
                    </div>
                    <div className="shadow-lg shadow-violet-400 rounded-xl ">
                      <Link to={`shop/productId`}>
                        <div className="cursor-pointer">
                          <img
                            src={image1}
                            alt=""
                            className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                          />
                        </div>
                      </Link>
                      <div>
                        <p className="text-lg text-gray-500 px-6">category</p>
                        <Link to={`#`}>
                          <p className="text-2xl font-semibold px-3 cursor-pointer">
                            product Name
                          </p>
                        </Link>
                        <p className="text-end px-7 py-4">price</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            );
          }
        })}
    </>
  );
}
