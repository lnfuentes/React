import React from 'react'
import Item from '../../components/Item/Item';

import '../ItemList/ItemList.css'

function ItemList({items}) {

  return (

    <div className="contenedor card__flex">
        {items.map((item => <div key={item.id}>
                                    <Item nombre={item.nombre}
                                        precio={item.precio}
                                        img={item.img}
                                        id={item.id}
                                    />
                                 </div>
            
                
        ))}
    </div>

    
  )
}

export default ItemList;