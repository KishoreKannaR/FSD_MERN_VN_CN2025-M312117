import React, { useState } from 'react'

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
    <div>
      <h3>Student Search</h3>

      <input 
        type="text" 
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredStudents.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
};

export default Question9;

