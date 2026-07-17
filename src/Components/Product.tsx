import { useContext, useState } from "react";
import { MdOutlineCategory } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { useFetch } from "../Hooks/useFetch";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Cart } from "../Context/Cart";

function Product() {
  const {setisOpen } = useContext(Cart);

  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category?: string;
  }



  const [change, setChange] = useState("All");
  const { data, loading, error } = useFetch(
    change === "All"
      ? "https://dummyjson.com/products"
      : `https://dummyjson.com/products/category/${change}`,
  ) 

  function AddCart(id:number) {
    let filteredData = (data as Product[]).filter((item) => item.id === id);
    let cartData = JSON.parse(localStorage.getItem("cartData") as string ) || [];

    cartData.push({ ...filteredData[0], qty: 1 });
    localStorage.setItem("cartData", JSON.stringify(cartData));
    setisOpen(true);
  }

  return (
    <>
      <Search />
      <div className="w-[100%]  h-[100vh] flex-col items-center justify-items-center  mt-5 ">
        <div className="flex items-center justify-center w-[100%] md:w-[70%] 2xl:justify-items-start  text-white gap-2 2xl:gap-5 border-b-1 border-white p-4">
          <MdOutlineCategory className="text-orange-500 text-sm 2xl:text-2xl" />
          <p
            onClick={() => {
              setChange("All");
            }}
            className={`hover:scale-110 transition-all duration-300 2xl:text-sm ease-in-out cursor-pointer pt-2 pb-2 2xl:pt-3 2xl:pb-3  text-white rounded-2xl pl-2 pr-2 text-xs  2xl:pl-5 2xl:pr-5 items-center text-center ${change === "All" ? "bg-orange-500" : "bg-gray-700"}`}
          >
            All
          </p>
          <p
            onClick={() => {
              setChange("beauty");
            }}
            className={`hover:scale-110 transition-all 2xl:text-sm duration-300 ease-in-out cursor-pointer pt-2 pb-2 2xl:pt-3 2xl:pb-3  bg-gray-700 text-white rounded-2xl text-xs 2xl:pl-5 2xl:pr-5 pl-2 pr-2 items-center text-center ${change === "beauty" ? "bg-orange-500" : "bg-gray-700"}`}
          >
            Cosmetics
          </p>
          <p
            onClick={() => {
              setChange("Furniture");
            }}
            className={`hover:scale-110 transition-all 2xl:text-sm duration-300 ease-in-out cursor-pointer pt-2 pb-2 2xl:pt-3 2xl:pb-3   bg-gray-700 text-white rounded-2xl text-xs 2xl:pl-5 2xl:pr-5 pl-2 pr-2 items-center text-center ${change === "Furniture" ? "bg-orange-500" : "bg-gray-700"}`}
          >
            Furniture
          </p>
          <p
            onClick={() => {
              setChange("Laptops");
            }}
            className={`hover:scale-110 transition-all 2xl:text-sm duration-300 ease-in-out cursor-pointer pt-2 pb-2 2xl:pt-3 2xl:pb-3  bg-gray-700 text-white rounded-2xl text-xs 2xl:pl-5 2xl:pr-5   pl-2 pr-2 items-center text-center ${change === "Laptops" ? "bg-orange-500" : "bg-gray-700"}`}
          >
            chairs
          </p>
          <p
            onClick={() => {
              setChange("Groceries");
            }}
            className={`hover:scale-110 transition-all 2xl:text-sm duration-300 ease-in-out cursor-pointer pt-2 pb-2 2xl:pt-3 2xl:pb-3  bg-gray-700 text-white rounded-2xl text-xs 2xl:pl-5 2xl:pr-5 pl-2 pr-2 items-center text-center ${change === "Groceries" ? "bg-orange-500" : "bg-gray-700"}`}
          >
            Grocery
          </p>
        </div>

        <div className=" flex justify-start w-[70%] mt-4">
          <p className="text-xl text-white font-bold">
            Featured Gear (16 Items)
          </p>
        </div>
        <div className="w-[100%] lg:w-[75%] mt-4 flex flex-wrap gap-5 justify-center items-center">
          {loading ? (
            <span className="loader mt-10"></span>
          ) : error ? (
            <p className="text-white">Error fetching products.</p>
          ) : data && data.length > 0 ? (
            (data as Product[]).map((product) => (
              <div
                key={product.id}
                className="w-[45%] md:w-[30%] sm:w-[30%] 2xl:w-[23%] bg-gray-800 rounded-xl flex-col items-center justify-items-center gap-2 p-2 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="w-[100%] flex-col items-center justify-items-center gap-2"
                >
                  <div className="bg-gray-300 border-2  rounded-xl w-full max-h-[250px] relative ">
                    <img
                      className=" "
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <p className="pt-2 pb-2 bg-orange-500 text-white rounded-br-2xl rounded-tr-2xl w-[50%] items-center text-center absolute bottom-0 left-0 text-xs">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className=" p-3">
                    <p className="text-white text-sm font-bold mt-1">
                      {product.title}
                    </p>
                    <p className="text-white text-xs mt-1">
                      {product.description}
                    </p>
                    <p className="pt-1 pb-2 bg-gray-700 text-white rounded-2xl text-xs  w-[50%] text-center mt-2">
                      {product.category}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => AddCart(product.id)}
                  className=" cursor-pointer w-[100%] flex justify-center gap-4 pt-2 pb-2 bg-orange-500 text-white rounded-2xl pl-5 pr-5 items-center text-center text-xs"
                >
                  <FaOpencart className="text-2xl text-white" />
                  ADD TO CART
                </button>
              </div>
            ))
          ) : (
            <p className="text-white">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
