const schools = (state = [], action) => {
    switch (action.type) {
      case 'SET_SCHOOL_DATA':
        return action.payload;
      default:
        return state;
    }
  };

  export default schools;