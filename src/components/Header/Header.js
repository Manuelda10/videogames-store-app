import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    height: 45px;
    background-color: red;
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>Hola</h1>
        </StyledHeader>
    )
}

export default Header