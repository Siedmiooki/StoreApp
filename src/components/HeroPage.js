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
`
const StyledButton = styled.button`
    margin-bottom: 1rem;
`

export default HeroPage
