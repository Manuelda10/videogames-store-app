import React from 'react'
import Modal from '../Modal/Modal'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingcart.svg'
import { StyledHeader, Stylebrand, StyledUserHandle, StyledUser, StyledButton, StyledShoppingCart } from './Styles'
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import {Routes, Route, useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    const handleOpenModal = () => {
        navigate('/login')
    }

    const handleCloseModal = () => {
        navigate('/')
    }

    return (
        <StyledHeader>
            <Stylebrand to='/'>Gaming Store</Stylebrand>
            <StyledUserHandle>
                <StyledUser>User</StyledUser>
                <StyledButton onClick={handleOpenModal}>Login</StyledButton>
                <StyledShoppingCart to='carrito' ><ShoppingCartIcon width={'30px'} ></ShoppingCartIcon></StyledShoppingCart>
            </StyledUserHandle>

     
            <Routes>
                <Route path='/login'
                    element={<Modal><Login
                        onClose={handleCloseModal}
                    ></Login></Modal>}>
                </Route>
                <Route path='/register'
                    element={<Modal><Signup
                        onClose={handleCloseModal}>
                    </Signup></Modal>}>
                </Route>
            </Routes>
            
        </StyledHeader>
    )
}

export default Header