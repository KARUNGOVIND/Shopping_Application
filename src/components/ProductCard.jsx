import React from 'react';
import './Productcard.css';

const ProductCard = (props) => {
    console.log(props.product);
    const { title, description, price, image } = props.product || {};
    return (
        
        <div className="ProductCard">
            <img src={image} className='Image' alt={title} />
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="val">${price}</div>
        </div>
    );
};

export default ProductCard;
