const artistProfile = (state = null, action) => {
    switch (action.type) {
      case 'SET_ARTIST_PROFILE':
        return action.payload;
      default:
        return state;
    }
  };

  export default artistProfile;