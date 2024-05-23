const activeSubscriptions = (state = [], action) => {
    switch (action.type) {
      case 'SET_ACTIVE_SUBSCRIPTIONS':
        return action.payload;
      default:
        return state;
    }
  };

  export default activeSubscriptions;