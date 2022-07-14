import styled from "styled-components";

export const StyledCheckout = styled.div`
    height: 35rem;
    width: 30rem;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #AEB7B3;
    border-radius: 5px;
    @media screen and (max-width: 480px){
        width: 20rem;
    }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        fill: #B10808;
    }
    position: absolute;
    top: 5px;
    right: 0;
    font-weight: 600;
`