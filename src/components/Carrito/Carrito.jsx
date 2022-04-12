import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import SumaTotal from '../SumaTotal/SumaTotal';


function Carrito() {
  const {cartList, clear, eliminar} = useCartContext();
  
  return (

    <>
      {cartList.length === 0 ? 
          <div className='carrito-vacio'>
            <p className='carrito-vacio__alert'>no hay productos</p> 
            <Link to='/' className='carrito-vacio__link'>Ir a la Tienda</Link>
          </div>
        : 
          <div className='contenedor grid'>
            <div>{cartList.map(prod => <div className="detail-final">
                                    <img src={prod.img}/>
                                    <div key={prod.id} className='detail-final__descripcion'> 
                                      <h4>{prod.nombre}</h4>
                                      <p><span className='detail-final__cantidad'>Cantidad:</span> {prod.cantidad}</p>
                                    </div>
                                    <button onClick={()=> eliminar(prod)} className='detail-final__borrar'><i class="fas fa-trash"></i></button>
                                  </div>
            )}</div>
            
            <div className="compra">
              <SumaTotal/>
              <button onClick={clear} className='compra__borrar'>Vaciar Carrito</button>
              <button className='compra__finalizar'>Finalizar Compra</button>
            </div>
          </div>}
    </>

  )
}

export default Carrito