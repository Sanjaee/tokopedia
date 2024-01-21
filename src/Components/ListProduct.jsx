import React from "react";
import SliderProduct from "./SliderProduct";
import { Products } from "./Products";

const ListProduct = () => {
  return (
    <div className="h-[2000px] max-w-[1200px] mx-auto">
      <SliderProduct />
      <Products />
    </div>
  );
};

export default ListProduct;
