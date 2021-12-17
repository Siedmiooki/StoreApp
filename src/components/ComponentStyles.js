import styled from "styled-components"
import { TrashBin } from '@styled-icons/ionicons-outline'

export const StyledCardContainer = styled.div`
display: grid;
justify-content: space-around;
align-items: flex-start;
max-width: 1258px;
padding: 1rem;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
background: white;
@media ( max-width: 1258px ) {
    max-width: 1000px;
    }
@media ( max-width: 1000px ) {
    max-width: 800px;
    }
@media ( max-width: 770px ) {
    max-width: 450px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    }
`

export const StyledItemCard = styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
overflow: hidden;
background: white;
position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    p {
        font-size: 1rem;
        text-align: left;
    }
@media ( max-width: 770px ) {
    p {
        font-size: 0.7rem;
        margin-top: 0.5rem;
    }
    }
`

export const StyledAddTo = styled.div`
position: absolute;
display: flex;
gap: 0.5rem;
right: 1rem;
bottom: 0rem;
svg {
 :hover {
  color: #f75e53;
}
}
@media ( max-width: 770px ) {
width: 30%;
flex-direction: flex-start;
svg {
right: 0;
width: 20px;
height: 20px;
}
}
`

export const StyledContainer = styled.div`
min-height: 85vh;
width: 100%;
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

export const StyledAll = styled.div`
display: flex;
align-items: flex-start;
min-height: 90vh;
width: 80%;
padding: 2rem;
border-top: 1px solid #b3b1b1;
border-bottom: 1px solid #b3b1b1;
@media ( max-width: 1000px ) {
flex-direction: column;
align-items: center;
padding: 3rem 0rem;
width: 95%;
}
`

export const StyledBox = styled.div`
flex: 3;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media ( max-width: 1000px ) {
width: 100%;
margin: 0;
flex: 1;
}
`

export const StyledItem = styled.div`
display: flex;
position: relative;
flex-direction: row;
height: 15vh;
width: 100%;
padding: 1rem;
margin-bottom: 1rem;
img {
    height: 100%;
}
@media ( max-width: 1000px ) {
height: 30vh;
padding: 0;
}
`

export const StyledItemDesc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin-left: 1rem;
@media ( max-width: 1000px ) {
font-size: 0.9rem;
h3, h4, p {
    padding: 0.1rem 0rem
}
}
`

export const StyledTrashBin = styled(TrashBin)`
width: 1.6rem;
align-self: flex-end;
margin-left: 3rem;
position: absolute;
bottom: 0;
right: 0;
cursor: pointer;
@media ( max-width: 1000px ) {
margin-left: 0rem;
}
`

export const StyledForm = styled.div`
flex: 1;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media ( max-width: 1000px ) {
margin: 2rem 0rem 4rem 0rem;
flex: 1;
}
`

export const StyledEmpty = styled.div`
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

export const StyledTitle = styled.h3`
padding: 2rem;
`
export const StyledPrice = styled.h3`
padding: 1rem;
`