import "./Authentication.css";
import myApi from "../../api/Api";
import React, { useState, useEffect } from "react";



function Authentication() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try{
      const { data } = await myApi.post('/users/login', 
      {
        email: email,
        password: password
      })
      console.log(data);
    }
    catch(err){
      console.log(err.response.data);
    }
  }
  const createNewUser = async () => {
    try{
      const { data } = await myApi.post('/users/register', 
      {
        name,
        email: email,
        password: password
      })
      console.log(data);
    }
    catch(err){
      console.log(err.response.data);
    }
  }

  return (
    <div className="authenticationPage">
      <div className="signIn">
        <div className="heder">Sign In</div>
        <div className="inputsDiv">
          <div className="emailPassword">Email</div>
          <input type="text" placeholder="Enter your email" onChange = {e => setEmail(e.target.value)}/>
          <div className="emailPassword">Password</div>
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
            onChange = {(e)=>setPassword(e.target.value)}
          />
        </div>
        <button className="input" type="button" className="btn" onClick= {loginUser}>
          Submit
        </button>
      </div>
      <div className="signIn">
        <div className="heder">Create Account</div>
        <div className="inputsDiv">
        <div className="emailPassword">Name</div>
        <input type="text" placeholder="Enter your name" onChange = {(e)=>setName(e.target.value)}/>
          <div className="emailPassword">Email</div>
          <input type="text" placeholder="Enter your email" onChange = {(e)=>setEmail(e.target.value)}/>
          <div className="emailPassword">Password</div>
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
            onChange = {(e)=>setPassword(e.target.value)}
          />
        </div>
        <button className="input" type="button" className="btn" onClick= {createNewUser}>
        Submit
      </button>
      </div>
    </div>
  );
}

export default Authentication;
