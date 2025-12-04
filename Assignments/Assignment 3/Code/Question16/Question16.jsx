import React, { useState } from 'react';
import axios from 'axios';

const Question16 = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://dummyjson.com/posts/add", formData)
      .then(() => setMessage("Post Added!"))
      .catch(() => setMessage("Error adding post"));
  }

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          value={formData.title} 
          onChange={handleChange} 
        />
        <textarea 
          name="body" 
          placeholder="Body" 
          value={formData.body} 
          onChange={handleChange} 
        />
        <button type="submit">Add Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Question16;
