import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../../firebase";
import Orden from "../../ui/Orden";

const OrdenesCompletadas = () => {
  // Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  // state con las ordenes
  const [ordenes, guardarOrdenes] = useState([]);

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db
        .collection("ordenes")
        .where("completado", "==", true)
        .onSnapshot(manejarSnapshot);
    };
    obtenerOrdenes();
  }, []);

  function manejarSnapshot(snapshot) {
    const ordenes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    guardarOrdenes(ordenes);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Ordenes Completadas</h1>

      <div className="sm:flex sm:flex-wrap -mx-3">
        {ordenes.length > 0 &&
          ordenes.map((orden) => <Orden key={orden.id} orden={orden} />)}
        {ordenes.length === 0 && (
          <h1 className="text-center text-2xl font-semibold m-3">
            No hay ordenes completadas
          </h1>
        )}
      </div>
    </>
  );
};

export default OrdenesCompletadas;
