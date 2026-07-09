import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import { House } from 'lucide-react';


const App = () => {

  const users =  [
    {
      img:'https://images.unsplash.com/photo-1672586420486-053debf804c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ''
      
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1679502559894-e1d7a506a234?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ''
      
    },
    {
      img:'https://images.unsplash.com/photo-1706200234277-3586cd003ba3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ''
      
    },
    {
      img:'https://images.unsplash.com/photo-1764760764956-fcb78be107a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ''
      
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1736194029299-d30668ff6d94?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ''
      
    },

  ]
  return (
    <div className=''>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App
