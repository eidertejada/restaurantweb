function formatearFecha(fechaOriginal) {
  const partesFecha = fechaOriginal.split("-");
  return `${partesFecha[1]}-${partesFecha[2]}-${partesFecha[0]}`;
}
export { formatearFecha };
