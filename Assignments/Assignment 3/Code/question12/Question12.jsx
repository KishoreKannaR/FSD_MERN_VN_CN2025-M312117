import React, { useEffect, useState } from 'react';

const Question12 = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(false);       

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);       
      })
      .catch(() => {
        setError(true);         
        setLoading(false);       
      });
  }, []);

  
  if (loading) {
    return <h3>Loading...</h3>;
  }

  
  if (error) {
    return <h3>Error loading data</h3>;
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div 
          key={item.id} 
          style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}
        >
          <h3>{item.title}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Question12;
