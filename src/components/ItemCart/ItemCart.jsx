import React from 'react'
import { useCartContext } from '../../context/CartContext';

import '../ItemCart/ItemCart.css'

function ItemCart() {

    const { cartList, remove } = useCartContext();

  return (
    <div>{cartList.map(prod => <div className="detail-final" key={prod.id}>
                                    <img src={prod.img}/>
                                    <div key={prod.id} className='detail-final__descripcion'> 
                                      <h3>{prod.nombre}</h3>
                                      <p><span className='detail-final__cantidad'>Cantidad:</span> {prod.cantidad}</p>
                                      <p><span className='detail-final__cantidad'>Precio:</span> ${prod.precio}</p>
                                    </div>
                                    <button onClick={()=> remove(prod)} className='detail-final__borrar'><i className="fas fa-trash"></i></button>
                                  </div>
    )}</div>
  )
}

export default ItemCart