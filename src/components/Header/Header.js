import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingcart.svg'
import { StyledHeader, Stylebrand, StyledUserHandle, StyledUser, StyledButton, StyledShoppingCart } from './Styles'
import Login from '../Login/Login'

const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <StyledHeader>
            <Stylebrand href='localhost:3000'>Gaming Store</Stylebrand>
            <StyledUserHandle>
                <StyledUser>User</StyledUser>
                <StyledButton onClick={handleOpenModal}>Sign in</StyledButton>
                <StyledShoppingCart><ShoppingCartIcon width={'30px'} ></ShoppingCartIcon></StyledShoppingCart>
            </StyledUserHandle>

            {showModal && <Modal><Login
                onClose={handleCloseModal}>
            </Login> </Modal>}
        </StyledHeader>
    )
}

export default Header