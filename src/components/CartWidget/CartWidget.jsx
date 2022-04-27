import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

import '../CartWidget/CartWidget.css'


function CartWidget() {

  
  const [productsQuantity, setproductsQuantity] = useState(0);

  const {cartList} = useCartContext();

  useEffect(() => {
    setproductsQuantity(
      cartList.reduce((previus, current) => previus + current.cantidad, 0)
    )
  }, [cartList])
  

  return (
    <Link to='/carrito' className='icono'>
      <FontAwesomeIcon icon={faCartShopping} />
      {productsQuantity === 0  ? null : <div className='icono__cantidad'>{productsQuantity}</div>}
    </Link>
  )
}

export default CartWidget