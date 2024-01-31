import React, { useEffect, useState, useContext } from "react";
import { filtrarProductos } from "../Funciones/filtrarProductos";
import { formatearFecha } from "../Funciones/formatearFecha";
import LinesChart from "../Graficas/LinesChart";
import { traerProducto } from "../Funciones/traerProducto";
import Swal from "sweetalert2";
import { FirebaseContext } from "../../firebase";

const ProductInputForm = ({ ordenes }) => {
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const obtenerOrdenes = async () => {
      await firebase.db
        .collection("productos")
        .where("existencia", "==", true)
        .onSnapshot(manejarSnapshot);
    };
    obtenerOrdenes();
  }, []);

  async function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProductos(productos);

    console.log(productos);
  }

  const [productos, setProductos] = useState([]);
  const [productName1, setProductName1] = useState("-- Seleccione --");
  const [productName2, setProductName2] = useState("-- Seleccione --");
  const [date1Product1, setDate1Product1] = useState("");
  const [date2Product1, setDate2Product1] = useState("");
  const [date1Product2, setDate1Product2] = useState("");
  const [date2Product2, setDate2Product2] = useState("");
  const [display, setDisplay] = useState("hidden");
  const [item1, setItemOne] = useState({});
  const [item2, setItemTwo] = useState({});
  let itemOne = {};
  let itemTwo = {};
  let productsOne = [];
  let productsTwo = [];

  const handleProductNameOneChange = (event) => {
    setProductName1(event.target.value);
  };

  const handleProductNameTwoChange = (event) => {
    setProductName2(event.target.value);
  };

  const alert = (item) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `El producto: ${item} no se encuentra en el periodo indicado`,
      footer: '<a href="#">No existe producto vendido en este periodo</a>',
    });
  };

  const alertOne = () => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `Debes seleccionar un producto`,
      footer: '<a href="#">Selecciona un producto para poder comparar</a>',
    });
  };

  function traerDatos() {
    productsOne = filtrarProductos(
      ordenes,
      productName1,
      date1Product1,
      date2Product1
    );

    productsTwo = filtrarProductos(
      ordenes,
      productName2,
      date1Product2,
      date2Product2
    );

    /*  setItemOne(traerProducto(productsOne, productName1));
    setItemTwo(traerProducto(productsTwo, productName2)); */

    itemOne = traerProducto(productsOne, productName1);
    itemTwo = traerProducto(productsTwo, productName2);
    setItemOne(itemOne);
    setItemTwo(itemTwo);
    if (itemOne.nombre === undefined) {
      alert(productName1);
    }
    if (itemTwo.nombre === undefined) {
      alert(productName2);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "productName1":
        setProductName1(value);
        break;
      case "productName2":
        setProductName2(value);
        break;
      case "date1Product1":
        setDate1Product1(value);
        break;
      case "date2Product1":
        setDate2Product1(value);
        break;
      case "date1Product2":
        setDate1Product2(value);
        break;
      case "date2Product2":
        setDate2Product2(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      productName1 === "-- Seleccione --" ||
      productName2 === "-- Seleccione --"
    ) {
      setDisplay("hidden");
    } else {
      setDisplay("block");
    }
  };

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-3 mb-3">
        <h2 className="text-2xl font-bold mb-4">Estadistica de Ventas</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="mb-4">
              <label
                htmlFor="productOneSelect"
                className="text-sm font-semibold"
              >
                Nombre del Producto 1:
              </label>

              <select
                name="productOneSelect"
                id="productOneSelect"
                className="block w-full p-2 mt-1 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
                value={productName1}
                onChange={handleProductNameOneChange}
              >
                <option value={"-- Seleccione --"} key={"-- Seleccione --"}>
                  -- Seleccione --
                </option>
                {productos.map((producto) => (
                  <option key={producto.nombre} value={producto.nombre}>
                    {producto.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="date1Product1"
              className="block text-sm font-semibold mb-2"
            >
              Fecha de inicio del Producto 1:
            </label>
            <input
              type="date"
              id="date1Product1"
              name="date1Product1"
              value={date1Product1}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date2Product1"
              className="block text-sm font-semibold mb-2"
            >
              Fecha final del Producto 1:
            </label>
            <input
              type="date"
              id="date2Product1"
              name="date2Product1"
              value={date2Product1}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productTwoSelect" className="text-sm font-semibold">
              Nombre del Producto 2:
            </label>

            <select
              name="productTwoSelect"
              id="productTwoSelect"
              className="block w-full p-2 mt-1 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
              value={productName2}
              onChange={handleProductNameTwoChange}
            >
              <option value={"Hola"} key={"Hola"}>
                -- Seleccione --
              </option>
              {productos.map((producto) => (
                <option key={producto.nombre} value={producto.nombre}>
                  {producto.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="date1Product2"
              className="block text-sm font-semibold mb-2"
            >
              Fecha de inicio del Producto 2:
            </label>
            <input
              type="date"
              id="date1Product2"
              name="date1Product2"
              value={date1Product2}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date2Product2"
              className="block text-sm font-semibold mb-2"
            >
              Fecha final del Producto 2:
            </label>
            <input
              type="date"
              id="date2Product2"
              name="date2Product2"
              value={date2Product2}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                console.log(ordenes);
                if (
                  productName1 === "-- Seleccione --" ||
                  productName2 === "-- Seleccione --"
                ) {
                  alertOne();
                } else {
                  traerDatos();
                }

                console.log(productsOne);
                console.log(productsTwo);

                console.log(itemOne);
                console.log(itemTwo);
              }}
            >
              Consultar
            </button>
          </div>
        </form>
      </div>
      <div
        className={`m-auto bg-gray-100 p-6 rounded-lg shadow-md w-100 mt-3 sm:w-full none md:max-w-md ${display} flex justify-center`}
      >
        <LinesChart itemOne={item1} itemTwo={item2} />
      </div>
    </>
  );
};

export default ProductInputForm;
