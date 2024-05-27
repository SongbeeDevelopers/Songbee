const pausedSubscriptions = (state = [], action) => {
    switch (action.type) {
      case 'SET_PAUSED_SUBSCRIPTIONS':
        return action.payload;
      default:
        return state;
    }
  };

  export default pausedSubscriptions;