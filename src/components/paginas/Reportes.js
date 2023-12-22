import React, { useContext, useEffect, useState } from "react";
import ProductoMasVendido from "../ui/ProductoMasVendido";
import { FirebaseContext } from "../../firebase";
import SelectComponent from "../ui/SelectComponent";
import DateRangePicker from "../ui/DateRangePicker";
import ProductInputForm from "../ui/ProductInputForm";

const Reportes = () => {
  const { firebase } = useContext(FirebaseContext);

  // state con las ordenes
  const [ordenes, guardarOrdenes] = useState([]);

  useEffect(() => {
    const obtenerOrdenes = async () => {
      await firebase.db
        .collection("ordenes")
        .where("completado", "==", true)
        .onSnapshot(manejarSnapshot);
    };
    obtenerOrdenes();
  }, []);

  async function manejarSnapshot(snapshot) {
    const ordenes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    guardarOrdenes(ordenes);

    console.log(ordenes);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Reportes</h1>
      <ProductoMasVendido ordenes={ordenes} />
      <ProductInputForm ordenes={ordenes} />
    </>
  );
};

export default Reportes;
