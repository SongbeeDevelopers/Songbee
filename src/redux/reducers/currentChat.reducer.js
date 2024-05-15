const currentChat = (state = [], action) => {
    switch (action.type) {
      case 'SET_CURRENT_CHAT':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentChat;