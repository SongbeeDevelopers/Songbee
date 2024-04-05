const pendingEdits = (state = [], action) => {
    switch (action.type) {
      case 'SET_PENDING_EDITS':
        return action.payload;
      default:
        return state;
    }
  };

  export default pendingEdits;