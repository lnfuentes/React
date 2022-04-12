import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';


function CartWidget() {

  const [cartInicio, setCartInicio] = useState(true);
  const [productosCantidad, setProductosCantidad] = useState(0);

  const {cartList} = useCartContext();

  useEffect(() => {
    setProductosCantidad(
      cartList.reduce((previus, current) => previus + current.cantidad, 0)
    )
  }, [cartList])
  

  return (
    <Link to='/carrito' className='icono'>
      <FontAwesomeIcon icon={faCartShopping} />
      {productosCantidad === 0  ? null : <div className='icono__cantidad'>{productosCantidad}</div>}
    </Link>
  )
}

export default CartWidget