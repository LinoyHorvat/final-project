// import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import Profiles from "./pages/Profiles/Profiles";
import Apartments from "./pages/Apartments/Apartments";
import Me from "./pages/Me/Me";
import myApi from "./api/Api";
import '@fontsource/roboto/300.css';
import './app.css';


function App() {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState(null);

  const getUser = async (id) => {
    const { data } = await myApi.get(`/users/${id}`);
    setUser(data);
    console.log(data);
  };

  const getAllUsers = async () => {
    const { data } = await myApi.get("/users");
    setUsersData(data);
  };

  useEffect(() => {
    // localStorage.clear();
    getAllUsers();
    console.log(localStorage);
    if (localStorage.userInfo) {
      const lsData = JSON.parse(localStorage.getItem("userInfo"));
      getUser(lsData.user._id)
    }
  }, []);

  return (
    <div>
      <Router>
        {user && <Navbar user={user}/>}
        <Routes>
          <Route path="/" element = {user ? <HomePage /> :<Authentication />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/me" element={<Me user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
