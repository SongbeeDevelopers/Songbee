const newOrder = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NEW_ORDER':
        return action.payload;
      case 'ADD_ORDER_ID':
        return {...state, id: action.payload};
      default:
        return state;
    }
  };

  export default newOrder;