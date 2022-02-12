import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setLoading(true);
                const {data} = await axios.get('./api/products'); // get data from backend(ajax request)
                setLoading(false);
                setProducts(data); // transfer data
            }catch (err) {
                setError(err.message);
                setLoading(false);
            }
            
        };
        fetchData();
    },[]);
    return(
        <div>
            {loading ? (<LoadingBox></LoadingBox>) // Show loading
            :error? (<MessageBox variant = "error">{error}</MessageBox>) // Show error message
            : ( // ShowProducts
            <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
            {
                products.map(product => (
                <Product key = {product._id} product={product}></Product>
                ))
            }
            </div>)}
            
        </div>
    );
}