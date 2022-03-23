import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


function Item({nombre, precio, img, stock, id}) {
  return (
    
    <div className="card">
        <img src={img} className="card__img"/>
        <div className="card__body">
            <h5 className="card__title">{nombre}</h5>
            <p className="card__price">${precio}</p>
            <ItemCount stock={stock} inicio={0}/>
        </div>
    </div>
  )
}

export default Item