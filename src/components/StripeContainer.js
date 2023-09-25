import React from 'react';
 import {Elements} from '@stripe/react-stripe-js';
 import {loadStripe} from '@stripe/stripe-js';
import StripePayment from './StripePayment';



const stripePromise = loadStripe('REACT_APP_STRIPE_KEY')


export default function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
           <StripePayment />
        </Elements>
    )
}