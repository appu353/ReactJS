import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); //for fecthing data
  if (!user) return <div>Please Login</div>;
  return <div>Welcome: {user.username}</div>;
}

export default Profile;
