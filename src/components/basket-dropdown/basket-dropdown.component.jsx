import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import BasketItem from '../basket-item/basket-item.component';
import {selectBasketItems} from '../../redux/basket/basket.selectors';

import './basket-dropdown.styles.scss';

const BasketDropdown = ({basketItems}) => (
    <div className="basket-dropdown">
        <div className="basket-items">
            {basketItems.map(basketItem => (
                <BasketItem key={basketItem.id} item={basketItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    basketItems: selectBasketItems(state)
});

export default connect(mapStateToProps)(BasketDropdown);