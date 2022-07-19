import styled from "styled-components";

export const Container = styled.div`
    width: 92%;
    min-height: 70vh;
    margin-left: 4%;
    margin-right: 4%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 970px){
        grid-template-columns: 4fr 2fr;
    }

    @media screen and (max-width: 600px){
        display: block;
    }
    box-sizing: border-box;
`

export const Detail = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const Summarize = styled.div`
    width: 100%;
    height: 18rem;
    text-align: left;
    box-sizing: border-box;
    background-color: #E1EFE6;
    border-radius: 2px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 8px;
    @media screen and (max-width: 600px) {
        margin-top: 10px;
        padding-top: 1px;
    }
`

export const Info = styled.p`
    margin-bottom: 1px;
    margin-top: 1px;
`

export const Encabezado = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr 1fr 2fr;
    background-color: #AEB7B3;
    place-items: center center;
    border-radius: 2px;
    @media screen and (max-width: 600px) {
        > * {
            display: none;
        }

        > :first-child{
            display: block;
        }
        display: flex;
        justify-content: center;
        align-items: center
    }
`

export const Items = styled.div`
    display: block;
    width: 100%;
    background-color: #DDE0DF;
`

export const Item = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-auto-rows: 10rem;
    grid-gap: 5px;
    place-items: center center;
    border-radius: 2px;
    @media screen and (max-width: 600px){
        grid-template-columns: 2fr 3fr;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
`

export const ItemDetails = styled.div`
    display: grid;
    grid-template-columns: 5fr 4fr 2fr 4fr;
    place-items: center center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        place-items:start center;
        justify-content: center;
        > p{
            text-align: left;
            margin-top: 1px;
            padding: 0;
            margin-bottom: 1px;
        }
    }
`


export const ItemName = styled.p`
    font-weight: 600;   
    font-size: 16px;
    text-align: left;
    line-height: 18px;
    color: #000411;
`

export const ImgItem = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: cover;
    border-radius: 2px;
`

export const CantidadInput = styled.input`
    width: 5rem;
    font-size: 16px;
`

export const Title = styled.p`
    font-weight: 600;   
    font-size: 18px;
    text-align: center;
    line-height: 18px;
    color: #000411;
`

export const Line = styled.hr`
    width: 100%;
    height: 2px;
    background-color: #000411;
    border: none;
`

export const Button = styled.button`
    width: 8rem;
    border-radius: 2px;
    box-sizing: border-box;
    border: 2px solid #000411;
    background-color: transparent;
    color:#000411;
    font-weight: 600;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-left: calc(50% - 4rem);
    margin-right: calc(50% - 4rem);

    &:hover{
        background-color: #000411;
        color: white;
    }
`