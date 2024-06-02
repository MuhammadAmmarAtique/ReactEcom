import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import Loader from "./Loader";

const ProductList = () => {
  const { isLoading, filterProducts, grid_view } = useFilterContext();

  if (isLoading || !filterProducts.length) {
    return <Loader />;
  }

  if (grid_view === true) {
    return <GridView products={filterProducts} />;
  }

  if (grid_view === false) {
    return <ListView products={filterProducts} />;
  }
};

export default ProductList;
