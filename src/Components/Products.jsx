import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Product.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://backend-toko-three.vercel.app/items") // Update the endpoint to fetch items
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-6 gap-9 px-5 py-4 bg-[#FFFFFF]">
      {data.map((item) => (
        <Link key={item._id} to={`/items/${item._id}`}>
          <div className="w-[162.656px] h-[252.797px] shadow-xl rounded-lg">
            <div className="flex col">
              <img
                className="w-[146.656px] h-[146.656px] object-cover object-center"
                src={item.thumbnil}
                alt=""
              />
            </div>
            <div className="px-3 py-2">
              <p className="title">{item.nama_product}</p>
              <p>{item.harga}</p>
              <div className="flex">
                <p>⭐5.0| {item.rate} </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
