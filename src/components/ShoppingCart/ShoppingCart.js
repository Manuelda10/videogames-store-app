import React, {useState} from 'react'
import imgGame from '../../assets/game.jpg'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Checkout from '../Checkout/Checkout'
import {Container, Detail, ItemDetails, Encabezado, Title, Items, Item, ImgContainer, ImgItem, ItemName, CantidadInput, Summarize, Info, Line, Button} from './Styles'


const ShoppingCart = () => {

    const navigate = useNavigate()
    // Only to show functionality
    const [quantity, setQuantity] = useState(1)
    const price = 120

    const handleOpenModal = () => {
        navigate('checkout')
    }

    const handleCloseModal = () => {
        navigate(-1)
    }

    return (
        <div>
            <br></br>
            <h1>Carrito de compras</h1>
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
                                <p>S/.{price}</p>
                                <CantidadInput placeholder='Cantidad' type='number' name='cantidad' min={1} value={quantity} onChange={e => setQuantity(e.target.value)} ></CantidadInput>
                                <p>S/.{price * quantity}</p>
                            </ItemDetails>
                            
                        </Item>
                    </Items>

                </Detail>
                <Summarize>
                        <Title>Resumen</Title>
                        <Line></Line>
                        <Info>Total de productos: {quantity}</Info>
                        <Info>Precio con IGV: S/.{price * quantity}</Info>
                        <Info>Costo de envío: S/.0</Info>
                        <Info>Cupones y descuentos: S/.0</Info>
                        <br></br>
                    <Info>Total IGV (18%): S/.{Math.floor(0.18 * price * quantity)}</Info>
                    <Info>Total de la orden: S/.{price * quantity + Math.floor(0.18 * price * quantity)}</Info>
                    <br></br>
                        <Button onClick={handleOpenModal}>Confirmar</Button>
                </Summarize>
                
            </Container>
            <Routes>
                <Route path='checkout'
                    element={<Modal><Checkout onClose={handleCloseModal}>
                    </Checkout></Modal>}>    
                </Route>
            </Routes>
        </div>
    )
}

export default ShoppingCart