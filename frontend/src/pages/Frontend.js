import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import Header from '../components/Header';

const Frontend = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        params: '',
        sort: '',
        page: 1
    })

    const [lastPage, setLastPage] = useState(0)
    const perPage = 9;

    useEffect(() => {
        (
            async () => {
               const response = await fetch('http://127.0.0.1:8000/api/products/front');
               const content = await response.json();
               setAllProducts(content);
               setFilteredProducts(content.slice(0, filters.page * perPage));
               setLastPage(Math.ceil(content.length / perPage))
            }
        )()
    },[]);

    useEffect(()=>{
        let products = allProducts.filter(p => p.title.toLowerCase().indexOf(filters.params.toLowerCase()) >= 0 ||
            p.description.toLowerCase().indexOf(filters.params.toLowerCase()) >= 0);

        if(filters.sort === 'asc' || filters.sort === 'desc'){
            products.sort((a,b) => {
                const diff = a.price - b.price;

                if (diff === 0) return 0;
                const sign = Math.abs(diff) / diff;
                return filters.sort === 'asc' ? sign : -sign;
            });
        }

        setLastPage(Math.ceil(products.length / perPage));
        setFilteredProducts(products.slice(0, filters.page * perPage));
    },[filters]);

    return (
        <div>
            < Header />
            < Products products={filteredProducts} filters={filters} setFilters={setFilters} lastPage={lastPage}/>
        </div>
    )
}

export default Frontend;