import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/Productos";
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [producto, setProducto] = useState({});

    const {detalleId} = useParams();

    const getProductosData = async() => {
        try {
            const data = await getProductos;
            setProducto(data.find(producto => producto.id === detalleId));
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
        <ItemDetail producto={producto} stock={producto.stock}/>
    </>
  )
}

export default ItemDetailContainer