import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../services/asosAPI";
import styled from 'styled-components';
import HTMLReactParser from "html-react-parser";
import { Spinner } from '.';



function ItemDetails({ addToCartHandler }) {

    const { id } = useParams();
    const { data, isFetching } = useGetDetailsQuery(id);
    const [activePic, setActivePic] = useState()

    const addItemHandler = () => {
        const addedItem = {
            itemId: data.id,
            name: data.name,
            brand: data.brand.name,
            price: data.price.current.text,
            priceValue: data.price.current.value,
            img: `https://${data.media.images[0].url}`,
            proId: `${data.id}+${new Date().valueOf()}`
        }
        addToCartHandler(addedItem)
    }


    if (isFetching) return <Spinner />



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
                <StyledAddButton onClick={() => addItemHandler()}>ADD TO CART</StyledAddButton>
                <p>{data.info.aboutMe ? HTMLReactParser(data.info.aboutMe) : null}</p>
                <p>{data.info.sizeAndFit ? HTMLReactParser(data.info.sizeAndFit) : null}</p>
                <p className="careInfo">{data.info.careInfo ? HTMLReactParser(data.info.careInfo) : null}</p>
            </StyledDescContainer>
        </StyledDetailsContainer>
    )
}

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
