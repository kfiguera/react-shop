import React, {useEffect, useState} from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from "axios";
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const response = await axios.get(API+'?limit=15&offset=0');
        setProducts(response.data);
        console.log(response.data);
    },[]);
    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
