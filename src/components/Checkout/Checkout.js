import React from 'react'
//import Address from './Address'
//import Payment from './Payment'
import Review from './Review'
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg'
import { StyledCheckout, CloseButton } from './Styles'

const Checkout = ({onClose}) => {
    return (
        <StyledCheckout>
            <h1>Pasarela de pago</h1>
            <p>Dirección de envío -&gt; Detalles de pago -&gt; Resumen</p>
            <Review></Review>
            <CloseButton onClick={() => onClose()}
            ><CloseIcon width={'18px'} ></CloseIcon></CloseButton>
        </StyledCheckout>
    )
}

export default Checkout