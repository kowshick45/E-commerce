import React, { use, useState,useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Macbook from '../assets/Macbook.webp';
import lenovo from '../assets/lenovo LOQ.webp';
import victus from '../assets/victus.webp';
import acer from '../assets/acer.jpg';
import './product.css';

function Product() {
  const [count, setcount] = useState({
    Macbook: 0,
    lenovo: 0,
    victus: 0,
    acer:0
  });

  const increaseproduct = (product) => {
    setcount({ ...count, [product]: count[product] + 1 });
  };

  const decreaseproduct = (product) => {
    if (count[product] > 0) {
      setcount({ ...count, [product]: count[product] - 1 });
    }
    else{
        setcount({ ...count,[product]:0})
    }
  };

useEffect(() => {
    const productData = {
      Macbook: { price: 150000, quantity: count.Macbook },
      lenovo: { price: 68000, quantity: count.lenovo },
      victus: { price: 65000, quantity: count.victus },
      acer: {price:60000,quantity: count.acer}
    };
    localStorage.setItem("productcount", JSON.stringify(productData));
  }, [count]);
  const totalprize = count.Macbook * 150000 + count.lenovo * 68000 + count.victus * 65000+ count.acer*60000
  console.log(totalprize);

  const savedname=localStorage.getItem("username");

  return (
    <div >
      <Navbar />
      <br/>
      <div id="card">
      <div className="product-ite">
        <img src={Macbook} alt="Macbook"  id = "Macbooksrc"/>
        <h2>Product name: Macbook</h2>
        <h3>Price: ₹1,50,000</h3>
        <button onClick={() => decreaseproduct('Macbook')}>-</button>
        Add to Cart
        <button onClick={() => increaseproduct('Macbook')}>+</button>
        <h2>Quantity: {count.Macbook}</h2>
      </div>


      <div className="product-ite">
        <img src={acer} alt="Acer ALG"  id = "Macbooksrc"/>
        <h2>Product name: Acer ALG</h2>
        <h3>Price: ₹60,000</h3>
        <button onClick={() => decreaseproduct('acer')}>-</button>
        Add to Cart
        <button onClick={() => increaseproduct('acer')}>+</button>
        <h2>Quantity: {count.acer}</h2>
      </div>

      <div className="product-item">
        <img src={lenovo} alt="Lenovo LOQ"  id="lenovosrc" />
        <h2>Product name: Lenovo LOQ</h2>
        <h3>Price: ₹68,000</h3>
        <button onClick={() => decreaseproduct('lenovo')}>-</button>
        Add to Cart
        <button onClick={() => increaseproduct('lenovo')}>+</button>
        <h2>Quantity: {count.lenovo}</h2>
      </div>
      <div className="product-it">
        <img src={victus} alt="HP Victus"  id="victussrc" />
        <h2>Product name: HP Victus</h2>
        <h3>Price: ₹65,000</h3>
        <button onClick={() => decreaseproduct('victus')}>-</button>
        Add to Cart
        <button onClick={() => increaseproduct('victus')}>+</button>
        <h2>Quantity: {count.victus}</h2>
        </div>
      

      </div>
    </div>
  );
}

export default Product;
