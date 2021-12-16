import React, { useContext } from 'react'
import styled from 'styled-components'
import { TrashBin } from '@styled-icons/ionicons-outline'
import GoToTop from './GoToTop'
import { Storecontext } from '../App'
import { OrderForm } from "."

function CartPage() {

    const { state, dispatch } = useContext(Storecontext)




    const finalPrice = () => {
        let total = 0;
        for (let i = 0; i < state.items.length; i++) {
            total = total + state.items[i].priceValue
        }
        return total.toFixed(0)
    }

    let total = finalPrice()


    const removeFromCart = (item) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        })
    }

    const emptyCart = (
        <StyledEmptyCart>
            <h2>Your bag is empty</h2>
            <h1>:(</h1>
        </StyledEmptyCart>
    )

    const fullCart = (
        <>
            <StyledTitle>Order summary</StyledTitle>
            <StyledCartAll>
                <StyledCartBox>
                {state.items.map(item => (
                    <StyledCartItem key={item.itemId}>
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
                </StyledCartBox>
                <StyledForm>
                    <StyledPrice>Final price: {`$${finalPrice()}`}</StyledPrice>
                    <OrderForm total={total} />
                </StyledForm>
            </StyledCartAll>
            <GoToTop />
        </>
    )

    return (
        <StyledCart>
            {state.items.length > 0 ? fullCart : emptyCart}
        </StyledCart>
    )
}

const StyledCartAll = styled.div`
display: flex;
align-items: flex-start;
min-height: 90vh;
width: 80%;
padding: 2rem;
border-top: 1px solid #b3b1b1;
border-bottom: 1px solid #b3b1b1;
`

const StyledCartBox = styled.div`
flex: 3;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledForm = styled.div`
flex: 1;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledCartItem = styled.div`
display: flex;
flex-direction: row;
height: 15vh;
width: 100%;
padding: 1rem;
margin-bottom: 1rem;
img {
    height: 100%;
}
`

const StyledTitle = styled.h3`
padding: 2rem;
`
const StyledPrice = styled.h3`
padding: 1rem;
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
@media ( max-width: 1000px ) {
height: 90vh;
width: 80%;
h2 {
    font-size: 2rem;
}
h1 {
    font-size: 4rem;
    transform: rotate(90deg)
}
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
min-height: 85vh;
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



export default CartPage
