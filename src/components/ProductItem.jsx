import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import btAddToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';

const ProductItem = ({product}) => {
    const {id, title, price, images} = product;

    const {addToCart} = useContext(AppContext);
    const handleClick = (item) => {
        addToCart(item);
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
                <figure onClick={() => handleClick(product)}>
                    <img src={btAddToCart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
