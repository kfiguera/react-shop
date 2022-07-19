import {useEffect, useState} from 'react';
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const response = await axios.get(API + '?limit=15&offset=0');
        setProducts(response.data);
    }, []);
    return products;
}

export default useGetProducts;