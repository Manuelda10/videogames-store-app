import React from 'react'
import { BackBtn, Button, ButtonsContainer, Product, ReviewContainer, Total } from './Styles'

const Review = ({handleStep}) => {
    return (
        <ReviewContainer>
            <Product>
                <p>Producto 1</p>
                <p>S/.120</p>
            </Product>
            <Product>
                <p>Producto 2</p>
                <p>S/.120</p>
            </Product>
            <Product>
                <p>Producto 3</p>
                <p>S/.120</p>
            </Product>
            <Product>
                <p>Producto 4</p>
                <p>S/.120</p>
            </Product>
            <Total>
                <h4>Total</h4>
                <h4>S/.480</h4>
            </Total>
            <ButtonsContainer width={'11rem'}>
                <BackBtn onClick={() => handleStep(2)} >Atrás</BackBtn>
                <Button onClick={() => alert("Pago realizado")} >Confirmar</Button>
            </ButtonsContainer>
            
        </ReviewContainer>
    )
}

export default Review