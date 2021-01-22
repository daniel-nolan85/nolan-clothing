import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectBasketItems, selectBasketTotal} from '../../redux/basket/basket.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({basketItems, total}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {basketItems.map(basketItem => (
            <CheckoutItem key={basketItem.id} basketItem={basketItem} />
        ))}
        <div className="total">TOTAL: £{total}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />

    </div>
);

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems,
    total: selectBasketTotal
});

export default connect(mapStateToProps)(CheckoutPage);