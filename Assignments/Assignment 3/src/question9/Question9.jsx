import React, { useState } from 'react'
import '../question1/Question1.css'

const Question9 = () => {

  const [search, setSearch] = useState("");

  const students = [
    "Ananya",
    "Kiran",
    "Rohit",
    "Ayan",
    "Meera",
    "Sanjay",
    "Rohan"
  ];
  const filteredStudents = students.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className='cardmodel'>
      <h3>Student Search</h3>

      <label>Search Student : </label><input 
        type="text" 
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <div className='uni9'>
      {filteredStudents.map((student, index) => (
        <p key={index}>{student}</p>        
      ))}</div>
    </div>
    <hr/>
    </>
  );
};

export default Question9;

