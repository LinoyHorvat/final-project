import myApi from "../../api/Api";
import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile"

function Profiles() {
  const [usersData, setUsersData] = useState([]);
  
  const getAllUsers = async () => {
    const {data} = await myApi.get("/users");
    setUsersData(data);
    console.log(data);
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  

  return (<div className = 'profiles-page-container'>
  <h1>Find your roommates</h1>

  </div>);
}

export default Profiles;
