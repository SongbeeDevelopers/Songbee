const artistRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_ARTIST_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default artistRequests;