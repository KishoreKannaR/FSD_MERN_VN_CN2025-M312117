import React from 'react';
import data from './data.json';   

const Question10 = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {data.map((item) => (
        <div 
          key={item.id} 
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            width: "180px",
            borderRadius: "8px"
          }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Question10;
