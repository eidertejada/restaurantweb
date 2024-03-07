import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import firebase, { FirebaseContext } from "../../../firebase";
import Reportes from "./Reportes";

test('Muestra el producto mas vendido en un mes especifico', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Reportes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Producto Más Vendido')

    expect(text).toHaveTextContent('Producto Más Vendido')
}
)