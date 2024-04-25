const completedArtistRequests = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMPLETED_ARTIST_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default completedArtistRequests;