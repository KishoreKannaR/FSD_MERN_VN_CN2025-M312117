import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => (
  <div>
    <h2>Products Page</h2>
    <nav>
      <Link to="electronics">Electronics</Link> | 
      <Link to="fashion">Fashion</Link>
    </nav>
    <Outlet />
  </div>
);

export default Products;
