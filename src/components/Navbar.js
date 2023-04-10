import React from 'react'
import Mode from "../images/icon-sun.svg"

const Navbar = () => {
  return (
    <div className="h-10 w-full flex justify-between items-center mb-8">
      <h1 className="font-bold uppercase tracking-widest text-3xl text-white">Todo</h1>
      <div className='cursor-pointer'>
        <img className='w-5 h-5' src={Mode} alt="sun" />
      </div>
    </div>
  );
}

export default Navbar