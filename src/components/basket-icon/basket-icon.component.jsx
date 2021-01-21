import React from 'react';
import {connect} from 'react-redux';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './basket-icon.styles.scss';

const BasketIcon = ({toggleBasketHidden}) => (
    <div className="basket-icon" onClick={toggleBasketHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleBasketHidden: () => dispatch(toggleBasketHidden())
});

export default connect(null, mapDispatchToProps)(BasketIcon);