import React from 'react'
import { useCartContext } from '../../context/CartContext'

function Carrito() {
  
  const {cartList, clear} = useCartContext();
  
  return (
    <div>
      {cartList.map(prod => <li key={prod.id}>nombre: {prod.nombre} cantidad: {prod.cantidad}</li>)}
      <button onClick={clear}>borrar</button>
    </div>
  )
}

export default Carrito