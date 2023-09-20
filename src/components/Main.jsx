import React from "react";
import image1 from "../images/img-1.png";
import image2 from "../images/img-2.png";
import image3 from "../images/img-3.png";
import image4 from "../images/img-5.png";
import { Link, useLoaderData } from "react-router-dom";

export default function Main() {
  // const { products } = useLoaderData();
  // console.log(products);
  return (
    <>
      <div>PRODUCTS</div>
      {/* <div className="flex flex-col gap-10 items-center h-full pt-20">
        <div className="text-5xl font-bold text-violet-400 ">
          <h1>NEW ARRIVALES</h1>
        </div>
        <div className="flex flex-wrap items-center gap-6 py-10">
          {products &&
            products.map((result, index) => {
              if (index < 4) {
                return (
                  <div
                    key={index}
                    className="shadow-lg shadow-violet-400 rounded-xl "
                  >
                    {result.photos.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image.secure_url}
                          alt=""
                          className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                        />
                      </div>
                    ))}
                    <div>
                      <p className="text-lg text-gray-500 px-6">category</p>
                      <p className="text-2xl font-semibold px-3">
                        {result.name}
                      </p>
                      <p className="text-end px-7 py-4">{result.price}</p>
                    </div>
                  </div>
                );
              }
              return (
                <div>
                  <div className="shadow-lg shadow-violet-400 rounded-xl ">
                    <div>
                      <img
                        src={image1}
                        alt=""
                        className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-gray-500 px-6">category</p>
                      <p className="text-2xl font-semibold px-3">
                        product Name
                      </p>
                      <p className="text-end px-7 py-4">price</p>
                    </div>
                  </div>
                  <div className="shadow-lg shadow-violet-400 rounded-xl ">
                    <div>
                      <img
                        src={image2}
                        alt=""
                        className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-gray-500 px-6">category</p>
                      <p className="text-2xl font-semibold px-3">
                        product Name
                      </p>
                      <p className="text-end px-7 py-4">price</p>
                    </div>
                  </div>
                  <div className="shadow-lg shadow-violet-400 rounded-xl ">
                    <div>
                      <img
                        src={image3}
                        alt=""
                        className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-gray-500 px-6">category</p>
                      <p className="text-2xl font-semibold px-3">
                        product Name
                      </p>
                      <p className="text-end px-7 py-4">price</p>
                    </div>
                  </div>
                  <div className="shadow-lg shadow-violet-400 rounded-xl ">
                    <div>
                      <img
                        src={image4}
                        alt=""
                        className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-gray-500 px-6">category</p>
                      <p className="text-2xl font-semibold px-3">
                        product Name
                      </p>
                      <p className="text-end px-7 py-4">price</p>
                    </div>
                  </div>
                </div>
              );
            })} */}
      {/* <div className="shadow-lg shadow-violet-400 rounded-xl ">
            <div>
              <img
                src={image2}
                alt=""
                className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-500 px-6">category</p>
              <p className="text-2xl font-semibold px-3">product Name</p>
              <p className="text-end px-7 py-4">price</p>
            </div>
          </div>
          <div className="shadow-lg shadow-violet-400 rounded-xl ">
            <div>
              <img
                src={image3}
                alt=""
                className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-500 px-6">category</p>
              <p className="text-2xl font-semibold px-3">product Name</p>
              <p className="text-end px-7 py-4">price</p>
            </div>
          </div>
          <div className="shadow-lg shadow-violet-400 rounded-xl ">
            <div>
              <img
                src={image4}
                alt=""
                className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-500 px-6">category</p>
              <p className="text-2xl font-semibold px-3">product Name</p>
              <p className="text-end px-7 py-4">price</p>
            </div>
          </div> */}
      {/* </div>
        <div>
          <Link
            to={`shop`}
            className="bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700"
          >
            VIEW ALL
          </Link>
        </div>
      </div> */}
    </>
  );
}
