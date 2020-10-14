import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, description, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={ image } alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{ title }</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            // eslint-disable-next-line
                            <p> &#11088; </p>
                        ))
                    }
                </div>

                <button> Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
