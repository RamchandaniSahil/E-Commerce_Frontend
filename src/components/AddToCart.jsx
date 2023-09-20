import React from "react";
import image1 from "../images/img-1.png";
import { Link } from "react-router-dom";

export default function AddToCart() {
  return (
    <>
      <div className="mx-40 my-16 p-16 bg-neutral-100">
        <h1>Cart</h1>
        <div>
          <table>
            <tbody className="text-center">
              <tr className=" border-2 border-gray-600">
                <th></th>
                <th></th>
                <th className="p-3">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
              </tr>
              <tr className=" border-2 border-gray-600">
                <td className="w-[5%] cursor-pointer">
                  <Link to={`#`}>&#215;</Link>
                </td>
                <td className="w-[10%] h-[10%]">
                  <img src={image1} alt="" />
                </td>
                <td className="w-[20%]">Product Name</td>
                <td className="w-[10%]">Price</td>
                <td className="w-[10%]">
                  <form action="#" className="">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      defaultValue={1}
                      className="border-2 border-black mr-2 py-2 px-1 w-[40%] text-center"
                    />
                  </form>
                </td>
                <td className="w-[10%]">SubTotal</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full border-2 border-gray-600 ">
            <tbody>
              <tr>
                <td className="w-[50%] p-4">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      id="productname"
                      name="productname"
                      className="border-2 border-black mr-2 py-2 px-1 "
                    />
                    <Link
                      to={`#`}
                      className="cursor-pointer my-4 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 w-[50%]"
                    >
                      APPLY COUPON
                    </Link>
                  </form>
                </td>
                <td className="text-end w-[50%]">
                  <Link
                    to={`#`}
                    className="cursor-pointer my-4 mx-4 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 w-[50%]"
                  >
                    UPDATE CART
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="  w-[50%] mt-10">
            <table>
              <tbody className="text-center">
                <tr className=" border-2 border-gray-600">
                  <th>Cart totals</th>
                  <th></th>
                </tr>
                <tr className=" border-2 border-gray-600">
                  <td className="w-[5%]">Subtotal</td>
                  <td className="w-[10%] h-[10%]">Price</td>
                </tr>
                <tr className=" border-2 border-gray-600">
                  <td className="w-[5%]">Subtotal</td>
                  <td className="w-[10%] h-[10%]">Price</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full border-2 border-gray-600 text-center">
              <tbody>
                <tr>
                  <td className=" p-4">
                    <Link
                      to={`#`}
                      className="cursor-pointer my-4 bg-violet-700 px-12 py-3 font-bold text-white text-lg hover:bg-violet-400 hover:text-gray-700 w-full "
                    >
                      PROCEED TO CHECKOUT
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
