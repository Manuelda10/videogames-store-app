import styled from 'styled-components'


// box sizing: border box. Permite que el tamañano se mantenga sin importar el padding
export const StyledLogin = styled.div`
    height: 20rem;
    width: 25rem;
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

export const StyledSignup = styled.div`
    height: 20rem;
    width: 25rem;
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

export const Input = styled.input`
    font-size: 15px;
    padding: 5px;
    margin-bottom: 0.8rem;
    width: 16rem;

`

export const SubmitButton = styled.button`
    width: 16.8rem;
    font-size: 15px;
    padding: 5px;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    background-color: #000411;
    border-radius: 2px;
    transition: 0.3s;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
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
