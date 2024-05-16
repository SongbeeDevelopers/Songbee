const message = (
    state = { text: '', chat_id: ''},
    action
  ) => {
    switch (action.type) {
      case "SET_MESSAGE":
        return action.payload;
      case "CLEAR_MESSAGE":
        return { text: '', chat_id: ''};
      default:
        return state;
    }
  };
  
  export default message;