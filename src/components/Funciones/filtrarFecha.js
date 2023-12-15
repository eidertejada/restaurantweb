import { formatearFecha } from "./formatearFecha";

const filtrarFecha = (objeto, dateOne, dateTwo) => {
  if (dateTwo === "") {
    const fechaUsuario = new Date(formatearFecha(dateOne));
    const arrayFecha = objeto.filter((pedido) => {
      const creacion = new Date(pedido.creado);
      return creacion >= fechaUsuario;
    });
    return arrayFecha;
  } else if (dateOne === "") {
    const fechaUsuario = new Date(formatearFecha(dateTwo));
    const arrayFecha = objeto.filter((pedido) => {
      const creacion = new Date(pedido.creado);
      return creacion <= fechaUsuario;
    });
    return arrayFecha;
  } else {
    const fechaUsuarioOne = new Date(formatearFecha(dateOne));
    const fechaUsuarioTwo = new Date(formatearFecha(dateTwo));
    const arrayFecha = objeto.filter((pedido) => {
      const creacion = new Date(pedido.creado);
      return creacion <= fechaUsuarioTwo && creacion >= fechaUsuarioOne;
    });
    return arrayFecha;
  }
};

export { filtrarFecha };
