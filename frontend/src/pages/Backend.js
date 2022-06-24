import React, { useEffect, useState } from 'react';
import Products from "../components/Products";

const Backend = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        params: '',
        sort: '',
        page: 1
    })
    const [lastPage, setLastPage] = useState(0);
    useEffect(() => {
        (
            async () => {
               const arr = [];

               if (filters.params) {
                arr.push(`params=${filters.params}`);
               }

               if (filters.sort){
                arr.push(`sort=${filters.sort}`)
               }

               if (filters.page){
                arr.push(`page=${filters.page}`);
               }

               const response = await fetch(`http://127.0.0.1:8000/api/products/back?${arr.join('&')}`);
               const content = await response.json();
               setProducts(filters.page === 1 ? content.data : [...products, ...content.data]);
               setLastPage(content.last_page);
            }
        )()
    },[filters]);
    return (
        <Products products={products} filters={filters} setFilters={setFilters} lastPage={lastPage} />

    );
};

export default Backend;