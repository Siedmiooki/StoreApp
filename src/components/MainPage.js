import React, { useContext } from 'react'
import { Storecontext } from "../App"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop'
import { BagAdd, Heart } from "@styled-icons/ionicons-outline"
import { StyledItemCard, StyledAddTo } from "./ComponentStyles"

function MainPage({ data }) {

    const { dispatch } = useContext(Storecontext)
    const item = data.products

    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        });
    }

    const addToLikes = (item) => {
        dispatch({
            type: "ADD_TO_LIKES",
            payload: item
        });
    }

    return (
        <div>
            <StyledMain>
                {item.map((item) => (
                    <StyledItemCard key={item.id}>
                        <Link to={`/${item.id}`} key={item.id}>
                        <img src={`https://${item.imageUrl}`} alt={item.name} />
                        </Link>
                        <p>{item.name}</p>
                        <p><strong>{item.price.current.text}</strong></p>
                        <StyledAddTo>
                            <Heart size="25" onClick={() => addToLikes(item)} />
                            <BagAdd size="25" onClick={() => addToCart(item)} />
                        </StyledAddTo>
                    </StyledItemCard>
                ))}
                <GoToTop />
            </StyledMain>
        </div>
    )
}

const StyledMain = styled.div`
display: grid;
justify-content: space-around;
align-items: flex-start;
max-width: 1258px;
padding: 1rem;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
background: white;
@media ( max-width: 1258px ) {
    max-width: 1000px;
    }
@media ( max-width: 1000px ) {
    max-width: 800px;
    }
@media ( max-width: 770px ) {
    max-width: 450px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    }
`

export default MainPage
