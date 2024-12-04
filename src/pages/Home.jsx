import React, { useState } from 'react';
import AllProducts from '../components/AllProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
     const [productInfo , setProductInfo] = useState(Array.isArray(data) ? data : [])
    return (
        <div className='w-11/12 mx-auto'>
            <AllProducts productInfo={productInfo}/>
        </div>
    );
};

export default Home;