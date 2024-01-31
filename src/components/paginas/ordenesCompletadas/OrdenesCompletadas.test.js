import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import firebase, { FirebaseContext } from "../../../firebase";
import OrdenesCompletadas from "./OrdenesCompletadas";

test("Muestra las ordenes completadas que fueron realizadas", () => {
  render(
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <BrowserRouter>
        <OrdenesCompletadas />
      </BrowserRouter>
    </FirebaseContext.Provider>
  );

  const text = screen.getByText("Ordenes Completadas");

  expect(text).toHaveTextContent("Ordenes Completadas");
});
