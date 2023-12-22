import React from "react";
import { traerProducto } from "../Funciones/traerProducto";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
/* import faker from "faker"; */

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

export default function LinesChart({ itemOne, itemTwo }) {
  const data = {
    labels: [`Producto 1: ${itemOne.nombre}`, `Producto 2: ${itemTwo.nombre}`],
    datasets: [
      {
        label: "Cantidad Vendida",
        data: [itemOne.cantidad, itemTwo.cantidad],
        backgroundColor: ["#22c55e", "#ef4444"],
        borderColor: ["green", "#b91c1c"],
      },
    ],
  };

  const options = {};

  console.log(itemOne);
  console.log(itemTwo);

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
