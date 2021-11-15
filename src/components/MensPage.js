import React from 'react'
import styled from 'styled-components'
import { useGetListQuery } from "../services/asosAPI"
import { HeroPage } from "."

function MensPage() {

    const { data, isFetching } = useGetListQuery(27110);
    if (isFetching) return "Loading..."
    const item = data.products

    return (
        <StyledMens>
            <HeroPage id="2" />
            <StyledCardContainer>
                {item.map((item) => (
                    <StyledItemCard key={item.id}>
                        <img src={`https://${item.imageUrl}`} alt={item.name} />
                        <p>{item.name}</p>
                        <p><strong>{item.price.current.text}</strong></p>
                    </StyledItemCard>
                ))}

            </StyledCardContainer>
        </StyledMens>
    )
}

const StyledMens = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const StyledItemCard = styled.div`
position: relative;
text-align: center;
cursor: pointer;
overflow: hidden;
background: white;
    img {
        /* position: absolute; */
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    p {
        font-size: 1rem;
        text-align: left;
    }
    @media ( max-width: 1300px ) {
        padding: 0rem;
        border-radius: 1.5rem;
        margin-bottom: 1rem
    }
`

const StyledCardContainer = styled.div`
display: grid;
justify-content: space-around;
align-items: center;
max-width: 1258px;
padding: 1rem;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
background: white;
`

export default MensPage
