import React, { Component } from "react";
import { CardElement, Elements, injectStripe } from "react-stripe-elements";
import "./StripeCheckout.css";

const CheckoutInner = props => {
  return (
    <div className="mt-3 mb-3">
      <CardElement style={{ base: { fontSize: "16px" } }} />
    </div>
  );
};

const InjectedInner = injectStripe(CheckoutInner);

export default function StripeCheckout() {
  return (
    <Elements>
      <InjectedInner />
    </Elements>
  );
}
