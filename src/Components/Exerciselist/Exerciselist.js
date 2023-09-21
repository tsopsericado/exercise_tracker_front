import React from 'react'

function Exerciselist() {
  return (
    <div>
      <h3>Logged Exercise</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>userId</tr>
          <tr>Description</tr>
          <tr>Duration</tr>
          <tr>Date</tr>
        </thead>
      </table>
    </div>
  )
}

export default Exerciselist