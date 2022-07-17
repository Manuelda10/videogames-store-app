import React from 'react'
import { Input, AddressContainer, InputsContainer, Button, LabelCont, ButtonsContainer } from './Styles'

const Address = () => {
    return (
        <AddressContainer>
            <InputsContainer>
                <Input type='text' placeholder='Nombre' ></Input>
                <Input type='text' placeholder='Apellido' ></Input><br></br>
                <Input type='text' placeholder='Dirección 1' size={'28.5rem'} ></Input><br></br>
                <Input type='text' placeholder='Dirección 2' size={'28.5rem'}></Input><br></br>
                <Input type='text' placeholder='Ciudad' ></Input>
                <Input type='text' placeholder='Estado/Provincia/Región'></Input><br></br>
                <Input type='text' placeholder='ZIP/Código postal'></Input>
                <Input type='text' placeholder='País'></Input><br></br>
                <LabelCont>
                    <label><input type='checkbox'></input>Usar esta dirección para los detalles de pago</label><br></br>
                </LabelCont>
            </InputsContainer>
            <ButtonsContainer width={'7.5rem'} >
                <Button>Siguiente</Button>
            </ButtonsContainer>
            
        </AddressContainer>
    )
}

export default Address