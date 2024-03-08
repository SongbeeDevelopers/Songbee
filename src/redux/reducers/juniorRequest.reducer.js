const juniorRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_JUNIOR_USER_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default juniorRequests;