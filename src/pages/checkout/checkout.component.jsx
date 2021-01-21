import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
        <div className="total">
            <span>TOTAL: £{total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems,
    total: selectBasketTotal
});

export default connect(mapStateToProps)(CheckoutPage);