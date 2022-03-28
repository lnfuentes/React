import { useEffect, useState } from "react";
import { getProductos } from "../../data/Productos";
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const getProductosData = async() => {
        try {
            const data = await getProductos;
            setProducto(data.find(producto => producto.id === 1));
        } catch (error) {
            console.log(error);
            alert('Los productos no cargaron correctamente');
        }
    }

    useEffect(() => {
        getProductosData();
    }, []);

  return (
    <>
        <ItemDetail producto={producto}/>
    </>
  )
}

export default ItemDetailContainer