import React from 'react';
import ChosenProduct from '../ChosenProduct/ChosenProduct';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart-container container'>
            <h1 className='text-start'>Shopping Cart</h1>
            <div className='row '>
                <div className='shopping-cart col-lg-9 col-md-6 col-sm-7 border border-white border-5 rounded-3 ' >

                    <hr />
                    <ChosenProduct></ChosenProduct>
                    <ChosenProduct></ChosenProduct>
                </div>
                <div className=' order-summary col-lg-3 col-md-6 col-sm-5 border border-white border-5 rounded-3 '>
                    <h2> <u>Order Summary</u></h2>
                    <p className='fs-5'><strong>Selected Items: </strong> 6</p>
                    <p className='fs-5'><strong>Total Price: </strong> $1140</p>
                    <p className='fs-5'><strong>Total Shipping Charge: </strong> $59</p>
                    <p className='fs-5'><strong>Tax </strong>: $144</p>
                    <h3>Grand Total: $ 1449</h3>
                    <div className='d-flex flex-column'>
                        <button type='button' className='btn btn-danger p-2 mb-3'>Clear Cart</button>
                        <button type='button' className='btn btn-warning p-2'>Proceed to Checkout</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;