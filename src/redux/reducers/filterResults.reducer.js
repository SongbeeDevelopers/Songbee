const filterResults = (state = [], action) => {
    switch (action.type) {
      case 'SET_FILTER_RESULTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default filterResults;