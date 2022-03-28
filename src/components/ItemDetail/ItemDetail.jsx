

function ItemDetail({producto}) {
  return (
    <>
        <div className="contenedor flex">
            <div className="detail">
                <img src={producto.img} />
                <div className="detail__producto">
                    <h2>{producto.nombre}</h2>
                    <p className="card__price detail__price">${producto.precio}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail