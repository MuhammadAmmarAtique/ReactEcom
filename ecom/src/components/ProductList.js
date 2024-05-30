import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filterProducts} />;
  }

  if (grid_view === false) {
    return <ListView products={filterProducts} />;
  }
};

export default ProductList;