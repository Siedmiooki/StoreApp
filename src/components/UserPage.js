import React, { useContext } from 'react'
import styled from 'styled-components'
import { Storecontext } from '../App'
// import { Link } from 'react-router-dom'

function UserPage() {
    const { state } = useContext(Storecontext)

    const emptyLikes = (
        <StyledEmptyCart>
            <h2>No orders</h2>
            <h1>:(</h1>
        </StyledEmptyCart>
    )

    const fullLikes = (
        <>
            <button onClick={() => console.log(state)}>show state</button>
            <StyledTitle>Order History</StyledTitle>
            <StyledOrderContainer>
                {state.orders.map(order => (
                    <>
                        <h4>Order ID: {order.orderInfo.orderId}</h4>
                        {order.orderItems.map(item => (
                            <StyledOrder>
                                <img src={item.img} alt="pic" />
                                <StyledOrderItemDesc key={item.itemId}>
                                    <h4>{item.brand}</h4>
                                    <p>ID: {item.itemId}</p>
                                    <p>1x {item.name}</p>
                                    <p>{item.price}</p>
                                </StyledOrderItemDesc>
                            </StyledOrder>
                        ))}
                        <StyledOrderValue>Order value: </StyledOrderValue>
                    </>
                ))}
            </StyledOrderContainer>

        </>
    )

    return (
        <StyledCart>
            {state.orders.length > 0 ? fullLikes : emptyLikes}
        </StyledCart>
    )
}

const StyledOrderContainer = styled.div`
width: 80%;
padding: 2rem;
border-top: 1px solid #b3b1b1;
border-bottom: 1px solid #b3b1b1;
h4 {
    margin-top: 2rem;
}
`

const StyledOrder = styled.div`
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

const StyledOrderItemDesc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin-left: 1rem;
`

const StyledTitle = styled.h3`
padding: 4rem;
`

const StyledOrderValue = styled.h3`
padding: 2rem 0rem;
border-bottom: 1px solid #b3b1b1;
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





export default UserPage
