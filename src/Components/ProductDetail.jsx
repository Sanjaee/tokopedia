import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const data = await api.getItemById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  // Calculate discounted price (for example, 15% off)
  const discountPercentage = 15;
  const discountedPrice =
    product.harga - (product.harga * discountPercentage) / 100;

  return (
    <section className="relative">
      <Navbar />
      <div className="flex mt-[120px]">
        <div className="w-[240px] h-[240px] object-cover object-center bg-gray-400 mx-7 my-7 sticky">
          <img src={product.gambar[0]?.gambar_products} alt="" />
        </div>
        <div className="w-[360px] h-[152px] px-8 py-9 mx-4 my-4">
          <p className="font-bold text-xl">{product.nama_product}</p>
          <p className="font-bold text-4xl mt-4">
            {formatRupiah(discountedPrice)}
          </p>
          <p>
            <span className="line-through ">{formatRupiah(product.harga)}</span>
          </p>
          <div className="flex">
            <p>Terjual {product.rate}+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
