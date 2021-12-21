import React, { useContext } from 'react'
import GoToTop from './GoToTop'
import { Storecontext } from '../App'
import { StyledContainer, StyledAll, StyledBox, StyledItem, StyledItemDesc, StyledForm, StyledEmpty, StyledTitle, StyledPrice } from "./ComponentStyles"

function UserPage() {
    const { state } = useContext(Storecontext)

    const emptyHistory = (
        <StyledEmpty>
            <h2>You have no order history</h2>
            <h1>:(</h1>
        </StyledEmpty>
    )

    const fullHistory = (
        <>
            <StyledTitle>My order history</StyledTitle>
                {state.orders.map(order => (
                    <StyledAll>
                        <StyledBox key={order.orderInfo.orderId}>
                            <h5>Order ID: {order.orderInfo.orderId}</h5>
                        <StyledPrice>{`Order value: $${order.orderInfo.orderValue}`}</StyledPrice>
                        {order.orderItems.map(item => (
                            <StyledItem key={item.itemId}>
                                <img src={item.img} alt="pic" />
                                <StyledItemDesc>
                                    <h4>{item.brand}</h4>
                                    <p>ID: {item.itemId}</p>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </StyledItemDesc>
                            </StyledItem>
                        ))}
                        </StyledBox>
                        <StyledForm>
                            <h4>Billing Adress</h4>
                            <p>name: {order.orderInfo.firstname} {order.orderInfo.secondname}</p>
                            <p>mail: {order.orderInfo.email}</p>
                            <p>city: {order.orderInfo.city}</p>
                            <p>street: {order.orderInfo.street} {order.orderInfo.houseno}</p>
                            {order.orderInfo.info ? <p>info: {order.orderInfo.info}</p> : null}
                        </StyledForm>

                    </StyledAll>
                ))}
            <GoToTop />
        </>
    )

    return (
        <StyledContainer>
            {state.orders.length > 0 ? fullHistory : emptyHistory}
        </StyledContainer>
    )
}



export default UserPage
