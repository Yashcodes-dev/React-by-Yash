import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='shrink-0 h-full w-60 relative overflow-hidden rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
      <Rightcardcontent id={props.id}   />
      
    </div>
  )
}

export default Rightcard
