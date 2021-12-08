import React, { useContext } from 'react'
import { Storecontext } from "../App"
import styled from 'styled-components'
import { useGetListQuery } from "../services/asosAPI"
import { HeroPage, Spinner } from "."
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop'
import { BagAdd, Heart } from "@styled-icons/ionicons-outline"

function MensPage() {

    const { dispatch } = useContext(Storecontext)
    const { data, isFetching } = useGetListQuery(27110);
    if (isFetching) return <Spinner />
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
        <StyledMens>
            <Link to="/loftextraordinary">
            <HeroPage id={2} />
            </Link>
            <StyledCardContainer>
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

            </StyledCardContainer>
            <GoToTop />
        </StyledMens>
    )
}

const StyledAddTo = styled.div`
position: absolute;
display: flex;
gap: 0.5rem;
right: 1rem;
bottom: 0rem;
svg {
 :hover {
  color: #f75e53;
}
}
`

const StyledMens = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const StyledItemCard = styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
overflow: hidden;
background: white;
position: relative;
    img {
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
        margin-bottom: 1rem
    }
`

const StyledCardContainer = styled.div`
display: grid;
justify-content: space-around;
align-items: flex-start;
max-width: 1258px;
padding: 1rem;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
background: white;
`

export default MensPage
