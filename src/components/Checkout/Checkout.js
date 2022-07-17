import React from 'react'
import Address from './Address'
import Payment from './Payment'
//import Review from './Review'
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg'
import { StyledCheckout, CloseButton, HeaderCheckout, Step, Circle } from './Styles'

const Checkout = ({onClose}) => {
    return (
        <StyledCheckout>
            <h1>Pasarela de pago</h1>
            <HeaderCheckout>
                <Step>
                    <Circle><p>1</p></Circle>
                    <p>Dirección de envío</p>
                </Step>
                <Step>
                    <Circle><p>2</p></Circle>
                    <p>Detalles de envío</p>
                </Step>
                <Step>
                    <Circle><p>3</p></Circle>
                    <p>Resumen de compra</p>
                </Step>
            </HeaderCheckout>
            <Payment></Payment>
            <CloseButton onClick={() => onClose()}
            ><CloseIcon width={'18px'} ></CloseIcon></CloseButton>
        </StyledCheckout>
    )
}

export default Checkout