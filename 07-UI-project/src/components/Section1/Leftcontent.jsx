import React from 'react'
import { Star } from 'lucide-react';
const Leftcontent = () => {
  return (
    <div className='h-full w-2/5 px-10 py-9 overflow-hidden'>
     
     <div className='flex justify-center flex-col px-3 py-4 text-[20px]'>
        <div className='flex '><Star className='mt-1 size-6'/>
        <h4 className='mb-1 ml-2 '>4.5 Rating</h4></div>
        <p className='ml-8 text-[12px] '>By Patrick Jane</p>
     </div>


     <div className=' px-3 py-4 '>
        <h3 className='text-6xl mb-5'>Find out the Best stay.</h3>
        <p className=''> Lorem ipsum dolor, sit amet <span className='font-bold'>consectetur</span> adipisicing elit. Nobis natus repellat tempore eaque, voluptas similique!</p>
     </div>


     <div className='px-3 py-4 flex gap-4'>
        <button className='bg-gray-300 px-4 py-2  w-20 rounded-full cursor-pointer shadow-lg'>Login</button>
        <button className='bg-black text-white px-6 py-2 rounded-full cursor-pointer shadow-lg'>Get Started</button>
     </div>


     <div className='px-3 py-4 ' >
        <p className='text-[12px] text-gray-400 mb-3'>Trusted by</p>

        <div className='flex justify-between  h-40 gap-2'>
            <div className='h-full w-30  '>
                <img src={<emirates-group/>} alt="" />
                
            </div>
            <div className='h-full w-30 '></div>
            <div className='h-full w-30 '></div>
            <div className='h-full w-30 '></div>
        </div>
     </div>


    </div>
  )
}

export default Leftcontent
