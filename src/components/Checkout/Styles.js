import styled from "styled-components";

const colors = {
    "richblack": "#000411",
    "darkpurple": "#000411",
    "ashgray": "#AEB7B3",
    "honeydew": "#E1EFE6",
    "orange": "#EFCB68"
}

export const StyledCheckout = styled.div`
    height: 35rem;
    width: 35rem;
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
export const HeaderCheckout = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Step = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
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



