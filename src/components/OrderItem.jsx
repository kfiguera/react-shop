import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';
import AppContext from "@context/AppContext";

const OrderItem = ({product}) => {
    const {removeFromCart} = useContext(AppContext);
    const {id, title, price, images} = product;
    const handleClick = (item) => {
        removeFromCart(item);
    }
    return (
        <div className="OrderItem">
            <figure>
                <img src={images[0]} alt={title}/>
            </figure>
            <p>{title}</p>
            <p>${price}</p>
            <img src={iconClose} alt="close" onClick={() => handleClick(product)}/>
        </div>
    );
}

export default OrderItem;
