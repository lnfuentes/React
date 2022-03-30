import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto, stock}) {
  return (
    <>
        <div className="contenedor flex">
            <div className="detail">
                <img src={producto.img} />
                <div className="detail__producto">
                    <h2>{producto.nombre}</h2>
                    <p className="card__price detail__price">${producto.precio}</p>
                    <ItemCount stock={stock} inicio={0}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail