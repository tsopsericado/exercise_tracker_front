import React from 'react';
import './ShowUser.css'

function ShowUser() {
    const sampledata = JSON.parse(localStorage.getItem('exerciseUser'))
  return (
    <div>{JSON.stringify(sampledata)}</div>
  )
}

export default ShowUser