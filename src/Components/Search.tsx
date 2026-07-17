import React from 'react'
import { CiSearch } from "react-icons/ci";


function Search() {

  
  return (
    <div className='w-[100%] text-center flex justify-center mt-6'>
        <div className=" bg-gray-800 w-[70%] p-4 rounded-xl flex flex items-center justify-center">
<div className="text-2xl text-gray-400 bg-gray-700 w-[70px] h-14 text-center flex justify-center items-center text-4xl rounded-bl-2xl rounded-tl-2xl">

        <CiSearch />
</div>
<input type="search" className='rounded-br-2xl rounded-tr-2xl w-[80%] h-14 bg-gray-700 p-4 text-gray-400 outline-none' placeholder='Search High Performance Electronics by Name & Features'/>
        </div>
    </div>
  )
}

export default Search