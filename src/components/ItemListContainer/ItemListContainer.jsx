import React from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({titulo}) {
    
  return (
    <>
      <h2>{titulo}</h2>
      <ItemList />
    </>
  )
}

export default ItemListContainer