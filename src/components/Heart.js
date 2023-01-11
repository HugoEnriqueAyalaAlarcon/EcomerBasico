import "./Heart.css"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

import {useState} from "react"

import React from 'react'

const Heart = () => {
    const [like, setLike] = useState (false)

    const handleClick = () =>{
        like ? setLike (false) : setLike(true);
    }
  return (
    <div onClick={handleClick}>
       {like ? <FaHeart className="heart"/> : <FaRegHeart className="heart"/>} 
    </div>
  )
}

export default Heart