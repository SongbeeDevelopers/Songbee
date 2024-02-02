import React from 'react';
import { useState } from 'react';

import './CheckoutPage.css'

function CheckoutPage() {

  return (
    <div className="container">

      <div className='paymentContainer'>

      <div className='mockPayment'>
        <h3 className='mockPaymentHeader'>Payment details</h3>
        <p className='mockWarning'> This is a mockup. It does nothing</p>

        <div className='mockPaymentInputContainer'>
          <label className='mockPaymentInputLabel'>
            Cardholder Name
            <input
              className='mockPaymentInput'
              placeholder='Jane Doe'
              ></input>
            </label>

          <label className='mockPaymentInputLabel'>
            Card Number
            <input
            className='mockPaymentInput'
            placeholder='1234 1234 1234 1234'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            Expiration Month
            <input
            className='mockPaymentInput'
            placeholder='01'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            Expiration Year
            <input
            className='mockPaymentInput'
            placeholder='1111'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            CVC
            <input
            className='mockPaymentInput'
            placeholder='111'
            ></input>
          </label>



        </div>

        <p>Payment Amount: $###.##</p>

        </div>

      </div>

    </div>
  );
}

export default CheckoutPage;
