import React, { useState } from 'react';
import ProductCard from './ProductCard';
// 
const AllProducts = ({products}) => {
    // 
    const [productInfo , setProductInfo] = useState(Array.isArray(products) ? products : [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

            {
              productInfo.slice(0,6).map( product =>  <ProductCard key={product._id} product = {product} setProductInfo={setProductInfo}/> )
            }
             
        </div>
    );
};

export default AllProducts;