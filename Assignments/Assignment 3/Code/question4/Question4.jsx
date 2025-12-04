import React, { useState } from 'react'
import "../question1/Question1.css"

const Question4 = () => {
    const[username,setusername]=useState("")
    function updatename(event){
        setusername(event.target.value)
    }
  return (
    <div className='cardmodel'>
        <label htmlFor="username">Username : </label>
        <input type='text' id='username' required onChange={updatename} />
        <p>{username}</p>
    </div>
  )
}

export default Question4
