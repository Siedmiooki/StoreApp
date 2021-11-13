import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { motion } from 'framer-motion'


const StyledNavbar = styled.div`
    height: 10vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 8px 0px lightgray;
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
width: 40%;
display: flex;
justify-content: space-around;
a {
    font-weight: 400;
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
}
`


function Navbar() {
    return (
        <StyledNavbar>
            <StyledLogo>
                <Link to="/">
                    <h1>OK$A</h1>
                    <p>Trend</p>
                    <p>Store.</p>
                </Link>
            </StyledLogo>
            <StyledLinks>
                <Link to="womens">.WOMENS</Link>
                <Link to="mens">.MENS</Link>
                <Link to="kids">.KIDS</Link>
            </StyledLinks>
        </StyledNavbar>
    )
}

export default Navbar
