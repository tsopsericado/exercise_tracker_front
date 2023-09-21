import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Exerciselist from './Components/Exerciselist/Exerciselist';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Exerciselist/>}/>
       <Route path='/landing' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
