import React, { useContext } from 'react'
import { Storecontext } from "../App"
import styled from 'styled-components'
import { useGetListQuery } from "../services/asosAPI"
import { HeroPage, Spinner } from "."
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop'
import { BagAdd, Heart } from "@styled-icons/ionicons-outline"
import { StyledCardContainer, StyledItemCard, StyledAddTo } from "./ComponentStyles"

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



const StyledMens = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export default MensPage
