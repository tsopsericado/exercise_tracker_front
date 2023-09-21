import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Createexercise from './Components/Createexercise/Createexercise';
import Exerciselist from './Components/Exerciselist/Exerciselist';
import Createusers from './Components/Createusers/Createusers';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path='/creatUsers' element={<Landing/>}/>
       <Route path="/createexercise" element={<Createusers/>}/>
       <Route path="/exerliselist" element={<Createexercise/>}/>
       <Route path="/" element={<Exerciselist/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
