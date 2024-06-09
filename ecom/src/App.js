import React from "react";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { ProductContextProvider } from "./context/ProductsContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";

import {
  About,
  Cart,
  Contact,
  ErrorPage,
  Home,
  Products,
  SingleProduct,
} from "./pages/index";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

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
          path: "/singleproduct/:id", //This page will only load when we provide id in url
          element: <SingleProduct />,
        },
        {
          path: "*", //Except above all pages if user write another path, Then this page will render.
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <ProductContextProvider> {/* #1 All Products are inside here */}
      <FilterContextProvider> {/*#2 Then We get all Products from productContext to filterContext and filter them */}
        <CartContextProvider>  {/*#3 Then comes Add to Cart */}

          <ThemeProvider theme={theme}>
            <GlobalStyle /> {/* Wrapping my application with the GlobalStyle.*/}
            <RouterProvider router={router} />
          </ThemeProvider>
          
        </CartContextProvider>
      </FilterContextProvider>
     </ProductContextProvider> 
  );
}

export default App;
