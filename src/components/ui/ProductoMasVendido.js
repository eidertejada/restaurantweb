import React, { useEffect, useState } from "react";
import dimensionarArray from "../Funciones/dimensionarArray";
import { filtrarFecha } from "../Funciones/filtrarFecha";
import { filtrarProductos } from "../Funciones/filtrarProductos";
import { startOfMonth, endOfMonth, format } from "date-fns";
import { formatearFecha } from "../Funciones/formatearFecha";
import { obtenerFechasDelMes } from "../Funciones/obtenerFechasDelMes";
import { productoMasVendidoConInformacion } from "../Funciones/productoMasVendidoConInformacion";
import { encontrarProductoMasVendido } from "../Funciones/encontrarProductoMasVendido";
import { agruparOrdenes } from "../Funciones/agruparOrdenes";
import Swal from "sweetalert2";
import BarChart from "../Graficas/BarChart";

const ProductoMasVendido = ({ ordenes }) => {
  const alert = () => {
    setIsActive("text-gray-500 opacity-50");
    setImagen(
      "https://firebasestorage.googleapis.com/v0/b/restaurant-375ba.appspot.com/o/productos%2Fd6d07296-8309-48f4-ae55-e89b087daf54.jpg?alt=media&token=6cb34a80-a9a2-4eff-b72c-623a9e9999fe"
    );
    setNombre("Pizza");
    setCantidad(0);
    setDescripcion("Deliciosa Pizza De Doble queso");
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay ordenes en este mes!",
      footer: '<a href="#">No existe producto vendido en este mes</a>',
    });
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [isActive, setIsActive] = useState("text-gray-500 opacity-50");
  const [imagen, setImagen] = useState(
    "https://firebasestorage.googleapis.com/v0/b/restaurant-375ba.appspot.com/o/productos%2Fd6d07296-8309-48f4-ae55-e89b087daf54.jpg?alt=media&token=6cb34a80-a9a2-4eff-b72c-623a9e9999fe"
  );
  const [nombre, setNombre] = useState("Pizza");
  const [cantidad, setCantidad] = useState("0");
  const [descripcion, setDescripcion] = useState(
    "Deliciosa Pizza De Doble queso"
  );

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [display, setDisplay] = useState("hidden");

  const traerDatos = (ordenes, mes) => {
    let newArray = [];
    let FechaMesActual = {};
    switch (mes) {
      case "Noviembre-2023":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(ordenes, "", "11/01/2023", "11/31/2023");
        return newArray;
      case "Diciembre-2023":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(ordenes, "", "12/01/2023", "12/31/2023");
        return newArray;
      case "Enero":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Febrero":
        FechaMesActual = obtenerFechasDelMes(2);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Marzo":
        FechaMesActual = obtenerFechasDelMes(3);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Abril":
        FechaMesActual = obtenerFechasDelMes(4);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Mayo":
        FechaMesActual = obtenerFechasDelMes(5);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Junio":
        FechaMesActual = obtenerFechasDelMes(6);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Julio":
        FechaMesActual = obtenerFechasDelMes(7);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Agosto":
        FechaMesActual = obtenerFechasDelMes(8);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Septiembre":
        FechaMesActual = obtenerFechasDelMes(9);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Octubre":
        FechaMesActual = obtenerFechasDelMes(10);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Noviembre":
        FechaMesActual = obtenerFechasDelMes(11);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Diciembre":
        FechaMesActual = obtenerFechasDelMes(12);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "diciembre":
        FechaMesActual = obtenerFechasDelMes(12);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
    }
  };

  let MesActual = new Date().getMonth() + 1;
  let FechaMesActual = obtenerFechasDelMes(MesActual);
  let productos = [];
  let productoMasVendido = {};
  const [ordenesGrafica, setOrdenesGrafica] = useState([]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  /* productos = filtrarProductos(ordenes, "", fechaInicio, fechaFin); */

  /* const { nombre, cantidad, descripcion, imagen } = productoMasVendido; */

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="monthSelect" className="text-sm font-semibold">
            Mes:
          </label>
          <select
            name="monthSelect"
            id="monthSelect"
            className="block w-full p-2 mt-1 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option key={"Noviembre-2023"} value="Noviembre-2023">
              Noviembre-2023
            </option>
            <option key={"Diciembre-2023"} value="Diciembre-2023">
              Diciembre-2023
            </option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <h2 className={`text-2xl font-bold mb-4  ${isActive}`}>
          Producto Más Vendido
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={imagen}
            alt="Producto Más Vendido"
            className={`w-16 h-16 object-cover rounded-full ${isActive}`}
          />
          <div className={`ml-4 ${isActive}`}>
            <p className="text-lg font-semibold">{nombre}</p>
            <p className="text-gray-600">{descripcion}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className={`text-lg font-semibold ${isActive}`}>
            Vendido en {selectedMonth.toUpperCase()}:{" "}
            <span className="text-green-500">{cantidad} unidades</span>
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              productos = traerDatos(ordenes, selectedMonth);
              setOrdenesGrafica(productos);
              productoMasVendido = encontrarProductoMasVendido(productos);

              setImagen(productoMasVendido?.imagen);
              setNombre(productoMasVendido?.nombre);
              setDescripcion(productoMasVendido?.descripcion);
              setCantidad(productoMasVendido?.cantidad);
              setIsActive("");
              setDisplay("block");
              console.log(ordenes);
              console.log(selectedMonth);
              console.log(productos);
              console.log(FechaMesActual);
              console.log(productoMasVendido);
              if (productoMasVendido === null) {
                setDisplay("hidden");
                alert();
              }
            }}
          >
            Consultar
          </button>
        </div>
      </div>
      <div
        className={`m-auto bg-gray-100 p-6 rounded-lg shadow-md w-100 mt-3 none md:max-w-2xl ${display} flex justify-center`}
      >
        <BarChart ordenes={ordenesGrafica}></BarChart>
      </div>
    </>
  );
};

export default ProductoMasVendido;
