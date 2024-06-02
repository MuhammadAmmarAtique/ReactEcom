import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";


const ProductList = () => {
  const {isLoading, filterProducts, grid_view } = useFilterContext();

  if (isLoading || !filterProducts.length) {  
    return <div style={{textAlign:"center", marginTop: "10px"}}>...Loading </div>
  }
  

  if (grid_view === true) {
    return <GridView products={filterProducts} />;
  }

  if (grid_view === false) {
    return <ListView products={filterProducts} />;
  }
};

export default ProductList;
