import { cleanup } from '@testing-library/react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'



function ItemListContainer({titulo}) {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([])

  const {categoriaId} = useParams();

  useEffect(() => {
    if(categoriaId) {
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'productos');
      const queryFilter = query(queryCollection, where('categoria','==', categoriaId))
  
      getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'productos');
  
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    return () => {
      cleanup();
    }
  }, [categoriaId])

    
  return (
    <>
      <h2>{categoriaId ? categoriaId : titulo}</h2>
      {loading ? <span className="loader"></span> : <ItemList items={products}/>}
    </>
  )
}

export default ItemListContainer