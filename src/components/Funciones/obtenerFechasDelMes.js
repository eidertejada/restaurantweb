import { startOfMonth, endOfMonth, format } from "date-fns";

export const obtenerFechasDelMes = (mes) => {
  const añoActual = new Date().getFullYear();
  const fechaInicio = startOfMonth(new Date(añoActual, mes - 1, 1));
  const fechaFin = endOfMonth(new Date(añoActual, mes - 1, 1));

  return {
    fechaInicio: format(fechaInicio, "MM/dd/yyyy"),
    fechaFin: format(fechaFin, "MM/dd/yyyy"),
  };
};
