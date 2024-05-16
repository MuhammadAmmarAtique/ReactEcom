import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  About,
  Cart,
  Contact,
  ErrorPage,
  Home,
  Products,
  SingleProduct,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />, 
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/singleproduct/:id",    //This page will only load when we provide id in url
    element: <SingleProduct />,
  }, 
  {
    path: "*",                    //Except above all pages if go with another path, Then this will render
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
