import React from 'react'
import Navbar from '../Components/Navbar'
import './cart.css'

function Cart() {
  const productlist = localStorage.getItem("productcount")
  const savedCart = productlist ? JSON.parse(productlist) : {
    Macbook: { price: 150000, quantity: 0 },
    lenovo:  { price: 68000,  quantity: 0 },
    victus:  { price: 65000,  quantity: 0 },
    acer:  { price: 60000,  quantity: 0 }
  }
   

   const totalPrice =
    savedCart.Macbook.price * savedCart.Macbook.quantity +
    savedCart.lenovo.price * savedCart.lenovo.quantity +
    savedCart.victus.price * savedCart.victus.quantity +
    savedCart.acer.price* savedCart.acer.quantity
  return (
    <div>
      <Navbar />
      <h1>Cart page</h1>
      <br></br>
      <pre id="cart">{JSON.stringify(savedCart, null, 2)}</pre>
      totalprize: {totalPrice.toLocaleString()}
      <br></br>
      <a href="/Buypro">Buy Now</a>
    </div>
  );
};

export default Cart