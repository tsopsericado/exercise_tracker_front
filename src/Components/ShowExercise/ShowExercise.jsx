import React from 'react';
import './ShowExercise.css';

function ShowExercise() {
const addExercise = JSON.parse(localStorage.getItem('addExercise'))

  return (
    <div>{JSON.stringify(addExercise)}</div>
  )
}

export default ShowExercise