import React, { useState, useContext } from 'react';
import { Storecontext } from "../App";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../services/asosAPI";
import styled from 'styled-components';
import HTMLReactParser from "html-react-parser";
import { Spinner } from '.';



function ItemDetails() {

    const { dispatch } = useContext(Storecontext)
    const { id } = useParams();
    const { data, isFetching } = useGetDetailsQuery(id);
    const [activePic, setActivePic] = useState()


    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART_FROM_DETAILS",
            payload: item
        });

    }

    if (isFetching) return <Spinner />
    if (data.errorCode) return (
        <StyledErrorMsg>
            <h2>{data.errorMessage}</h2>
            <h1>:(</h1>
        </StyledErrorMsg>
    )


    return (
        <StyledDetailsContainer>
            <StyledPicContainer>
                <img src={activePic ? activePic : `https://${data.media.images[0].url}`} alt="pic" />
                <StyledMiniPic onClick={(e) => setActivePic(e.target.src)}>
                    {data.media.images.map((pic) => (
                        <img src={`https://${pic.url}`} alt="pic" key={pic.url} />
                    ))}
                </StyledMiniPic>
            </StyledPicContainer>
            <StyledDescContainer>
                <h2>{data.brand.name}</h2>
                <p>{data.name}</p>
                <h3>{data.price.current.text}</h3>
                <StyledAddButton onClick={() => addToCart(data)}>ADD TO CART</StyledAddButton>
                <p>{data.info.aboutMe ? HTMLReactParser(data.info.aboutMe) : null}</p>
                <p>{data.info.sizeAndFit ? HTMLReactParser(data.info.sizeAndFit) : null}</p>
                <p className="careInfo">{data.info.careInfo ? HTMLReactParser(data.info.careInfo) : null}</p>
            </StyledDescContainer>
        </StyledDetailsContainer>
    )
}

const StyledErrorMsg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
h2 {
    font-size: 3rem;
}
h1 {
    font-size: 5rem;
    transform: rotate(90deg)
}
`

const StyledAddButton = styled.button`
display: flex;
align-items: center;
justify-content: space-around;
margin-left: 2rem;
background-color: #f75e53;
color: white;
font-size: 1rem;
padding: 1rem 2.5rem;
&:hover{
        background-color: #f75e53;
        color: white;
    }
`

const StyledDescContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
h2 {
    margin: 2rem;
    font-size: 1.6rem;
}
h3 {
    margin: 1rem 2rem;
    font-size: 1.4rem;
}
p {
    font-size: 1.2rem;
    margin: 1rem 2rem;
    text-decoration: none;
}
.careInfo {
    font-size: 1rem;
}
`


const StyledPicContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
margin-right: 2rem;
img {
    width: 50%;
    max-width: 35rem;
}
`

const StyledMiniPic = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
width: 50%;
max-width: 35rem;
height: 10%;
img {
    width: 10%;
    cursor: pointer;
}
`
const StyledDetailsContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: flex-end;
justify-content: center;
`


export default ItemDetails
