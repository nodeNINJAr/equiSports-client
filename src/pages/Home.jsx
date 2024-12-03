import React from 'react';
import AllProducts from '../components/AllProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <h1>home</h1>
            <AllProducts data={data}/>
        </div>
    );
};

export default Home;