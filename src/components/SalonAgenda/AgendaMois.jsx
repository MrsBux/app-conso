import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../style/css/agendamois.css";

function AgendaMois({ salons }) {
  const [date, setDate] = useState(new Date()); // Le calendrier s'ouvre sur le mois en cours

  // Cette fonction est appelée lorsque l'utilisateur change de mois ou de vue
  const onActiveStartDateChange = ({ activeStartDate, view }) => {
    setDate(activeStartDate); // Met à jour la date actuellement affichée dans le calendrier
  };

  const salonDays = salons.reduce((acc, salon) => {
    let current = new Date(salon.debut);
    const end = new Date(salon.fin);
    while (current <= end) {
      const key = current.toISOString().split("T")[0]; // Crée une clé de la forme 'yyyy-mm-dd'
      if (!acc[key]) {
        acc[key] = true;
      }
      current.setDate(current.getDate() + 1);
    }
    return acc;
  }, {});

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const key = date.toISOString().split("T")[0];
      return salonDays[key] ? "salon-day" : null;
    }
  };

  // Filtrer les salons pour afficher seulement ceux qui ont lieu pendant le mois affiché
  const filteredSalons = salons.filter((salon) => {
    const startMonth = salon.debut.getMonth();
    const startYear = salon.debut.getFullYear();
    const endMonth = salon.fin.getMonth();
    const endYear = salon.fin.getFullYear();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    return (
      (startYear === currentYear && startMonth === currentMonth) ||
      (endYear === currentYear && endMonth === currentMonth)
    );
  });

  return (
    <div className="agendadumois">
      <Calendar
        onChange={setDate}
        value={date}
        onActiveStartDateChange={onActiveStartDateChange}
        showNavigation={true}
        calendarType="US"
        tileClassName={tileClassName}
      />
      <div className="agendadumois__list">
        {filteredSalons.length > 0 ? (
          <ul>
            {filteredSalons.map((salon) => (
              <li key={salon.id}>
                {salon.name} - du {salon.debut.toLocaleDateString()} au{" "}
                {salon.fin.toLocaleDateString()} à {salon.localisation}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun salon viticole ce mois-ci.</p>
        )}
      </div>
    </div>
  );
}

export default AgendaMois;
