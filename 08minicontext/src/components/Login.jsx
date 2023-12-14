import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); //setUser is for setting data which is coming from UserContextProvider
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); //This is how we are sending data
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
export default Login;
