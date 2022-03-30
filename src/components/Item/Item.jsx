import React from 'react';
import { Link } from 'react-router-dom';


function Item({nombre, precio, img, id}) {
  return (
    
    <div className="card">
        <img src={img} className="card__img"/>
        <div className="card__body">
            <h5 className="card__title">{nombre}</h5>
            <p className="card__price">${precio}</p>
            <Link to={`/detalle/${id}`}>
              <button className='card__detail'>Mas Detalles</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Item