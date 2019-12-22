import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishAbleKey = 'pk_test_5eFaXOZbPDEdJ6x5aphtjHOO'

  const onToken = token => {
    console.log(token)
    alert('Payment Succcessful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishAbleKey}
    />
  )
}

export default StripeCheckoutButton
