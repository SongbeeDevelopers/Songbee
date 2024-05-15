const userChats = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_CHATS':
        return action.payload;
      default:
        return state;
    }
  };

  export default userChats;