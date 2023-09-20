import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { loader as rootLoader } from "./routes/home";
// import { Loader as productDetailsLoader } from "./routes/productDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import AboutUs from "./routes/aboutUs";
import ContactUs from "./routes/ContactUs";
import Shop from "./routes/shop";
import ProductDetails from "./routes/productDetails";
import Cart from "./routes/cart";
import Login from "./routes/login";
import CreateAccount from "./routes/createAccount";
import Layout from "./Layout";
// import Products from "./components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
    loader: rootLoader,
  },
  // {
  //   path: "about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "contactus",
  //   element: <ContactUs />,
  // },
  // {
  //   path: "shop",
  //   element: <Shop />,
  //   loader: rootLoader,
  // },
  // {
  //   path: "shop/:id",
  //   element: <ProductDetails />,
  //   loader: rootLoader,
  // },
  // {
  //   path: "cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  // {
  //   path: "signup",
  //   element: <CreateAccount />,
  // },
  // {
  //   path: "dashboard",
  //   element: "",
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
