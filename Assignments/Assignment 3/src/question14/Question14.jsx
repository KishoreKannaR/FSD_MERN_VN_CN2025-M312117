import React, { useState } from 'react';

const Question14 = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  function addFruit(e) {
    e.preventDefault();
    if (newFruit.trim() === "") return;
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }

  function deleteFruit(indexToDelete) {
    setFruits(fruits.filter((_, index) => index !== indexToDelete));
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
          <li key={index}>
            {fruit} 
            <button onClick={() => deleteFruit(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default Question14;
