import { filtrarFecha } from "./filtrarFecha";

const obtenerProductos = (ordenes, dateInit, dateEnd) => {
  if (dateInit === "" && dateEnd === "") {
    const productos = ordenes.map((pedido) => {
      const { orden } = pedido;
      return orden;
    });
    return productos;
  } else {
    const ArrayFecha = filtrarFecha(ordenes, dateInit, dateEnd);
    console.log(ArrayFecha);
    const productos = ArrayFecha.map((pedido) => {
      const { orden } = pedido;
      return orden;
    });
    return productos;
  }
};

export { obtenerProductos };
