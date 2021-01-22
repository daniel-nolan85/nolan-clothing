import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I8kn8ATQnwv7ZlmadfoGWhcrzdes8umPj7gyKFO6Vko5eEbJR7Pjvlhb5X1SGmAxk2PJest545jBdIS7UJilLce00EjLRLpRX';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
            label='Pay Now'
            name='Nolan Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://cdn.pixabay.com/photo/2013/07/12/12/36/letter-146008_960_720.png'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;