import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';


export default function Product(props){
    const { product } = props;
    return (
        <div key={product.id} className="card">
           <Link to={`/product/${product.id}`}>
               <img className="medium" src={"http://127.0.0.1:8000"+product.image} alt={product.name}/>
           </Link>
           <div className="card-body">
               <Link to={`/product/${product.id}`}>
                   <h2>{product.name}</h2>
               </Link>
              <Rating rating={product.rating} numReviews={product.numReviews} />
               <div>$ {product.price}</div>
           </div>
        </div>
    )
}

