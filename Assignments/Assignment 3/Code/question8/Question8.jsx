import React, { useState } from 'react'

const Question8 = () => {

    const [category,setcategory] = useState("all")

    function choose(event){
        setcategory(event.target.value);
    }
    
    const products = [
        { name: "Mobile", category: "electronics" },
    { name: "Laptop", category: "electronics" },
    { name: "Campus Sutra Shirt", category: "clothes" },
    { name: "Jeans", category: "clothes" },
    ]

     const filteredProducts =
    category === "all"
      ? products
      : products.filter(item => item.category === category);

  return (
    <div>
        <button onClick={choose} value="all">All</button>
        <button onClick={choose} value="electronics">Electronics</button>
        <button onClick={choose} value="clothes">Clothes</button>

        {filteredProducts.map((item, index) => (
        <p key={index}>
          Name: {item.name} | Category: {item.category}
        </p>
      ))}    
    </div>    
  )
}

export default Question8
