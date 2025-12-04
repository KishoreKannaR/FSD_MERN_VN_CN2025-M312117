import React, { useState } from 'react';

const Question13 = () => {

  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  
  
  const [newFruit, setNewFruit] = useState("");


  function addFruit(e) {
    e.preventDefault();               
    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit]); 
    setNewFruit("");                  
  }

  return (
    <div>
      <h2>Fruit List</h2>

      
      <form onSubmit={addFruit}>
        <input 
          type="text" 
          placeholder="Enter fruit"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

     
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );
};

export default Question13;
