import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile";
import ProfileForEdit from "../../components/Profile/ProfileForEdit";
import myApi from "../../api/Api";
import "../../components/Profile/Profile.css";

function Me() {
  const [favoritesProfiles, setFavoritesProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const getUser = async (_id) => {
    setLoading(true);
    const { data } = await myApi.get(`/users/${_id}`);
    setCurrUser(data);
    setLoading(false);
    getAllFavoritesProfiles(data);
  };

  useEffect(() => {
    if (localStorage.userInfo) {
      const lsData = JSON.parse(localStorage.getItem("userInfo"));
      getUser(lsData.user._id);
    }
  }, []);

  const getAllFavoritesProfiles = async (currUser) => {
    const newFavoritesProfiles = [];
    await currUser.myFavoritesProfiles.map(async (profile_id) => {
      try {
        const { data } = await myApi.get(`/users/${profile_id}`);
        newFavoritesProfiles.push(data);
        setFavoritesProfiles(newFavoritesProfiles);
        if (
          newFavoritesProfiles.length === currUser.myFavoritesProfiles.length
        ) {
          setLoading(true);
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  const showFavoritesProfiles = () => {
    return favoritesProfiles.map((profile) => {
      return (
        <div key={profile._id} className="profile-box">
          <Profile user={profile} />
          <button
            onClick={() => {
              removeFromMyFavoritesProfiles(profile._id);
            }}
          >
            Remove
          </button>
        </div>
      );
    });
  };

  const removeFromMyFavoritesProfiles = async (_id) => {
    const { data } = await myApi.put(
      `/users/deleteFavoritesProfiles/${currUser._id}`,
      { _id }
    );
    getUser(currUser._id);
  };

  return (
    <div className="Me">
      <h1>My Profile</h1>
      {currUser ? <ProfileForEdit user={currUser} /> : <div>loading...</div>}
      <h1>My Favorites Profiles</h1>
      <div className = "profiles-container">
        {loading ? (
          showFavoritesProfiles()
        ) : (
          <div>You haven't added any favorites profiles...</div>
        )}
      </div>
      <h1>My Apartment</h1>
      <div>You haven't added an apartment...</div>
      <h1>My Favorites Apartments</h1>
      <div>You haven't added any favorites apartments...</div>
    </div>
  );
}

export default Me;

// {loading && showFavoritesProfiles()}
