import React from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, OutletPage, ItemDetails } from "./components"


function App() {
    return (
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
                    </Routes>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
