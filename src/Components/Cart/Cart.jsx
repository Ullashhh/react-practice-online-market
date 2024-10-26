// import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let quantity = 0;

    for(const item of cart){
        item.quantity = item.quantity || 1;
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
        
    }
    return (
        <div className="cart-section">
            <h2>Order Summary</h2>
            <hr/>
            <h2>Items Selected: {quantity}</h2>
            <h2>Total: ${total.toFixed(2)}</h2>
            <hr/>
            <button>Confirm Purchase</button>
        </div>
    );
};

export default Cart;