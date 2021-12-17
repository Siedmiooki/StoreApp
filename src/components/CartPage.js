import React, { useContext } from 'react'
import GoToTop from './GoToTop'
import { Storecontext } from '../App'
import { OrderForm } from "."
import { StyledContainer, StyledAll, StyledBox, StyledItem, StyledItemDesc, StyledTrashBin, StyledForm, StyledEmpty, StyledTitle, StyledPrice } from "./ComponentStyles"

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
        <StyledEmpty>
            <h2>Your bag is empty</h2>
            <h1>:(</h1>
        </StyledEmpty>
    )

    const fullCart = (
        <>
            <StyledTitle>Order summary</StyledTitle>
            <StyledAll>
                <StyledBox>
                {state.items.map(item => (
                    <StyledItem key={item.itemId}>
                        <img src={item.img} alt="pic" key={item.img} />
                        <StyledItemDesc>
                            <h4>{item.brand}</h4>
                            <p>ID: {item.itemId}</p>
                            <p>{item.name}</p>
                            <h3>{item.price}</h3>
                        </StyledItemDesc>
                        <StyledTrashBin
                            onClick={() => removeFromCart(item)}
                        />
                    </StyledItem>
                ))}
                </StyledBox>
                <StyledForm>
                    <StyledPrice>Final price: {`$${finalPrice()}`}</StyledPrice>
                    <OrderForm total={total} />
                </StyledForm>
            </StyledAll>
            <GoToTop />
        </>
    )

    return (
        <StyledContainer>
            {state.items.length > 0 ? fullCart : emptyCart}
        </StyledContainer>
    )
}

export default CartPage
