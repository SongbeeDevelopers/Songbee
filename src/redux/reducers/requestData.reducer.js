const requestData = (state = {}, action) => {
    switch (action.type) {
      case 'SET_REQUEST_DATA':
        return action.payload;
      default:
        return state;
    }
  };

  export default requestData;