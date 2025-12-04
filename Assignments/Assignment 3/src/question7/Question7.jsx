import React from 'react'
import Child from './Child';

const Question7 = () => {

  function showAlert(){
    alert("Button clicked!");
  }

  return (
    <div>
      <Child showAlert={showAlert} />
      <hr/>      
    </div>
  )
}

export default Question7
