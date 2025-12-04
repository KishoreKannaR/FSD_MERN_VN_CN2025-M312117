import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Question17 = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then(res => setUser({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email
      }))
      .catch(err => console.log(err));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put("https://dummyjson.com/users/1", user)
      .then(() => setMessage("User Updated!"))
      .catch(() => setMessage("Error updating user"));
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={user.firstName} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={user.lastName} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={user.email} 
          onChange={handleChange} 
        />
        <button type="submit">Update User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Question17;
