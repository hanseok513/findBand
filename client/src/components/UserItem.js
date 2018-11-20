import React from "react";

const UserItem = ({user}) => {
  const {username, age, gender} = user;
  return (
    <ul className="list-group-item">
      <div>{username}</div>
      <div>{age}</div>
      <div>{gender}</div>
    </ul>
  );
};

export default UserItem;
