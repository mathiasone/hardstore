import React from 'react';
import ProductCard from './ProductCard';
import cargarProductos from './Products';

const MyItemListContainer = () => {

    let arrayProductos = cargarProductos();

    return(
        <>
            <div className="d-flex flex-row flex-wrap">
                {arrayProductos?.map((p) => (
                    <ProductCard inline prod={p}/>
                ))}
            </div>            
        </>
    )
};

export default MyItemListContainer;