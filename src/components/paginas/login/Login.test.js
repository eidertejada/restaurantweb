import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import firebase, { FirebaseContext } from "../../../firebase";
import Login from "./Login";

test("Permite ingresar el email y contraseña para el inicio de sesión", () => {
  render(
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </FirebaseContext.Provider>
  );

  const textEmail = screen.getByText("Correo Electrónico");

  expect(textEmail).toHaveTextContent("Correo Electrónico");
});
