import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function CartWidget() {
  return (
    <Link to='/carrito' className='icono'>
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  )
}

export default CartWidget