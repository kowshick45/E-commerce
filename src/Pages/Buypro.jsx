import React from 'react'
import Navbar from '../Components/Navbar'
import './Buypro.css'

function Buypro() {
const productlist = localStorage.getItem("productcount")
  const savedCart = productlist ? JSON.parse(productlist) : {
    Macbook: { price: 150000, quantity: 0 },
    lenovo:  { price: 68000,  quantity: 0 },
    victus:  { price: 65000,  quantity: 0 }
  }
    
  const totalprice =
    savedCart.Macbook.price * savedCart.Macbook.quantity +
    savedCart.lenovo.price * savedCart.lenovo.quantity +
    savedCart.victus.price * savedCart.victus.quantity;


    

    function paynow(){
    const method = prompt("Enter 1 for GPay or 2 for Cash on Delivery");
    
    if (method === "1")
       {
        const password = prompt("Enter your password to confirm payment:");
        if(password === "123456"){
         alert("payment successful");
         alert("order placed");
        }
        else{
          alert("incorrect password")
          return(paynow());
        }
    } else if (method === "2") {
      alert("Cash on Delivery selected");
      alert("order placed successfully");
    } else {
      alert("Invalid payment method");
      return;
    }}
    


  return (
    <div ><Navbar/>
    <div id="buypage">
    Buyproduct page
    <br></br>
    the total amount: {totalprice.toLocaleString()}
    <br></br>
    <button onClick={paynow} className="buy-btn">Pay Now</button>
    </div>
    </div>

  )
}

export default Buypro