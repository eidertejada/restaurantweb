import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
/* import faker from "faker"; */

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let beneficiosYearOne = [0, 6, 20, 15, 25, -13, 25, 40, 5, 17, -12, 12];
let beneficiosYearTwo = [24, 12, 14, 32, 13, 3, 5, 13, 8, 11, 2, -12];
let meses = [
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

let midata = {
  labels: meses,
  datasets: [
    // Cada una de las lineas del grafico
    {
      label: "Primer Año",
      data: beneficiosYearOne,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      /* backgroundColor: "rgba(255, 99, 132, 0.5)", */
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
      pointBackgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Segundo Año",
      data: beneficiosYearTwo,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(76, 0, 255)",
      /* backgroundColor: "rgba(76, 0, 255, 0.53)", */
      pointRadius: 5,
      pointBorderColor: "rgb(76, 0, 255)",
      pointBackgroundColor: "rgb(76, 0, 255)",
    },
  ],
};

let options = {
  scales: {
    y: {},
    x: {
      ticks: {
        color: "blue",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};
export default function LinesChart() {
  return <Line data={midata} options={options} />;
}
