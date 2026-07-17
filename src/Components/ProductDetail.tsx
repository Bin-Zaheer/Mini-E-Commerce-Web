import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import { GiLightningStorm } from "react-icons/gi";
import { Cart } from "../Context/Cart";

function ProductDetail() {
  let { isOpen, setisOpen } = useContext(Cart);
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const da = await response.json();

        console.log(da);
        setData(da);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  function AddCart(id) {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    cartData.push({ ...data, qty: 1 });
    localStorage.setItem("cartData", JSON.stringify(cartData));
    setisOpen(true);
  }

  return (
    <>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Error: {error.message}</div>
      ) : data ? (
        <div
          key={data.id}
          className="2xl:flex sm:flex-col sm:justify-items-center sm:items-center  h-[100vh] sm:w-[100%] gap-3 w-0 md:w-[100%] lg:w-[100%] w-[100%] justify-items-center items-center mt-10 lg:flex-col lg:justify-center lg:items-center md:flex-col 2xl:flex-row 2xl:justify-center 2xl:items-center"
        >
          <div className="2xl:flex 2xl:justify-center sm:w-[100%] 2xl:items-center gap-3 md:w-[50%]  2xl:w-[70%] lg:w-[70%]">
            <div className=" bg-gray-300">
              <img className="" src={data.images[0]} alt={data.name} />
            </div>
            <div className=" ml-10">
              <h1 className="text-2xl font-bold text-white">{data.title}</h1>
              <h1 className="text-xl font-bold text-orange-500 mt-3">
                ${data.price.toFixed(2)}
              </h1>
              <h1 className="text-xl font-bold text-white mt-3 flex items-center gap-4">
                <MdOutlineViewInAr />
                Product Overview
              </h1>
              <p className="text-sm text-gray-500 mt-3">{data.description}</p>
              <div className="mt-5 mb-5 p-5 bg-gray-800 border border-gray-600 rounded-xl flex flex-col gap-3">
                <p className="flex items-center gap-3 text-sl text-white">
                  <GiLightningStorm className="text-orange-500" />
                  High Quality Materials
                </p>
                <p className="flex items-center gap-3 text-sl text-white">
                  <GiLightningStorm className="text-orange-500" />
                  Comprehensive 1Year Manufacture Warranty
                </p>
                <p className="flex items-center gap-3 text-sl text-white   ">
                  <GiLightningStorm className="text-orange-500" />
                  Imidiate Shipping For in Stocks
                </p>
              </div>

              <button
                onClick={() => AddCart(data.id)}
                className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 rounded-xl transition-all shadow-md mt-2"
              >
                Add to Cart
              </button>
              <Link to="/">
                <button className="w-full bg-orange-300 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 rounded-xl transition-all shadow-md mt-2">
                  <FaLongArrowAltLeft className="inline-block ml-2" /> Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500">No Data Found</div>
      )}
    </>
  );
}

export default ProductDetail;
