import React, { useContext } from 'react'
import styled from 'styled-components'
import GoToTop from './GoToTop'
import { Storecontext } from '../App'
// import { Link } from 'react-router-dom'

function UserPage() {
    const { state } = useContext(Storecontext)

    const emptyHistory = (
        <StyledEmptyHistory>
            <h2>You have no order history</h2>
            <h1>:(</h1>
        </StyledEmptyHistory>
    )

    const fullHistory = (
        <>
            {/* <button onClick={() => console.log(state)}>show state</button> */}
            <StyledTitle>My order history</StyledTitle>
            <StyledOrdersContainer>
                {state.orders.map(order => (
                    <StyledOrdersBox key={order.orderInfo.orderId}>
                        <StyledOrders>
                            <h5>Order ID: {order.orderInfo.orderId}</h5>
                            <h5>{`Order value: $${order.orderInfo.orderValue}`}</h5>
                        {order.orderItems.map(item => (
                            <StyledOrder key={item.itemId}>
                                <img src={item.img} alt="pic" />
                                <StyledOrderItemDesc>
                                    <h4>{item.brand}</h4>
                                    <p>ID: {item.itemId}</p>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </StyledOrderItemDesc>
                            </StyledOrder>
                        ))}
                        </StyledOrders>
                        <StyledBillingAddress>
                            <h4>Billing Adress</h4>
                            <p>name: {order.orderInfo.firstname} {order.orderInfo.secondname}</p>
                            <p>mail: {order.orderInfo.email}</p>
                            <p>city: {order.orderInfo.city}</p>
                            <p>street: {order.orderInfo.street} {order.orderInfo.houseno}</p>
                            {order.orderInfo.info ? <p>info: {order.orderInfo.info}</p> : null}
                        </StyledBillingAddress>
                    </StyledOrdersBox>
                ))}
                <GoToTop />
            </StyledOrdersContainer>
        </>
    )

    return (
        <StyledHistory>
            {state.orders.length > 0 ? fullHistory : emptyHistory}
        </StyledHistory>
    )
}

const StyledOrdersContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 90vh;
width: 80%;
padding: 2rem;
`

const StyledOrdersBox = styled.div`
display: flex;
padding: 1rem 0rem;
border-top: 1px solid #b3b1b1;
`

const StyledOrders = styled.div`
flex: 3;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledOrder = styled.div`
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

const StyledOrderItemDesc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin-left: 1rem;
`

const StyledBillingAddress = styled.div`
flex: 1;
height: 100%;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
h4 {
    margin: 2rem 1rem;
}
p {
    margin: 1rem;
}
`

const StyledTitle = styled.h3`
padding: 2rem;
`

const StyledEmptyHistory = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 60vh;
width: 80%;
h2 {
    font-size: 3rem;
    text-align: center;
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

const StyledHistory = styled.div`
height: 85vh;
width: 100%;
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

export default UserPage
