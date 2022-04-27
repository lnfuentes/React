import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

import '../Form/Form.css'

function Form() {

    const { cartList, clear, totalPrice } = useCartContext();
    
    let orden = {
        nombre: false,
        email: false,
        telefono: false
    };

    
    const validateForm = (e) => {
        const dataForm = Object.values(orden);
        e.preventDefault();
        const validation = dataForm.findIndex(camp => camp === false);
        validation === -1 ? generateOrder() : Swal.fire({
          icon: 'warning',
          title: 'Debe completar todo el formulario'
        })
    }

    const generateOrder = () => {
        const nombre = document.querySelector('#nombre')
        const email = document.querySelector('#email')
        const telefono = document.querySelector('#telefono')
        
        let orden = {};

        orden.cliente = {
          nombre: nombre.value,
          email: email.value,
          telefono: telefono.value
        };
        
        orden.total = totalPrice();
    
        orden.productos = cartList.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.nombre;
          const precio = cartItem.precio * cartItem.cantidad;
          return{id, nombre, precio};
        })
        
    
        const db = getFirestore();
        const queryCollection = collection(db, 'ordenes');
    
        getDocs(queryCollection)
          .then(resp=> resp.docs.forEach(res => Swal.fire({
            icon: 'success',
            title: 'Compra realizada correctamente',
            text: `El id de su compra es ${res.id}`
          })))
        
    
        addDoc(queryCollection, orden)
          .then(resp => resp)
          .catch(err => console.log(err))
          .finally(clear)
    }

  return (
    <div className="compra">
        <form className='form'>
            <fieldset>
                <legend>Informacion del Cliente</legend>
                <div className="nombre">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id='nombre' placeholder='Tu nombre' onChange={(e) => e.target.value.length > 0 ? orden.nombre = true : false}/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' placeholder='Tu email' onChange={(e) => e.target.value.length > 0 ? orden.email = true : false}/>
                </div>
                <div className="telefono">
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="number" id='telefono' placeholder='Tu telefono' onChange={(e) => e.target.value.length > 0 ? orden.telefono = true : false}/>
                </div>
                <div className="btn-form">
                  <button onClick={clear} className='compra__borrar'>Vaciar Carrito</button>
                  <input type="submit" className='compra__finalizar' onClick={validateForm} value='Finalizar Compra'/>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default Form