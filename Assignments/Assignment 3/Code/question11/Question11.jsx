import React, { useEffect, useState } from 'react';

const Question11 = () => {

  const [products, setProducts] = useState([]);

  // Fetch API data on component load
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))   // API returns { products: [...] }
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <h3>{item.title}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Question11;
