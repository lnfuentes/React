import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import SumaTotal from '../SumaTotal/SumaTotal';
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';


function Carrito() {
  const {cartList, clear, eliminar, precioTotal} = useCartContext();

  const generarOrden = (e) => {
    e.preventDefault();

    let orden = {};

    orden.buyer = {
      nombre: 'Leandro',
      email: 'l@gmail.com',
      telefono: '123456789'
    };
    
    orden.total = precioTotal();

    orden.productos = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      return{id, nombre, precio};
    })
    

    const db = getFirestore();
    const queryCollection = collection(db, 'ordenes');

    getDocs(queryCollection)
      .then(resp=> resp.docs.forEach(res => alert('tu id de compra es ' + res.id)))
    

    addDoc(queryCollection, orden)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(clear)
  }
  
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
                                    <button onClick={()=> eliminar(prod)} className='detail-final__borrar'><i className="fas fa-trash"></i></button>
                                  </div>
            )}</div>
            
            <div className="compra">
              <SumaTotal/>
              <button onClick={clear} className='compra__borrar'>Vaciar Carrito</button>
              <button className='compra__finalizar' onClick={generarOrden}>Finalizar Compra</button>
            </div>
          </div>}
    </>

  )
}

export default Carrito