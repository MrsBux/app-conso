import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list">
      {bookings.map((booking) => (
        <div key={booking._id} className="booking-item">
          <h5>Réservation ID: {booking._id}</h5>
          <p>Nom: {booking.nom}</p>
          <p>Prestation: {booking.prestation}</p>
          {/* {booking.date ? <p>Date: {booking.date}</p> : null}
          {booking.heure ? <p>Heure: {booking.heure}</p> : null} */}
          <p>Email: {booking.email}</p>
          <p>Téléphone: {booking.telephone}</p>
        </div>
      ))}
    </div>
  );
};
export default BookingList;
