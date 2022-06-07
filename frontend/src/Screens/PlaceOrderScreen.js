import React, {useEffect} from 'react'
import CheckoutSteps from '../component/CheckoutSteps';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL, ORDER_CREATE_RESET } from '../constants/orderConstants'
import LoadingBox from '../component/LoadingBox'
import MessageBox from '../component/MessageBox'

export default function PlaceOrderScreen() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod){
        navigate('/payment');
    }
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a,c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems}));
    }

    useEffect(() => {
        if(success) {
            navigate(`/order/${order.id}`)
            dispatch ({type: ORDER_CREATE_RESET})
        }
    },[])
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4> </CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2> Shipping </h2>
                                <p>
                                    <strong> Name: </strong> {cart.shippingAddress.fullName} <br />
                                    <strong> Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2> Payment </h2>
                                <p>
                                    <strong> Method: </strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2> Order Items </h2>
                                <ul>
                            {
                                cart.cartItems.map((item)=> (
                                    <li key={ item.product }>
                                        <div className="row">
                                            <div>
                                                <img src={"http://127.0.0.1:8000"+item.image} alt={item.name} className="small"/>
                                            </div>
                                            <div>
                                                <Link to={`/product/${item.product}`}> {item.name} </Link>
                                            </div>
                                            <div>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </div>
                                       </div>
                                    </li>
                                ))
                            }
                        </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2> Order Summary </h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items </div>
                                    <div> ${cart.itemsPrice} </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping </div>
                                    <div> ${cart.shippingPrice} </div>
                                </div>
                            </li>
                             <li>
                                <div className="row">
                                    <div>Tax </div>
                                    <div> ${cart.taxPrice} </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong> Order Total  </strong></div>
                                    <div><strong> ${cart.totalPrice} </strong></div>
                                </div>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    className="primary block"
                                    disabled={cart.cartItems.length === 0}>
                                Place Order
                                </button>
                            </li>
                            { loading && <LoadingBox> </LoadingBox>}
                            { error && <MessageBox variant="danger"> {error} </MessageBox>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}