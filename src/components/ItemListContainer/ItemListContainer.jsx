import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../data/Productos'
import { useEffect, useState } from 'react'


function ItemListContainer({titulo}) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductosData = async() => {
      try {
          const data = await getProductos;
          setItems(data);
          setLoading(false);
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
      <h2>{titulo}</h2>
      <ItemList items={items} loading={loading}/>
    </>
  )
}

export default ItemListContainer