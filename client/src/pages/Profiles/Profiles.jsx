import myApi from "../../api/Api";
import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile";

function Profiles({ user }) {
  const [usersData, setUsersData] = useState([]);
  const [loading, setloading] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const getAllUsers = async () => {
    setloading(true);
    const { data } = await myApi.get("/users/");
    setUsersData(data);
    setloading(false);
  };

  const getUser = async () => {
    const { data } = await myApi.get(`/users/${user._id}`);
    setCurrUser(data);
  };
  useEffect(() => {
    getAllUsers();
    getUser();
  }, []);

  const showUsers = () => {
    return usersData.map((user) => {
      return (
        <div key={user._id} className="profile-box">
          <Profile user={user} />
          <button
            onClick={() => {
              addProfileToMyFavoritesProfiles(user._id);
            }}
          >
            🧡
          </button>
        </div>
      );
    });
  };

  const addProfileToMyFavoritesProfiles = async (_id) => {
    console.log(_id);
    const { data } = await myApi.put(`/users/favoritesProfiles/${user._id}`, {
      _id,
    });
  };

  return (
    <div className="profiles-page-container">
      <h1>Find your roommates</h1>
      <div className="profiles-container">
        {" "}
        {loading ? <div>loading...</div> : showUsers()}
      </div>
    </div>
  );
}

export default Profiles;
