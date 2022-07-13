import React from 'react'
import imgGame from '../../assets/game.jpg'
import {Container, Detail, ItemDetails, Encabezado, Title, Items, Item, ImgContainer, ImgItem, ItemName, CantidadInput, Summarize, Info, Line} from './Styles'


const ShoppingCart = () => {
    return (
        <div>
            <br></br>
            <h1>Carrito de compras</h1>
            <br></br>
            <Container>
                <Detail>
                    <Encabezado>
                        <Title>Producto</Title>
                        <Title>Precio</Title>
                        <Title>Cantidad</Title>
                        <Title>Total</Title>
                    </Encabezado>
                    <Items>
                        <Item>
                            {/*Aquí falta colocar el state del input*/}
                            <ImgContainer>
                                <ImgItem src={imgGame} alt='juego' ></ImgItem>
                            </ImgContainer>
                            <ItemDetails>
                                <ItemName>Assassins Creed IV: Black Flag</ItemName>
                                <p>S/.120</p>
                                <CantidadInput placeholder='Cantidad' type='number' name='cantidad'></CantidadInput>
                                <p>S/. 1440</p>
                            </ItemDetails>
                            
                        </Item>
                    </Items>

                </Detail>
                <Summarize>
                        <Title>Resumen</Title>
                        <Line></Line>
                        <Info>Total de productos: 12</Info>
                        <Info>Precio con IGV: </Info>
                        <Info>Costo de envío: </Info>
                        <Info>Cupones y descuentos: </Info>
                        <br></br>
                        <Info>Total IGV (18%)</Info>
                        <Info>Total de la orden: S/. 1500</Info>
                    
                </Summarize>
            </Container>
        </div>
    )
}

export default ShoppingCart