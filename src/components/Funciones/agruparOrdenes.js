export function agruparOrdenes(ventas) {
  const ordenesAgrupadas = {};

  // Iterar sobre el array de ventas
  ventas?.forEach((orden) => {
    const clave = `${orden.categoria}-${orden.nombre}-${orden.precio}`;

    // Verificar si la orden ya está en el nuevo array
    if (ordenesAgrupadas[clave]) {
      // Si existe, sumar la cantidad y actualizar el total
      ordenesAgrupadas[clave].cantidad += orden.cantidad;
      ordenesAgrupadas[clave].total += orden.total;
    } else {
      // Si no existe, agregar la orden al nuevo array
      ordenesAgrupadas[clave] = { ...orden };
    }
  });

  // Convertir el objeto de ordenes agrupadas a un array
  const resultado = Object.values(ordenesAgrupadas);

  return resultado;
}
