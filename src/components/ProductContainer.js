import React from 'react'
import "./ProductContainer.css"

const ProductContainer = (props) => {
  return (
    <section className='products-section'>
        <h1 className='products-title'>Nuestros Productos</h1>
        <div className='products-container'>
            {/*Productos */}
            {props.children}
        </div>
    </section>
  )
}

export default ProductContainer