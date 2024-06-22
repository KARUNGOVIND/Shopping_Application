import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemAdded } from '../reducres/cartSlice';
import ProductCard from '../components/ProductCard';
import './Cart.css'

export default function Cart() {


    const [cart, Setcart] = useState([])
    const items = useSelector((state) => state.cart.items)
    console.log(items)

    useEffect(() => { Setcart(items) }, [items])
    return (
        <>
            <div>
                <h2>Cart Items</h2>
                <div>
                    {items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </>
    )
}
