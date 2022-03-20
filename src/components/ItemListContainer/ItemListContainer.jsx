import React from 'react'

function ItemListContainer({titulo, children}) {
    
  return (
    <>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </>
  )
}

export default ItemListContainer