import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <nav>
        <Link to="electronics" style={{ marginRight: "10px" }}>Electronics</Link>
        <Link to="fashion">Fashion</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const Electronics = () => <h3>Electronics Products</h3>;
const Fashion = () => <h3>Fashion Products</h3>;

const Question20 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Question20;
