import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Product.css";
import { Link } from "react-router-dom";
export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="grid grid-cols-6 gap-9 px-5 py-4 bg-[#FFFFFF]">
      {data.map((item) => (
        <Link to={`/product/${item.id}`}>
          <div
            key={item.id}
            className=" w-[162.656px] h-[282.797px] shadow-xl rounded-lg"
          >
            <div className="flex col">
              <img
                className="w-[146.656px] h-[146.656px] object-cover object-center"
                src={item.image}
                alt=""
              />
            </div>
            <div className="px-3 py-2">
              <p className="title">{item.title}</p>
              <p>$ {item.price}</p>
              <div className="flex ">
                <p>⭐{item.rating.rate}</p>

                <p className="ml-2">
                  {"|"} {item.rating.count}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
