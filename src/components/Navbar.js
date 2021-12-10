import React, { useContext } from 'react'
import { Storecontext } from '../App'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Bag, BagCheck, Heart, Person } from "@styled-icons/ionicons-outline"


function Navbar() {

    const { state } = useContext(Storecontext)

    return (
        <StyledNavbar>
            <StyledNavBox>
            <StyledLogo>
                <Link to="/">
                        <h1><span>.</span>OK$A</h1>
                    <p>Trend</p>
                    <p>Store</p>
                </Link>
            </StyledLogo>
            <StyledLinks>
                <Link to="/women">.WOMEN</Link>
                <Link to="/men">.MEN</Link>
                <Link to="/outlet">.OUTLET</Link>
            </StyledLinks>
            <StyledIcons>
                <Link to="/userpage">
                    <StyledPerson>
                            <Person />
                        {state.orders.length > 0 ? <div>{state.orders.length}</div> : null}
                    </StyledPerson>
                </Link>
                <Link to="/mylist">
                    <StyledHeart>
                            <Heart />
                        {state.likes.length > 0 ? <div>{state.likes.length}</div> : null}
                    </StyledHeart>
                </Link>
                <Link to="/cart">
                    <StyledBag>
                            {state.items.length > 0 ? <BagCheck /> : <Bag />}
                        {state.items.length > 0 ? <div>{state.items.length}</div> : null}
                    </StyledBag>
                </Link>
            </StyledIcons>
            </StyledNavBox>
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
    justify-content: center;
    box-shadow: 0 2px 12px 0px lightgray;
    @media ( max-width: 1100px ) {

}
    a {
        color: black;
        text-decoration: none;
    }
    h1 {
        padding: 1rem;
        letter-spacing: 2px;
        font-weight: 400;
    }
    span {
        color: #f75e53;
    }
`

const StyledNavBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 1680px;
@media ( max-width: 1100px ) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
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
@media ( max-width: 1100px ) {
    width: 50%;
    margin-left: 0;
    h1 {
        font-size: 0.7rem;
    }
    p {
        font-size: 0.7rem;
    }
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
    :hover {
  color: #f75e53;
}
}
@media ( max-width: 1100px ) {
    width: 90%;
    order: 1;
    padding: 0.5rem;
a {
    font-size: 0.9rem;
}
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
width: 30px;
height: 30px;
 :hover {
  color: #f75e53;
}
}
@media ( max-width: 1100px ) {
    justify-content: center;
svg {
width: 20px;
height: 20px;
}
p {
padding: 0 1.5rem;
cursor: pointer
}
div {
padding: 0 1.5rem;
cursor: pointer
}
}
`

const StyledPerson = styled.div`
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
@media ( max-width: 1100px ) {
div {
    width: 1.2rem;
    height: 1.2rem;
}
}
`

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
@media ( max-width: 1100px ) {
div {
    width: 1.2rem;
    height: 1.2rem;
}
}
`

const StyledHeart = styled.div`
position: relative;
padding: 0rem;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0 !important;
    top: 1rem;
    right: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    background: #f75e53;
    border-radius: 50%;
}
@media ( max-width: 1100px ) {
div {
    width: 1.2rem;
    height: 1.2rem;
    right: 0.85rem;
}
}
`





export default Navbar
