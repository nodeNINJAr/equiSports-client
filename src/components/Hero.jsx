import React from 'react';

const Hero = ({title , path}) => {
    return (
        <div className='flex justify-between w-11/12 mx-auto flex-wrap'>
            <h1 className='text-2xl font-DMSans uppercase font-semibold'>{title}</h1>
             <p className='text-lg font-normal font-DMSans tracking-tight text-[#575757]'>Home{path}</p>
        </div>
    );
};

export default Hero;