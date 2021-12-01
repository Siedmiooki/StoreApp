import React, { useState } from 'react';
import GlobalStyles from "./components/Globalstyles";
import { Routes, Route } from "react-router-dom";
import { Navbar, Homepage, WomensPage, MensPage, OutletPage, ItemDetails, CartPage } from "./components"


function App() {

    // cart + add/remove cart

    const [cartItems, setCartItems] = useState([])

    const addToCartHandler = ({ itemId, name, brand, price, priceValue, img, proId }) => {
        const addedItem = {
            id: itemId,
            name: name,
            brand: brand,
            price: price,
            priceValue: priceValue,
            img: img,
            proId: proId
        }
        setCartItems([...cartItems, addedItem])
    }

    const removeFromCartHandler = (proId) => {
        const newCart = cartItems.filter(item => item.proId !== proId);
        setCartItems(newCart)
    }


    return (
        <div className="app">
            <GlobalStyles />
            <div className="navbar">
                <Navbar cartItems={cartItems} />
            </div>
            <div className="main">
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/women" element={<WomensPage />} />
                        <Route exact path="/men" element={<MensPage />} />
                        <Route exact path="/outlet" element={<OutletPage addToCartHandler={addToCartHandler} />} />
                        <Route exact path="/:id" element={<ItemDetails addToCartHandler={addToCartHandler} />} />
                        <Route exact path="/cart" element={<CartPage cartItems={cartItems} removeFromCartHandler={removeFromCartHandler} />} />
                    </Routes>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
