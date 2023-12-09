// MainStore.js

import React from 'react';
import './MainStore.css'; // Add or import styles as needed
import Items from './Items.js';
// import ProductProfile from './ProductProfile';


const MainStore = () => {
  return (
    <div className="main-store-container">
      <h2>Welcome to GreenMart</h2>
      <Items />
      {/* Add more content as needed */}
    </div>
  );
};

export default MainStore;
