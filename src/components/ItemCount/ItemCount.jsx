import React from 'react';
import { useState } from 'react';

const ItemCount = (stock, inicio) => {
    const [contador, setContador] = useState(inicio);

    const añadirContador = num => {
        setContador(contador + num);
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
                    onClick={()=> alert(`Añadiste ${contador} productos`)}
                    disabled={contador === 0 ? true : null}>
                Añadir
            </button>
        </div>
    </div>
  )
}

export default ItemCount