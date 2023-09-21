import React, { useState } from "react";
import axios from "axios";
import "./Createusers.css";

function Createusers() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the API to save the username to MongoDB
    try {
      await axios.post("http://localhost:5000/api/users", { username });
      console.log("Username saved succesfully!");

      //Reset the form after form submission

      setUsername("");
    } catch (error) {
      console.error("Error saving username:", error);
    }
  };

  return (
    <div className="user_container">
      <form onSubmit={handleSubmit} className="user_form">
        <h2>Create a new user</h2>
        <p className="query">POST /api/users</p>
        <div className="inp">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="btn_sub">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Createusers;
