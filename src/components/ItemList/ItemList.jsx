import React, { useEffect, useState } from 'react'
import { productos } from '../../data/Productos'
import Item from '../Item/Item';

function ItemList() {
    const [items, setItems] = useState([]);

    const getProductos = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos);
        }, 2000)
    })

    const getProductosData = async() => {
        try {
            const data = await getProductos;
            setItems(data);
        } catch (error) {
            console.log(error)
            alert('Los productos no cargaron correctamente');
        }
    }

    useEffect(() => {
        getProductosData();
    }, []);


  return (

    <div className="contenedor">
        {items.map((item => <div key={item.id}>
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