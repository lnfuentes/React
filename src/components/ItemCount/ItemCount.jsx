import React from 'react';
import { useState } from 'react';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';

const ItemCount = ({stock, inicio}) => {
    const [contador, setContador] = useState(inicio);

    const añadirContador = num => {
        setContador(contador + num);
    }

    const añadir = (add) => {
        alert(`añadiste ${add} productos`);
    } 

  return (
    <div className='contenedor__count'>
        <div className='count'>
            <div className="count__container">
                <button onClick={()=>añadirContador(- 1)}
                        disabled={contador === inicio ? true : null}>
                    -
                </button> 
                <span>{contador}</span>
                <button onClick={()=>añadirContador(+ 1)}
                        disabled={contador === stock ? true : null}>
                    +
                </button>   
            </div>
            {/* contador={contador} añadir={añadir} */}
            <Intercambiabilidad contador={contador}/>
        </div>
    </div>
  )
}

export default ItemCount