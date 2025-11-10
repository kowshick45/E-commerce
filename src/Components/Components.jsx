import React from 'react'
import Navbar from './Navbar'
import './components.css'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Components() {

  const [username,setusername] = useState("");
  const Navigate = useNavigate();
  const [password,setpassword] = useState("");

  function login(){
    
  if(username==="")
  {
    alert("please enter your username")
  }
  
  else if(password==="")
  {
    alert("please enter your password");
  }
  else 
  {
     localStorage.setItem("username",username);

    Navigate('/product');
  }
 



   }

     
   
  return (
    <div >
        <Navbar/>
      <div id = "loginpage">
        
    <h1>welcome to Buyzaar</h1>
    <h2>please login to countinue</h2>
    <p>enter your username</p>
    <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)}
 />
    <br/>
    <br/>
    <p>enter your password</p>
    <input type="password" placeholder='password'   onChange={(e) => setpassword(e.target.value)}/><br/>
    <br/>
    <button id="login" onClick={login}>login</button>
    </div>
        <h1>NOTE!</h1>
        <h2>if you want to countinue as a guest please go to our product page in top right corner</h2>
        
        </div>
  )
}

export default Components