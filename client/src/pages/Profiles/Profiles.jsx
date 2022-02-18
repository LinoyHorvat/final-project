import myApi from "../../api/Api";
import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile";

function Profiles() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setloading] = useState(false);

  const getAllUsers = async () => {
    setloading(true);
    const { data } = await myApi.get("/users");
    setUsersData(data);
    console.log(data);
    setloading(false);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const showUsers = () => {
    return usersData.map((user) => {
      return (
        <div key={user._id}>
          <Profile user={user}/>
        </div>
      );
    });
  };

  return (
    <div className="profiles-page-container">
      <h1>Find your roommates</h1>
      {loading ? <div>loading...</div> : showUsers()}
    </div>
  );
}

export default Profiles;
