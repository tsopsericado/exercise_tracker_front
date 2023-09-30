import React, { useState } from "react";
import axios from "axios";
import "./Createusers.css";
import { useNavigate } from "react-router-dom";

function Createusers() {
  const [users, setUsers] = useState({
    username: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sampledata = null;

    // Call the API to save the username to MongoDB

    axios
      .post("http://localhost:3000/api/users", { users })
      .then((response) => {
        sampledata = response.data;
        localStorage.setItem("exerciseUser", JSON.stringify(sampledata));
        navigate("./api/users");
        console.log("Username saved succesfully!");
    //Reset the form after form submission
        setUsers("");
      })
      .catch((error) => console.log("Issues saving username", error));

  };

  return (
    <div className="user_container">
      <form onSubmit={handleSubmit} className="user_form">
        <h2>Create a new user</h2>
        <p className="query">POST /api/users</p>
        <div className="inp">
          <input
            type="text"
            value={users}
            placeholder="Username"
            onChange={(e) => setUsers(e.target.value)}
          />
          <button type="submit" className="btn_sub">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createusers;
