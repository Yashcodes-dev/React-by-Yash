import React from 'react'

const App = () => {

 function inputchanging(val){
  console.log(val)
 }


  
  return (
    <div>
      <input onChange={function(elem){
        inputchanging(elem.target.value)
      }}
      type="text" placeholder='Enter name' />
    </div>
  )
}

export default App
