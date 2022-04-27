import React from 'react';
import { Link } from 'react-router-dom';

import '../Item/Item.css'


function Item({nombre, precio, img, id}) {
  return (
    
    <div className="card">
        <img src={img} className="card__img"/>
        <div className="card__body">
            <h3 className="card__title">{nombre}</h3>
            <div className="card__footer">
              <p className="card__price">${precio}</p>
              <Link to={`/detalle/${id}`}>
                <button className='card__detail'>Más Detalles</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Item