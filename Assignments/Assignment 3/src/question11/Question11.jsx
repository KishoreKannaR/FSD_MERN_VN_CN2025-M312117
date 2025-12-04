import React, { useEffect, useState } from 'react';
import '../question1/Question1.css'

const Question11 = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))  
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id} className='cardmodel11'>
          <h3>{item.title}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: {"\u20B9"}{item.price}</p>
        </div>
      ))}
    </div>
    <hr/>
    </>
  );
};

export default Question11;
