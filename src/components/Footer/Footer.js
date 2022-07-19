import React from 'react'   
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000411;
    color: white;
    margin-top: 2rem;
`

const Footer = () => {
    return (
        <StyledFooter>
            <h4>Webpage developed by Manuel Vallejos</h4>
        </StyledFooter>
    )
}

export default Footer