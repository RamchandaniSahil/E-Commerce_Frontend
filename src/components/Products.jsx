import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { getCollection } from "../Helper/Collection";
// import { Params } from "react-router-dom";

// const { id } = useParams();

export default function Products({ category, setCategory }) {
  const { products } = useLoaderData();
  console.log("CATEGORY ", category);
  console.log("SETCATEGORY ", setCategory);
  // const { category } = useLoaderData();
  // const [category, setCategory] = useState(null);

  // const data = async () => {
  //   const category = await getAllCategory();
  //   setCategory(category);
  // };

  // const category = getAllCategory();

  // const data = useEffect(() => {
  //   console.log(getAllCategory());
  //   getAllCategory();
  // }, ["shop"]);
  // console.log("category", category);
  // let id;
  // let collection;
  // const getCollectionDetails = async () => {
  // const collectionName = products.map(async (response, index) => {
  //   id = response.collectionId;
  //   collection = await getCollection(id);
  //   // .then((result) =>
  //   //   console.log("DATA = ", result.data)
  //   // );
  //   // console.log("collection = ", collection);
  //   return collection;
  // });
  // return collection;
  // };
  // const collectionName = getCollectionDetails();
  // console.log("collectionName = ", collectionName);
  // .then
  // // console.log("COLLECTION = ", this.collectionName)
  // ();

  // console.log("PRODUCTS =", products);
  // console.log("ID = ", id);

  return (
    <>
      <div className="flex gap-20 m-20">
        <div className="w-[25%]">
          <div className="bg-neutral-100 mb-16 p-8 font-semibold ">
            <form action="#" className="flex flex-col">
              <label className="mb-2 text-lg">Search</label>
              <div>
                <input
                  type="text"
                  placeholder="Search Products..."
                  id="productname"
                  name="productname"
                  className="border-2 border-black mr-2 py-2 px-1 "
                />
                <input
                  type="submit"
                  value="&#62;"
                  className="bg-violet-400 text-white p-2 h-10 w-10 hover:bg-indigo-400 hover:text-gray-700"
                />
              </div>
            </form>
          </div>
          <div className="bg-neutral-100 mb-16 p-8">
            <h1 className="font-bold text-xl my-5">Filter By Categorys</h1>
            <div className="flex flex-col gap-3">
              {category &&
                category.map((result, index) => {
                  // const collecrtion = getCollection(result.collectionId);
                  // console.log(collecrtion);

                  return (
                    <Link
                      to={`#`}
                      className="text-violet-700 hover:text-indigo-400"
                      key={index}
                    >
                      {result.name} <strong className="text-black">(11)</strong>
                    </Link>
                  );
                })}
              {/* <Link to={`#`} className="text-violet-700 hover:text-indigo-400">
                Category2 <strong className="text-black">(12)</strong>
              </Link>
              <Link to={`#`} className="text-violet-700 hover:text-indigo-400">
                Category3 <strong className="text-black">(13)</strong>
              </Link>
              <Link to={`#`} className="text-violet-700 hover:text-indigo-400">
                Category4 <strong className="text-black">(14)</strong>
              </Link>
              <Link to={`#`} className="text-violet-700 hover:text-indigo-400">
                Category5 <strong className="text-black">(15)</strong>
              </Link> */}
            </div>
          </div>
        </div>
        {category &&
          category.map((categoryResult, index) => {
            return (
              <div key={index} className="w-[75%] bg-neutral-100 p-14">
                <div>
                  <p className="text-gray-500 mb-7">
                    <Link to={`/`}>Home</Link> / {categoryResult.name}
                  </p>
                  <p className="text-5xl font-bold text-violet-400 mb-14">
                    {categoryResult.name}
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex justify-between my-4">
                      <p>Showing all {products.length} results</p>
                      <select
                        name="sort"
                        id="sort"
                        className="bg-transparent px-1 py-3"
                      >
                        <option value="menu">Default Sorting</option>
                        <option value="popularity">Sort by Popularity</option>
                        <option value="date">Sort by Latest</option>
                        <option value="price">
                          Sort by Price: Low to High
                        </option>
                        <option value="price_desc">
                          Sort by Price: High to Low
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-wrap gap-12">
                      {products &&
                        products.map((result, index) => (
                          <div
                            className="shadow-lg shadow-violet-400 rounded-xl "
                            key={index}
                          >
                            {result.photos.map((image, index) => (
                              <Link to={`/shop/${result._id}`} key={index}>
                                <div className="cursor-pointer">
                                  <img
                                    src={image.secure_url}
                                    alt=""
                                    className="w-[250px] h-[250px] bg-fuchsia-300 rounded-t-xl"
                                  />
                                </div>
                              </Link>
                            ))}
                            <div>
                              <p className="text-lg text-gray-500 px-6">
                                {categoryResult.name}
                              </p>
                              <Link to={`/product`}>
                                <p className="text-2xl font-semibold px-3 cursor-pointer">
                                  {result.name}
                                </p>
                              </Link>
                              <p className="text-end px-7 py-4">
                                &#8377; {result.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      {/* <div className="shadow-lg shadow-violet-400 rounded-xl ">
                  <Link to={`#`}>
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
                  <Link to={`#`}>
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
                  <Link to={`#`}>
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
                  <Link to={`#`}>
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
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
