import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center gap-5">
      <div className=" p-5 bg-gray-800 rounded-lg flex flex-col items-center justify-center gap-5">
        <GiConfirmed className="text-9xl text-green-600" />

        <h1 className="text-white font-bold text-2xl">Order Confirmed!</h1>
        <p className="text-gray-400 w-[60%] text-center">
          {" "}
          please check your email for the order confirmation and details. Thank
          you for shopping with us!
        </p>

        <div className="p-3 bg-green-400/30 border-2 border-green-700 text-green-900 w-[50%] rounded-lg flex flex-col items-center justify-center gap-2">
          <p className="text-white">Suman kumar</p>
          <p className="text-gray-400">
            shivan Park, ramayan nakar, koni bilaspur, 448336
          </p>
        </div>
        <Link to="/">
          {" "}
          <button className="bg-orange-700 pt-2 pb-2 pr-20 pl-20  cursor-pointer text-white rounded-2xl font-bold w-[100%]">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Confirm;
