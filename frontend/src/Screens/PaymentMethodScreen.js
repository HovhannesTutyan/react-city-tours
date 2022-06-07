import React, { useState } from 'react';
import CheckoutSteps from '../component/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';

export default function PaymentMethodScreen() {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const { shippingAddress } = cart;
    if(!shippingAddress.address) {
        navigate("/shipping")
    }
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder")
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Payment Method </h1>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="paypal"
                            value="PayPal"
                            name="paymentMethod" required
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="stripe"
                            value="stripe"
                            name="paymentMethod" required
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="stripe"> Stripe </label>
                    </div>
                    <div>
                        <button className="primary" type="submit"> Continue </button>
                    </div>
                </div>
            </form>
        </div>
    )
}