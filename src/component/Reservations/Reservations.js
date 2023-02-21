import React from 'react'

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map(reso => <Reservation id={reso.id} key={reso.id} name={reso.name} date={reso.date} time={reso.time} number={reso.number} />)

  return(
    <section>
      <h2>hello</h2>
      {allReservations}

    </section>
  )
}

export default Reservations