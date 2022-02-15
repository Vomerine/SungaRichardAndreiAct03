import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom';

export default function Product(props){
    const{product} = props
    return(
        <Link to = {`/product/${product._id}`}>
        <div key = {product._id} className = "card">
      
                <img className = "medium" src= {product.image} alt={product.name}/>


            <div className = "card-body">
              
                    <h2>{product.name}</h2>
     
                <Rating rating = {product.rating} numReview = {product.numReviews}></Rating>

                <div className = "price">
                  {product.price}
                </div>
            </div>
        </div>
        </Link>
    )
}