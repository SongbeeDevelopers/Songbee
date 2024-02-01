const pendingRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_PENDING_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default pendingRequests;