import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='text-xl bg-white h-8 w-8 rounded-full flex justify-center items-center'>{props.id+1}</h2>

        <div >
            <p className='text-lg leading-relaxed text-white mb-5 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit quo, maiores delectus nulla vel!</p>
        <div>
            <button className= 'bg-gray-300 border-black text-black font-semibold py-1 px-4 rounded-2xl mt-3 hover:bg-black hover:text-white transition duration-300'>Book now </button>
        </div>
        </div>
      </div>

  )
}



export default Rightcardcontent
