import React, { useState } from "react";
import LinesChart from "../Graficas/LinesChart";
import { filtrarProductos } from "../Funciones/filtrarProductos";

const ComparacionDeVentas = ({ ordenes }) => {
  // state con las ordenes
  const [nombre, setNombre] = useState("");
  const [fechaOneIni, setFechaOneIni] = useState("");
  const [fechaOneFin, setFechaOneFin] = useState("");

  let productos = [];

  function traerDatos() {
    productos = filtrarProductos(ordenes, nombre, fechaOneIni, fechaOneFin);
    console.log(productos);
  }

  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre del producto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          placeholder="Nombre del Producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fecha"
        >
          Fecha de inicio
        </label>
        <input
          id="fecha"
          type="date"
          value={fechaOneIni}
          onChange={(e) => setFechaOneIni(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fecha"
        >
          Fecha final
        </label>
        <input
          id="fecha"
          type="date"
          value={fechaOneFin}
          onChange={(e) => setFechaOneFin(e.target.value)}
        />
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
        onClick={() => {
          traerDatos();
        }}
      >
        Consultar
      </button>
      {/* <div className="mx-auto px-2 border border-green-400 w-[450px] h-[230px]">
          <LinesChart />
        </div> */}
    </div>
  );
};

export default ComparacionDeVentas;
