import React, { useEffect, useState } from 'react';

const Products = (props) => {

    const search = (params) => {
        props.setFilters({
            ...props.filters,
            params
        });
    }

    const sort = (sort) => {
        props.setFilters({
            ...props.filters,
            sort
        })
    }

    const load = () => {
        props.setFilters({
            ...props.filters,
            page: props.filters.page + 1
        });
    }

    let button;

    if(props.filters.page !== props.lastPage){
        button = (
            <div className='d-flex justify-content-center mt-4'>
                <button className="btn btn-primary" onClick={load}> Load More </button>
            </div>
        )
    }

    return (
    <>
            <div className="col-md-12 mb-4 input-group">
                <input type="text" className="form-control" placeholder="Search" onChange={e => search(e.target.value)} />
                <div className="input-group-append">
                    <select className="form-select" onChange={e => sort(e.target.value)}>
                        <option> Select </option>
                        <option value="asc"> Price Ascending </option>
                        <option value="desc"> Price Descending </option>
                    </select>
                </div>
            </div>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {props.products.map(product => {
                        return (
                            <div className="col" key={product.id}>
                                  <img src={product.image} height={200} className="card-img-top" alt="Fissure in Sandstone"/>
                                  <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <small className="text-muted"> ${product.price} </small>
                                  </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        {button}
    </>
    );
};

export default Products;