import React, {useState, useEffect} from 'react';

function Me() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    if (localStorage.userInfo) {
      const lsData = JSON.parse(localStorage.getItem("userInfo"));
      setUser(lsData);
      console.log(lsData.user);
    }
  }, []);

  return (
    <div className="Me">
    <h1>My Profile</h1>

    <h1>My Apartment</h1>
    <h1>My Favorites Profiles</h1>
    <h1>My Favorites Apartments</h1>
    </div>);
}

export default Me;
