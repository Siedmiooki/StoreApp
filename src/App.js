import React from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, OutletPage, ItemDetails, CartPage, MyListPage } from "./components";
import { createContext, useReducer } from "react";
import { storeReducer, initState } from "./reducers/storereducer"

export const Storecontext = createContext();

function App() {

    const [state, dispatch] = useReducer(storeReducer, initState)

    return (
        <Storecontext.Provider value={{ state, dispatch }}>
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
                            <Route exact path="/mylist" element={<MyListPage />} />
                    </Routes>
                </div>
            </div>
                <div className="footer">
            </div>
        </div>
        </Storecontext.Provider>
    )
}

export default App
