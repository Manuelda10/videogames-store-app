import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 92%;
    margin-left: 4%;
    margin-right: 4%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;
`

const Detail = styled.div`
    width: 100%;
    box-sizing: border-box;
`

const Summarize = styled.div`
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    line-height: 8px;
    background-color: #E1EFE6;
    border-radius: 2px;
`

const Encabezado = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr 1fr 2fr;
    background-color: #AEB7B3;
    place-items: center center;
    border-radius: 2px;
`

const Title = styled.p`
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    line-height: 18px;
    color: #000411;
`

const Line = styled.hr`
    width: 100%;
    height: 2px;
    background-color: #000411;
    border: none;
`

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
                        <Title>Precio base</Title>
                        <Title>Cantidad</Title>
                        <Title>Total</Title>
                    </Encabezado>
                </Detail>
                <Summarize>
                    <div style={{paddingLeft: '10px', paddingRight: '10px'}} >
                        <Title>Resumen</Title>
                        <Line></Line>
                        <p>Total de productos: 12</p>
                        <p>Precio con IGV: </p>
                        <p>Costo de envío: </p>
                        <p>Cupones y descuentos: </p>
                        <br></br>
                        <p>Total IGV (18%)</p>
                        <p>Total de la orden: S/. 1500</p>
                    </div>
                    
                </Summarize>
            </Container>
        </div>
    )
}

export default ShoppingCart