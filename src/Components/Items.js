// Items.js

import React, { Component } from 'react';

import './Items.css'; // Add or import styles as needed
import i1 from "../images/img2.webp";
import i2 from "../images/img3.webp";
import i3 from "../images/img4.webp";
import i4 from "../images/img5.webp";
import i5 from "../images/img11.webp";
import i6 from "../images/img12.webp";
import i8 from "../images/img9.webp";
import i9 from "../images/img10.webp";
import i10 from "../images/img2.webp";
import { useNavigate } from 'react-router-dom';

const products = [
    {
      id: 1,
      name: 'Jump Cuts Printed Men Hooded Neck Green T-Shirt',
      image: i1,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    },
    {
      id: 2,
      name: 'Men Regular Fit Solid Mandarin Collar Casual Shirt      ',
      image: i2,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 3,
      name: 'Men Tapered Fit Mid Rise Green Jeans',
      image: i3,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 4,
      name: 'Men Skinny Mid Rise Green Jeans',
      image: i4,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 5,
      name: 'Kumars Trend Woven Beanie',
      image: i5,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 6,
      name: "Solid Sports/Regular Cap",
      image: i6,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 7,
      name: "Men Regular Fit Solid Spread Collar Casual Shirt",
      image: i8,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 8,
      name: 'Men Regular Fit Dyed/Ombre Spread Collar Casual Shirt',
      image: i9,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    }, {
      id: 9,
      name: 'Men Regular Fit Dyed/Ombre Spread Collar Casual Shirt',
      image: i10,
      price: '$19.99',
      rating: 4.5,
      // Add more details as needed
    },
    // Add more products
  ];

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  render() {
    const { searchQuery } = this.state;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  

    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
          placeholder="Search products..."
        />

        <div className="items-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-box">
              <img src={product.image}  alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name.slice(0,30)}...</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">Rating: {product.rating} stars</div>
              { <button className="view-product-button">View Product</button> }
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Items;
