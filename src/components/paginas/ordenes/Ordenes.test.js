import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import firebase, { FirebaseContext } from "../../../firebase";
import Ordenes from "./Ordenes";

it('should show orders view', () => {
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
