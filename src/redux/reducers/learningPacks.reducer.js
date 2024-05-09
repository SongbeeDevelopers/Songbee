const learningPacks = (state = [], action) => {
    switch (action.type) {
      case 'SET_LEARNING_PACKS':
        return action.payload;
      default:
        return state;
    }
  };

  export default learningPacks;