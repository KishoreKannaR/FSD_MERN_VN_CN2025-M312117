import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={props.showAlert}>Button</button>   
    </div>
  )
}

export default Child