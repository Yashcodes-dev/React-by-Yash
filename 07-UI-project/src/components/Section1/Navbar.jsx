import React from 'react'
import {House} from 'lucide-react'



const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-3 py-3 text-[20px] font-bold  ' >
      <div className='flex flex-1 gap-2 items-center font-bold text-[18px]'>
        <span><House/></span>
        <h4>homely</h4>
      </div>
      
      <div className='flex items-center justify-evenly gap-10 text-[14px] font-bold cursor-pointer bg-gray-100 h-10 w-100 rounded-full px-5 shadow-lg'>
      <button>Home</button>
      <button>Main</button>
      <button>About</button>
      <button>Services</button>
      <button>Rooms</button>
      </div>

      <div className='flex items-center justify-end gap-4 text-[13px] flex-1  '>
        <button className='bg-gray-300 px-4 py-1 rounded-full cursor-pointer shadow-lg'>Log in</button>
        <button className='bg-black text-white px-5 py-2 rounded-full cursor-pointer shadow-lg'>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
