import React from 'react';
import Rating from './Rating';

export default function Product(props){
    const { product } = props;
    return (
        <div key={product.id} className="card">
           <a href={`/product/${product.id}`}>
               <img className="medium" src={"http://127.0.0.1:8000"+product.image} alt={product.name}/>
           </a>
           <div className="card-body">
               <a href={`/product/${product.id}`}>
                   <h2>{product.name}</h2>
               </a>
              <Rating rating={product.rating} numReviews={product.numReviews} />
               <div>$ {product.price}</div>
           </div>
        </div>
    )
}

