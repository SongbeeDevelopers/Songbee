const completedRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMPLETED_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default completedRequests;