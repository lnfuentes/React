import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

import '../Carrito/Carrito.css'
import Form from '../../components/Form/Form';
import ItemCart from '../../components/ItemCart/ItemCart';


function Carrito() {
  const { cartList, totalPrice } = useCartContext();
  
  return (

    <>
      {cartList.length === 0 ? 
          <div className='carrito-vacio'>
            <p className='carrito-vacio__alert'>no hay productos en el carrito</p> 
            <Link to='/' className='carrito-vacio__link'>Ir a la Tienda</Link>
          </div>
        : 
          <div className='contenedor grid'>
            <ItemCart />
            
            <div className="compra">
              <p className='compra__total'>Total a pagar: <span>${totalPrice()}</span></p>
              <Form />
            </div>
          </div>}
    </>

  )
}

export default Carrito