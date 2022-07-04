import styled from "styled-components";

const colors = {
    "richblack": "#000411",
    "darkpurple": "#000411",
    "ashgray": "#AEB7B3",
    "honeydew": "#E1EFE6",
    "orange": "#EFCB68"
}

export const StyledHeader = styled.header`
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

export const Stylebrand = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 2rem;
    &:hover{
        font-weight: 700;
    }
`

export const StyledUserHandle = styled.div`
    min-width: 14rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 2rem;
`

export const StyledUser = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 600;
`

export const StyledButton = styled.button`
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

export const StyledShoppingCart = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    &:hover{
        background-color: rgba(255,255,255, 0.1) ;
    }
`