import { useContext } from 'react'
import { Cart } from '../Context/Cart'
import { Link } from 'react-router-dom';

function SideCart() {   
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    qty: number;
    images: string;
  }

const {isOpen, setisOpen} = useContext(Cart)

let cartData = JSON.parse(localStorage.getItem("cartData") as string) || [];

let total = cartData.reduce((total:number, item:Product) => total + item.price, 0);

console.log(cartData.length);


  return (
    <div>
      <div className={`fixed inset-0 z-50 transition-all ${isOpen ? 'visible' : 'invisible'}`}>
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={()=>{setisOpen(false)}} />

      <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-4 border-b flex justify-between items-center bg-gray-50/50">
          <h2 className="font-bold text-lg text-gray-900">Shopping Cart</h2>
          <button onClick={()=>{setisOpen(false)}} className="text-gray-400 hover:text-gray-900 text-2xl font-light p-1 cursor-pointer">×</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">

          {cartData.map((item:Product) => (
          
          <div className="p-3 border border-gray-100 rounded-xl bg-gray-50/50 flex items-center gap-3">
            <img src={item.images[0]} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500">Qty: {item.qty}</span>
                <span className="font-bold text-sm text-indigo-600">${item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="p-4 border-t bg-gray-50 space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal:</span>
            <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900">
            <span>Total Amount:</span>
            <span className="text-indigo-600">${total.toFixed(2)}</span>
          </div>
         <Link to='/Cart'> <button onClick={()=>{setisOpen(false)}} className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 rounded-xl transition-all shadow-md mt-2">
            Proceed to Checkout
          </button></Link>
        </div>

      </div>
    </div>
    </div>
  )
}

export default SideCart