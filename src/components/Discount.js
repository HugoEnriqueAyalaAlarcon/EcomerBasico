import React from 'react'
import "./Discount.css"

const Discount = (props) => {
  return (
    <div className='Discount'>{props.discount}%</div>
  )
}

export default Discount