import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='pb-20 pt-6 h-[90vh] flex justify-between items-center px-18 '>
      <Leftcontent/>
      <Rightcontent users = {props.users} />
    </div>
  )
}

export default Page1content
