import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './basket-dropdown.styles.scss';

const BasketDropdown = () => (
    <div className="basket-dropdown">
        <div className="basket-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default BasketDropdown;