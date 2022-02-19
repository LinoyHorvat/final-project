import React, { useState, useEffect } from "react";
import "./Profile.css";
import myApi from "../../api/Api";

function ProfileForEdit({user}) {
  const {
    name,
    email,
    profilePicture,
    age,
    gender,
    budget,
    phone,
    description,
  } = user;

  const [newAge, setNewAge] = useState(age);
  const [newGender, setNewGender] = useState(gender);
  const [newBudget, setNewBudget] = useState(budget);
  const [newPhone, setNewPhone] = useState(phone);
  const [newDescription, setNewDescription] = useState(description);
  const [imgURL, setImgURL] = useState(profilePicture);

  const [currUser, setUser] = useState(user);
  const [loading, setLoading] = useState(false);

  const getUser = async (_id) => {
    setLoading(true);
    const { data } = await myApi.get(`/users/${_id}`);
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.userInfo) {
      const lsData = JSON.parse(localStorage.getItem("userInfo"));
      getUser(lsData.user._id)
    }
  }, []);


  const handleSubmit = async () => {
    const { data } = await myApi.put(`/users/${user._id}`, {
      profilePicture: imgURL,
      age: newAge,
      gender: newGender,
      budget: newBudget,
      phone: newPhone,
      description: newDescription,
    });
    getUser(user._id);
  };

  const showUser = (user) => {
    return (<div className="profile-box">
      <img className="profile-picture" src={profilePicture} />
      <input
      placeholder="Enter img URL"
      onChange={(e) => {
        setImgURL(e.target.value);
      }}
    ></input>
      <div className="profile-details profile-name">{name} ✋</div>
      <a href="#" className="profile-details profile-age">
        📨 {email}
      </a>
      <div className="profile-details">
        Age:
        <input
          placeholder={age}
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        ></input>
      </div>
      <div className="profile-details">
        Gender:
        <input
          placeholder={gender}
          onChange={(e) => {
            setNewGender(e.target.value);
          }}
        ></input>
      </div>
      <div className="profile-details">
        Budget:
        <input
          placeholder={budget}
          onChange={(e) => {
            setNewBudget(e.target.value);
          }}
        ></input>
      </div>
      <div className="profile-details">
        Phone:
        <input
          placeholder={phone}
          onChange={(e) => {
            setNewPhone(e.target.value);
          }}
        ></input>
      </div>
      <div className="profile-details profile-description">
        <textarea
          cols="3vh"
          rows="9"
          placeholder={description}
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      </div>

    )
  }


  return (
    <div>
      {currUser && showUser(currUser)}
    </div>
  );
}

export default ProfileForEdit;
