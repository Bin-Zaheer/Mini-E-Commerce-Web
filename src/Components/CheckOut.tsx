import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { GiFastArrow } from "react-icons/gi";
import { LuShip } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function CheckOut() {
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!disable) {
      navigate("/Confirm");
      localStorage.removeItem("cartData");
    }
  };

  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  let total = cartData.reduce((total, item) => total + item.price, 0);

  function submit(e) {
    e.preventDefault();
    const hasValues =
      e.target.form.name.value.trim() &&
      e.target.form.address.value.trim() &&
      e.target.form.city.value.trim() &&
      e.target.form.pincode.value.trim();

    setDisable(!hasValues);
  }

  return (
    <div className="w-[100%] h-[100vh] flex flex-col 2xl:flex justify-center gap-10 mt-10">
      <h1 className="text-white font-bold text-2xl text-center">
        Shopping Cart
      </h1>

      <div className=" w-[100%] gap-10 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-10">
        {cartData.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <div className="">
            <div className="bg-gray-800 p-6 m-2 rounded-lg gap-10 items-center justify-between">
              <div className="  gap-10 ">
                <div className="border-b-2 border-orange-500 p-2 rounded-lg mb-2 w-[100%]">
                  <h1 className="text-orange-500 font-bold flex items-center gap-4">
                    <LuShip />
                    Shipping Information
                  </h1>
                </div>
                <div className="gap-10  flex-col 2xl:flex-row items-center justify-center">
                  <form action="" onChange={submit}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      className="w-[100%] p-2 rounded-lg mb-2 bg-gray-600 text-white placeholder:text-gray-400 mt-5"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      className="w-[100%] p-2 rounded-lg mb-2 bg-gray-600 text-white placeholder:text-gray-400  mt-5"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="w-[100%] p-2 rounded-lg mb-2 bg-gray-600 text-white placeholder:text-gray-400 mt-5"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PinCode"
                      className="w-[100%] p-2 rounded-lg mb-2 bg-gray-600 text-white placeholder:text-gray-400 mt-5"
                    />
                  </form>
                </div>
                <div className="w-[100%] gap-10 flex justify-center 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-10 mt-5  ">
                  {" "}
                  <button
                    disabled={disable}
                    onClick={handlePayment}
                    className={`${
                      disable
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-orange-700 cursor-pointer"
                    } pt-2 pb-2 pr-20 pl-10 text-white rounded-2xl font-bold w-[70%]`}
                  >
                    Pay And Confirm Order (${total.toFixed(2)})
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="p-10 shadow-lg shadow-orange-500 border-orange-500 rounded-2xl bg-gray-800 flex flex-col gap-5 ">
          <h1 className="text-white font-bold flex items-center text-2xl gap-4 border-b-2 border-orange-500 p-2 rounded-lg mb-2">
            <FaBoxOpen className="text-orange-500" />
            Summary
          </h1>
          {cartData.length === 0 ? (
            <p className="text-white">Your cart is empty.</p>
          ) : (
            cartData.map((item, index) => (
              <div className="" key={index}>
                <p className="flex justify-between">
                  <span className="text-gray-400">{item.title}</span>
                  <span className="font-bold text-orange-500">
                    ${item.price.toFixed(2)}
                  </span>
                </p>
              </div>
            ))
          )}
          <div className="">
            <p className="flex justify-between">
              <span className="text-gray-400">SubTotal: </span>
              <span className="font-bold text-orange-500">
                ${total.toFixed(2)}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">Shipping Express:</span>
              <span className="font-bold text-orange-200">Free</span>
            </p>
          </div>

          <p className="text-white font-bold text-xl">
            Estimated Total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
