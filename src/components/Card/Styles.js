import styled from 'styled-components'

const colors = {
    "richblack": "#000411",
    "darkpurple": "#1F0322",
    "ashgray": "#F1F1F1",
    "honeydew": "#E1EFE6",
    "orange": "#EFCB68"
}

export const StyledCard = styled.div`
    background-color: ${colors.ashgray};
    width: 15rem;
    height: 15rem;
    display: block;
    border-radius: 5px;
    border: 2px solid #E6E6E6;
`

export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    height:20%;
    padding-left: 2%;
    padding-right: 2%;
`

export const HeaderNameCont = styled.div`
    display:block;
    max-width: 66%;
`

export const HeaderPriceCont = styled.div`
    display: flex;
    align-items: center;
    max-width: 30%;
`

export const CardTitle = styled.h4`
    color: ${colors.richblack};
    text-align: left;
    margin-top: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CardState = styled.p`
    color: green;
    font-size: 14px;
    font-weight: 600;
    margin-top: -20px;
    text-align: left;
`

export const CardPrice = styled.p`
    color:  red;
    font-size: 18px;
    font-weight: 600;
`

export const FigureContent = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
`

export const CardFigure = styled.figure`
    width: 100%;
    height: 100%;
    margin: 0;
`

export const FigureImg = styled.img`
    width:100%;
    object-fit: cover;
    height: 80%;
`

export const FigureFigcaption = styled.figcaption`
    text-align: left;
    margin-left: 10px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${colors.richblack};
`

export const CardInteract = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    align-items: center;
    height: 20%;
`

export const AddButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    fill: ${colors.richblack};
    &:hover{
        fill: green;
    }
`