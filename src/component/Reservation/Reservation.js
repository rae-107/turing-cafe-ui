import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number }) => {
  return (
    <div className='reservation'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-button' >Cancel</button>
    </div>
  )
}


export default Reservation