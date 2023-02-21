import React from 'react'
import './Reservations.css'
import Reservation from '../Reservation/Reservation'

const Reservations = ({ reservations, deleteResy }) => {
  const allReservations = reservations.map(reso => <Reservation id={reso.id} key={reso.id} name={reso.name} date={reso.date} time={reso.time} number={reso.number} deleteResy={deleteResy} />)

  return(
    <section className='resy-container' >
      {allReservations}
    </section>
  )
}

export default Reservations