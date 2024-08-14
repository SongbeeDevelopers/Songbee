const unpaidRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_UNPAID_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default unpaidRequests;