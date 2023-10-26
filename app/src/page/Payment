export {};
// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('your-public-stripe-key');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState<string | null>(null);
//   const [email, setEmail] = useState<string>('');
//   const [isProcessing, setIsProcessing] = useState<boolean>(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setIsProcessing(true);

//     const cardElement = elements.getElement(CardElement);

//     if (!cardElement) {
//       setIsProcessing(false);
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//       billing_details: {
//         // Include any additional collected billing details
//         email: email, // sample detail
//       },
//     });

//     if (error) {
//       setError(error.message || 'Failed to create payment method');
//       setIsProcessing(false);
//       return;
//     }

//     if (paymentMethod) {
//       // Here you would usually send `paymentMethod.id` to your server to create a charge,
//       // or a Customer, or save the payment method for future use, etc.
//       // For this example, we're just logging it in the console.

//       console.log('Received Stripe PaymentMethod:', paymentMethod);
//       // TODO: send the paymentMethod.id to your server for processing.
//       setError(null);
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <CardElement />
//       <button type="submit" disabled={!stripe || isProcessing}>
//         Pay
//       </button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// };

// export const StripePaymentForm = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };
