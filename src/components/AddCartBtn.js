import "./AddcartBtn.css"

import React from 'react'

const AddCartBtn = (props) => {
  const handleBtn = ()=>{
    alert (`has comprado ${props.name} a un precio de $${props.price} pesos `);
  }
  return (
    <button onClick={handleBtn}>Comprar</button>
  )
}

export default AddCartBtn