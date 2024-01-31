import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import firebase, { FirebaseContext } from "../../../firebase";
import NuevoPlatillo from "./NuevoPlatillo";

test("Permite agregar un nuevo platillo al menu", () => {
  render(
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <BrowserRouter>
        <NuevoPlatillo />
      </BrowserRouter>
    </FirebaseContext.Provider>
  );

  const text = screen.getAllByText("Agregar Platillo")[0];

  expect(text).toHaveTextContent("Agregar Platillo");
});

test("Permite agregar un nombre, precio, categoria e imagen", () => {
    render(
      <FirebaseContext.Provider
        value={{
          firebase,
        }}
      >
        <BrowserRouter>
          <NuevoPlatillo />
        </BrowserRouter>
      </FirebaseContext.Provider>
    );
  
    const nombre = screen.getByText("Nombre");
    const precio = screen.getByText("Precio");
    const categoria = screen.getByText("Categoria");
    const imagen = screen.getByText("Imagen");
  
    expect(nombre).toHaveTextContent("Nombre");
    expect(precio).toHaveTextContent("Precio");
    expect(categoria).toHaveTextContent("Categoria");
    expect(imagen).toHaveTextContent("Imagen");
  });
  