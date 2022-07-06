import React from 'react'
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg'
import { StyledLogin, Input, SubmitButton, CloseButton } from './Styles'
import { Link } from 'react-router-dom'

const Login = ({ onClose }) => {

    return (
        <StyledLogin>
            <h1 style={{ textAlign: 'center' }} >Iniciar sesión</h1>
            <div>
                <Input type={'email'} placeholder='Correo electrónico o username'></Input>
                <br></br>
                <Input type={'password'} placeholder='Contraseña'></Input>
                <br></br>
                <label> <input type={'checkbox'}></input>Recuérdame</label><br></br>
                <SubmitButton>Iniciar sesión</SubmitButton><br></br>
                <Link to='/register'>¿Aún no estás registrado?</Link>
            </div>
            <CloseButton onClick={() => onClose()}
            ><CloseIcon width={'18px'} ></CloseIcon></CloseButton>
        </StyledLogin>
    )
}

export default Login