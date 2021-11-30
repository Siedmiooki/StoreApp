import React from 'react'
import styled from 'styled-components'
import { useGetListQuery } from "../services/asosAPI"
import { MainPage, HeroPage, Spinner } from "./"

function Homepage() {

    const { data, isFetching } = useGetListQuery(27108);

    if (isFetching) return <Spinner />
    return (
        <StyledHomepage>
            <HeroPage id={1} />
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
