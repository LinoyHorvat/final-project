import React from 'react'
import "./Profile.css";

function Profile({user}) {
  const {name, email, profilePicture, age, gender, budget, phone, description} = user
  return (
    <div className="profile-box">
    <div className="profile-details">Name: {name}</div>
    <img className="profile-picture" src={profilePicture} />
    <div className="profile-details">email: {email}</div>
    <div className="profile-details">age: {age}</div>
    <div className="profile-details">gender: {gender}</div>
    <div className="profile-details">budget: {budget}</div>
    <div className="profile-details">phone: {phone}</div>
    <div className="profile-details">description: {description}</div>
    </div>
  )
}

export default Profile