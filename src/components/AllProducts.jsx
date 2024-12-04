import React from 'react';
import ProductCard from './ProductCard';
// 
const AllProducts = ({productInfo}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

            {
              productInfo.map( product =>  <ProductCard key={product.id} product = {product}/> )
            }
             
        </div>
    );
};

export default AllProducts;