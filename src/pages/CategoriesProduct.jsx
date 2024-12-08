import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import {  useParams } from 'react-router-dom';

const CategoriesProduct = () => {
    // 
    const [cateProducts , setCateProducts] = useState([])
    const { category } =useParams();
    console.log(category,cateProducts)
    useEffect(()=>{
           fetch(`http://localhost:5000/categories-products/${category}`)
           .then(res=> res.json())
           .then( data =>{
            setCateProducts(data)
           })
        

    },[category])

    //  
    // 
    return (
        <div>
             <h1 className='text-2xl text-center capitalize bg-red-500'>welCome here this page under development now!!! see you next Time</h1>
              <Hero title={"categories products"} path={location.pathname}/>
             { cateProducts ?  <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto py-20'>
                  {
                 cateProducts.length > 0 && (
                    cateProducts.map(product => (
                        <ProductCard categoriesProduct={product} />
                    ))
                 )   
                  }
              </div> :
               <div><h1 className='text-2xl text-center font-semibold capitalize'>no Product found</h1></div>

             }
        </div>
    );
};

export default CategoriesProduct;