export function traerProducto(productos, nombre) {
  // Filtramos el array de productos por el nombre especificado
  const productosFiltrados = productos.filter(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  // Inicializamos la cantidad vendida como 0
  let cantidadVendida = 0;

  // Recorremos el array de productos filtrados
  productosFiltrados.forEach((producto) => {
    // Sumamos la cantidad vendida
    cantidadVendida += producto.cantidad;
  });

  // Creamos un nuevo objeto con la cantidad vendida, nombre, imagen, id, descripción y categoría
  const producto = {
    cantidad: cantidadVendida,
    nombre: productos[0]?.nombre,
    imagen: productos[0]?.imagen,
    id: productos[0]?.id,
    descripcion: productos[0]?.descripcion,
    categoria: productos[0]?.categoria,
  };

  // Devolvemos el nuevo objeto
  return producto;
}
