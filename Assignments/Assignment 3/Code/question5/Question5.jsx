import React,{useState} from 'react'
import "../question1/Question1.css"

const Question5 = () => {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")

    function display(event){
        event.preventDefault();
        return(
            <>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            </>
        )
    }

  return (
    <div className='cardmodel'>
      <form>
        <label htmlFor='name'>Name : </label>
        <input type='text' id='name'  onChange={(e) => setname(e.target.value)}/><br/><br/>
        <label htmlFor='email'>Email : </label>
        <input type='email' id='email'  onChange={(e) => setemail(e.target.value)} /><br/><br/>
        <button onClick={display}>Submit</button>
        </form>
    </div>
  )
}

export default Question5
