import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../data/Productos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestoreApp } from '../../firebase/config';
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer({titulo}) {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([])

  const {categoriaId} = useParams();

  useEffect(() => {
    if(categoriaId) {
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'productos');
      const queryFilter = query(queryCollection, where('categoria','==', categoriaId))
  
      getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'productos');
  
      getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [categoriaId])

    
  return (
    <>
      <h2>{titulo}</h2>
      {loading ? <span className="loader"></span> : <ItemList items={productos}/>}
    </>
  )
}

export default ItemListContainer