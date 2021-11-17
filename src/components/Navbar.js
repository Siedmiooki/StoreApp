import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { motion } from 'framer-motion'

function Navbar() {
    return (
        <StyledNavbar>
            <StyledLogo>
                <Link to="/">
                    <h1>.OK$A</h1>
                    <p>Trend</p>
                    <p>Store</p>
                </Link>
            </StyledLogo>
            <StyledLinks>
                <Link to="women">.WOMEN</Link>
                <Link to="men">.MEN</Link>
                <Link to="outlet">.OUTLET</Link>
            </StyledLinks>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 10vh;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: space-between;
    box-shadow: 0 2px 12px 0px lightgray;
    a {
        color: black;
        text-decoration: none;
    }
    h1 {
        padding: 1rem;
        letter-spacing: 2px;
        font-weight: 400;
    }
`
const StyledLogo = styled.div`
display: flex;
width: 40%;
margin-left: 3rem;
h1 {
    letter-spacing: 5px;
}
a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
}
`
const StyledLinks = styled.nav`
width: 30%;
display: flex;
justify-content: space-around;
a {
    font-weight: 400;
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
}
`

export default Navbar
