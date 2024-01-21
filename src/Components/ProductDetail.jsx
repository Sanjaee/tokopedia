import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return null;
  }
  const discountedPrice = product.price * 0.85;
  return (
    <section className="relative">
      <Navbar />
      <div className="flex  mt-[120px]">
        <div className="w-[240px] h-[240px] object-cover object-center bg-gray-400 mx-7 my-7 sticky">
          <img src={product.image} alt="" />
        </div>
        <div className="w-[360px] h-[152px] px-8 py-9 mx-4 my-4">
          <p className="font-bold text-xl">{product.title}</p>
          <div className="flex">
            <p>Terjual {product.rating.count}+</p>{" "}
            <p>⭐{product.rating.rate}</p>
          </div>
          <p className="font-bold text-4xl mt-4">
            ${discountedPrice.toFixed(2)}
          </p>

          <p>
            <span className="text-red-500 bg-pink-200 mr-2 px-1 py-1 rounded-md">
              15%
            </span>
            <span className="line-through ">${product.price}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
