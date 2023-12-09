import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";
import Swal from "sweetalert2";

const Platillo = ({ platillo }) => {
  const { nombre, imagen, existencia, categoria, precio, descripcion, id } =
    platillo;
  // Existencia ref para acceder al valor directamente
  const existenciaRef = useRef(platillo.existencia);

  // Eliminar Platillo
  const eliminarPlatillo = (id) => {
    try {
      firebase.db.collection("productos").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const alerta = () => {
    Swal.fire({
      title: "Estás seguro que quieres eliminar el producto?",
      text: "Luego de eliminarlo, no podrás recuperarlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5cb85c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPlatillo(id);
        Swal.fire({
          title: "Producto Eliminado!",
          text: "Tu producto ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  // context de firebase para cambios en la BD
  const { firebase } = useContext(FirebaseContext);

  // Eliminar Orden

  // Modificar el estado del platillo en firebase
  const actualizarDisponibilidad = () => {
    const existencia = existenciaRef.current.value === "true";

    try {
      firebase.db.collection("productos").doc(id).update({
        existencia,
      });
    } catch (error) {}
  };

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:3/12">
            <img src={imagen} alt="platillo" className="h-60 w-full" />
            <div className="sm:flex sm:-mx-2 pl-3">
              <label className="block mt-5 sm:w-2/4">
                <span className="block text-gray-800 mb-2">Existencia</span>

                <select
                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={existencia}
                  ref={existenciaRef}
                  onChange={() => actualizarDisponibilidad()}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-500 w-full mt-5 p-2 text-white uppercase font-bold"
                  onClick={() => {
                    alerta();
                  }}
                >
                  Eliminar Producto
                </button>
              </label>
            </div>
          </div>

          <div className="lg:w-7/12 xl:9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre}</p>
            <p className="text-gray-600 mb-4">
              Categorias:
              <span className="text-gray-700 font-bold">
                {" "}
                {categoria.toUpperCase()}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{descripcion}</p>
            <p className="text-gray-600 mb-4">
              Precio:
              <span className="text-gray-700 font-bold"> ${precio}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platillo;
