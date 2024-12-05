
import { useContext } from 'react';
import AllProducts from '../components/AllProducts';
import { ProductContext } from '../provider/ProductInfoProvider';

const Home = () => {
    // 
    const {products} = useContext(ProductContext);
    // 
    return (
        <div className='w-11/12 mx-auto'>
            <AllProducts products={products}/>
        </div>
    );
};

export default Home;