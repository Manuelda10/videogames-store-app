import React from 'react'

const Payment = () => {
    return (
        <div>
            <input type='text' placeholder='Nombre del titular'></input>
            <input type='text' placeholder='Número de tarjeta'></input><br></br>
            <input type='text' placeholder='Fecha de expiración'></input>
            <input type='text' placeholder='CVV'></input><br></br>
            <label><input type='checkbox'></input>Recordar los detalles de la tarjeta</label><br></br>
            <button>Atrás</button>
            <button>Siguiente</button>
        </div>
    )
    
}

export default Payment