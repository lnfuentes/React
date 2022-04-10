import React from 'react';
import { useState } from 'react';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';

const ItemCount = ({stock, inicio, onAdd}) => {
    const [contador, setContador] = useState(inicio);

    const añadirContador = num => {
        setContador(contador + num);
    }

    const agregar = () => {
        onAdd( contador )
        setContador(inicio);
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
            <button className='count__añadir' 
                    onClick={agregar}
                    disabled={contador === 0 ? true : null}
            >Añadir
            </button>
            {/* <Intercambiabilidad contador={contador} onAdd={onAdd}/> */}
        </div>
    </div>
  )
}

export default ItemCount