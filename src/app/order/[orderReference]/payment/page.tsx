import React from 'react'
import Stripe from 'stripe'
import CheckoutForm from './_components/CheckoutForm'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)


const PaymentPage =  async ({params: id} : {params: {id: string}}) => {

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100.00,
    currency: "USD",
    metadata: {orderReference: 1},
  })

  if(paymentIntent.client_secret === null) {
    throw Error("Stripe failed to create payment")
  }
 
  return (
    <div className='min-h-dvh pb-10 w-full flex justify-center items-center'>
      <CheckoutForm  clientSecret ={paymentIntent.client_secret} id={1}/>
    </div>
  )
}

export default PaymentPage