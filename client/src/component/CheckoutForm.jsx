import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { motion } from 'framer-motion';
// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51Qkw1QApkunDrg7t9TMuCtdwXfGMP87ly0Og7iocB9qQhu4p58S1QdIikIKPfVVRvlp5iEzFcfdn9NAvobJvAO2K00yoFwjnHM');
const server_url = import.meta.env.VITE_SERVER_URL

// Checkout form component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
      },
    });

    if (error) {
      setMessage(error.message);
      setIsProcessing(false);
      return;
    }
      console.log(paymentMethod.id)
    // Send payment method ID to the server to create a payment intent
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/create-payment-intent`, {
        paymentMethodId: paymentMethod.id,
      });

      const paymentIntentResult = response.data;
      
      console.log(paymentIntentResult);
      if (paymentIntentResult.error) {
        setMessage(paymentIntentResult.error);
      } else {
        setMessage('Payment successful!');
      }
    } catch (err) {
      setMessage(err.response?.data?.error || 'An error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mt-44 mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Secure Payment</h1>
      <p className="text-sm text-gray-600 mb-6">Complete your payment below:</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ziyad aldjahmani"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ziyad.jo@example.com"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Card Element */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Details
          </label>
          <div className="border px-4 py-2 rounded-lg shadow-sm bg-gray-50">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#333",
                    "::placeholder": {
                      color: "#a0aec0",
                    },
                  },
                  invalid: {
                    color: "#e53e3e",
                  },
                },
              }}
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className={`w-full px-4 py-2 rounded-lg text-white ${
            isProcessing ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {/* Message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-sm text-red-500"
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

const App = () => (
  <Elements stripe={stripePromise}
  >
    <CheckoutForm />
  </Elements>
);

export default App;
