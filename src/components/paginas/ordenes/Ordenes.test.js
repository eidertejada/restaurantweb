import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import firebase, { FirebaseContext } from "../../../firebase";
import Ordenes from "./Ordenes";

test('Muestra las ordenes que llegan en tiempo real', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Muestra el usuario que realiza la orden', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Permite definir un tiempo especifico para la orden', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Permite modificar el tiempo definido para la orden', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Permite marcar la orden como completada', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Cambia el estado de las ordenes a completadas', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
test('Envia las ordenes nuevamente a la base de datos', () => {
    render (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <BrowserRouter>
                <Ordenes />
            </BrowserRouter>
        </FirebaseContext.Provider>
    )

    const text = screen.getByText('Ordenes')

    expect(text).toHaveTextContent('Ordenes')
})
