const currentRequest = (state = {
  artist: '',
  title: '',
  lyrics: '',
  streaming_link: ''
}, action) => {
    switch (action.type) {
      case 'SET_CURRENT_REQUEST':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentRequest;