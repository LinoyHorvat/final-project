import React from 'react'

function Profile({name, email, profilePicture, age, gender, budget, phone, description}) {
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
    <button>✅</button>
    <button>❌</button>
    </div>
  )
}

export default Profile