import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

export default function CartScreen(props) {
    const [searchParms] = useSearchParams();
    const params = useParams();
    const { search } = useLocation();
    const productId = params.id;
    const qty = search ? Number(search.split("=")[1]):1;
    console.log(qty)
    return (
        <div>
            <h1> Cart Screen </h1>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    );
}