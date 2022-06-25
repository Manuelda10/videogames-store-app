import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'

 const ListOfCards = styled.div`
        width: 92%;
        margin-left: 4%;
        margin-right: 4%;
        display: grid;
        grid-auto-rows: 16rem;
        grid-auto-columns: 16rem;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
       
        /*align-items: center;
        justify-items: center;*/
        place-items: center center;
    `

const Cards = () => {
    return (<div>
        <ListOfCards>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </ListOfCards>
    </div>)
}

export default Cards