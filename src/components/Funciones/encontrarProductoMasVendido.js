import { agruparOrdenes } from "./agruparOrdenes";

export function encontrarProductoMasVendido(ventas) {
  let productoMayorCantidad = null;
  let cantidadMaxima = 0;
  let ventasAgrupadas = agruparOrdenes(ventas);

  ventasAgrupadas.forEach((orden) => {
    if (orden.cantidad > cantidadMaxima) {
      cantidadMaxima = orden.cantidad;
      productoMayorCantidad = orden;
    }
  });

  return productoMayorCantidad;
}
