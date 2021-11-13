import React from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, KidsPage } from "./components"


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
                        <Route exact path="/womens" element={<WomensPage />} />
                        <Route exact path="/mens" element={<MensPage />} />
                        <Route exact path="/kids" element={<KidsPage />} />
                    </Routes>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
