import React from 'react'
import AddCartBtn from './AddCartBtn'
import Discount from './Discount'
import Heart from './Heart'
import "./Product.css"


const Product = (props) => {
  return (
    <div className='product'>
        <Discount discount={props.discount}/>
        <Heart />
        <img className='product-img' src='https://picsum.photos/180' alt='No carga la imagen' />
        <h2 className='product-name'>
            {props.name}
        </h2>
        <div className='product-details'>
            <p className='product-oldPrice'>
                ${props.oldPrice}
            </p>
            <p className='product-price'>
                ${props.newPrice}
            </p>
        <AddCartBtn
            name ={props.name}
            price ={props.newPrice}
        />
        </div>
    </div>
  )
}

export default Product