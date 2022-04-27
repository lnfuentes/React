import React from 'react';
import { useState } from 'react';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../ItemCount/ItemCount.css'

const ItemCount = ({stock, start, onAdd}) => {
    const [counter, setCounter] = useState(start);

    const addCounter = num => {
        setCounter(counter + num);
    }

    const add = () => {
        onAdd( counter )
        setCounter(start);
    }


  return (
    <div className='contenedor__count'>
        <div className='count'>
            <div className="count__container">
                <button onClick={()=>addCounter(- 1)}
                        disabled={counter === start ? true : null}>
                    -
                </button> 
                <span>{counter}</span>
                <button onClick={()=>addCounter(+ 1)}
                        disabled={counter === stock ? true : null}>
                    +
                </button>   

            </div>
            <button className='count__añadir' 
                    onClick={add}
                    disabled={counter === 0 ? true : null}
            ><FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    </div>
  )
}

export default ItemCount