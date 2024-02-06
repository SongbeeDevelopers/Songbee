const pendingArtists = (state = [], action) => {
    switch (action.type) {
      case 'SET_PENDING_ARTISTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default pendingArtists;