import React from 'react'
import { Input, AddressContainer, InputsContainer, Button, BackBtn, LabelCont, ButtonsContainer } from './Styles'

const Payment = ({handleStep}) => {
    return (
        <AddressContainer>
            <InputsContainer>
                <Input type='text' placeholder='Nombre del titular' size={'28.5rem'}></Input><br></br>
                <Input type='text' placeholder='Número de tarjeta' size={'28.5rem'}></Input><br></br>
                <Input type='text' placeholder='Fecha de expiración' size={'28.5rem'}></Input><br></br>
                <Input type='text' placeholder='CVV' size={'28.5rem'}></Input><br></br>
                <LabelCont>
                    <label><input type='checkbox'></input>Recordar los detalles de la tarjeta</label><br></br>
                </LabelCont>
                
            </InputsContainer> 
            <ButtonsContainer width={'11rem'} >
                <BackBtn onClick={() => handleStep(1)} >Atrás</BackBtn>
                <Button onClick={() => handleStep(3)} >Siguiente</Button>
            </ButtonsContainer>
            
        </AddressContainer>
    )
    
}

export default Payment