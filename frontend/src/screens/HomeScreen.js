import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';

export default function HomeScreen(){
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;

    useEffect(()=>{
        dispatch(listProducts());
    },[])
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