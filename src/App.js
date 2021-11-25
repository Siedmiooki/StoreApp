import React, { useState } from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, OutletPage, ItemDetails, CartPage } from "./components"


function App() {

    // cart + add to cart

    const [cartItems, setCartItems] = useState([])

    const addToCartHandler = ({ id, name, price, img }) => {
        const addedItem = {
            id: id,
            name: name,
            price: price,
            img: img
        }
        setCartItems([...cartItems, addedItem])
    }


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
                        <Route exact path="/:id" element={<ItemDetails addToCartHandler={addToCartHandler} />} />
                        <Route exact path="/cart" element={<CartPage cartItems={cartItems} />} />
                    </Routes>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
