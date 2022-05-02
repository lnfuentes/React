import ItemCount from "../../components/ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../ItemDetail/ItemDetail.css'

function ItemDetail({producto, stock}) {

  const {addToCart} = useCartContext()

  const onAdd = (cant) => {
    addToCart({
      ...producto,
      cantidad: cant,
    }, cant)
  }
  
  return (
    <>
        <div className="contenedor flex">
            <div className="detail">
                <img src={producto.img} />
                <div className="detail__producto">
                    <p className="detail__head">Inicio/{producto.categoria}/{producto.nombre}</p>
                    <h2>{producto.nombre}</h2>
                    <div className="detail__star">
                      <FontAwesomeIcon icon={faStar} /> <span>4</span>
                    </div>
                    <p className="card__price detail__price">${producto.precio}</p>
                    <ItemCount stock={stock} start={0} onAdd={onAdd}/>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ItemDetail