import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import BasketItem from '../basket-item/basket-item.component';
import {selectBasketItems} from '../../redux/basket/basket.selectors';
import {toggleBasketHidden} from '../../redux/basket/basket.actions';

import './basket-dropdown.styles.scss';

const BasketDropdown = ({basketItems, history, dispatch}) => (
    <div className="basket-dropdown">
        <div className="basket-items">
            {basketItems.length ? (
                basketItems.map(basketItem => (
                <BasketItem key={basketItem.id} item={basketItem} />))
            ) : (
                <span className="empty-message">Your basket is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleBasketHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems
});

export default withRouter(connect(mapStateToProps)(BasketDropdown));