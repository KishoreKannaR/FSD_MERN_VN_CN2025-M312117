import React from 'react';
import data from './data.json';   

const Question10 = () => {
  return (
    <>
    <div>
      {data.map((item) => (
        <div 
          key={item.id} 
          className='cardmodel'
        >
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3>{item.name}</h3>
          <p>Price: {"\u20B9"}{item.price}</p>
        </div>
      ))}
    </div>
    <hr/>
    </>
  );
};

export default Question10;
