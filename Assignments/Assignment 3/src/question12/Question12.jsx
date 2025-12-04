import React, { useEffect, useState } from "react";
import '../question1/Question1.css'

const Question12 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Simulate network delay
        setTimeout(() => {
          // Success case: show only first 5 products
          setProducts(data.products.slice(0, 5));
          setLoading(false);
        }, 2000);

        // below to simulate error instead of success
        /*
        setTimeout(() => {
          setError(true);
          setLoading(false);
        }, 2000);
        */
      })
      .catch(() => {
        // Handle fetch errors
        setTimeout(() => {
          setError(true);
          setLoading(false);
        }, 2000);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading data</h3>;

  return (
    <>
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div
          key={item.id}
          className="cardmodel11"
        >
          <h3>{item.title}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: {"\u20B9"}{item.price}</p>
        </div>
      ))}
      <hr/>
    </div>
    </>
  );
};

export default Question12;
