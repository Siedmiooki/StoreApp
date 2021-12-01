import React from 'react'
import styled from 'styled-components'
import { TrashBin } from '@styled-icons/ionicons-outline'

function CartPage({ cartItems, removeFromCartHandler }) {

    const finalPrice = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total = total + cartItems[i].priceValue
        }
        return total.toFixed(2)
    }

    return (
        <StyledCart>
            <h3>Order Summary</h3>
            <StyledCartAll>
                {cartItems.map(item => (
                    <StyledCartItem>
                        <img src={item.img} alt="pic" key={item.img} />
                        <StyledCartItemDesc>
                            <h4>{item.brand}</h4>
                            <p><span>ID:</span> {item.id}</p>
                            <p>{item.name}</p>
                            <h3>{item.price}</h3>
                        </StyledCartItemDesc>
                        <StyledTrashBin onClick={() => removeFromCartHandler(item.proId)} />
                    </StyledCartItem>
                ))}
            </StyledCartAll>
            <h3>Final price: {`$${finalPrice()}`}</h3>
        </StyledCart>
    )
}

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
height: 100vh;
width: 100%;
margin-top: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
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
