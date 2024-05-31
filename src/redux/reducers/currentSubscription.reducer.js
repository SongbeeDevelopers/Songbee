const currentSubscription = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CURRENT_SUBSCRIPTION':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentSubscription;