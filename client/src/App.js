// import React from 'react';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import Profiles from "./pages/Profiles/Profiles";
import Apartments from "./pages/Apartments/Apartments";
import Me from "./pages/Me/Me";

function App() {
  const [chosenSong, setChosenSong] = useState({});
  useEffect(() => {}, [chosenSong]);
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/landing" exact element={<Authentication />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/apartments" exact element={<Apartments />} />
          <Route path="/profiles" exact element={<Profiles />} />
          <Route path="/me" exact element={<Me />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
