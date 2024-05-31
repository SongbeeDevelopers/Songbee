const userSubscriptions = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_SUBSCRIPTIONS':
        return action.payload;
      default:
        return state;
    }
  };

  export default userSubscriptions;
