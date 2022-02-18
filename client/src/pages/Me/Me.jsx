import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile/Profile";
import myApi from "../../api/Api";


function Me({ user }) {
  const [favoritesProfiles, setFavoritesProfiles] =useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getAllFavoritesProfiles();
  }, []);

  const getAllFavoritesProfiles = async () => {
    await user.myFavoritesProfiles.map( (profile_id) => fetchProfile(profile_id));
  };

  const fetchProfile = async (profile_id) => {
    setLoading(true)
    try{
      const { data } = await myApi.get(`/users/${profile_id}`);
      const newFavoritesProfiles = [...favoritesProfiles, data]
      setFavoritesProfiles(newFavoritesProfiles);
      console.log(user.myFavoritesProfiles.length);
      newFavoritesProfiles.length === user.myFavoritesProfiles.length ? setLoading(false) : setLoading(true)
    }catch (err) {console.log(err)};
  };

  const showFavoritesProfiles =() => {
    return favoritesProfiles.map((profile)=> {
      return (<div key={profile._id}>
        <Profile user={profile} />
        </div>)
    })
  }



  return (
    <div className="Me">
      <h1>My Profile</h1>
      <Profile user={user} />
      <h1>My Favorites Profiles</h1>
      {loading && showFavoritesProfiles()}
      <h1>My Apartment</h1>
      <h1>My Favorites Apartments</h1>
    </div>
  );
}

export default Me;
