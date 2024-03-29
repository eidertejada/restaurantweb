import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import firebase, { FirebaseContext } from "../../../firebase";
import Menu from "./Menu";

test("Muestra la lista del menu", () => {
  render(
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </FirebaseContext.Provider>
  );

  const text = screen.getByText("Agregar Platillo");

  expect(text).toHaveTextContent("Agregar Platillo");
});
