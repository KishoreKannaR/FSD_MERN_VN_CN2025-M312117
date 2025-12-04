import React from 'react'
import '../question1/Question1.css'

const Profilecard = (props) => {
  return (
    <div className='cardmodel'>
        <div><img src={props.img} alt="couldn't load image" /></div>
        <div>
      <p><strong>Name : </strong>{props.name}</p>
      <p><strong>Role : </strong>{props.role}</p>
      </div>
    </div>
  )
}

export default Profilecard
