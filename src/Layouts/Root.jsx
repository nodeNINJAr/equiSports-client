import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
           {/* Navbar */}
            <Navbar/>
            {/* main */}
            <main className='min-h-screen'>

            </main>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Root;