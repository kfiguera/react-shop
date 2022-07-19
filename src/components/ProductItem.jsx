import React, {useState} from 'react';
import '@styles/ProductItem.scss';
import btAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const {id, title, price, images} = product;
	const [cart, setCart] = useState([]);
	const addToCart = () => {
		setCart([]);
	}
    return (
        <div className="ProductItem">
            <img
                src={images[0]}
                alt={title}/>
            <div className="product-info">
                <div>
                    <p>${price}</p>
                    <p>{title}</p>
                </div>
                <figure onClick={addToCart}>
                    <img src={btAddToCart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
