import React from 'react'

const Address = () => {
    return (
        <div>
            <input type='text' placeholder='Nombre' ></input>
            <input type='text' placeholder='Apellido' ></input><br></br>
            <input type='text' placeholder='Dirección 1' ></input><br></br>
            <input type='text' placeholder='Dirección 2' ></input><br></br>
            <input type='text' placeholder='Ciudad' ></input>
            <input type='text' placeholder='Estado/Provincia/Región'></input><br></br>
            <input type='text' placeholder='ZIP/Código postal'></input>
            <input type='text' placeholder='País'></input><br></br>
            <label><input type='checkbox'></input>Usar esta dirección para los detalles de pago</label><br></br>
            <button>Siguiente</button>
        </div>
    )
}

export default Address