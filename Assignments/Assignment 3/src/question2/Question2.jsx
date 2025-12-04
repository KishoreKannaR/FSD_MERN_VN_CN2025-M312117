import React from 'react'
import '../question1/Question1.css'

const Question2 = () => {
  var isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? "Welcome back!": "Please log in"}
      <hr/>
    </div>
  )
}

export default Question2
