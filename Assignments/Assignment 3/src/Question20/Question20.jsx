import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../Question20/Products.jsx'; 

const Electronics = () => <h3>Electronics Products</h3>;
const Fashion = () => <h3>Fashion Products</h3>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<h3>Please select a category.</h3>} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
