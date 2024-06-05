const unapprovedRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_UNAPPROVED_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default unapprovedRequests;