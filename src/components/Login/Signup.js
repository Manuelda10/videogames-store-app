import React from 'react'
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg'
import { StyledSignup, Input, SubmitButton, CloseButton } from './Styles'
import {Link} from 'react-router-dom'

const Signup = ({onClose}) => {
    return (
        <StyledSignup>
            <h1 style={{ textAlign: 'center' }} >Registro</h1>
            <div>
                <Input type={'email'} placeholder='Correo electrónico'></Input>
                <br></br>
                <Input type={'password'} placeholder='Contraseña'></Input>
                <br></br>
                <Input type={'password'} placeholder='Repetir contraseña'></Input>
                <br></br>
                <SubmitButton>Registrarme</SubmitButton><br></br>
                <Link to='/login'>Ya estoy registrado</Link>
            </div>
            <CloseButton onClick = {() => onClose()} ><CloseIcon width={'18px'} ></CloseIcon></CloseButton>
        </StyledSignup>
    )
}

export default Signup