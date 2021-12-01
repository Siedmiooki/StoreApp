import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Bag, BagCheck, BagAdd, Heart, Person } from "@styled-icons/ionicons-outline"


function Navbar({ cartItems }) {
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
            <StyledIcons>
                <p><Person size="30" /></p>
                <p><Heart size="30" /></p>
                <Link to="/cart">
                    <StyledBag>
                        {cartItems.length > 0 ? <BagCheck size="30" /> : <Bag size="30" />}
                        {cartItems.length > 0 ? <div>{cartItems.length}</div> : null}
                    </StyledBag>
                </Link>
            </StyledIcons>
        </StyledNavbar>
    )
}

const StyledBag = styled.div`
position: relative;
padding: 0rem;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0 !important;
    top: 1rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    background: #f75e53;
    border-radius: 50%;
}
`

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

const StyledIcons = styled.div`
display: flex;
width: 40%;
justify-content: flex-end;
margin-right: 2rem;
p {
padding: 0 1.5rem;
cursor: pointer
}
div {
padding: 0 1.5rem;
cursor: pointer
}
svg {
 :hover {
  color: #f75e53;
}
}
`

const StyledLogo = styled.div`
display: flex;
width: 40%;
margin-left: 2rem;
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
