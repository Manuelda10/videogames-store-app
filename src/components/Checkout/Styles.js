import styled from "styled-components";

const colors = {
    "richblack": "#000411",
    "darkpurple": "#000411",
    "ashgray": "#AEB7B3",
    "honeydew": "#E1EFE6",
    "orange": "#EFCB68"
}

export const StyledCheckout = styled.div`
    width: 30rem;
    padding-inline: 2rem;
    padding-bottom: 2rem;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #AEB7B3;
    border-radius: 5px;
    @media screen and (max-width: 480px){
        padding-inline: 0;
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
export const HeaderCheckout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Step = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    
`

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${colors.richblack};
    color: white;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

/*-----------------------ADDRESS---------------------*/
export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:28rem;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const InputsContainer = styled.div`
    display: block; 
    margin-bottom: 0.5rem;
`

export const Input = styled.input`
    font-size: 16px;
    border-radius: 2px;
    padding: 5px;
    border: 1px solid ${colors.ashgray};
    outline: none;
    box-sizing: border-box;
    width: ${props => props.size || '14rem'};
    &:focus{
        border: 1px solid ${colors.richblack};
    }
    margin-inline: 0.25rem;
    margin-block: 0.25rem;

    @media screen and (max-width: 480px) {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }   
`

export const LabelCont = styled.div`
    @media screen and (max-width: 480px) {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-left: calc(100% - ${props => props.width || '8.5rem'});
    @media screen and (max-width: 480px){
        margin-left: calc(50% - ${props => props.width/2 || '4rem'});
        margin-right: calc(50% - ${props => props.width/2 || '4rem'});
    }
`

export const Button = styled.button`
    width: 8rem;
    border-radius: 2px;
    box-sizing: border-box;
    border: 2px solid ${colors.darkpurple};
    background-color: white;
    color: ${colors.darkpurple};
    font-weight: 550;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: ${colors.darkpurple};
        color: white;
    }
`

/*----------------PAYMENT------------------------*/

export const BackBtn = styled.button`
    border-radius: 2px;
    border: none;
    background-color: transparent;
    color: ${colors.ashgray};
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
    &:hover{
        color: ${colors.darkpurple};
    }
`

/*----------------------REVIEW------------------------*/

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:28rem;
    @media screen and (max-width: 480px) {
        width: 18rem;
    }
    background-color: red;
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    & > p{
        margin-top: 8px;
        margin-bottom: 8px;
    }
    margin-top: 5px;
    margin-bottom: 5px;
    padding-inline: 8px;
    border: 2px solid ${colors.ashgray};

`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    & > h4{
        margin-top: 8px;
        margin-bottom: 8px;
    }
    margin-top: 5px;
    margin-bottom: 18px;
    padding-inline: 8px;
    border: 2px dotted ${colors.darkpurple};
`


