import React from 'react'
import bedroom from "../../assets/bedroom.jpg";
import Rightcard from './Rightcard';


const Rightcontent = (props) => {

  return (
    <div id='right' className='h-full p-4 w-2/3 flex flex-nowrap overflow-x-auto gap-6'>
     {props.users.map(function(elem, idx){
      return <Rightcard key = {idx} id = {idx} img = {elem.img}/>
     })}
    </div>
     
  )
}

export default Rightcontent
