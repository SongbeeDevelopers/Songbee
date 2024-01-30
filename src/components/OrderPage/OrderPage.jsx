import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './OrderPage.css'

// problems with setting default value, react doesn't like it!!

function OrderPage() {

  const history = useHistory()
  const dispatch = useDispatch()

  const newOrder = useSelector(store => store.newOrder)

  const handleSelection = (key, value) => {
    dispatch({
      type: 'SET_NEW_ORDER',
      payload: {...newOrder, [key]: value}
    })
    console.log(newOrder)
  }
  
  const submitOrder = (e) => {
    e.preventDefault()
    console.log(newOrder)
    if (newOrder.delivery_days && newOrder.streaming && newOrder.extra_verse) {
      dispatch({
        type: 'CREATE_SONG_REQUEST',
        payload: newOrder,
        history: history
      })
    }
    else {
      alert('Please select all three options.')
    }
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
          defaultValue={'Select Delivery Option'}
          value={newOrder.delivery_days}
          onChange={() => handleSelection('delivery_days', event.target.value)}
        >
          <option selected disabled>Select Delivery Option</option>
          <option value={3} >3 Day Delivery</option>
          <option value={4}>4 Day Delivery</option>
          <option value={6}>Standard 6 Day Delivery</option>
        </select>

        <select
          className='orderInput'
          name="streaming"
          value={newOrder.streaming}
          onChange={() => handleSelection('streaming', event.target.value)}
        >
          <option selected disabled>Select Streaming Option</option>
          <option value={true}>Add Streaming</option>
          <option value={false}>No Streaming</option>
        </select>

        <select
          className='orderInput'
          name="extra_verse"
          value={newOrder.extra_verse}
          onChange={() => handleSelection('extra_verse', event.target.value)}
        >
          <option selected disabled>Select Number of Verses</option>
          <option value={false}>Standard 2 Verses</option>
          <option value={true}>Add Extra Verse</option>
        </select>

        <button className='orderCheckoutButton' onClick={submitOrder}>Checkout</button>
      </form>

    </div>
  );
}

export default OrderPage;
