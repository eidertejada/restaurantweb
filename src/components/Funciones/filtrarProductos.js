import { obtenerProductos } from "./obtenerProductos";
import dimensionarArray from "./dimensionarArray";

const filtrarProductos = (ordenes, endpointinit, dateInit, dateEnd) => {
  if (endpointinit === "") {
    let arrayFiltrado = obtenerProductos(ordenes, dateInit, dateEnd);
    let newArray = dimensionarArray(arrayFiltrado);
    console.log(arrayFiltrado);
    console.log(newArray);

    return newArray;
  } else {
    let arrayFiltrado = obtenerProductos(ordenes, dateInit, dateEnd);
    let newArray = dimensionarArray(arrayFiltrado);

    arrayFiltrado = newArray.filter((elemento) => {
      return elemento.nombre.toLowerCase() === endpointinit.toLowerCase();
    });

    return arrayFiltrado;
    console.log(arrayFiltrado);
  }
};

export { filtrarProductos };
