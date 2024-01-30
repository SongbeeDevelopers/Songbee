import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './OrderPage.css'

function OrderPage() {

  const history = useHistory()
  const dispatch = useDispatch()

  const newOrder = useSelector(store => store.newOrder)

  const handleSelection = (e) => {
    dispatch({
      type: 'UPDATE_ORDER',
      payload: e.target.value // <-- probably need to show which piece is changing
    })
  }
  
  const submitOrder = () => {
    history.push('/requestform') // <-- will eventually nav to payment page
  }

  return (
    <div className="orderPageContainer">
      <h1 className='orderHeader'>Let's Get Started.</h1>

      <img src='order-icon.png' className='orderIcon'></img>

      <p className='orderSubHeader'>Custom Songs for Every Occasion.</p>
      <p className='orderSubHeader'>Add your song to checkout, then fill out your song detail form!</p>

      <form className='orderForm'>
        <select
          className='orderInput'
          name="delivery_days"
          // value={newOrder.deliver_days}
          onChange={handleSelection} // <-- may need to pass event?
        >
          <option selected disabled>Select Delivery Option</option>
          <option value="3">3 Day Delivery</option>
          <option value="4">4 Day Delivery</option>
          <option value="6">Standard 6 Day Delivery</option>
        </select>

        <select
          className='orderInput'
          name="streaming"
          // value={newOrder.streaming}
          onChange={handleSelection}
        >
          <option selected disabled>Select Streaming Option</option>
          <option value={true}>Add Streaming</option>
          <option value={false}>No Streaming</option>
        </select>

        <select
          className='orderInput'
          name="extra_verse"
          // value={newOrder.extra_verse}
          onChange={handleSelection}
        >
          <option selected disabled>Select Number of Verses</option>
          <option value="2">Standard 2 Verses</option>
          <option value="3">Add Extra Verse</option>
        </select>

        <button className='orderCheckoutButton' onClick={submitOrder}>Checkout</button>
      </form>

    </div>
  );
}

export default OrderPage;
