const currentArtist = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CURRENT_ARTIST':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentArtist;