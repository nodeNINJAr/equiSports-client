import React from 'react';
import ProductCard from './ProductCard';
// 
const AllProducts = ({data}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

            {
               data.map( product =>  <ProductCard key={product.id} product = {product}/> )
            }
             
        </div>
    );
};

export default AllProducts;