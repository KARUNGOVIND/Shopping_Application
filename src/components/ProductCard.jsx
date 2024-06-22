import React from 'react';
import './Productcard.css';
import { useDispatch } from 'react-redux';
import { itemAdded } from '../reducres/cartSlice';

const ProductCard = (props) => {
    console.log(props.product);
    const { title, description, price, image,count } = props.product || {};
    const dispatch=useDispatch();
    const additems=()=>{dispatch(itemAdded(props.product))}
    return (
        
        <div className="ProductCard">
            <img src={image} className='Image' alt={title} />
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="val">${price}</div>
            <div className='val'>{count}</div>
            <button onClick={additems}>Add to Cart</button>
            
        </div>
    );
};

export default ProductCard;
