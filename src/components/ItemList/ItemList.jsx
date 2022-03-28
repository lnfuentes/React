import React from 'react'
import Item from '../Item/Item';

function ItemList({items, loading}) {

  return (

    <div className="contenedor card__flex">
        {loading ? <span class="loader"></span> 
            : items.map((item => <div key={item.id}>
                                    <Item nombre={item.nombre}
                                        precio={item.precio}
                                        img={item.img}
                                        stock={item.stock}
                                        id={item.id}
                                    />
                                 </div>
            
                
        ))}
    </div>

    
  )
}

export default ItemList;