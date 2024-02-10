const allArtists = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALL_ARTISTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default allArtists;