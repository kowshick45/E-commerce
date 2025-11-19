import React from 'react'
import Navbar from '../Components/Navbar'
import './cart.css'

function Cart() {

  const productlist = localStorage.getItem("productcount");
  const savedCart = productlist ? JSON.parse(productlist) : {
    Macbook: { price: 150000, quantity: 0 },
    lenovo: { price: 68000, quantity: 0 },
    victus: { price: 65000, quantity: 0 },
    acer: { price: 60000, quantity: 0 }
  };

  const totalPrice =
    savedCart.Macbook.price * savedCart.Macbook.quantity +
    savedCart.lenovo.price * savedCart.lenovo.quantity +
    savedCart.victus.price * savedCart.victus.quantity +
    savedCart.acer.price * savedCart.acer.quantity;

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h1>Your Cart</h1>

        <div className="cart-items">
          {Object.keys(savedCart).map((key) => {
            const Item = savedCart[key];
            if (Item.quantity > 0) {
              return (
              <div className="cart-card" key={key}>
              <h3>{key}</h3>
              <p>Price: ₹{Item.price.toLocaleString()}</p>
              <p>Quantity: {Item.quantity}</p>
              <p className="subtotal">
              Subtotal: ₹{(Item.price * Item.quantity).toLocaleString()}
              </p>
              </div>
              );
            }
            return null;
          })}
        </div>

        <div className="total-box">
          <h2>Total Price: ₹{totalPrice.toLocaleString()}</h2>
          <a className="buy-btn" href="/Buypro">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
