import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Exerciselist from "./Components/Exerciselist/Exerciselist";
import Landing from "./Components/Landing/Landing";
import ShowExercise from "./Components/ShowExercise/ShowExercise";
import ShowUser from "./Components/ShowUser/ShowUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exerciselist />} />
          <Route path="/showexercise" element={<ShowExercise />} />
          <Route path="/showuser" element={<ShowUser />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
