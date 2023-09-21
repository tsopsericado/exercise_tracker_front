import React, { useState } from "react";
import './Createexercise.css';
import axios from "axios";

function Createexercise() {
  const [userId, setUserId] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your backend API to store in MongoDB
    // You can use libraries like Axios or fetch to make the API call

    // Example using Axios:
    axios
      .post("/api/your-endpoint", {
        userId,
        description,
        duration,
        date,
      })
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });

    // Reset the form fields after submission
    setUserId("");
    setDescription("");
    setDuration("");
    setDate("");
  };

  return (
    <div className="exercise_container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add exercises</h2>
        <p className="paragraph">POST /api/users/:_id/exercises</p>
        <div className="formdiv">
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="userId"
          />

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description*"
          />

          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="duration*(mins.)"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="date(mm/dd/yyyy)"
          />
          <button onClick={handleSubmit} className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Createexercise;
