import React from 'react'
import '../question1/Question1.css'

const Question1 = () => {
    const students = [
        {
        name : "John",
        dept : "CSE",
        year : 2024,
    },
    {
        name : "Maya",
        dept : "EEE",
        year : 2022,
    },
    {
        name : "Ellen",
        dept : "ECE",
        year : 2025,
    },
    {
        name : "Guna",
        dept : "Mech",
        year : 2016,
    },
    {
        name : "Max",
        dept : "CSE",
        year : 2025,
    }
]
  return (
    <div>
        {students.map((student,index)=>{
            return(
                <div className='cardmodel' key={index}>
                <p>Name : {student.name}</p>
                <p>Dept : {student.dept}</p>
                <p>Year : {student.year}</p>
                </div>
            )
        })}
        <hr/>

    </div>
  )
}

export default Question1
