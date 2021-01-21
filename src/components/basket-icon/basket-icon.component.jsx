import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';
import {selectBasketItemsCount} from '../../redux/basket/basket.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './basket-icon.styles.scss';

const BasketIcon = ({toggleBasketHidden, itemCount}) => (
    <div className="basket-icon" onClick={toggleBasketHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleBasketHidden: () => dispatch(toggleBasketHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectBasketItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketIcon);