import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [producto, setProducto] = useState({});

    const {detalleId} = useParams();

    // useEffect(() => {
  //   const queryDb = getFirestore();
  //   const queryProd = doc(queryDb, 'productos', '0ThEEFbde6vUPR20FUja')

  //   getDoc(queryProd)
  //     .then(resp => setProducto(
  //       { 
  //         id: resp.id,
  //         ...resp.data()
  //       }
  //       ));
  // }, [])

    useEffect(()=> {
        const queryDb = getFirestore();
        const queryProd = doc(queryDb, 'productos', detalleId);

        getDoc(queryProd)
            .then(resp => setProducto({
                id: resp.id,
                ...resp.data()
            }))
    })

    // const getProductosData = async() => {
    //     try {
    //         const data = await getProductos;
    //         setProducto(data.find(producto => producto.id === detalleId));
    //     } catch (error) {
    //         console.log(error);
    //         alert('Los productos no cargaron correctamente');
    //     }
    // }

    // useEffect(() => {
    //     getProductosData();
    // }, []);

  return (
    <>
        <ItemDetail producto={producto} stock={producto.stock}/>
    </>
  )
}

export default ItemDetailContainer