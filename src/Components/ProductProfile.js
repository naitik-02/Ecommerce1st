// ProductProfile.js
import "./ProductProfile.css";

import React from 'react';

const ProductProfile = ({ product, onClose }) => {
  const { name, image, price, rating, description, /* Add other product details */ } = product;

  return (
    <div className="product-profile">
      <div className="profile-header">
        <h2>{name}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="profile-content">
        <img src={image} alt={name} className="profile-image" />
        <div className="profile-details">
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Description: {description}</p>
          {/* Add other product details */}
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
