import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
    <Card user='Yash' age={18} img='https://images.unsplash.com/photo-1780835725722-37f850f4bd0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />

    <Card user='Sarthak' age={21} img='https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />

    <Card user='Nemo' age={36} img='https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D' />

    </div>
  
  )
}

export default App
