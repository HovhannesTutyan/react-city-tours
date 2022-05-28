import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Rating from '../component/Rating';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { detailsProduct } from '../actions/productActions'

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(params.id));
    }, [dispatch, params.id])

    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`);
    }

    return (
        <div>
            { loading ?
              <LoadingBox /> :
              error ?
              ( <MessageBox variant="danger">{error}</MessageBox> ) :
              ( <div>
                    <Link to="/">Back to Results</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={"http://127.0.0.1:8000"+product.image} alt={product.name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1> {product.name}</h1>
                                </li>
                                <li>
                                    <Rating
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                    />
                                </li>
                                <li>
                                    Price: ${product.price}
                                </li>
                                 <li>
                                    Description: {product.description}
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div> Price :  </div>
                                            <div className="price"> ${product.price} </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div> Status :  </div>
                                            <div>
                                                {
                                                    product.countInStock > 0
                                                    ? (<span className="success"> In Stock </span>)
                                                    : (<span className="error">  Unavailable </span>)
                                                }
                                            </div>
                                        </div>
                                    </li>
                                    {
                                        product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Qty</div>
                                                        <div>
                                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map( x => (
                                                                        <option key={x+1} value={ x + 1 }> { x + 1} </option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="primary block"> Add To Cart </button>
                                                </li>
                                            </>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              )
            }
        </div>
    );
}