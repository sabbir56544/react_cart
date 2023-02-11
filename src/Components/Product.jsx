import React from 'react';
import PData from './PData';
import { useState, useEffect } from 'react';
import Cart from './Cart';


const Product = () => {
    const [product, setProduct] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProduct(data))
    } , [])

    const handleCart = (id) => {
        const newCart = [...cart, id];
        setCart(newCart);
    }

    const handleDelete = (id) => {
        const nCart = cart.filter( (val) => {
            return val !== id;
        })
        setCart(nCart);
        console.log("DDCARt" +nCart);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            {
                                product.map( (val, ind) => {
                                    return (
                                        <>
                                            <PData val={val} key={ind} handleCart={handleCart} />
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <Cart cart={cart} handleDelete={handleDelete} />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Product