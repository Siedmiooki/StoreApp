import React, { useContext } from 'react'
import styled from 'styled-components'
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
            <StyledAll>
                {state.orders.map(order => (
                    <StyledBox key={order.orderInfo.orderId}>
                        {/* <StyledOrders> */}
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
                        {/* </StyledOrders> */}
                        <StyledForm>
                            <h4>Billing Adress</h4>
                            <p>name: {order.orderInfo.firstname} {order.orderInfo.secondname}</p>
                            <p>mail: {order.orderInfo.email}</p>
                            <p>city: {order.orderInfo.city}</p>
                            <p>street: {order.orderInfo.street} {order.orderInfo.houseno}</p>
                            {order.orderInfo.info ? <p>info: {order.orderInfo.info}</p> : null}
                        </StyledForm>
                    </StyledBox>
                ))}
                <GoToTop />
            </StyledAll>
        </>
    )

    return (
        <StyledContainer>
            {state.orders.length > 0 ? fullHistory : emptyHistory}
        </StyledContainer>
    )
}

const Styled

export default UserPage
