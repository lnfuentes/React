import { cleanup } from "@testing-library/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../containers/ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const {detalleId} = useParams();

    useEffect(()=> {
        const queryDb = getFirestore();
        const queryProd = doc(queryDb, 'productos', detalleId);

        getDoc(queryProd)
            .then(resp => setProduct({
                id: resp.id,
                ...resp.data()
            }))
            .catch(err => console.log(err))
            .finally(setLoading(false))

        return () => {
          cleanup()
        }
    },[detalleId])

  return (
    <>
        {loading ? <span className="loader"></span> : <ItemDetail producto={product} stock={product.stock}/>}
    </>
  )
}

export default ItemDetailContainer