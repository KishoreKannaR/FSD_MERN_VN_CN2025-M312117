import React, { useState } from 'react';
import "../question1/Question1.css";

const Question5 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function display(event) {
    event.preventDefault();
    setSubmittedData({ name, email });
  }

  return (
    <>
      <div className='cardmodel'>
        <form onSubmit={display}>
          <label htmlFor='name'>Name: </label>
          <input 
            type='text' 
            id='name'  
            onChange={(e) => setName(e.target.value)}
          /><br/><br/>

          <label htmlFor='email'>Email: </label>
          <input 
            type='email' 
            id='email'  
            onChange={(e) => setEmail(e.target.value)}
          /><br/><br/>

          <button type="submit">Submit</button>
        </form>
      </div>

      {submittedData && (
        <div>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
       <hr/>
    </>
  );
};

export default Question5;
