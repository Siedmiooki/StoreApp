import React, { useState } from 'react'
import styled from 'styled-components'
import { HeroState } from "../HeroState"

function HeroPage({ id }) {

    const [hero] = useState(HeroState)

    return (
        <StyledHeroSection>
            <StyledImg src={hero[id].link} alt="hero" />
            <StyledInfoContainer>
                <StyledTitle>{hero[id].name}</StyledTitle>
                <StyledButton>{hero[id].btnText}</StyledButton>
            </StyledInfoContainer>
        </StyledHeroSection>
    )
}

const StyledHeroSection = styled.div`
max-width: 1258px;
background: white;
display: flex;
align-items: flex-end;
justify-content: flex-end;
position: relative;
cursor: pointer;
margin-bottom: 2rem;
margin-top: 10rem;
@media ( max-width: 1100px ) {
    margin-top: 8rem;
    }
@media ( max-width: 500px ) {
    margin-top: 7rem;
    }
`
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const StyledInfoContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-end;
`
const StyledTitle = styled.h2`
    background: white;
    color: black;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    font-size: 3rem;
@media ( max-width: 1100px ) {
        font-size: 2rem;
        padding: 0.5rem 1rem;
}
@media ( max-width: 500px ) {
        font-size: 1rem;
        margin-bottom: 0.5rem;
}
`
const StyledButton = styled.button`
    margin-bottom: 1rem;
    @media ( max-width: 1100px ) {
        font-size: 1rem;
        padding: 0.5rem 1rem;
}
@media ( max-width: 500px ) {
        font-size: 0.5rem;
}
`

export default HeroPage
