import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

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
                    <h2>{producto.nombre}</h2>
                    <p className="card__price detail__price">${producto.precio}</p>
                    <ItemCount stock={stock} inicio={0} onAdd={onAdd}/>
                    {/* meter itemcount en intercambiabilidad */}
                </div>
            </div>
        </div> 
    </>
  )
}

export default ItemDetail