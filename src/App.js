import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Homepage } from "./components"


function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />


                    </Routes>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
