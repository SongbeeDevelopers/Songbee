const currentPack = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CURRENT_PACK':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentPack;