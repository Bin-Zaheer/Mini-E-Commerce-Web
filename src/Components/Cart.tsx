import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { GiFastArrow } from "react-icons/gi";
import { Link } from "react-router-dom";

function Cart() {

 interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  qty: number,
  images: string;
}  

  const [cartData, setCartData] = useState(() => {
  return JSON.parse(localStorage.getItem("cartData") as string) || [];
});
 const total = cartData.reduce(
  (total:number, item:any) => total + item.price * item.qty,
  0
);

  const increaseQty = (productId:number) => {

    const updatedProducts = cartData.map((product:Product) =>
      product.id === productId ? { ...product, qty: product.qty + 1 } : product,
    );

      setCartData(updatedProducts);

    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

  const decreaseQty = (productId:number) => {

    const updatedProducts = cartData.map((product:Product) =>
      product.id === productId && product.qty > 1 ? { ...product, qty: product.qty - 1 } : product,
    );

      setCartData(updatedProducts);

    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

 

  function handle(id:number) {
    let updatedCartData = cartData.filter((item:Product) => item.id !== id);
     setCartData(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  }



  return (
    <div className="w-[100%]  h-[100vh] flex flex-col 2xl:flex justify-center gap-10 mt-10">
      <h1 className="text-white font-bold text-2xl text-center">
        Shopping Cart
      </h1>

      <div className=" w-[100%] gap-10 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-10">
        {cartData.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <div className="">
            {cartData.map((item:Product, index:number) => (
              <div
                className="bg-gray-800 p-4 m-2 flex gap-10 items-center justify-between"
                key={index}
              >
                <div className=" flex gap-2 items-center justify-center">
                  <div className="bg-gray-200 p-2 rounded-lg mb-2">
                    <img className="size-10" src={item.images} alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-white text-xs 2xl:text-lg ">
                      {item.title}
                    </h2>
                    {/* <p className='text-orange-500'>{i}</p> */}
                    <p className="text-orange-500 text-xs 2xl:text-lg">
                      Price: ${item.price?.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center justify-center gap-6">
                  <div className="gap-4 flex items-center">
                    <button
                      onClick={() => {
                        decreaseQty(item.id);
                      }}
                      className="bg-blue-500 text-white p-3 pt-0.5 pb-0.5 rounded"
                    >
                      -
                    </button>
                    <span className="text-white cursor-pointer">{item.qty}</span>
                    <button
                      onClick={() => {
                        increaseQty(item.id);
                      }}
                      className="cursor-pointer bg-red-500 text-white p-3 pt-0.5 pb-0.5 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <p className="text-white text-xs 2xl:text-lg">
                      Total: ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => {
                        handle(item.id);
                      }}
                      className="bg-red-500 pt-1 pb-1 pr-3 pl-3  text-white rounded-2xl font-bold cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="p-10 shadow-lg shadow-orange-500 border-orange-500 rounded-2xl bg-gray-800 flex flex-col gap-5 ">
          <h1 className="text-white font-bold flex items-center text-2xl">
            <FaDollarSign className="text-orange-500" />
            Order Total
          </h1>
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
          <Link to="/checkout">
            <button className="bg-orange-500 text-white p-3 cursor-pointer rounded-xl flex items-center justify-center gap-2 text-xl font-bold">
              <GiFastArrow />
              Proceed to Securely
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
