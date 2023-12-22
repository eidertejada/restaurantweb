import React, { useState } from "react";
import { startOfMonth, endOfMonth, format } from "date-fns";

const DateRangePicker = () => {
  const currentYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(1); // Mes por defecto, puedes cambiarlo según tus necesidades

  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  const getStartDateOfMonth = (year, month) => {
    return startOfMonth(new Date(year, month - 1, 1));
  };

  const getEndDateOfMonth = (year, month) => {
    return endOfMonth(new Date(year, month - 1, 1));
  };

  const startDate = getStartDateOfMonth(currentYear, selectedMonth);
  const endDate = getEndDateOfMonth(currentYear, selectedMonth);

  return (
    <div>
      <label htmlFor="monthSelect">Selecciona un mes:</label>
      <select
        id="monthSelect"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {Array.from({ length: 12 }, (_, index) => {
          const monthNumber = index + 1;
          return (
            <option key={monthNumber} value={monthNumber}>
              {format(new Date(currentYear, monthNumber - 1, 1), "MMMM")}
            </option>
          );
        })}
      </select>

      <p>Fecha inicial del mes: {format(startDate, "dd/MM/yyyy")}</p>
      <p>Fecha final del mes: {format(endDate, "dd/MM/yyyy")}</p>
    </div>
  );
};

export default DateRangePicker;
