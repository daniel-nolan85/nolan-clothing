import {createSelector} from 'reselect';

const selectBasket = state => state.basket;

export const selectBasketItems = createSelector(
    [selectBasket],
    basket => basket.basketItems
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