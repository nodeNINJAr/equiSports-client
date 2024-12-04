import React, { useState } from 'react';
import ProductCard from './ProductCard';
// 
const AllProducts = ({data}) => {
    const [productInfo , setProductInfo] = useState(Array.isArray(data) ? data : [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

            {
              productInfo.slice(0,6).map( product =>  <ProductCard key={product._id} product = {product}/> )
            }
             
        </div>
    );
};

export default AllProducts;