import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';
import AppContext from "@context/AppContext";

const OrderItem = ({product, indexValue}) => {
    const {removeFromCart} = useContext(AppContext);
    const {id, title, price, images} = product;
    const handleClick = (index) => {
        removeFromCart(index);
    }
    return (
        <div className="OrderItem">
            <figure>
                <img src={images[0]} alt={title}/>
            </figure>
            <p>{title}</p>
            <p>${price}</p>
            <img src={iconClose} alt="close" onClick={() => handleClick(indexValue)}/>
        </div>
    );
}

export default OrderItem;
