import React, { useContext } from 'react'
import { Storecontext } from '../App'
import { Link } from 'react-router-dom'
import { StyledContainer, StyledAll, StyledBox, StyledItem, StyledItemDesc, StyledTrashBin, StyledEmpty, StyledTitle, } from "./ComponentStyles"

function MyListPage() {

    const { state, dispatch } = useContext(Storecontext)

    const removeFromLikes = (item) => {
        dispatch({
            type: "REMOVE_FROM_LIKES",
            payload: item
        })
    }

    const emptyLikes = (
        <StyledEmpty>
            <h2>Your list is empty</h2>
            <h1>:(</h1>
        </StyledEmpty>
    )

    const fullLikes = (
        <>
            <StyledTitle>My favorites</StyledTitle>
            <StyledAll>
                <StyledBox>
                {state.likes.map(item => (
                    <StyledItem key={item.itemId}>
                        <Link to={`/${item.itemId}`}>
                            <img src={item.img} alt="pic" />
                        </Link>
                        <StyledItemDesc>
                            <h4>{item.brand}</h4>
                            <p>ID: {item.itemId}</p>
                            <p>{item.name}</p>
                            <h3>{item.price}</h3>
                        </StyledItemDesc>
                        <StyledTrashBin
                            onClick={() => removeFromLikes(item)}
                        />
                    </StyledItem>
                ))}
                </StyledBox>
            </StyledAll>
        </>
    )

    return (
        <StyledContainer>
            {state.likes.length > 0 ? fullLikes : emptyLikes}
        </StyledContainer>
    )
}

export default MyListPage
