export function productoMasVendidoConInformacion(ventas) {
  // Inicializa las variables
  let productoMasVendido = null;
  let cantidadMaxima = 0;

  // Itera sobre el array de ventas
  for (let venta of ventas) {
    // Obtiene la cantidad de unidades vendidas del producto
    let cantidad = venta.cantidad;

    // Si la cantidad es mayor que la cantidad máxima registrada, actualiza la cantidad máxima y el nombre del producto más vendido
    if (cantidad > cantidadMaxima) {
      //   Si el producto ya existe en el diccionario, actualiza la cantidad
      if (productoMasVendido && productoMasVendido.nombre === venta.nombre) {
        productoMasVendido.cantidad += cantidad;
      } else {
        // Si el producto no existe en el diccionario, lo crea
        productoMasVendido = {
          cantidad: cantidad,
          nombre: venta.nombre,
          imagen: venta.imagen,
          id: venta.id,
          descripcion: venta.descripcion,
          categoria: venta.categoria,
        };
      }

      cantidadMaxima = cantidad;
    }
  }

  // Devuelve el producto más vendido
  return productoMasVendido;
}

/* ventas = [
  {
    cantidad: 2,
    categoria: "comida",
    descripcion: "Deliciosa pizza",
    id: "asdaosdasdo",
    nombre: "Pizza",
    precio: 5,
    total: 10,
  },
  {
    cantidad: 3,
    categoria: "comida",
    descripcion: "Deliciosa pizza",
    id: "asdaldlkosdasdo",
    nombre: "Pizza",
    precio: 5,
    total: 15,
  },
  {
    cantidad: 1,
    categoria: "bebida",
    descripcion: "Delicioso jugo",
    id: "asdadaaosdasdo",
    nombre: "Jugo de mora",
    precio: 2,
    total: 2,
  },
  {
    cantidad: 3,
    categoria: "bebida",
    descripcion: "Delicioso jugo",
    id: "asdaosdasdfssdo",
    nombre: "Jugo de mora",
    precio: 2,
    total: 6,
  },
  {
    cantidad: 3,
    categoria: "desayuno",
    descripcion: "Delicioso pan",
    id: "asdaosdasdsdo",
    nombre: "pan",
    precio: 5,
    total: 15,
  },
  {
    cantidad: 2,
    categoria: "comida",
    descripcion: "Deliciosa pizza",
    id: "asdaosdasdo",
    nombre: "Pizza",
    precio: 5,
    total: 10,
  },
];
 */
