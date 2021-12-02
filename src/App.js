import React from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, OutletPage, ItemDetails, CartPage } from "./components";
import { createContext, useReducer } from "react";
import { cartReducer, initState } from "./reducers/cartreducer"

export const Cartcontext = createContext();

function App() {

    const [state, dispatch] = useReducer(cartReducer, initState)

    return (
        <Cartcontext.Provider value={{ state, dispatch }}>
        <div className="app">
            <GlobalStyles />
            <div className="navbar">
                    <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/women" element={<WomensPage />} />
                        <Route exact path="/men" element={<MensPage />} />
                            <Route exact path="/outlet" element={<OutletPage />} />
                            <Route exact path="/:id" element={<ItemDetails />} />
                            <Route exact path="/cart" element={<CartPage />} />
                    </Routes>
                </div>
            </div>
                <div className="footer">
            </div>
        </div>
        </Cartcontext.Provider>
    )
}

export default App
