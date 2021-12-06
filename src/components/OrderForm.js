import React, { useState, useContext } from 'react'
import styled from 'styled-components'

function OrderForm() {

    const [formInfo, setFormInfo] = useState({
        firstname: "",
        secondname: "",
        email: "",
        city: "",
        street: "",
        houseno: "",
        info: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo)
    }

    return (
        <div>
            <StyledFormBox onSubmit={handleSubmit}>
                <InputStyled type="text" placeholder="first name" onChange={(e) => setFormInfo({ ...formInfo, firstname: e.target.value })} />
                <InputStyled type="text" placeholder="second name" onChange={(e) => setFormInfo({ ...formInfo, secondname: e.target.value })} />
                <InputStyled type="text" placeholder="e-mail" onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })} />
                <InputStyled type="text" placeholder="city" onChange={(e) => setFormInfo({ ...formInfo, city: e.target.value })} />
                <InputStyled type="text" placeholder="street name" onChange={(e) => setFormInfo({ ...formInfo, street: e.target.value })} />
                <InputStyled type="text" placeholder="house no." onChange={(e) => setFormInfo({ ...formInfo, houseno: e.target.value })} />
                <TextareaStyled rows="6" placeholder="additional info" onChange={(e) => setFormInfo({ ...formInfo, info: e.target.value })} />
                <ButtonStyled type="submit">Confirm Order</ButtonStyled>
            </StyledFormBox>
        </div>
    )
}


const StyledFormBox = styled.form`
display: flex;
flex-direction: column;
width: 60%;
gap: 1rem;
background: white;
padding: 3rem 2rem;
min-width: 25rem;
max-width: 30rem;
@media ( max-width: 1300px ) {
    padding: 0rem;
}
`

const ButtonStyled = styled.button`
    background: #f75e53;
    color: white;
    margin-top: 1rem;
:hover{
    
}
`

const TextareaStyled = styled.textarea`
    padding: 1rem 1rem;
    color: black;
    background: white;
    font-size: 1.2rem;
    line-height: 150%;
    border-width: 0;
    border-bottom: 1px solid #b3b1b1;
::placeholder {
        font-size: 1.1rem;
}
:focus::-webkit-input-placeholder {
    color: white;
}
::-webkit-scrollbar {
    width: 0.5rem;
}
::-webkit-scrollbar-thumb {
    background-color: darkgrey
}
::-webkit-scrollbar-track {
    background-color: black
}

`

const InputStyled = styled.input`
    padding: 1rem 1rem;
    color: black;
    background: white;
    font-size: 1.2rem;
    line-height: 150%;
    border-width: 0;
    border-bottom: 1px solid #b3b1b1;
::placeholder {
        font-size: 1rem;
}
:focus::-webkit-input-placeholder {
    color: #2e2c2c;
}

`

export default OrderForm
