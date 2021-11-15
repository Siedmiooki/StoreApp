import React, { useState } from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import { useGetListQuery } from "../services/asosAPI"
import { MainPage, HeroPage } from "./"

function Homepage() {

    const { data, isFetching } = useGetListQuery(27108);
    // 6992
    // console.log(data)

    if (isFetching) return "Loading..."
    return (
        <StyledHomepage>
            <HeroPage id="0" />
            <MainPage data={data} />
        </StyledHomepage>
    )
}

const StyledHomepage = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

export default Homepage
