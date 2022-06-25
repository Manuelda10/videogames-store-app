import React from 'react'
import styled from 'styled-components'
import {ReactComponent as ShoppingCartIcon} from '../../assets/shoppingcart.svg'

const colors = {
    "richblack": "#000411",
    "darkpurple": "#000411",
    "ashgray": "#AEB7B3",
    "honeydew": "#E1EFE6",
    "orange": "#EFCB68"
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${colors.richblack};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Stylebrand = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 2rem;
    &:hover{
        font-weight: 700;
    }
`

const StyledUserHandle = styled.div`
    min-width: 14rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 2rem;
`

const StyledUser = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 600;
`

const StyledButton = styled.button`
    border-radius: 2px;
    padding: 4px;
    padding-left:15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 18px;
    border: 1px solid ${colors.honeydew};
    border-radius: 2px;
    color: white;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        background-color: white;
        color: ${colors.darkpurple};
    }
`

const StyledShoppingCart = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    &:hover{
        background-color: rgba(255,255,255, 0.1) ;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Stylebrand href='localhost:3000'>Gaming Store</Stylebrand>
            <StyledUserHandle>
                <StyledUser>User</StyledUser>
                <StyledButton onClick={() => alert('Botoncito')}>Sign in</StyledButton>
                <StyledShoppingCart><ShoppingCartIcon width={'30px'} ></ShoppingCartIcon></StyledShoppingCart>
            </StyledUserHandle>
        </StyledHeader>
    )
}

export default Header