const newOrder = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NEW_ORDER':
        return action.payload;
      default:
        return state;
    }
  };

  export default newOrder;