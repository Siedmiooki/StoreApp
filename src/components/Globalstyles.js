import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost';
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
}
button {
    background-color: white;
    color: black;
    font-family: 'Jost';
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    border: none;
    padding: 1rem 2rem;
    transition: all 0.5s ease;
    &:hover{
        background-color: #f75e53;
        color: white;
    }
}
`
export default GlobalStyles
