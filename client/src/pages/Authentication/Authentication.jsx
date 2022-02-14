import React from "react";
import "./Authentication.css";

function Authentication() {
  return (
    <div className="authenticationPage">
      <div className="signIn">
        <div className="heder">Sign In</div>
        <div className="inputsDiv">
          <div className="emailPassword">Email</div>
          <input type="text" placeholder="Enter your email" />
          <div className="emailPassword">Password</div>
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <button className="input" type="button" className="btn">
          Submit
        </button>
      </div>
      <div className="signIn">
        <div className="heder">Create Account</div>
        <div className="inputsDiv">
        <div className="emailPassword">Name</div>
        <input type="text" placeholder="Enter your name" />
          <div className="emailPassword">Email</div>
          <input type="text" placeholder="Enter your email" />
          <div className="emailPassword">Password</div>
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <div className="buttonsDiv">
        <button type="button" className="btn">
          Find a room{" "}
        </button>
        <button type="button" className="btn">
          List your room{" "}
        </button>
      </div>
      </div>
    </div>
  );
}

export default Authentication;
