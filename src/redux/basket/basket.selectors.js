import {createSelector} from 'reselect';

const selectBasket = state => state.basket;

export const selectBasketItems = createSelector(
    [selectBasket],
    basket => basket.basketItems
);

export const selectBasketHidden = createSelector(
    [selectBasket],
    basket => basket.hidden
);

export const selectBasketItemsCount = createSelector(
    [selectBasketItems],
    basketItems => 
        basketItems.reduce(
            (accumulatedQuantity, basketItem) =>
                accumulatedQuantity + basketItem.quantity,
            0
        )
);

export const selectBasketTotal = createSelector(
    [selectBasketItems],
    basketItems => 
        basketItems.reduce(
            (accumulatedQuantity, basketItem) =>
                accumulatedQuantity + basketItem.quantity * basketItem.price,
            0
        )
);