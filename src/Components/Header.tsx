import React, { useContext, useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { Cart } from '../Context/Cart';
import { Link } from 'react-router-dom';


function Header() {
  
  const {isOpen, setisOpen} = useContext(Cart)
  const [numb, setNumb] = useState()
  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    setNumb(cartData.length);
  }, [isOpen]);


  return (
    <header className="bg-[oklch(20.353% 0.02214 260.498)] text-white p-4 flex justify-around shadow-white shadow-sm w-00% items-center">
        <div className="">

     <Link to='/'> <h1 className="text-2xl font-bold flex  items-center"><IoHomeOutline/><span className='ml-2'>WDM</span> <span className="text-orange-500 ml-1">STORE</span></h1></Link >
        </div>
      
      <div className='p-2 border-orange-500  relative rounded-xl border-3 cursor-pointer '><FaOpencart onClick={()=>{setisOpen(true)}} className='text-2xl text-orange-500'/>
      <span className='text-sm text-gray-400 absolute top-[-30%] right-[-30%] bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>{numb}</span>
      </div>
    </header>
  )
}

export default Header