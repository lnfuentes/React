import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


function Item({nombre, precio, img, stock, id}) {
  return (
    
    <div className="card">
        <img src={img} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{precio}</p>
            <ItemCount stock={stock} inicio={1}/>
        </div>
    </div>
  )
}

export default Item