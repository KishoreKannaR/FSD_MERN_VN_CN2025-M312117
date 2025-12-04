import React, { useState } from 'react';

const Question15 = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }

  return (
    <div>
      <h2>Profile</h2>
      <label>Name : </label><input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={profile.name} 
        onChange={handleChange} 
      /><br/><br/>
      <label>Email : </label><input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={profile.email} 
        onChange={handleChange} 
      /><br/><br/>
      <label>Phone : </label><input 
        type="tel" 
        name="phone" 
        placeholder="Phone" 
        value={profile.phone} 
        onChange={handleChange} 
      /><br/><br/>
      <div>
        <h3>Profile Info:</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
      </div>
      <hr/>
    </div>
  );
};

export default Question15;
