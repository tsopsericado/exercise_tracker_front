import React from "react";
import "./Exerciselist.css";
import Createusers from "../Createusers/Createusers";
import Createexercise from "../Createexercise/Createexercise";

function Exerciselist() {
  return (
    <div className="exerciselist_container">
      <h1>Exercise Tracker</h1>
      <div className="components">
        <Createusers />
        <Createexercise />
      </div>
      <div className="paragraphs">
        <p>
          GET user's exercise log:
          <span> GET /api/users/:_id/logs?[from][&to][&limit]</span>
        </p>
        <p>[ ] = optional</p>
        <p>from, to = dates (yyyy-mm-dd); limit = number</p>
      </div>
    </div>
  );
}

export default Exerciselist;
