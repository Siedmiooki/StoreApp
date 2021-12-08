import React, { useContext } from 'react'
import styled from 'styled-components'
import { TrashBin } from '@styled-icons/ionicons-outline'
import { Storecontext } from '../App'
import { Link } from 'react-router-dom'

function MyListPage() {

    const { state, dispatch } = useContext(Storecontext)

    const removeFromLikes = (item) => {
        dispatch({
            type: "REMOVE_FROM_LIKES",
            payload: item
        })
    }

    const finalPrice = () => {
        let total = 0;
        for (let i = 0; i < state.likes.length; i++) {
            total = total + state.likes[i].priceValue
        }
        return total.toFixed(2)
    }

    const emptyLikes = (
        <StyledEmptyLikes>
            <h2>Your list is empty</h2>
            <h1>:(</h1>
        </StyledEmptyLikes>
    )

    const fullLikes = (
        <>
            <StyledTitle>My List</StyledTitle>
            <StyledCartAll>
                {state.likes.map(item => (
                    <StyledCartItem key={item.itemId}>
                        <Link to={`/${item.itemId}`}>
                            <img src={item.img} alt="pic" />
                        </Link>
                        <StyledCartItemDesc>
                            <h4>{item.brand}</h4>
                            <p>ID: {item.itemId}</p>
                            <p>{item.name}</p>
                            <h3>{item.price}</h3>
                        </StyledCartItemDesc>
                        <StyledTrashBin
                            onClick={() => removeFromLikes(item)}
                        />
                    </StyledCartItem>
                ))}
            </StyledCartAll>
            {/* <StyledTitle>Final price: {`$${finalPrice()}`}</StyledTitle> */}
        </>
    )

    return (
        <StyledCart>
            {state.likes.length > 0 ? fullLikes : emptyLikes}
        </StyledCart>
    )
}

const StyledTitle = styled.h3`
padding: 2rem;
`

const StyledEmptyLikes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 60vh;
width: 80%;
h2 {
    font-size: 3rem;
}
h1 {
    font-size: 5rem;
    transform: rotate(90deg)
}
`

const StyledTrashBin = styled(TrashBin)`
width: 1.6rem;
align-self: flex-end;
margin-left: 3rem;
cursor: pointer;
`

const StyledCartItemDesc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin-left: 1rem;
`

const StyledCart = styled.div`
height: 85vh;
width: 100%;
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
/* h3 {
    margin: 4rem;
} */
`

const StyledCartAll = styled.div`
width: 80%;
padding: 2rem;
border-top: 1px solid #b3b1b1;
border-bottom: 1px solid #b3b1b1;
`

const StyledCartItem = styled.div`
display: flex;
flex-direction: row;
height: 15vh;
width: 80%;
padding: 1rem;
margin-bottom: 1rem;
img {
    height: 100%;
}
`

export default MyListPage
