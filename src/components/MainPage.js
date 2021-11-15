import React, { useState } from 'react'
import styled from 'styled-components'

function MainPage({ data }) {

    const item = data.products

    return (
        <div>
            <StyledMain>
                {item.map((item) => (
                    <StyledItemCard key={item.id}>
                        <img src={`https://${item.imageUrl}`} alt={item.name} />
                        <p>{item.name}</p>
                        <p><strong>{item.price.current.text}</strong></p>
                    </StyledItemCard>
                ))}

            </StyledMain>
        </div>
    )
}

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

const StyledMain = styled.div`
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

export default MainPage
