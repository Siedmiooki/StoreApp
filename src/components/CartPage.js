import React, { useContext } from 'react'
import styled from 'styled-components'
import { TrashBin } from '@styled-icons/ionicons-outline'
import { Cartcontext } from '../App'

function CartPage() {

    const { state, dispatch } = useContext(Cartcontext)

    const removeFromCart = (item) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        })
    }

    const finalPrice = () => {
        let total = 0;
        for (let i = 0; i < state.items.length; i++) {
            total = total + state.items[i].priceValue
        }
        return total.toFixed(2)
    }

    const emptyCart = (
        <StyledEmptyCart>
            <h2>Your Bag is empty</h2>
            <h1>:(</h1>
        </StyledEmptyCart>
    )

    const fullCart = (
        <>
            <StyledTitle>Order Summary</StyledTitle>
            <StyledCartAll>
                {state.items.map(item => (
                    <StyledCartItem>
                        <img src={item.img} alt="pic" key={item.img} />
                        <StyledCartItemDesc>
                            <h4>{item.brand}</h4>
                            <p>ID: {item.itemId}</p>
                            <p>{item.name}</p>
                            <h3>{item.price}</h3>
                        </StyledCartItemDesc>
                        <StyledTrashBin
                            onClick={() => removeFromCart(item)}
                        />
                    </StyledCartItem>
                ))}
            </StyledCartAll>
            <StyledTitle>Final price: {`$${finalPrice()}`}</StyledTitle>
        </>
    )

    return (
        <StyledCart>
            {state.items.length > 0 ? fullCart : emptyCart}
        </StyledCart>
    )
}

const StyledTitle = styled.h3`
padding: 4rem;
`

const StyledEmptyCart = styled.div`
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
margin-top: 15vh;
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

export default CartPage
