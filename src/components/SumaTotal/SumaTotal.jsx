import React from 'react'
import { useCartContext } from '../../context/CartContext';



function SumaTotal() {
    
    const {cartList} = useCartContext();
    
    let total = 0;
    const carritoFinal = [...cartList];
    carritoFinal.forEach(element => {
        const precio = element.precio
        total = total + precio*element.cantidad;
    })

    return (
    <div className='compra__total'><span>total a pagar:</span> ${total}</div>
  )
}

export default SumaTotal