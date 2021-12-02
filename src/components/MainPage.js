import React, { useContext } from 'react'
import { Cartcontext } from "../App"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop'
import { BagAdd, Heart } from "@styled-icons/ionicons-outline"

function MainPage({ data }) {

    const { dispatch } = useContext(Cartcontext)
    const item = data.products

    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
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
                            <Heart size="25" />
                            <BagAdd size="25" onClick={() => addToCart(item)} />
                        </StyledAddTo>
                    </StyledItemCard>
                ))}
                <GoToTop />
            </StyledMain>
        </div>
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
`

export default MainPage
