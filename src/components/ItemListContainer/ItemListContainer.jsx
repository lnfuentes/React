import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../data/Productos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function ItemListContainer({titulo}) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoriaId} = useParams();

  const getProductosData = async() => {
    if(categoriaId){
      try {
        const data = await getProductos;
        setItems(data.filter(item=> item.categoria === categoriaId));
        setLoading(false);
      } catch (error) {
        console.log(error);
        alert('Los productos no cargaron correctamente');
      }
    } else {
      try {
          const data = await getProductos;
          setItems(data);
          setLoading(false);
      } catch (error) {
          console.log(error);
          alert('Los productos no cargaron correctamente');
      }
    }
  }

  

  useEffect(() => {
      getProductosData();
  }, [categoriaId]);
    
  return (
    <>
      <h2>{titulo}</h2>
      {loading ? <span class="loader"></span> : <ItemList items={items}/>}
    </>
  )
}

export default ItemListContainer