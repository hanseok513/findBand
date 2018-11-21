import React from "react";

const UserItem = ({ user }) => {
  const { username, age, gender } = user;
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Gender: {gender}</p>
      </div>
    </div>
  );
};

export default UserItem;
